'use client';

import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/companyData';
import { Phone, MessageCircle, Send } from 'lucide-react';

export const FloatingMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 lg:hidden shadow-lg pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${companyData.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-navy-950 text-xs font-extrabold py-3 px-3 rounded-xl border border-slate-200 transition-colors min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-royal-600" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button (Only shown if verified in companyData) */}
        {companyData.whatsAppUrl && (
          <a
            href={companyData.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold py-3 px-3 rounded-xl transition-colors shadow-sm min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        )}

        {/* Enquire Button */}
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 bg-navy-950 hover:bg-navy-900 text-white text-xs font-extrabold py-3 px-3 rounded-xl shadow-md transition-colors min-h-[44px]"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  );
};
