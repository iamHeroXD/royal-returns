'use client';

import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/companyData';
import { ArrowRight, MapPin, PhoneCall, Calculator, Building2, Layers, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white text-navy-950 overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200/80">
      
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#071A33_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Editorial Hero Messaging (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] sm:text-xs font-mono font-bold text-royal-600 tracking-wider uppercase max-w-full truncate">
              <span className="truncate">ROYAL RETURNS FINANCIAL SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 leading-[1.15] font-sans">
              Financial guidance<br className="hidden sm:inline" /> for your <span className="text-royal-600">next move.</span>
            </h1>

            {/* Exact Verified Supporting Copy */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Explore financing and financial solutions with clear guidance tailored to your requirement.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <span>Talk to an Advisor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-navy-950 font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-200 transition-all active:scale-[0.98]"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Location Label & Contact Details */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/60">
                <MapPin className="w-3.5 h-3.5 text-royal-600 flex-shrink-0" />
                <span className="font-bold">{companyData.locationDisplay}</span>
              </div>

              <a href={`tel:${companyData.phoneRaw}`} className="flex items-center gap-1.5 hover:text-royal-600 transition-colors bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/60">
                <PhoneCall className="w-3.5 h-3.5 text-royal-600 flex-shrink-0" />
                <span>{companyData.phone}</span>
              </a>

              <Link href="/emi-calculator" className="flex items-center gap-1.5 hover:text-royal-600 transition-colors bg-slate-100/80 px-2.5 py-1 rounded-lg border border-slate-200/60">
                <Calculator className="w-3.5 h-3.5 text-royal-600 flex-shrink-0" />
                <span>Calculate EMI</span>
              </Link>
            </div>

          </div>

          {/* Right Visual Architecture Card (Col 8 to 12) */}
          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <div className="relative rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 p-5 sm:p-8 shadow-md space-y-4 sm:space-y-6">
              
              {/* Identity Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-navy-950 text-white font-mono font-black text-lg sm:text-xl flex items-center justify-center border border-navy-800 shadow-sm flex-shrink-0">
                    RR
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy-950 text-sm sm:text-base tracking-tight">ROYAL RETURNS</h3>
                    <p className="text-[10px] font-bold text-royal-600 uppercase tracking-wider">Financial Solutions</p>
                  </div>
                </div>

                <div className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  AKKULAM, TVM
                </div>
              </div>

              {/* Service Architecture Rows */}
              <div className="space-y-2.5">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-royal-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-navy-950 text-xs">Housing & Property Loans</h4>
                      <p className="text-[10px] text-slate-500">Purchase, Construction, LAP</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">01</span>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-royal-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-navy-950 text-xs">Loans & Business Credit</h4>
                      <p className="text-[10px] text-slate-500">Business, Personal, OD</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">02</span>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-navy-950 text-xs">Savings & Profile Review</h4>
                      <p className="text-[10px] text-slate-500">FD, RD & Guidance</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">03</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-xs py-3 rounded-xl shadow transition-colors"
                >
                  <span>Request Profile Consultation</span>
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
