import React from 'react';
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
      title: 'Prepare & Apply',
      desc: 'Gather standard KYC, income, or property documentation with guidance and submit your application.',
      icon: FileCheck,
    },
    {
      num: '04',
      title: 'Move Forward',
      desc: 'The relevant lender or institution evaluates your profile, completes verification, and communicates the final sanction.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, idx) => {
        const IconComp = step.icon;
        return (
          <div 
            key={idx} 
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-royal-600/30 font-sans tracking-tight">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-bold text-navy-900 text-base mb-2">
                {step.title}
              </h3>

              <p className="text-slate-600 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="w-full h-1 bg-royal-600/20 rounded-full mt-6 overflow-hidden">
              <div 
                className="bg-royal-600 h-full rounded-full" 
                style={{ width: `${(idx + 1) * 25}%` }} 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
