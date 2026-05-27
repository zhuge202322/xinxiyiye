'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

type Props = {
  translations: {
    fieldName: string;
    fieldNamePh: string;
    fieldCompany: string;
    fieldCompanyPh: string;
    fieldEmail: string;
    fieldEmailPh: string;
    fieldPhone: string;
    fieldPhonePh: string;
    fieldInquiryType: string;
    fieldInquirySelect: string;
    inquiryOem: string;
    inquiryOdm: string;
    inquirySamples: string;
    inquiryDistribution: string;
    inquiryAudit: string;
    fieldProject: string;
    fieldProjectPh: string;
    sendInquiry: string;
    privacyNote: string;
    privacyPolicy: string;
    submitTitle: string;
    submitDesc: string;
  };
};

export default function ContactFormClient({ translations }: Props) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('');
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
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        // 清空表单
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setInquiryType('');
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
    <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 relative overflow-hidden h-full flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      
      <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 relative z-10">{translations.submitTitle}</h3>
      <p className="text-gray-500 font-medium mb-10 relative z-10 text-lg">{translations.submitDesc}</p>

      {isSuccess ? (
        <div className="relative z-10 py-12 px-6 bg-emerald-50/50 border-2 border-dashed border-emerald-200 rounded-3xl text-center space-y-6 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle className="w-9 h-9" />
          </div>
          <div>
            <h4 className="text-2xl font-black text-brand-dark mb-2">Inquiry Submitted Successfully!</h4>
            <p className="text-gray-600 font-medium leading-relaxed max-w-sm mx-auto">
              We have securely routed your purchase request to our enterprise mailbox. Our dedicated industrial representative will contact you via email within 24 hours.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">{translations.fieldName}</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={translations.fieldNamePh} 
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">{translations.fieldCompany}</label>
              <input 
                type="text" 
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={translations.fieldCompanyPh} 
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">
                <span className="flex items-center gap-1">
                  {translations.fieldEmail} <span className="text-rose-500 font-extrabold">*</span>
                </span>
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={translations.fieldEmailPh} 
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">
                <span className="flex items-center gap-1">
                  {translations.fieldPhone} <span className="text-rose-500 font-extrabold">*</span>
                </span>
              </label>
              <input 
                type="tel" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={translations.fieldPhonePh} 
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-dark mb-2">{translations.fieldInquiryType}</label>
            <div className="relative">
              <select 
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 pr-12 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition appearance-none text-brand-dark font-medium"
              >
                <option value="">{translations.fieldInquirySelect}</option>
                <option>{translations.inquiryOem}</option>
                <option>{translations.inquiryOdm}</option>
                <option>{translations.inquirySamples}</option>
                <option>{translations.inquiryDistribution}</option>
                <option>{translations.inquiryAudit}</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-brand-dark mb-2">{translations.fieldProject}</label>
            <textarea 
              rows={5} 
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder={translations.fieldProjectPh} 
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition resize-none text-brand-dark"
            ></textarea>
          </div>

          {errorMessage && (
            <p className="text-sm font-bold text-rose-600 bg-rose-50 p-4 rounded-xl border border-rose-100">{errorMessage}</p>
          )}

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-brand-primary/90 hover:-translate-y-1 transition-all shadow-xl shadow-brand-primary/30 flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-3 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  {translations.sendInquiry} <Send className="w-5 h-5 ml-3" />
                </>
              )}
            </button>
            <p className="text-sm text-gray-400 text-center mt-6">
              {translations.privacyNote} <a href="#" className="underline hover:text-brand-primary">{translations.privacyPolicy}</a>.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
