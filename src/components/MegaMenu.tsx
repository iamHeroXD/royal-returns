'use client';

import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { ChevronRight, Shield, Home as HomeIcon, Briefcase, PiggyBank, Compass } from 'lucide-react';

interface MegaMenuProps {
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  const propertyServices = servicesData.filter((s) => s.category === 'property');
  const loanServices = servicesData.filter((s) => s.category === 'loans');
  const savingsServices = servicesData.filter((s) => s.category === 'savings');
  const advisoryServices = servicesData.filter((s) => s.category === 'advisory');

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 py-8 px-6 md:px-12 z-50 transition-all duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Category 1: Property Finance */}
        <div>
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-navy-900 font-bold text-sm tracking-wide uppercase">
            <HomeIcon className="w-4 h-4 text-royal-600" />
            <span>Property Finance</span>
          </div>
          <ul className="space-y-2 text-sm">
            {propertyServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between text-slate-700 hover:text-royal-600 hover:bg-slate-50 p-2 rounded-lg transition-colors"
                >
                  <span className="font-medium">{service.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-royal-600 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Category 2: Loans & Funding */}
        <div>
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-navy-900 font-bold text-sm tracking-wide uppercase">
            <Briefcase className="w-4 h-4 text-royal-600" />
            <span>Loans & Funding</span>
          </div>
          <ul className="space-y-2 text-sm">
            {loanServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between text-slate-700 hover:text-royal-600 hover:bg-slate-50 p-2 rounded-lg transition-colors"
                >
                  <span className="font-medium">{service.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-royal-600 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Category 3: Savings Options */}
        <div>
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-navy-900 font-bold text-sm tracking-wide uppercase">
            <PiggyBank className="w-4 h-4 text-royal-600" />
            <span>Savings Options</span>
          </div>
          <ul className="space-y-2 text-sm mb-6">
            {savingsServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between text-slate-700 hover:text-royal-600 hover:bg-slate-50 p-2 rounded-lg transition-colors"
                >
                  <span className="font-medium">{service.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-royal-600 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="bg-navy-900 text-white p-4 rounded-xl text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-gold-400 font-semibold">
              <Shield className="w-4 h-4" />
              <span>Transparent Advisory</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Explore FD & RD solutions backed by RBI-regulated banking partners.
            </p>
          </div>
        </div>

        {/* Category 4: Financial Guidance */}
        <div>
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-navy-900 font-bold text-sm tracking-wide uppercase">
            <Compass className="w-4 h-4 text-royal-600" />
            <span>Financial Guidance</span>
          </div>
          <ul className="space-y-2 text-sm">
            {advisoryServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between text-slate-700 hover:text-royal-600 hover:bg-slate-50 p-2 rounded-lg transition-colors"
                >
                  <span className="font-medium">{service.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-royal-600 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <Link
              href="/services"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-bold text-royal-600 hover:text-royal-800 transition-colors"
            >
              <span>View All Solutions & Services</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
