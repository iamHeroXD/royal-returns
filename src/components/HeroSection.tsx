'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { companyData } from '@/data/companyData';
import { 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Calculator, 
  PhoneCall, 
  Building2, 
  Sparkles,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-navy-800/80">
      
      {/* Radial Ambient Glow Backgrounds */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Financial Grid Pattern Background SVG */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (Col 1 to 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Location & Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 text-xs font-semibold text-gold-400 shadow-glow-gold backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="tracking-wide">TRUSTED FINANCIAL SOLUTIONS</span>
              <span className="text-navy-700">•</span>
              <span className="text-slate-300 font-normal">{companyData.locationDisplay}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Financial solutions built around <span className="text-gold-gradient">your goals.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              From home loans and business funding to savings options and personalized financial guidance, Royal Returns helps you navigate your choices with total clarity and confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-extrabold text-sm px-8 py-4 rounded-xl shadow-glow-gold hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Talk to an Advisor</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-900/90 hover:bg-navy-850 text-slate-200 hover:text-white font-bold text-sm px-7 py-4 rounded-xl border border-navy-700/80 transition-all hover:border-royal-500/50 backdrop-blur-md"
              >
                <span>Explore Solutions</span>
              </Link>
            </motion.div>

            {/* Quick Contact & EMI Ticker */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium"
            >
              <a href={`tel:${companyData.phoneRaw}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
                <div className="w-6 h-6 rounded-full bg-navy-900 flex items-center justify-center border border-navy-800 group-hover:border-gold-400">
                  <PhoneCall className="w-3 h-3 text-gold-400" />
                </div>
                <span>Call: {companyData.phone}</span>
              </a>

              <span className="text-navy-800">•</span>

              <Link href="/emi-calculator" className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
                <div className="w-6 h-6 rounded-full bg-navy-900 flex items-center justify-center border border-navy-800 group-hover:border-gold-400">
                  <Calculator className="w-3 h-3 text-gold-400" />
                </div>
                <span>Instant EMI Calculator</span>
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Hero Glass Visual (Col 8 to 12) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-navy-800 p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-6 animate-float">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between border-b border-navy-800/80 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-royal-600 to-navy-900 border border-gold-500/40 flex items-center justify-center shadow-lg">
                    <ShieldCheck className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base tracking-tight">ROYAL RETURNS</h3>
                    <p className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">Financial Solutions</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Advisory Active</span>
                </div>
              </div>

              {/* Service Cards Overview */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-navy-950/80 border border-navy-800/80 flex items-center justify-between hover:border-royal-500/40 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-royal-950 text-royal-400 flex items-center justify-center border border-royal-800/50">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs">Housing & Property Loans</h4>
                      <p className="text-[10px] text-slate-400">Purchase, Construction, LAP</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </div>

                <div className="p-3.5 rounded-2xl bg-navy-950/80 border border-navy-800/80 flex items-center justify-between hover:border-royal-500/40 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold-950 text-gold-400 flex items-center justify-center border border-gold-800/50">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs">Business Capital & OD</h4>
                      <p className="text-[10px] text-slate-400">Working Capital & Overdraft</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </div>

                <div className="p-3.5 rounded-2xl bg-navy-950/80 border border-navy-800/80 flex items-center justify-between hover:border-royal-500/40 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center border border-emerald-800/50">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs">Personal & Savings Solutions</h4>
                      <p className="text-[10px] text-slate-400">Personal Loans, FD & RD</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>

              {/* Bottom Quick Call */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-850 text-gold-400 font-bold text-xs py-3.5 rounded-xl border border-gold-500/30 transition-all hover:border-gold-400"
                >
                  <span>Request a Callback Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
