'use client';

import React, { useState } from 'react';
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
    <div className="space-y-8">
      
      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-navy-950 text-gold-400 shadow-md border border-navy-800'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </div>
  );
};
