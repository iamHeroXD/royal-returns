'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getActiveServices } from '@/data/servicesData';
import { ServiceItem } from '@/types';
import { 
  Home, 
  Hammer, 
  Briefcase, 
  GraduationCap, 
  Car, 
  Layers, 
  Lock, 
  ArrowRight,
  Compass
} from 'lucide-react';

interface PathwayOption {
  id: string;
  label: string;
  categorySlug: string;
  matchingServiceSlugs: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export const PathwaySelector: React.FC = () => {
  const activeServices = getActiveServices();

  const pathways: PathwayOption[] = [
    {
      id: 'home',
      label: 'BUY A HOME',
      categorySlug: 'property',
      matchingServiceSlugs: ['home-loan', 'plot-purchase-construction'],
      icon: Home,
    },
    {
      id: 'build',
      label: 'BUILD A HOUSE',
      categorySlug: 'property',
      matchingServiceSlugs: ['home-construction-loan', 'home-extension-loan', 'home-improvement-loan'],
      icon: Hammer,
    },
    {
      id: 'business',
      label: 'GROW A BUSINESS',
      categorySlug: 'loans',
      matchingServiceSlugs: ['business-loan', 'overdraft', 'project-funding', 'loan-against-property'],
      icon: Briefcase,
    },
    {
      id: 'education',
      label: 'FUND EDUCATION',
      categorySlug: 'loans',
      matchingServiceSlugs: ['education-loan'],
      icon: GraduationCap,
    },
    {
      id: 'vehicle',
      label: 'BUY A VEHICLE',
      categorySlug: 'loans',
      matchingServiceSlugs: ['vehicle-loan'],
      icon: Car,
    },
    {
      id: 'consolidate',
      label: 'MANAGE EXISTING LOANS',
      categorySlug: 'loans',
      matchingServiceSlugs: ['loan-consolidation'],
      icon: Layers,
    },
    {
      id: 'save',
      label: 'SAVE & INVEST',
      categorySlug: 'savings',
      matchingServiceSlugs: ['fixed-deposit', 'recurring-deposit'],
      icon: Lock,
    },
    {
      id: 'advisory',
      label: 'GET GUIDANCE',
      categorySlug: 'advisory',
      matchingServiceSlugs: ['loan-advisory', 'financial-consulting'],
      icon: Compass,
    },
  ];

  const [activePathwayId, setActivePathwayId] = useState<string>(pathways[0].id);

  const currentPathway = pathways.find((p) => p.id === activePathwayId) || pathways[0];
  const matchedServices = activeServices.filter((s) => 
    currentPathway.matchingServiceSlugs.includes(s.slug)
  );

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest text-royal-600 uppercase font-bold">
            INTENT-BASED EXPLORER
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-950 tracking-tight">
            What are you planning?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Select a financial objective to explore matching options and requirements.
          </p>
        </div>

        {/* Pathway Option Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {pathways.map((path) => {
            const IconComp = path.icon;
            const isSelected = path.id === activePathwayId;
            return (
              <button
                key={path.id}
                onClick={() => setActivePathwayId(path.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-navy-950 text-white border-navy-950 shadow-xl scale-[1.02]'
                    : 'bg-white text-navy-950 border-slate-200 hover:border-royal-500 hover:bg-slate-100/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <IconComp className={`w-5 h-5 ${isSelected ? 'text-gold-400' : 'text-royal-600'}`} />
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                  )}
                </div>
                <span className="font-extrabold text-xs tracking-wider uppercase mt-3">
                  {path.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Matched Results Cards */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-md">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Matching Solutions for <strong className="text-navy-950">{currentPathway.label}</strong>
            </span>
            <span className="text-xs font-bold text-royal-600 bg-royal-50 px-3 py-1 rounded-full">
              {matchedServices.length} {matchedServices.length === 1 ? 'Option' : 'Options'} Available
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPathway.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {matchedServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-royal-500/40 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-500">
                      {service.categoryLabel}
                    </span>
                    <h3 className="font-extrabold text-navy-950 text-base">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-600 hover:text-royal-800 transition-colors pt-2 border-t border-slate-200/80"
                  >
                    <span>View Requirement & Documents</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
