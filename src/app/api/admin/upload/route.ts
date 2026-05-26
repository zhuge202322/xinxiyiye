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
    // 1. 获取纯二进制 Raw Header
    const xFilename = req.headers.get('x-filename');
    const originalName = xFilename ? decodeURIComponent(xFilename) : 'upload.bin';
    const ext = path.extname(originalName) || '.bin';
    const safeExt = ext.toLowerCase().replace(/[^.a-z0-9]/g, '');

    const hash = crypto.randomBytes(8).toString('hex');
    const filename = `${Date.now()}-${hash}${safeExt}`;
    const localPath = path.join(UPLOAD_DIR, filename);

    // 2. 一步到位！直接提取纯净的原始 arrayBuffer，零多余封装，100% 字节对齐
    const arrayBuffer = await req.arrayBuffer();
    const buf = Buffer.from(arrayBuffer);

    // 打印磁盘写入安全审计信息
    console.log(`[File Upload Audit] Filename: ${filename}, Size: ${buf.length} bytes, Path: ${localPath}`);

    // 3. 原生写入本地磁盘
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
