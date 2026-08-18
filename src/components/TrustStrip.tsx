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
    <div className="bg-navy-950 border-y border-navy-800/80 py-8 text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((pt, i) => {
            const IconComponent = pt.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-navy-900/60 border border-navy-800/80 hover:border-gold-500/30 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 text-gold-400 group-hover:scale-110 group-hover:text-gold-300 transition-transform flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm tracking-tight group-hover:text-gold-300 transition-colors">
                    {pt.title}
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-normal">
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
