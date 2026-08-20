'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getActiveServices } from '@/data/servicesData';
import { ServiceCategory } from '@/types';
import { 
  Home, 
  Briefcase, 
  PiggyBank, 
  Compass, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';

export const ServiceExplorer: React.FC = () => {
  const activeServices = getActiveServices();

  const categories: {
    id: ServiceCategory;
    num: string;
    title: string;
    description: string;
    imageUrl: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: 'property',
      num: '01',
      title: 'PROPERTY FINANCE',
      description: 'House purchase, land construction, extension, renovation, and property equity mortgage options.',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
      icon: Home,
    },
    {
      id: 'loans',
      num: '02',
      title: 'LOANS & FUNDING',
      description: 'Personal requirements, business expansion, study loans, vehicle finance, debt consolidation, and overdraft facilities.',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      icon: Briefcase,
    },
    {
      id: 'savings',
      num: '03',
      title: 'SAVINGS OPTIONS',
      description: 'Term deposit and recurring deposit guidance backed by regulated banking institutions.',
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop',
      icon: PiggyBank,
    },
    {
      id: 'advisory',
      num: '04',
      title: 'FINANCIAL GUIDANCE',
      description: 'Profile evaluation, document structuring, cash flow alignment, and non-binding advisory consultation.',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      icon: Compass,
    },
  ];

  const [expandedCategory, setExpandedCategory] = useState<ServiceCategory>('property');

  return (
    <div className="space-y-12">
      
      {/* Category Block List */}
      <div className="space-y-8">
        {categories.map((cat, idx) => {
          const IconComp = cat.icon;
          const categoryServices = activeServices.filter((s) => s.category === cat.id);
          const isExpanded = expandedCategory === cat.id;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle overflow-hidden transition-all duration-300"
            >
              {/* Category Header Bar */}
              <button
                onClick={() => setExpandedCategory(cat.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-royal-600 group"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Category Image Thumbnail */}
                  <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-200 flex-shrink-0 shadow-xs">
                    <Image
                      src={cat.imageUrl}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="80px"
                    />
                    <div className="absolute inset-0 bg-navy-950/20" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl sm:text-2xl font-mono font-black text-royal-600">
                        {cat.num}
                      </span>
                      <IconComp className="w-5 h-5 text-royal-600" />
                      <h3 className="text-lg sm:text-2xl font-extrabold text-navy-950 tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    {categoryServices.length} {categoryServices.length === 1 ? 'Service' : 'Services'}
                  </span>
                  <div className={`w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-navy-950 transition-transform duration-300 ${isExpanded ? 'rotate-90 bg-navy-950 text-white' : ''}`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Category Editorial Rows with Smooth Accordion Animation */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden border-t border-slate-100 bg-slate-50/50"
                  >
                    <div className="px-6 md:px-8 py-4 divide-y divide-slate-200/60">
                      {categoryServices.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="group py-4 px-3 hover:bg-white rounded-xl transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs hover:shadow-subtle"
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
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
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
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
};
