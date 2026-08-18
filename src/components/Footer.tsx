import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/companyData';
import { ShieldCheck, Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-royal-600 to-navy-900 border border-gold-500/40 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  {companyData.brandName}
                </span>
                <span className="text-xs font-semibold tracking-wider text-gold-400 uppercase">
                  {companyData.descriptor}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Helping individuals and businesses navigate financial products and funding options through personalized guidance and a network of reputed banks and financial institutions.
            </p>

            <div className="space-y-2 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                <span>{companyData.locationDisplay}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`tel:${companyData.phoneRaw}`} className="hover:text-gold-400 transition-colors">
                  {companyData.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-gold-400 transition-colors break-all">
                  {companyData.email}
                </a>
              </div>

              {/* Instagram Configurable Check */}
              <div className="flex items-center gap-2.5 pt-1">
                <Instagram className="w-4 h-4 text-gold-400 flex-shrink-0" />
                {companyData.instagramUrl ? (
                  <a 
                    href={companyData.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gold-400 transition-colors"
                  >
                    {companyData.instagramHandle}
                  </a>
                ) : (
                  <span className="text-slate-400">{companyData.instagramHandle}</span>
                )}
              </div>

              {/* WhatsApp Configurable Check */}
              {companyData.whatsAppUrl && (
                <div className="flex items-center gap-2.5 pt-1">
                  <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <a 
                    href={companyData.whatsAppUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors text-emerald-400 font-medium"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-4 border-b border-navy-800 pb-2">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">Services Overview</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/emi-calculator" className="hover:text-gold-400 transition-colors">EMI Calculator</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Solutions */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-4 border-b border-navy-800 pb-2">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/home-loan" className="hover:text-gold-400 transition-colors">House Purchase Loans</Link>
              </li>
              <li>
                <Link href="/services/personal-loan" className="hover:text-gold-400 transition-colors">Personal Loans</Link>
              </li>
              <li>
                <Link href="/services/business-loan" className="hover:text-gold-400 transition-colors">Business Loans</Link>
              </li>
              <li>
                <Link href="/services/loan-against-property" className="hover:text-gold-400 transition-colors">Loan Against Property</Link>
              </li>
              <li>
                <Link href="/services/education-loan" className="hover:text-gold-400 transition-colors">Education Loans</Link>
              </li>
              <li>
                <Link href="/services/loan-consolidation" className="hover:text-gold-400 transition-colors">Loan Consolidation</Link>
              </li>
              <li>
                <Link href="/services/fixed-deposit" className="hover:text-gold-400 transition-colors">Fixed Deposits (FD)</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Compliance */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-4 border-b border-navy-800 pb-2">
              Legal & Disclaimers
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/disclaimer" className="hover:text-gold-400 transition-colors">Financial Disclaimer</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-navy-900/60 rounded-lg border border-navy-800 text-[11px] text-slate-400 leading-normal">
              <span className="font-semibold text-slate-300 block mb-1">Advisory Note:</span>
              Royal Returns is a loan & financial guidance consultancy, not a direct bank or licensed deposit-taking lender.
            </div>
          </div>

        </div>

        {/* Financial Compliance Statement */}
        <div className="py-6 text-xs text-slate-400 leading-relaxed border-b border-navy-800/80">
          <p>
            <strong className="text-slate-300">Compliance Disclaimer:</strong> Royal Returns Financial Solutions provides financial guidance and assistance in exploring available financial products and services. Final eligibility, loan approval, interest rates, processing fees, tenure, and terms & conditions are determined strictly by the respective bank or financial institution and may vary based on applicant profile, document verification, and applicable lender policies. Information presented on this website is for general informational purposes and does not constitute a guarantee of loan approval or specific financial returns.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Royal Returns Financial Solutions. All rights reserved.</p>
          <p className="text-slate-400">Akkulam, Thiruvananthapuram, Kerala, India</p>
        </div>
      </div>
    </footer>
  );
};
