'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem, ServiceCategory } from '@/types';
import { ServiceCard } from '@/components/ServiceCard';

interface ServiceCategoryTabsProps {
  services: ServiceItem[];
}

export const ServiceCategoryTabs: React.FC<ServiceCategoryTabsProps> = ({ services }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const categories: { id: ServiceCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Solutions' },
    { id: 'property', label: 'Property Finance' },
    { id: 'loans', label: 'Loans & Funding' },
    { id: 'savings', label: 'Savings Options' },
    { id: 'advisory', label: 'Financial Guidance' },
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <div className="space-y-10">
      
      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-6 py-3 rounded-2xl text-xs md:text-sm font-extrabold transition-all duration-200 ${
                isActive
                  ? 'bg-navy-950 text-gold-400 shadow-lg border border-navy-800 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
              {isActive && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-2xl border-2 border-gold-400/40 pointer-events-none"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Grid of Service Cards with Fade/Slide Animations */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
};
