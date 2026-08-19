import React from 'react';
import { companyData } from '@/data/companyData';
import { UserCheck, ShieldCheck, MapPin } from 'lucide-react';

export const ManagingDirectorCard: React.FC = () => {
  const md = companyData.managingDirector;

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Photo / Silhouette Avatar Placeholder (Col 1 to 4) */}
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-slate-100 border border-slate-200 p-2 flex flex-col items-center justify-center relative shadow-inner">
            {md.photoUrl ? (
              <img
                src={md.photoUrl}
                alt={md.name}
                className="w-full h-full rounded-xl object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-xl bg-slate-200/80 flex flex-col items-center justify-center text-slate-500 space-y-1">
                <UserCheck className="w-10 h-10 text-royal-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Official Portrait</span>
              </div>
            )}
          </div>
        </div>

        {/* Profile Info & Factual Statement (Col 5 to 12) */}
        <div className="md:col-span-8 space-y-4 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 text-royal-600 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Leadership & Management</span>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy-950">{md.name}</h3>
            <p className="text-royal-600 font-bold text-sm tracking-wide">{md.title}</p>
          </div>

          {/* Conditional Quote Block: Render ONLY if verified non-null quote exists */}
          {md.positioningQuote && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 italic text-slate-700 text-sm">
              &quot;{md.positioningQuote}&quot;
            </div>
          )}

          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            Leading Royal Returns Financial Solutions with a focus on transparent guidance, client-first accessibility, and long-term relationships across Akkulam, Thiruvananthapuram, and Kerala.
          </p>

          <div className="pt-2 flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-royal-600" />
            <span>{companyData.locationDisplay}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
