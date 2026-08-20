'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquarePlus, Search, FileCheck, CheckCircle } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us What You Need',
      desc: 'Share your specific financial goal, borrowing requirement, or savings timeline through our form or direct call.',
      icon: MessageSquarePlus,
    },
    {
      num: '02',
      title: 'Understand Your Options',
      desc: 'Discuss suitable financial products across our banking network matched to your profile and repayment comfort.',
      icon: Search,
    },
    {
      num: '03',
      title: 'Review The Details',
      desc: 'Gather standard KYC, income, or property documentation with guidance and review your application.',
      icon: FileCheck,
    },
    {
      num: '04',
      title: 'Move Forward With Clarity',
      desc: 'The relevant lender or institution evaluates your profile, completes verification, and communicates the final sanction decision.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, idx) => {
        const IconComp = step.icon;
        return (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-royal-500/40 hover:shadow-subtle transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-royal-600 font-mono tracking-tight group-hover:scale-110 transition-transform origin-left">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-royal-50 text-royal-600 flex items-center justify-center border border-royal-100 group-hover:bg-royal-600 group-hover:text-white transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-extrabold text-navy-950 text-base mb-2 group-hover:text-royal-600 transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>

            <div className="w-full h-1 bg-slate-100 rounded-full mt-4 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${(idx + 1) * 25}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                className="bg-royal-600 h-full rounded-full" 
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
