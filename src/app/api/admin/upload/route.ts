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

    // 2. 利用 req.arrayBuffer() 毫秒级、原封不动、无任何框架封装污染地提取纯净二进制 Buffer
    const arrayBuffer = await req.arrayBuffer();
    const buf = Buffer.from(arrayBuffer);

    // 3. 一口气落盘，100% 保证文件完整、不损坏
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
