'use client';

import { useState } from 'react';
import { Download, FileText, MessageSquareText, X, CheckCircle, Loader2 } from 'lucide-react';

type InquiryType = 'quote' | 'sample';

export default function ProductInquiryActions({ productName, specsPdf }: { productName: string; specsPdf?: string | null }) {
  const [inquiryType, setInquiryType] = useState<InquiryType | null>(null);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectInquiryType, setSelectInquiryType] = useState('Bulk Purchasing');
  const [projectDetails, setProjectDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const modalTitle = inquiryType === 'sample' ? 'Request Sample' : 'Get A Quote';

  function openInquiry(type: InquiryType) {
    setInquiryType(type);
    setIsSuccess(false);
    setErrorMessage('');
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setSelectInquiryType(type === 'sample' ? 'Request Free Samples' : 'Bulk Purchasing');
    setProjectDetails(`I am interested in ${productName}.`);
  }

  async function handleModalSubmit(e: React.FormEvent) {
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
          inquiryType: selectInquiryType,
          projectDetails,
          productName, // 传入具体产品名称
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
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

  // 平滑滚动到 Specs 选项卡
  function scrollToSpecs() {
    const el = document.getElementById('product-tabs-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => openInquiry('quote')}
          className="w-full bg-brand-primary text-white py-5 px-8 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all flex items-center justify-center shadow-lg shadow-brand-primary/30"
        >
          <MessageSquareText className="w-6 h-6 mr-3" />
          Submit Inquiry / Get Bulk Quote
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => openInquiry('sample')}
            className="w-full bg-white border-2 border-brand-primary text-brand-primary py-4 px-6 rounded-full font-bold text-lg hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center"
          >
            <FileText className="w-5 h-5 mr-2" /> Request Sample
          </button>
          {specsPdf ? (
            <a
              href={specsPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-100 text-brand-dark py-4 px-6 rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center cursor-pointer"
            >
              <Download className="w-5 h-5 mr-2 text-rose-500 animate-pulse" /> Download Spec Sheet
            </a>
          ) : (
            <button
              type="button"
              onClick={scrollToSpecs}
              className="w-full bg-gray-100 text-brand-dark py-4 px-6 rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2 text-gray-400" /> Download Spec Sheet
            </button>
          )}
        </div>
      </div>

      {inquiryType && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setInquiryType(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setInquiryType(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition"
              aria-label="Close inquiry form"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-2">
                {modalTitle}
              </h3>
              <p className="text-brand-gray mb-6 text-sm">
                Tell us about your needs and we&apos;ll get back to you within 24 hours.
              </p>

              {isSuccess ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-dark mb-2">Inquiry Sent Successfully!</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                      We have successfully routed your purchase inquiry for <strong>{productName}</strong> to our company mailbox. We will respond with pricing details within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setInquiryType(null)}
                    className="px-6 py-2.5 rounded-xl bg-brand-primary text-white font-bold text-sm hover:opacity-90 transition"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">Company</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">
                        Email <span className="text-rose-500 font-extrabold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-1.5">
                        Phone <span className="text-rose-500 font-extrabold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition text-brand-dark"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1.5">Product</label>
                    <input
                      type="text"
                      value={productName}
                      readOnly
                      className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-gray font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1.5">Inquiry Type</label>
                    <div className="relative">
                      <select
                        value={selectInquiryType}
                        onChange={(e) => setSelectInquiryType(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition appearance-none text-brand-dark font-medium"
                      >
                        <option>OEM Private Label</option>
                        <option>ODM Custom Formulation</option>
                        <option>Request Free Samples</option>
                        <option>Bulk Purchasing</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition resize-none text-brand-dark"
                      placeholder="Briefly describe your project, target market, or quantity..."
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <p className="text-xs font-bold text-rose-600 bg-rose-50 p-3 rounded-lg border border-rose-100">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-primary text-white py-3.5 rounded-xl font-bold text-base hover:bg-brand-primary/90 transition shadow-lg flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                  <p className="text-[10px] text-gray-400 text-center">
                    By submitting, you agree to secure transmission of details to our business mailbox.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
