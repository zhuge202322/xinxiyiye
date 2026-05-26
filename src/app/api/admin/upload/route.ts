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
    // 1. 获取客户端传过来的原文件名
    const xFilename = req.headers.get('x-filename');
    const originalName = xFilename ? decodeURIComponent(xFilename) : 'upload.bin';
    const ext = path.extname(originalName) || '.bin';
    const safeExt = ext.toLowerCase().replace(/[^.a-z0-9]/g, '');

    const hash = crypto.randomBytes(8).toString('hex');
    const filename = `${Date.now()}-${hash}${safeExt}`;
    const localPath = path.join(UPLOAD_DIR, filename);

    // 2. 检查请求体流
    if (!req.body) {
      return NextResponse.json({ error: 'Empty body stream' }, { status: 400 });
    }

    // 3. 将 Web Stream 转换为 Node stream，然后利用管道流直写本地磁盘，100% 避开 Body 大小限制
    const nodeStream = Readable.fromWeb(req.body as any);
    const writeStream = fs.createWriteStream(localPath);

    await pipeline(nodeStream, writeStream);

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
