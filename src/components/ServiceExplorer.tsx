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
      <div className="space-y-6">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const categoryServices = activeServices.filter((s) => s.category === cat.id);
          const isExpanded = expandedCategory === cat.id;

          return (
            <div
              key={cat.id}
              className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                isExpanded 
                  ? 'border-navy-950 shadow-xl ring-1 ring-navy-950/10' 
                  : 'border-slate-200/90 shadow-sm hover:border-slate-300'
              }`}
            >
              {/* Category Header Bar */}
              <button
                onClick={() => setExpandedCategory(isExpanded ? cat.id : cat.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-royal-500 rounded-3xl"
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
                    <p className="text-slate-600 text-xs md:text-sm font-normal max-w-2xl">
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

              {/* Category Service Items Grid */}
              <div className="px-6 md:px-8 pb-8 pt-2 border-t border-slate-100 bg-slate-50/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-royal-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-navy-950 text-base group-hover:text-royal-600 transition-colors">
                            {service.name}
                          </h4>
                          {!service.verified && (
                            <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              Advisory Note
                            </span>
                          )}
                        </div>

                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs font-bold text-royal-600 border-t border-slate-100">
                        <span>View Requirements</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
