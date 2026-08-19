import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/companyData';
import { UserCheck, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export const ManagingDirectorCard: React.FC = () => {
  const md = companyData.managingDirector;

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-subtle">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Photo / Typographic Avatar Treatment (Col 1 to 4) */}
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-navy-950 text-white p-2 flex flex-col items-center justify-center relative shadow-md border border-navy-900">
            {md.photoUrl ? (
              <img
                src={md.photoUrl}
                alt={md.name}
                className="w-full h-full rounded-xl object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-xl bg-navy-900 flex flex-col items-center justify-center text-white space-y-1">
                <span className="font-mono font-black text-3xl text-gold-400">MA</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">EXECUTIVE ADVISORY</span>
              </div>
            )}
          </div>
        </div>

        {/* Profile Info & Factual Statement (Col 5 to 12) */}
        <div className="md:col-span-8 space-y-4 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 text-royal-600 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Human Point of Contact</span>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy-950">{md.name}</h3>
            <p className="text-royal-600 font-bold text-sm tracking-wide">{md.title}</p>
          </div>

          {/* Render ONLY if verified quote exists */}
          {md.positioningQuote && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 italic text-slate-700 text-sm">
              &quot;{md.positioningQuote}&quot;
            </div>
          )}

          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
            Leading Royal Returns Financial Solutions with a focus on transparent guidance, client-first accessibility, and long-term relationships across Akkulam, Thiruvananthapuram, and Kerala.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-royal-600" />
              <span>{companyData.locationDisplay}</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white bg-navy-950 hover:bg-navy-900 px-4 py-2.5 rounded-xl shadow-sm transition-colors"
            >
              <span>Talk to us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
