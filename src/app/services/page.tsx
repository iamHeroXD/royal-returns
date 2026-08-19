import React from 'react';
import Metadata from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceExplorer } from '@/components/ServiceExplorer';
import { getActiveServices } from '@/data/servicesData';
import { Layers, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Financial Services & Solutions | Royal Returns',
  description: 'Explore home loans, business loans, personal loans, plot construction, education finance, vehicle loans, fixed deposits, and financial consulting with Royal Returns in Thiruvananthapuram.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
      
      <Breadcrumbs items={[{ label: 'Services' }]} />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-50 text-royal-700 font-bold text-xs uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Services Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
          Financial Solutions Built Around Client Needs
        </h1>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Royal Returns assists individuals and business clients across property financing, personal & commercial loans, fixed and recurring deposits, and profile evaluation.
        </p>
      </div>

      <ServiceExplorer />

      <div className="p-6 bg-slate-100 border border-slate-200 rounded-3xl text-xs text-slate-600 space-y-2">
        <div className="flex items-center gap-2 text-navy-950 font-bold">
          <ShieldAlert className="w-4 h-4 text-royal-600" />
          <span>Important Disclosure Notice</span>
        </div>
        <p className="leading-relaxed">
          Royal Returns Financial Solutions provides profile guidance and documentation assistance. Product availability, interest rates, tenure, fees, and final approval are determined by our partner banking and financial institutions based on individual applicant eligibility and policy criteria.
        </p>
      </div>

    </div>
  );
}
