'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { companyData } from '@/data/companyData';
import { ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export const ManagingDirectorCard: React.FC = () => {
  const md = companyData.managingDirector;

  // Real professional executive image URL fallback
  const portraitImage = md.photoUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-subtle overflow-hidden relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Photo / Executive Image Frame (Col 1 to 5) */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
            <Image
              src={portraitImage}
              alt={`${md.name} - ${md.title}`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
              <span className="font-extrabold text-white text-sm block">{md.name}</span>
              <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider">{md.title}</span>
            </div>
          </div>
        </div>

        {/* Profile Info & Factual Statement (Col 6 to 12) */}
        <div className="md:col-span-7 space-y-4 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 text-royal-600 text-xs font-extrabold uppercase tracking-wider bg-royal-50 px-3 py-1 rounded-full border border-royal-100">
            <ShieldCheck className="w-4 h-4 text-royal-600" />
            <span>Human Point of Contact</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950">{md.name}</h3>
            <p className="text-royal-600 font-bold text-sm tracking-wide">{md.title}</p>
          </div>

          {/* Render ONLY if verified quote exists */}
          {md.positioningQuote && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 italic text-slate-700 text-sm">
              &quot;{md.positioningQuote}&quot;
            </div>
          )}

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            Leading Royal Returns Financial Solutions with a focus on transparent guidance, client-first accessibility, and long-term relationships across Akkulam, Thiruvananthapuram, and Kerala.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-royal-600" />
              <span>{companyData.locationDisplay}</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white bg-navy-950 hover:bg-navy-900 px-5 py-3 rounded-xl shadow-sm transition-all hover:shadow-md group active:scale-[0.98]"
            >
              <span>Talk to us</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
