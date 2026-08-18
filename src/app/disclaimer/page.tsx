import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { companyData } from '@/data/companyData';
import { ShieldAlert, Info } from 'lucide-react';

export const metadata = {
  title: 'Financial Disclaimer | Royal Returns Financial Solutions',
  description: 'Financial Disclaimer and regulatory compliance statement for Royal Returns Financial Solutions.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      <Breadcrumbs items={[{ label: 'Disclaimer' }]} />

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-bold text-xs uppercase tracking-wider border border-amber-200">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
          <span>Regulatory Disclosure</span>
        </div>
        <h1 className="text-3xl font-extrabold text-navy-900">Financial Disclaimer</h1>
        <p className="text-xs text-slate-500">Last updated: August 2026</p>
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
        
        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 space-y-2">
          <h2 className="font-bold text-base text-amber-900">Core Financial Services Disclosure</h2>
          <p className="leading-relaxed">
            Royal Returns Financial Solutions provides financial guidance and assistance in exploring available financial products and services. Final eligibility, approval, interest rates, fees, terms and conditions are determined by the respective bank or financial institution and may vary based on applicant profile and applicable policies. Information presented on this website is for general informational purposes and does not constitute a guarantee of loan approval, investment returns or any specific financial outcome.
          </p>
        </div>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-navy-900">1. No Banking or Direct Lending Status</h3>
          <p>
            Royal Returns Financial Solutions is a financial solutions consultancy/advisory firm based in Akkulam, Thiruvananthapuram, Kerala. Royal Returns is not a licensed bank, direct lender, insurer, investment fund, or government regulatory body.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-navy-900">2. Absence of Approval Guarantees</h3>
          <p>
            We do not promise or guarantee loan sanction amounts, interest rates, zero-documentation approvals, or specific credit bureau score outcomes. Credit approval remains at the sole discretion of partner banks and RBI-regulated financial institutions following formal underwriting procedures.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-navy-900">3. EMI Calculator Estimates</h3>
          <p>
            Calculations provided by the website’s live EMI calculator are indicative approximations for mathematical illustration. Actual EMI amounts, amortization schedules, processing charges, and taxes are determined exclusively by the lender upon application sanction.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-navy-900">4. Advisory & Educational Scope</h3>
          <p>
            Guidance regarding investment planning, retirement deposit options, or tax optimization is intended for general educational overview. Clients are advised to consult certified Chartered Accountants (CAs) or licensed investment advisors for formal legal or tax filings.
          </p>
        </section>

      </div>
    </div>
  );
}
