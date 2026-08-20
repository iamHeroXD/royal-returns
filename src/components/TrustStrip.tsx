'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {points.map((pt, i) => {
            const IconComponent = pt.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-royal-500/40 hover:shadow-subtle transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-royal-600 flex-shrink-0">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
