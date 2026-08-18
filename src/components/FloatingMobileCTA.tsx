'use client';

import React from 'react';
import Link from 'next/link';
import { companyData } from '@/data/companyData';
import { Phone, MessageCircle, Send } from 'lucide-react';

export const FloatingMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-navy-800 py-2.5 px-4 lg:hidden shadow-2xl">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${companyData.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold py-2.5 px-3 rounded-lg border border-navy-700 transition-colors shadow-sm"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button (Only shown if verified in companyData) */}
        {companyData.whatsAppUrl && (
          <a
            href={companyData.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        )}

        {/* Enquire Button */}
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 bg-royal-600 hover:bg-royal-500 text-white text-xs font-bold py-2.5 px-3 rounded-lg shadow-md transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  );
};
