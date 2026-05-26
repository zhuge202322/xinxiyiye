'use client';

import { useRef, useState } from 'react';
import { Upload, X, Image as ImageIcon, Film } from 'lucide-react';

type Props = {
  value?: string | null;
  onChange: (url: string | null) => void;
  label?: string;
  kind?: 'image' | 'video';
};

export default function MediaUploader({ value, onChange, label, kind = 'image' }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  async function upload(file: File) {
    setBusy(true);
    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream', // 声明纯二进制，完全绕过任何框架高层 JSON / FormData 解码器
          'x-filename': encodeURIComponent(file.name),
        },
        body: file, // 直接投递原始文件，0 字节损耗，支持数 GB 超大文件而完全不卡网页！
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        alert(`Upload failed: ${errData.error || res.statusText || 'Unknown server error'}`);
        return;
      }
      const { url } = await res.json();
      onChange(url);
    } catch (e: any) {
      console.error(e);
      alert(`Upload error: ${e.message || 'connection failed'}`);
    } finally {
      setBusy(false);
    }
  }

  const isVideo = kind === 'video';

  return (
    <div>
      {label && <label className="block text-sm font-bold text-slate-700 mb-2">{label}</label>}
      <div className="flex items-center gap-4">
        <div className="w-32 h-32 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center overflow-hidden">
          {value ? (
            isVideo ? (
              <video src={value} className="w-full h-full object-cover" muted playsInline loop />
            ) : (
              <img src={value} alt="" className="w-full h-full object-cover" />
            )
          ) : (
            isVideo ? (
              <Film className="w-8 h-8 text-slate-300" />
            ) : (
              <ImageIcon className="w-8 h-8 text-slate-300" />
            )
          )}
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 disabled:opacity-50"
          >
            <Upload className="w-4 h-4" /> {busy ? 'Uploading...' : isVideo ? 'Upload Video' : 'Upload Image'}
          </button>
          {value && (
            <button
              type="button"
              onClick={() => onChange(null)}
              className="inline-flex items-center gap-2 text-rose-600 text-sm font-medium hover:underline"
            >
              <X className="w-4 h-4" /> Remove
            </button>
          )}
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={isVideo ? 'video/*' : 'image/*'}
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) upload(f);
          e.target.value = '';
        }}
      />
    </div>
  );
}
