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
    let buf: Buffer;
    let originalName = 'upload.bin';

    // A. 智能分流：如果是标准的 FormData 上传（用于全站图片、SKU图片组件）
    if (contentType.includes('multipart/form-data')) {
      const form = await req.formData();
      const file = form.get('file');

      if (!file || !(file instanceof Blob)) {
        return NextResponse.json({ error: 'No file found in formData' }, { status: 400 });
      }

      originalName = (file as any).name || 'upload.png';
      const arrayBuffer = await file.arrayBuffer();
      buf = Buffer.from(arrayBuffer);
    } 
    // B. 智能分流：如果是纯二进制原始字节流上传（用于视频的大文件直传组件）
    else {
      const xFilename = req.headers.get('x-filename');
      originalName = xFilename ? decodeURIComponent(xFilename) : 'upload.bin';
      
      const arrayBuffer = await req.arrayBuffer();
      buf = Buffer.from(arrayBuffer);
    }

    // 2. 物理保存文件并自动哈希命名
    const ext = path.extname(originalName) || '.bin';
    const safeExt = ext.toLowerCase().replace(/[^.a-z0-9]/g, '');

    const hash = crypto.randomBytes(8).toString('hex');
    const filename = `${Date.now()}-${hash}${safeExt}`;
    const localPath = path.join(UPLOAD_DIR, filename);

    // 打印并审计
    console.log(`[File Upload Audit] Mode: ${contentType.includes('multipart/form-data') ? 'FormData' : 'RawStream'}, Filename: ${filename}, Size: ${buf.length} bytes`);

    // 写入物理硬盘
    fs.writeFileSync(localPath, buf);

    const url = `/uploads/${filename}`;
    return NextResponse.json({ url });
  } catch (error: any) {
    console.error('Upload Error Details:', error);
    return NextResponse.json(
      { error: error?.message || 'Server upload internal error' }, 
      { status: 500 }
    );
  }
}
