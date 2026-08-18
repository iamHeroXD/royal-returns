import React from 'react';
import Metadata from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ManagingDirectorCard } from '@/components/ManagingDirectorCard';
import { companyData } from '@/data/companyData';
import { ShieldCheck, MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | Royal Returns Financial Solutions',
  description: 'Learn about Royal Returns Financial Solutions in Akkulam, Thiruvananthapuram, Kerala. Founded on trust, transparency, and customer-focused loan & financial advisory services.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
      
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-50 text-royal-700 font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>About Royal Returns</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
          A partner for your banking and financial needs.
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Based in Akkulam, Thiruvananthapuram, Royal Returns Financial Solutions helps individuals and businesses navigate financial products and funding options through personalized guidance and a network of reputed banks and financial institutions.
        </p>
      </div>

      {/* Core Positioning */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-navy-900">Our Core Business Positioning</h2>
        <p className="text-slate-700 leading-relaxed text-sm md:text-base">
          At <strong className="text-navy-950">ROYAL RETURNS Financial Solutions</strong>, we believe navigating loan options and deposit products should be clear, transparent, and structured around the client&apos;s needs. Rather than acting as a rigid single lender, we bridge applicants with matching banking and financial institution networks.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-navy-900 text-sm">Trust & Transparency</h3>
            <p className="text-slate-600 text-xs mt-1">Honest advice on document requirements and lender criteria.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-navy-900 text-sm">Personal Guidance</h3>
            <p className="text-slate-600 text-xs mt-1">Direct support tailored to your unique financial background.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-navy-900 text-sm">Practical Solutions</h3>
            <p className="text-slate-600 text-xs mt-1">Solutions designed around realistic monthly repayment capacity.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-navy-900 text-sm">Local Expertise</h3>
            <p className="text-slate-600 text-xs mt-1">Serving Akkulam, Thiruvananthapuram, and clients across Kerala.</p>
          </div>
        </div>
      </div>

      {/* Managing Director Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-navy-900">Leadership Profile</h2>
        <ManagingDirectorCard />
      </section>

      {/* Scope of Services */}
      <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 space-y-6">
        <h2 className="text-2xl font-bold text-navy-900">What We Help With</h2>
        <p className="text-slate-600 text-sm">
          Royal Returns assists across major personal and corporate financial requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-navy-900 text-base">Housing & Property</h3>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li>• House Purchase Loans</li>
              <li>• House Construction Loans</li>
              <li>• Home Extension & Renovations</li>
              <li>• Plot Purchase + Construction</li>
              <li>• Loan Against Property (LAP)</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-navy-900 text-base">Loans & Funding</h3>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li>• Personal & Unsecured Loans</li>
              <li>• Business & Commercial Funding</li>
              <li>• Education & Study Loans</li>
              <li>• Vehicle & Auto Finance</li>
              <li>• Overdraft (OD) & Consolidation</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-navy-900 text-base">Savings & Guidance</h3>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li>• Fixed Deposits (FD)</li>
              <li>• Recurring Deposits (RD)</li>
              <li>• Loan Advisory & Assessment</li>
              <li>• Financial Consulting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance Disclaimer Notice */}
      <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-950 space-y-2">
        <h4 className="font-bold text-sm text-amber-900">Regulatory Compliance Notice</h4>
        <p className="leading-relaxed">
          Royal Returns Financial Solutions acts as a financial consultancy and loan advisory service provider. We are not a direct banking institution, deposit-taking entity, or underwriting lender. All final credit approvals, loan amounts, interest rates, tenure, fees, and sanction terms are governed strictly by the respective banking or financial institution upon complete profile evaluation.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-950 text-white rounded-2xl p-8 text-center space-y-4 border border-navy-800">
        <h3 className="text-2xl font-extrabold">Ready to explore your options?</h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Contact our team in Thiruvananthapuram for a confidential profile discussion.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg"
          >
            <span>Talk to an Advisor</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
