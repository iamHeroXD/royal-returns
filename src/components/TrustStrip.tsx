import React from 'react';
import { UserCheck, Layers, Landmark, HeartHandshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const points = [
    {
      icon: UserCheck,
      title: 'Personalized Guidance',
      desc: 'Advice tailored to your unique financial profile',
    },
    {
      icon: Layers,
      title: 'Multiple Solutions',
      desc: 'Loans, property finance, savings & guidance',
    },
    {
      icon: Landmark,
      title: 'Banking Network',
      desc: 'Access to reputed banks & institutions',
    },
    {
      icon: HeartHandshake,
      title: 'Client-First Approach',
      desc: 'Prioritizing clarity, trust & long-term relationships',
    },
  ];

  return (
    <div className="bg-navy-950 border-y border-navy-800/80 py-8 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((pt, i) => {
            const IconComponent = pt.icon;
            return (
              <div key={i} className="flex items-start gap-3.5 p-3 rounded-xl bg-navy-900/40 border border-navy-800/50">
                <div className="p-2.5 rounded-lg bg-royal-900/60 border border-royal-700/40 text-gold-400 flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm tracking-tight">{pt.title}</h4>
                  <p className="text-slate-400 text-xs mt-0.5 leading-snug">{pt.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
