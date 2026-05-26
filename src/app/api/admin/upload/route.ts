import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get('file');

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: 'No file' }, { status: 400 });
    }

    const buf = Buffer.from(await file.arrayBuffer());
    const originalName = (file as any).name || 'upload';
    const ext = path.extname(originalName) || '.bin';
    const safeExt = ext.toLowerCase().replace(/[^.a-z0-9]/g, '');

    const hash = crypto.randomBytes(8).toString('hex');
    const filename = `${Date.now()}-${hash}${safeExt}`;
    const localPath = path.join(UPLOAD_DIR, filename);

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
