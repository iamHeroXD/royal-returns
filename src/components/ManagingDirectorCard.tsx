import React from 'react';
import { companyData } from '@/data/companyData';
import { UserCheck, ShieldCheck, Quote } from 'lucide-react';

export const ManagingDirectorCard: React.FC = () => {
  const md = companyData.managingDirector;

  return (
    <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-2xl p-6 md:p-10 border border-navy-800 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Photo / Avatar Placeholder (Col 1 to 4) */}
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-navy-900 border-2 border-gold-500/40 p-1 flex items-center justify-center relative shadow-lg">
            {md.photoUrl ? (
              <img
                src={md.photoUrl}
                alt={md.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-navy-800 flex flex-col items-center justify-center text-slate-400">
                <UserCheck className="w-12 h-12 text-gold-400 mb-1" />
                <span className="text-[10px] font-medium text-slate-400">Photo Placeholder</span>
              </div>
            )}
            <div className="absolute -bottom-2 bg-royal-700 text-white text-[10px] font-bold px-3 py-0.5 rounded-full border border-royal-500 shadow">
              Managing Director
            </div>
          </div>
        </div>

        {/* Profile Info & Statement (Col 5 to 12) */}
        <div className="md:col-span-8 space-y-4 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Leadership & Values</span>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">{md.name}</h3>
            <p className="text-royal-300 font-semibold text-sm">{md.title}</p>
          </div>

          <div className="bg-navy-950/70 p-5 rounded-xl border border-navy-800/80 relative">
            <Quote className="w-6 h-6 text-gold-500/20 absolute top-3 right-3" />
            <p className="text-slate-200 text-sm md:text-base italic leading-relaxed">
              &quot;{md.positioningQuote}&quot;
            </p>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed">
            Royal Returns is built on transparent guidance, accessibility, and long-term client relationships across Thiruvananthapuram and Kerala.
          </p>

        </div>

      </div>
    </div>
  );
};
