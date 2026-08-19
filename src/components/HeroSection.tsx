'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { companyData } from '@/data/companyData';
import { ArrowRight, MapPin, PhoneCall, Calculator, Building2, Layers, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white text-navy-950 overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/80">
      
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#07111F_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Hero Messaging (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-royal-600 tracking-wider uppercase">
              <span>ROYAL RETURNS FINANCIAL SOLUTIONS</span>
            </div>

            {/* Huge Headline using Fluid Typography clamp() */}
            <h1 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-extrabold tracking-tight text-navy-950 leading-[1.08] font-sans">
              Finance should<br className="hidden sm:inline" /> feel <span className="text-royal-600">clearer.</span>
            </h1>

            {/* Exact Verified Supporting Copy */}
            <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Guidance for loans, property finance, business funding, savings and other financial solutions — built around your requirements.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <span>Talk to an Advisor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-navy-950 font-bold text-sm px-7 py-4 rounded-2xl border border-slate-200 transition-all"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Location Label & Contact Details */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-royal-600" />
                <span className="font-bold">{companyData.locationDisplay}</span>
              </div>

              <span className="text-slate-300">•</span>

              <a href={`tel:${companyData.phoneRaw}`} className="flex items-center gap-1.5 hover:text-royal-600 transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-royal-600" />
                <span>{companyData.phone}</span>
              </a>

              <span className="text-slate-300">•</span>

              <Link href="/emi-calculator" className="flex items-center gap-1.5 hover:text-royal-600 transition-colors">
                <Calculator className="w-3.5 h-3.5 text-royal-600" />
                <span>Calculate EMI</span>
              </Link>
            </div>

          </div>

          {/* Right Editorial Paper / Architectural Composition Visual (Col 8 to 12) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-8 shadow-xl space-y-6">
              
              {/* Monogram Identity & Title Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 text-white font-mono font-black text-xl flex items-center justify-center border border-navy-800 shadow">
                    RR
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy-950 text-base tracking-tight">ROYAL RETURNS</h3>
                    <p className="text-[10px] font-bold text-royal-600 uppercase tracking-widest">Financial Advisory</p>
                  </div>
                </div>

                <div className="text-[10px] font-mono font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                  EST. THIRUVANANTHAPURAM
                </div>
              </div>

              {/* Financial Architecture Layers */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-royal-600" />
                    <div>
                      <h4 className="font-extrabold text-navy-950 text-xs">Housing & Property Loans</h4>
                      <p className="text-[10px] text-slate-500">Purchase, Construction, LAP</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">01</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-royal-600" />
                    <div>
                      <h4 className="font-extrabold text-navy-950 text-xs">Loans & Commercial Credit</h4>
                      <p className="text-[10px] text-slate-500">Business, Personal, OD</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">02</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <div>
                      <h4 className="font-extrabold text-navy-950 text-xs">Savings & Profile Review</h4>
                      <p className="text-[10px] text-slate-500">FD, RD & Guidance</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">03</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-3.5 rounded-2xl shadow transition-colors"
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
