import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { companyData } from '@/data/companyData';
import { ShieldCheck, Lock } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Royal Returns Financial Solutions',
  description: 'Privacy Policy for Royal Returns Financial Solutions in Akkulam, Thiruvananthapuram, Kerala.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-50 text-royal-700 font-bold text-xs uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" />
          <span>Data Privacy</span>
        </div>
        <h1 className="text-3xl font-extrabold text-navy-900">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Last updated: August 2026</p>
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
        
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">1. Information We Collect</h2>
          <p>
            When you submit an enquiry through the website of <strong>ROYAL RETURNS Financial Solutions</strong>, we collect personal details provided directly by you, such as your full name, phone number, email address, city/location, employment profile, and requested financial service details.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">2. How We Use Your Information</h2>
          <p>
            Your information is used strictly to evaluate your financial requirement, contact you regarding suitable loan or savings options, and assist with document preparation for partner banking institutions.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>To respond to your consultation requests and inquiries.</li>
            <li>To discuss eligible financial products across our banking network.</li>
            <li>To comply with applicable legal and regulatory standards in India.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">3. Data Confidentiality & Security</h2>
          <p>
            We implement administrative and technical safeguards to protect your personal data against unauthorized access, loss, or misuse. We do not sell, rent, or trade your personal information to third-party telemarketers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">4. Sharing With Financial Institutions</h2>
          <p>
            If you choose to proceed with a formal loan or financial application, relevant personal and financial documentation is submitted to partner banks or financial institutions solely for processing your specific credit evaluation with your prior consent.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">5. Contacting Us About Privacy</h2>
          <p>
            If you have questions regarding our privacy practices or wish to update your submitted information, contact us at:
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 font-medium text-navy-950">
            <p><strong>ROYAL RETURNS Financial Solutions</strong></p>
            <p>Akkulam, Thiruvananthapuram, Kerala, India</p>
            <p>Email: {companyData.email}</p>
            <p>Phone: {companyData.phone}</p>
          </div>
        </section>

      </div>
    </div>
  );
}
