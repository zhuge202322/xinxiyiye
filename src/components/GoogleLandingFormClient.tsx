'use client';

import { useState } from 'react';
import { Headset, CheckCircle, Loader2, Mail, Phone as PhoneIcon } from 'lucide-react';

interface FormProps {
  t: {
    quoteBadge: string;
    quoteTitle: string;
    quoteDesc: string;
    yourName: string;
    company: string;
    email: string;
    selectToilet: string;
    selectBeads: string;
    selectFreshener: string;
    selectDetergent: string;
    selectAppliance: string;
    selectOem: string;
    messagePh: string;
    submitInquiry: string;
  };
}

export default function GoogleLandingFormClient({ t }: FormProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState(t.selectOem || 'OEM Private Label');
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
          company,
          email,
          phone,
          inquiryType,
          projectDetails,
          productName: 'Google Ads Landing Page', // 标注询盘来自 Google Ads 落地页
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        // 清空表单
        setName('');
        setCompany('');
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
    <div id="quote" className="bg-brand-dark text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl scroll-mt-24 w-full">
      <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-extrabold mb-5">
        <Headset className="w-4 h-4" /> {t.quoteBadge}
      </div>
      <h2 className="text-3xl md:text-4xl font-black mb-4">{t.quoteTitle}</h2>
      <p className="text-gray-300 font-medium leading-relaxed mb-8">
        {t.quoteDesc}
      </p>

      {isSuccess ? (
        <div className="py-8 text-center space-y-5 bg-white/5 rounded-3xl p-6 border border-white/10">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle className="w-9 h-9" />
          </div>
          <div>
            <h4 className="text-xl font-black text-white mb-2">Inquiry Submitted Successfully!</h4>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">
              We have successfully received your purchase inquiry and securely routed it to our enterprise mailbox. We will respond with pricing details within 24 hours.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.yourName}
              className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30"
            />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder={t.company}
              className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`${t.email} *`}
              className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30"
            />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number *"
              className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30"
            />
          </div>
          <div className="relative">
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30 appearance-none font-medium"
            >
              <option>{t.selectToilet}</option>
              <option>{t.selectBeads}</option>
              <option>{t.selectFreshener}</option>
              <option>{t.selectDetergent}</option>
              <option>{t.selectAppliance}</option>
              <option>{t.selectOem}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-brand-dark/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <textarea
            rows={5}
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            placeholder={t.messagePh}
            className="w-full rounded-2xl bg-white px-5 py-4 text-brand-dark outline-none focus:ring-4 focus:ring-brand-primary/30 resize-none"
          />

          {errorMessage && (
            <p className="text-xs font-bold text-rose-400 bg-rose-950/30 p-3 rounded-xl border border-rose-900/30">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-primary text-white py-4 rounded-2xl font-black text-lg hover:bg-brand-primary/90 transition shadow-lg flex items-center justify-center disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...
              </>
            ) : (
              t.submitInquiry
            )}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm text-gray-300 font-medium">
        <a href="mailto:contact@myklens.com" className="flex items-center gap-3 hover:text-white transition"><Mail className="w-4 h-4 text-brand-accent" /> contact@myklens.com</a>
        <a href="https://wa.me/8618022153690" className="flex items-center gap-3 hover:text-white transition"><PhoneIcon className="w-4 h-4 text-brand-accent" /> +86 180 2215 3690</a>
      </div>
    </div>
  );
}
