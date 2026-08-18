import React from 'react';
import Metadata from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { companyData } from '@/data/companyData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  Instagram,
  UserCheck 
} from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Royal Returns Financial Solutions',
  description: 'Get in touch with Royal Returns Financial Solutions in Akkulam, Thiruvananthapuram, Kerala. Call +91 96332 70901 or submit a confidential enquiry.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-50 text-royal-700 font-bold text-xs uppercase tracking-wider">
          <Phone className="w-3.5 h-3.5" />
          <span>Direct Contact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Get in touch with Royal Returns
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Whether you are evaluating home loan options, business funding, overdraft facilities, or savings products, our team in Thiruvananthapuram is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Info Card (Col 1 to 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-navy-950 text-white rounded-2xl p-8 border border-navy-800 shadow-xl space-y-6">
            
            <div>
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block mb-1">
                Office Information
              </span>
              <h2 className="text-2xl font-extrabold text-white">ROYAL RETURNS</h2>
              <p className="text-royal-300 font-semibold text-xs uppercase tracking-wider">Financial Solutions</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-navy-800 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Location</h3>
                  <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">{companyData.fullLocation}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Phone</h3>
                  <a href={`tel:${companyData.phoneRaw}`} className="text-gold-400 hover:underline font-semibold text-xs mt-0.5 block">
                    {companyData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <a href={`mailto:${companyData.email}`} className="text-gold-400 hover:underline font-semibold text-xs mt-0.5 block break-all">
                    {companyData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white">Business Hours</h3>
                  <p className="text-slate-300 text-xs mt-0.5">{companyData.businessHours}</p>
                </div>
              </div>
            </div>

            {/* Configurable Social / WhatsApp CTAs */}
            <div className="pt-4 border-t border-navy-800 space-y-3">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Connect With Us
              </h3>

              <div className="flex flex-col gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Instagram className="w-4 h-4 text-gold-400" />
                  {companyData.instagramUrl ? (
                    <a href={companyData.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 underline">
                      {companyData.instagramHandle}
                    </a>
                  ) : (
                    <span>{companyData.instagramHandle}</span>
                  )}
                </div>

                {companyData.whatsAppUrl && (
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <MessageCircle className="w-4 h-4" />
                    <a href={companyData.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Chat on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Leadership Profile Note */}
            <div className="pt-4 border-t border-navy-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-900 border border-gold-500/40 flex items-center justify-center text-gold-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">{companyData.managingDirector.name}</p>
                <p className="text-[11px] text-slate-400">{companyData.managingDirector.title}</p>
              </div>
            </div>

          </div>

          {/* Embedded Map Optional Renderer */}
          {companyData.officeCoordinates.embedUrl && (
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm overflow-hidden">
              <iframe
                src={companyData.officeCoordinates.embedUrl}
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Royal Returns Location Map"
                className="rounded-xl"
              />
            </div>
          )}
        </div>

        {/* Lead Form (Col 6 to 12) */}
        <div className="lg:col-span-7">
          <ContactForm 
            title="Send an Enquiry"
            subtitle="Fill out the form below to request a call back or consultation."
          />
        </div>

      </div>

    </div>
  );
}
