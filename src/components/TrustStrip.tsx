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
    <div className="bg-slate-50 border-y border-slate-200/80 py-8 text-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((pt, i) => {
            const IconComponent = pt.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-royal-600 flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-navy-950 text-sm tracking-tight">
                    {pt.title}
                  </h4>
                  <p className="text-slate-600 text-xs mt-0.5 leading-relaxed font-normal">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
