import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/companyData';
import { ShieldCheck, ArrowRight, MapPin, Calculator, PhoneCall } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-navy-800">
      
      {/* Abstract Financial Lines Background SVG Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 600 C 300 400, 600 700, 1500 200" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M-100 400 C 400 200, 800 600, 1500 100" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="400" cy="300" r="250" stroke="#1D4ED8" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Messaging (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/30 text-xs font-semibold text-gold-400 shadow-sm backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>{companyData.locationDisplay}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Financial solutions built around <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-amber-200">your goals.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From home loans and business funding to savings options and financial guidance, Royal Returns helps you navigate available options with clarity and confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all border border-royal-400/30"
              >
                <span>Talk to an Advisor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-900/80 hover:bg-navy-800 text-slate-200 hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-navy-700 transition-all"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
              <a href={`tel:${companyData.phoneRaw}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                <span>Call: {companyData.phone}</span>
              </a>
              <span className="text-navy-700">•</span>
              <Link href="/emi-calculator" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
                <Calculator className="w-3.5 h-3.5 text-gold-400" />
                <span>Calculate EMI</span>
              </Link>
            </div>

          </div>

          {/* Right Hero Glass Card (Col 8 to 12) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-navy-900/90 to-navy-950/90 border border-navy-800 p-6 md:p-8 shadow-2xl backdrop-blur-md space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-royal-900/60 border border-gold-500/40 flex items-center justify-center text-gold-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">ROYAL RETURNS</h3>
                    <p className="text-[11px] font-medium text-gold-400 uppercase tracking-wider">Financial Solutions</p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-royal-900/80 text-royal-300 font-semibold border border-royal-700/50">
                  Advisory Desk
                </span>
              </div>

              {/* Service Pillars List */}
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-navy-950/60 border border-navy-800/80 flex items-center justify-between">
                  <span className="font-semibold text-white">Property & Housing Loans</span>
                  <span className="text-gold-400 font-medium text-[11px]">Purchase • Construction</span>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-navy-800/80 flex items-center justify-between">
                  <span className="font-semibold text-white">Loans & Capital</span>
                  <span className="text-gold-400 font-medium text-[11px]">Business • Personal • OD</span>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-navy-800/80 flex items-center justify-between">
                  <span className="font-semibold text-white">Savings & Deposits</span>
                  <span className="text-gold-400 font-medium text-[11px]">Fixed & Recurring (FD/RD)</span>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-navy-800/80 flex items-center justify-between">
                  <span className="font-semibold text-white">Profile Assessment</span>
                  <span className="text-gold-400 font-medium text-[11px]">No Obligation Review</span>
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-gold-400 font-bold text-xs py-3 rounded-xl border border-gold-500/30 transition-colors"
                >
                  <span>Request a Call Back</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
