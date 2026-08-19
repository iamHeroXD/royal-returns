'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getActiveServices } from '@/data/servicesData';
import { ServiceCategory } from '@/types';
import { 
  Home, 
  Briefcase, 
  PiggyBank, 
  Compass, 
  ArrowRight, 
  ChevronRight,
  ShieldCheck 
} from 'lucide-react';

export const ServiceExplorer: React.FC = () => {
  const activeServices = getActiveServices();

  const categories: {
    id: ServiceCategory;
    num: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: 'property',
      num: '01',
      title: 'PROPERTY FINANCE',
      description: 'House purchase, land construction, extension, renovation, and property equity mortgage options.',
      icon: Home,
    },
    {
      id: 'loans',
      num: '02',
      title: 'LOANS & FUNDING',
      description: 'Personal requirements, business expansion, study loans, vehicle finance, debt consolidation, and overdraft facilities.',
      icon: Briefcase,
    },
    {
      id: 'savings',
      num: '03',
      title: 'SAVINGS OPTIONS',
      description: 'Term deposit and recurring deposit guidance backed by regulated banking institutions.',
      icon: PiggyBank,
    },
    {
      id: 'advisory',
      num: '04',
      title: 'FINANCIAL GUIDANCE',
      description: 'Profile evaluation, document structuring, cash flow alignment, and non-binding advisory consultation.',
      icon: Compass,
    },
  ];

  const [expandedCategory, setExpandedCategory] = useState<ServiceCategory>('property');

  return (
    <div className="space-y-12">
      
      {/* Category Block List */}
      <div className="space-y-8">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const categoryServices = activeServices.filter((s) => s.category === cat.id);
          const isExpanded = expandedCategory === cat.id;

          return (
            <div
              key={cat.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle overflow-hidden transition-all duration-300"
            >
              {/* Category Header Bar */}
              <button
                onClick={() => setExpandedCategory(cat.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-royal-600"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl md:text-4xl font-mono font-black text-royal-600">
                    {cat.num}
                  </span>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <IconComp className="w-5 h-5 text-royal-600" />
                      <h3 className="text-xl md:text-2xl font-extrabold text-navy-950 tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm font-normal max-w-2xl leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    {categoryServices.length} {categoryServices.length === 1 ? 'Service' : 'Services'}
                  </span>
                  <div className={`w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-navy-950 transition-transform ${isExpanded ? 'rotate-90 bg-navy-950 text-white' : ''}`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Category Editorial Rows (50%+ Card Reduction) */}
              <div className="px-6 md:px-8 pb-6 border-t border-slate-100">
                <div className="divide-y divide-slate-100">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group py-4 px-2 hover:bg-slate-50/80 rounded-xl transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1 max-w-3xl">
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-navy-950 text-base group-hover:text-royal-600 transition-colors">
                            {service.name}
                          </h4>
                          {!service.verified && (
                            <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              Advisory Note
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-royal-600 flex-shrink-0">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
