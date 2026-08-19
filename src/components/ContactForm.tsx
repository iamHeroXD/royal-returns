'use client';

import React, { useState, useId } from 'react';
import { servicesData } from '@/data/servicesData';
import { ContactFormData } from '@/types';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  defaultServiceSlug?: string;
  title?: string;
  subtitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultServiceSlug = '',
  title = 'Discuss Your Requirement',
  subtitle = 'Share your details and our team in Akkulam, Thiruvananthapuram will get in touch for a transparent evaluation.',
}) => {
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const locationId = useId();
  const serviceId = useId();
  const amountId = useId();
  const employmentId = useId();
  const methodId = useId();
  const messageId = useId();
  const consentId = useId();

  const activeServices = servicesData.filter((s) => s.enabled);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    location: 'Thiruvananthapuram',
    serviceSlug: defaultServiceSlug,
    loanAmount: '',
    employmentType: 'Salaried',
    preferredContactMethod: 'Phone',
    message: '',
    consentDisclaimer: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your Name and Phone Number.');
      return;
    }

    if (!formData.consentDisclaimer) {
      setStatus('error');
      setErrorMessage('Please acknowledge the disclosure checkbox before submitting.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again or call us directly.');
    }
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-md">
      <div className="mb-6 space-y-1">
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950">{title}</h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{subtitle}</p>
      </div>

      {status === 'success' ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="font-extrabold text-navy-950 text-lg">Enquiry Received</h4>
          <p className="text-slate-700 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Our advisory team in Akkulam will review your requirement and reach out via {formData.preferredContactMethod}.
          </p>
          <button
            onClick={() => {
              setStatus('idle');
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                location: 'Thiruvananthapuram',
                serviceSlug: '',
                loanAmount: '',
                employmentType: 'Salaried',
                preferredContactMethod: 'Phone',
                message: '',
                consentDisclaimer: false,
              });
            }}
            className="text-xs font-extrabold text-royal-600 underline pt-2"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          {/* Error Message Alert */}
          {status === 'error' && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor={nameId} className="font-bold text-navy-950 block">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id={nameId}
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Nair"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-navy-950 focus:bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor={phoneId} className="font-bold text-navy-950 block">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id={phoneId}
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-navy-950 focus:bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Email & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor={emailId} className="font-bold text-navy-950 block">
                Email Address
              </label>
              <input
                id={emailId}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rahul@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-navy-950 focus:bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor={locationId} className="font-bold text-navy-950 block">
                Your City / Location
              </label>
              <input
                id={locationId}
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Thiruvananthapuram"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-navy-950 focus:bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 3: Service Choice & Loan Amount */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor={serviceId} className="font-bold text-navy-950 block">
                Service Required
              </label>
              <select
                id={serviceId}
                name="serviceSlug"
                value={formData.serviceSlug}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-navy-950 focus:bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none"
              >
                <option value="">General Financial Enquiry</option>
                {activeServices.map((service) => (
                  <option key={service.id} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor={amountId} className="font-bold text-navy-950 block">
                Approx Amount Needed (₹)
              </label>
              <input
                id={amountId}
                type="text"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                placeholder="e.g. 25 Lakhs"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-navy-950 focus:bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 4: Employment & Contact Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor={employmentId} className="font-bold text-navy-950 block">
                Employment Profile
              </label>
              <select
                id={employmentId}
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-navy-950 focus:bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none"
              >
                <option value="Salaried">Salaried Employee</option>
                <option value="Self-Employed Professional">Self-Employed Professional</option>
                <option value="Business Owner">Business Owner</option>
                <option value="NRI">NRI (Non-Resident Indian)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor={methodId} className="font-bold text-navy-950 block">
                Preferred Contact Method
              </label>
              <select
                id={methodId}
                name="preferredContactMethod"
                value={formData.preferredContactMethod}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-navy-950 focus:bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none"
              >
                <option value="Phone">Direct Phone Call</option>
                <option value="WhatsApp">WhatsApp Message</option>
                <option value="Email">Email Communication</option>
              </select>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="space-y-1">
            <label htmlFor={messageId} className="font-bold text-navy-950 block">
              Additional Details / Requirement Notes
            </label>
            <textarea
              id={messageId}
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your property location, business type, or specific timeline..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-navy-950 focus:bg-white focus:ring-2 focus:ring-royal-600 focus:outline-none resize-none"
            />
          </div>

          {/* Disclosure Checkbox */}
          <div className="pt-2">
            <label htmlFor={consentId} className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-relaxed">
              <input
                id={consentId}
                type="checkbox"
                name="consentDisclaimer"
                checked={formData.consentDisclaimer}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 rounded text-royal-600 focus:ring-royal-600 border-slate-300 flex-shrink-0"
              />
              <span>
                I understand that submitting this form does not guarantee loan approval. Final sanction terms depend on partner lender policy assessment. <span className="text-red-500">*</span>
              </span>
            </label>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.98] min-h-[44px]"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Enquiry to Royal Returns</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>
      )}
    </div>
  );
};
