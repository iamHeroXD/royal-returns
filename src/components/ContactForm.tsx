'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import { LeadFormData } from '@/types';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactFormProps {
  defaultServiceSlug?: string;
  title?: string;
  subtitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultServiceSlug = '',
  title = 'Request a Confidential Consultation',
  subtitle = 'Share your requirement and our team will get in touch to discuss suitable financial options.',
}) => {
  const defaultServiceMatch = servicesData.find((s) => s.slug === defaultServiceSlug);

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    serviceInterested: defaultServiceMatch ? defaultServiceMatch.name : 'Home Loan',
    requirementAmount: '',
    employmentType: 'Salaried',
    preferredContactMethod: 'Phone',
    message: '',
    disclaimerAccepted: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a valid phone number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Please enter your city/location.';
    }

    if (!formData.disclaimerAccepted) {
      newErrors.disclaimerAccepted = 'You must acknowledge the disclaimer to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.message || 'Unable to submit enquiry. Please try again or call us directly.');
      }
    } catch (err) {
      setSubmitError('Network error occurred. Please call +91 96332 70901 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 md:p-10 relative overflow-hidden">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-50 text-royal-700 font-extrabold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Consultation</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy-950 tracking-tight">{title}</h2>
        <p className="text-slate-600 text-sm mt-1">{subtitle}</p>
      </div>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-8 text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-extrabold text-emerald-950">Thank You! Your Enquiry Has Been Received.</h3>
            <p className="text-emerald-800 text-sm max-w-lg mx-auto leading-relaxed font-medium">
              Royal Returns will review your requirement and contact you at <strong className="text-emerald-950">{formData.phone}</strong> or <strong className="text-emerald-950">{formData.email}</strong> to discuss suitable next steps.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  location: '',
                  serviceInterested: 'Home Loan',
                  requirementAmount: '',
                  employmentType: 'Salaried',
                  preferredContactMethod: 'Phone',
                  message: '',
                  disclaimerAccepted: false,
                });
              }}
              className="inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors mt-2 shadow-md"
            >
              Submit Another Enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {submitError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm font-medium">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full bg-slate-50 border rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-royal-500 focus:bg-white'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full bg-slate-50 border rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                    errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-royal-500 focus:bg-white'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full bg-slate-50 border rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-royal-500 focus:bg-white'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
              </div>

              {/* City / Location */}
              <div>
                <label htmlFor="location" className="block text-xs font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                  City / Location <span className="text-red-500">*</span>
                </label>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Akkulam, Thiruvananthapuram"
                  className={`w-full bg-slate-50 border rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                    errors.location ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-royal-500 focus:bg-white'
                  }`}
                />
                {errors.location && <p className="text-xs text-red-500 mt-1 font-medium">{errors.location}</p>}
              </div>

              {/* Service Interested In */}
              <div>
                <label htmlFor="serviceInterested" className="block text-xs font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                  What Can We Help You With? <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceInterested"
                  value={formData.serviceInterested}
                  onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:bg-white transition-all"
                >
                  {servicesData.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name} ({service.categoryLabel})
                    </option>
                  ))}
                  <option value="Other Financial Service">Other Financial Service</option>
                </select>
              </div>

              {/* Approximate Requirement Amount */}
              <div>
                <label htmlFor="requirementAmount" className="block text-xs font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                  Approximate Requirement (Optional)
                </label>
                <input
                  id="requirementAmount"
                  type="text"
                  value={formData.requirementAmount}
                  onChange={(e) => setFormData({ ...formData, requirementAmount: e.target.value })}
                  placeholder="e.g. ₹25 Lakhs"
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:bg-white transition-all"
                />
              </div>

              {/* Employment Type */}
              <div>
                <label htmlFor="employmentType" className="block text-xs font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                  Employment / Business Profile
                </label>
                <select
                  id="employmentType"
                  value={formData.employmentType}
                  onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:bg-white transition-all"
                >
                  <option value="Salaried">Salaried Employee</option>
                  <option value="Self-Employed Professional">Self-Employed Professional (Doctor, CA, Architect)</option>
                  <option value="Business Owner">Business Owner / Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label htmlFor="preferredContactMethod" className="block text-xs font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:bg-white transition-all"
                >
                  <option value="Phone">Phone Call</option>
                  <option value="Email">Email</option>
                </select>
              </div>

            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="message" className="block text-xs font-extrabold text-navy-950 uppercase tracking-wider mb-2">
                Additional Requirement Details (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Provide any specific context or timeline details..."
                className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-950 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:bg-white transition-all"
              />
            </div>

            {/* Required Disclaimer Acknowledgment */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.disclaimerAccepted}
                  onChange={(e) => setFormData({ ...formData, disclaimerAccepted: e.target.checked })}
                  className="mt-1 w-4 h-4 text-royal-600 rounded border-slate-300 focus:ring-royal-500"
                />
                <span className="text-xs text-slate-600 leading-normal font-normal">
                  I understand that submitting this form does not guarantee loan approval or any specific financial product. Final terms depend on lender assessment. <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.disclaimerAccepted && (
                <p className="text-xs text-red-500 mt-1 font-medium">{errors.disclaimerAccepted}</p>
              )}
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-extrabold text-sm py-4 px-6 rounded-2xl shadow-glow-gold hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request a Consultation</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Your details remain 100% confidential and are never sold to third-party telemarketers.</span>
            </div>

          </motion.form>
        )}
      </AnimatePresence>

    </div>
  );
};
