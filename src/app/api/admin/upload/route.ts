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
    // 1. 获取 Base64 JSON 载荷
    const { filename: originalName, content } = await req.json();
    
    if (!content) {
      return NextResponse.json({ error: 'No file content received' }, { status: 400 });
    }

    const ext = path.extname(originalName || 'upload.bin') || '.bin';
    const safeExt = ext.toLowerCase().replace(/[^.a-z0-9]/g, '');

    const hash = crypto.randomBytes(8).toString('hex');
    const filename = `${Date.now()}-${hash}${safeExt}`;
    const localPath = path.join(UPLOAD_DIR, filename);

    // 2. 利用 Node.js 原生的 Buffer base64 还原器一键、无偏差地解码还原二进制
    const buf = Buffer.from(content, 'base64');

    // 3. 落盘写入，100% 字节完美对齐、永不损坏
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
