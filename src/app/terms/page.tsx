import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { companyData } from '@/data/companyData';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Royal Returns Financial Solutions',
  description: 'Terms of Service for using the website of Royal Returns Financial Solutions.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-50 text-royal-700 font-bold text-xs uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" />
          <span>Website Terms</span>
        </div>
        <h1 className="text-3xl font-extrabold text-navy-900">Terms of Service</h1>
        <p className="text-xs text-slate-500">Last updated: August 2026</p>
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
        
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">1. Consultancy & Advisory Role</h2>
          <p>
            The website and services of <strong>ROYAL RETURNS Financial Solutions</strong> provide general financial guidance and assistance in exploring available products. Submitting an enquiry or calculating an indicative EMI does not constitute a loan sanction, credit contract, or binding agreement with any bank or financial institution.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">2. Accuracy of Financial Information</h2>
          <p>
            While we endeavor to keep interest rates, eligibility criteria, and product information current, financial institutions may alter terms, interest rates, processing fees, and policies without prior notice. All final terms depend on official lender sanction letters.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">3. User Responsibilities</h2>
          <p>
            Users agree to provide accurate personal, financial, and employment information when filling out consultation forms. Providing fraudulent information may lead to rejection by lending partners.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">4. Limitation of Liability</h2>
          <p>
            Royal Returns Financial Solutions shall not be liable for any direct or indirect loss or delay arising from lender credit decisions, market interest rate fluctuations, or document processing timelines governed by external banking institutions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-navy-900">5. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India, under the jurisdiction of courts in Thiruvananthapuram, Kerala.
          </p>
        </section>

      </div>
    </div>
  );
}
