'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Mail, Phone as PhoneIcon } from 'lucide-react';

interface FormProps {
  t: {
    leadBadge: string;
    leadTitle: string;
    leadDesc: string;
    fieldName: string;
    fieldEmail: string;
    fieldPhone?: string;
    selectBeads: string;
    selectToilet: string;
    selectFreshener: string;
    selectAppliance: string;
    selectOem: string;
    messagePh: string;
    submit: string;
  };
}

export default function FacebookLandingFormClient({ t }: FormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState(t.selectBeads || 'Laundry Scent Booster Beads');
  const [projectDetails, setProjectDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          inquiryType,
          projectDetails,
          productName: 'Facebook Ads Landing Page', // 标注询盘来自 Facebook 广告落地页
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        // 清空表单
        setName('');
        setEmail('');
        setPhone('');
        setProjectDetails('');
      } else {
        const data = await res.json();
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[2rem] bg-brand-dark p-6 text-white shadow-2xl md:p-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold">
        <CheckCircle2 className="h-4 w-4" /> {t.leadBadge}
      </div>
      <h2 className="mb-3 text-3xl font-black leading-tight">{t.leadTitle}</h2>
      <p className="mb-6 text-sm font-medium leading-relaxed text-white/75">
        {t.leadDesc}
      </p>

      {isSuccess ? (
        <div className="py-8 text-center space-y-5 bg-white/5 rounded-3xl p-6 border border-white/10">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div>
            <h4 className="text-xl font-black text-white mb-2">Inquiry Submitted Successfully!</h4>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">
              We have successfully received your inquiry and securely routed it to our enterprise mailbox. Our representatives will contact you within 24 hours.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
          <div>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={`${t.fieldName} *`}
              className="w-full rounded-2xl bg-white px-4 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30"
            />
          </div>

          <div>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.fieldPhone || "Phone / WhatsApp *"}
              className="w-full rounded-2xl bg-white px-4 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30"
            />
          </div>

          <div className="sm:col-span-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`${t.fieldEmail} *`}
              className="w-full rounded-2xl bg-white px-4 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30"
            />
          </div>

          <div className="relative sm:col-span-2">
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full rounded-2xl bg-white px-4 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30 appearance-none font-medium"
            >
              <option>{t.selectBeads}</option>
              <option>{t.selectToilet}</option>
              <option>{t.selectFreshener}</option>
              <option>{t.selectAppliance}</option>
              <option>{t.selectOem}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-dark/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <textarea
            rows={3}
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            placeholder={t.messagePh}
            className="w-full resize-none rounded-2xl bg-white px-4 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30 sm:col-span-2"
          />

          {errorMessage && (
            <p className="text-xs font-bold text-rose-400 bg-rose-950/30 p-3 rounded-xl border border-rose-900/30 sm:col-span-2">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-brand-primary py-4 text-base font-black text-white shadow-lg sm:col-span-2 flex items-center justify-center disabled:opacity-50 hover:bg-brand-primary/90 transition"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...
              </>
            ) : (
              t.submit
            )}
          </button>
        </form>
      )}

      <div className="mt-5 grid gap-3 text-sm font-medium text-white/75 md:grid-cols-2">
        <a href="mailto:contact@myklens.com" className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-brand-accent" /> contact@myklens.com
        </a>
        <a href="tel:+8676088220790" className="flex items-center gap-2">
          <PhoneIcon className="h-4 w-4 text-brand-accent" /> +86 760-88220790
        </a>
      </div>
    </div>
  );
}
