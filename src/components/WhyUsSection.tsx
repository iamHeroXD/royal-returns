'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WhyUsSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Clear Communication',
      desc: 'Transparent discussion of document requirements, timeline expectations, and eligibility factors before formal application.',
    },
    {
      num: '02',
      title: 'Personalized Guidance',
      desc: 'Solutions matched to your specific monthly cash flow, borrowing goals, and long-term repayment preferences.',
    },
    {
      num: '03',
      title: 'Banking Network Access',
      desc: 'Connect with a broad network of reputed banking and financial institutions under one roof.',
    },
    {
      num: '04',
      title: 'Structured Process',
      desc: 'Step-by-step assistance with application dossier preparation to make complex procedures easier to understand.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Editorial Headline */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-3"
      >
        <span className="text-xs font-mono tracking-widest text-royal-600 uppercase font-bold">
          CORE PRINCIPLES
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
          Clear guidance.<br />
          Thoughtful options.<br />
          No unnecessary complexity.
        </h2>
      </motion.div>

      {/* Numbered 4-Block Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((p, idx) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-royal-500/40 hover:shadow-subtle transition-all duration-300 group"
          >
            <div className="space-y-3">
              <span className="text-3xl font-black text-royal-600 font-mono tracking-tight group-hover:scale-110 transition-transform origin-left block">
                {p.num}
              </span>
              <h3 className="text-xl font-extrabold text-navy-950 group-hover:text-royal-600 transition-colors">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
