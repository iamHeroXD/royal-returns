import React from 'react';
import Metadata from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EMICalculatorWidget } from '@/components/EMICalculatorWidget';
import { ContactForm } from '@/components/ContactForm';
import { Calculator, Info, ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Loan EMI Calculator | Royal Returns Financial Solutions',
  description: 'Calculate your estimated monthly loan EMI, total interest, and total payment using our interactive reducing-balance loan calculator.',
};

export default function EMICalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
      
      <Breadcrumbs items={[{ label: 'EMI Calculator' }]} />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-50 text-royal-700 font-bold text-xs uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Calculator</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Loan EMI Calculator
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Use our reducing-balance calculator to estimate your indicative Equated Monthly Installment (EMI), interest burden, and repayment schedule across different loan amounts and tenures.
        </p>
      </div>

      {/* Main Interactive Widget */}
      <EMICalculatorWidget />

      {/* How EMI Calculation Works */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-navy-900">Understanding Equated Monthly Installments (EMI)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-navy-900">The EMI Formula</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-mono">
              EMI = [P × r × (1+r)^n] / [(1+r)^n - 1]
            </p>
            <p className="text-xs text-slate-600">
              Where P is Principal, r is monthly rate, and n is total months.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-navy-900">Reducing-Balance Method</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              With each monthly payment, interest is calculated only on the remaining principal balance, steadily lowering the interest component over time.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-navy-900">0% Interest Edge Case</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              For interest-free promotional financing schemes (0% rate), the EMI simplifies directly to Principal divided by Tenure in months (P / n).
            </p>
          </div>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Note:</strong> This calculator provides an estimate for illustration only. Actual interest rates, processing fees, documentation charges, pre-payment terms, and final EMI amounts depend on the underwriting rules of the respective bank or financial institution.
          </p>
        </div>
      </div>

      {/* Consultation Section */}
      <div className="max-w-4xl mx-auto">
        <ContactForm 
          title="Discuss Your Loan Requirement With An Advisor"
          subtitle="Ready to explore actual interest rates and loan options from reputed banks?"
        />
      </div>

    </div>
  );
}
