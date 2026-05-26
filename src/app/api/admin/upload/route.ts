import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

export const maxDuration = 300; // 长链接时间增加到 5 分钟支持大视频

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let originalName = 'upload.bin';

    // 1. 优先提取文件名，确定物理落盘路径
    if (contentType.includes('multipart/form-data')) {
      // 临时用作占位
      originalName = 'image.png';
    } else {
      const xFilename = req.headers.get('x-filename');
      originalName = xFilename ? decodeURIComponent(xFilename) : 'video.mp4';
    }

    const ext = path.extname(originalName) || '.bin';
    const safeExt = ext.toLowerCase().replace(/[^.a-z0-9]/g, '');

    const hash = crypto.randomBytes(8).toString('hex');
    const filename = `${Date.now()}-${hash}${safeExt}`;
    const localPath = path.join(UPLOAD_DIR, filename);

    // 2. 智能分流落盘
    // A. 标准的 FormData 图片上传分支：使用 arrayBuffer 接收并剥离 Boundary 落盘
    if (contentType.includes('multipart/form-data')) {
      const form = await req.formData();
      const file = form.get('file');

      if (!file || !(file instanceof Blob)) {
        return NextResponse.json({ error: 'No file found in formData' }, { status: 400 });
      }

      const realName = (file as any).name || 'upload.png';
      const arrayBuffer = await file.arrayBuffer();
      const buf = Buffer.from(arrayBuffer);

      // 重新哈希命名，防止多次上传重名
      const realExt = path.extname(realName) || '.png';
      const finalFilename = `${Date.now()}-${hash}${realExt}`;
      const finalLocalPath = path.join(UPLOAD_DIR, finalFilename);

      fs.writeFileSync(finalLocalPath, buf);
      console.log(`[File Upload Audit] Mode: FormData, Filename: ${finalFilename}, Size: ${buf.length} bytes`);

      return NextResponse.json({ url: `/uploads/${finalFilename}` });
    } 
    // B. 超大视频 Stream 传输直写分支：0 内存解析缓冲，彻底绕开 Next.js 的 10MB 请求体截断截流机制！
    else {
      if (!req.body) {
        return NextResponse.json({ error: 'Empty body stream' }, { status: 400 });
      }

      const nodeStream = Readable.fromWeb(req.body as any);
      const writeStream = fs.createWriteStream(localPath);

      // 管道流式接收：字节直接源源不断从网口写入磁盘，永不超限
      await pipeline(nodeStream, writeStream);

      // 打印审计，核对落盘后的实际物理字节长度
      const stats = fs.statSync(localPath);
      console.log(`[File Upload Audit] Mode: StreamPipe, Filename: ${filename}, Size: ${stats.size} bytes`);

      return NextResponse.json({ url: `/uploads/${filename}` });
    }
  } catch (error: any) {
    console.error('Upload Error Details:', error);
    return NextResponse.json(
      { error: error?.message || 'Server upload internal error' }, 
      { status: 500 }
    );
  }
}
