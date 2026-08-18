'use client';

import React, { useState } from 'react';
import { faqData } from '@/data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqData.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-royal-500"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 pr-4">
                <HelpCircle className="w-5 h-5 text-royal-600 flex-shrink-0" />
                <span className="font-bold text-navy-900 text-sm md:text-base">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180 text-royal-600' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
