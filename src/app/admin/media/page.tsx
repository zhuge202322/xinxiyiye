'use client';

import { useEffect, useState } from 'react';
import { Save, RefreshCw, Image, Film, FileText, CheckCircle2 } from 'lucide-react';
import MediaUploader from '@/components/admin/MediaUploader';

type SiteMediaItem = {
  id: number;
  key: string;
  label: string;
  url: string;
  kind: 'image' | 'video';
};

export default function MediaManagerPage() {
  const [items, setItems] = useState<SiteMediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function loadData() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/media');
      if (!res.ok) throw new Error('Failed to load site media items');
      const data = await res.json();
      setItems(data);
    } catch (err: any) {
      setError(err.message || 'Error loading media settings');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function updateUrl(key: string, url: string | null) {
    setItems((prev) =>
      prev.map((item) => (item.key === key ? { ...item, url: url || '' } : item))
    );
  }

  async function onSave() {
    setSaving(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/admin/media', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      if (!res.ok) throw new Error('Failed to save settings');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to save settings');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-slate-500 font-medium py-12">
        <RefreshCw className="w-5 h-5 animate-spin" /> Loading settings...
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-slate-800">网站本地媒体配置</h2>
          <p className="text-xs text-slate-500 mt-1">
            在这里可以统一管理网站所有静态页面（首页、内页背景、Logo、轮播图等）调用的媒体图片和视频。
          </p>
        </div>
        <button
          onClick={onSave}
          disabled={saving}
          className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-xl font-bold shadow hover:opacity-90 disabled:opacity-50 transition"
        >
          <Save className="w-4 h-4" /> {saving ? '正在保存…' : '保存修改'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 text-sm rounded-xl border border-red-200 px-4 py-3">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-200 px-4 py-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> 媒体配置已更新成功！
        </div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
        {items.map((item) => (
          <div key={item.key} className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-slate-800">{item.label}</span>
                <span className="text-[10px] bg-slate-100 text-slate-600 font-mono font-bold px-1.5 py-0.5 rounded border border-slate-200/50">
                  {item.key}
                </span>
                {item.kind === 'video' ? (
                  <span className="inline-flex items-center gap-1 text-[10px] bg-sky-50 text-sky-700 border border-sky-200 px-1.5 py-0.5 rounded font-bold">
                    <Film className="w-3 h-3" /> 视频
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-1.5 py-0.5 rounded font-bold">
                    <Image className="w-3 h-3" /> 图片
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 break-all font-mono">当前路径: {item.url || '未设置'}</p>
            </div>
            <div className="w-full md:w-auto">
              <MediaUploader
                value={item.url}
                onChange={(url) => updateUrl(item.key, url)}
                kind={item.kind}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
