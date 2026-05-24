'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RichEditor from './RichEditor';
import MultiImageUploader, { ImageItem } from './MultiImageUploader';
import TranslationTabs, { TranslationLocale } from './TranslationTabs';
import { slugify } from '@/lib/slug';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Category = { id: number; name: string };

type LocaleStrings = Record<TranslationLocale, string>;

type Props = {
  mode: 'create' | 'edit';
  productId?: number;
  initial?: {
    name: string;
    slug: string;
    shortDescription: string;
    description: string;
    images: ImageItem[];
    categoryIds: number[];
    translations?: {
      name: LocaleStrings;
      shortDescription: LocaleStrings;
      description: LocaleStrings;
    };
  };
  categories: Category[];
};

const EMPTY_LOCALE: LocaleStrings = { fr: '', es: '', ar: '' };

export default function ProductForm({ mode, productId, initial, categories }: Props) {
  const router = useRouter();
  const [name, setName] = useState(initial?.name || '');
  const [slug, setSlug] = useState(initial?.slug || '');
  const [slugTouched, setSlugTouched] = useState(!!initial?.slug);
  const [shortDescription, setShortDescription] = useState(initial?.shortDescription || '');
  const [description, setDescription] = useState(initial?.description || '');
  const [images, setImages] = useState<ImageItem[]>(initial?.images || []);
  const [categoryIds, setCategoryIds] = useState<number[]>(initial?.categoryIds || []);
  const [nameI18n, setNameI18n] = useState<LocaleStrings>(initial?.translations?.name || EMPTY_LOCALE);
  const [shortDescI18n, setShortDescI18n] = useState<LocaleStrings>(initial?.translations?.shortDescription || EMPTY_LOCALE);
  const [descI18n, setDescI18n] = useState<LocaleStrings>(initial?.translations?.description || EMPTY_LOCALE);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  function setLocale<L extends LocaleStrings>(setter: (v: L) => void, current: L) {
    return (locale: TranslationLocale, value: string) =>
      setter({ ...current, [locale]: value } as L);
  }

  function onNameChange(v: string) {
    setName(v);
    if (!slugTouched) setSlug(slugify(v));
  }

  function toggleCategory(id: number) {
    setCategoryIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const url = mode === 'create' ? '/api/admin/products' : `/api/admin/products/${productId}`;
      const method = mode === 'create' ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          slug,
          shortDescription,
          description,
          images,
          categoryIds,
          nameFr: nameI18n.fr, nameEs: nameI18n.es, nameAr: nameI18n.ar,
          shortDescriptionFr: shortDescI18n.fr,
          shortDescriptionEs: shortDescI18n.es,
          shortDescriptionAr: shortDescI18n.ar,
          descriptionFr: descI18n.fr,
          descriptionEs: descI18n.es,
          descriptionAr: descI18n.ar,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setError(err.error || 'Save failed');
        return;
      }
      router.push('/admin/products');
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/admin/products" className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-slate-800">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-xl font-bold shadow hover:opacity-90 disabled:opacity-50"
        >
          <Save className="w-4 h-4" /> {busy ? 'Saving...' : mode === 'create' ? 'Create' : 'Update'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 text-sm rounded-xl border border-red-200 px-4 py-3">{error}</div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Slug *</label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => { setSlug(e.target.value); setSlugTouched(true); }}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 font-mono text-sm"
          />
          <p className="text-xs text-slate-500 mt-1">Used in the URL: /product/{slug || '...'}</p>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Categories</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = categoryIds.includes(c.id);
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => toggleCategory(c.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                    active
                      ? 'bg-brand-primary text-white border-brand-primary'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-brand-primary'
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
            {categories.length === 0 && (
              <span className="text-sm text-slate-400">No categories yet.</span>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="text-sm font-bold text-slate-700 mb-3">Product Images</h3>
        <MultiImageUploader value={images} onChange={setImages} />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="text-sm font-bold text-slate-700 mb-3">Short Description</h3>
        <RichEditor value={shortDescription} onChange={setShortDescription} minHeight={150} />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="text-sm font-bold text-slate-700 mb-3">Full Description</h3>
        <RichEditor value={description} onChange={setDescription} minHeight={400} />
      </div>

      <TranslationTabs title="Translations (Product)">
        {(locale, isRtl) => (
          <>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Name ({locale})</label>
              <input
                type="text"
                value={nameI18n[locale]}
                onChange={(e) => setLocale(setNameI18n, nameI18n)(locale, e.target.value)}
                placeholder="Leave empty to fall back to English"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                dir={isRtl ? 'rtl' : 'ltr'}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Short Description ({locale})</label>
              <RichEditor
                key={`short-${locale}`}
                value={shortDescI18n[locale]}
                onChange={(v) => setLocale(setShortDescI18n, shortDescI18n)(locale, v)}
                minHeight={120}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Description ({locale})</label>
              <RichEditor
                key={`desc-${locale}`}
                value={descI18n[locale]}
                onChange={(v) => setLocale(setDescI18n, descI18n)(locale, v)}
                minHeight={300}
              />
            </div>
          </>
        )}
      </TranslationTabs>
    </form>
  );
}
