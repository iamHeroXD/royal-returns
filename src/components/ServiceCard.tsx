import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/types';
import { 
  Home, 
  Hammer, 
  Paintbrush, 
  Maximize2, 
  MapPin, 
  Building2, 
  UserCheck, 
  Briefcase, 
  GraduationCap, 
  Car, 
  Layers, 
  CreditCard, 
  TrendingUp, 
  Lock, 
  Clock, 
  FileText, 
  Compass, 
  PieChart, 
  ShieldCheck, 
  Calculator,
  ArrowRight
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Hammer,
  Paintbrush,
  Maximize2,
  MapPin,
  Building2,
  UserCheck,
  Briefcase,
  GraduationCap,
  Car,
  Layers,
  CreditCard,
  TrendingUp,
  Lock,
  Clock,
  FileText,
  Compass,
  PieChart,
  ShieldCheck,
  Calculator,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || FileText;

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-card-hover border border-slate-200/80 hover:border-royal-500/40 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        
        {/* Category Tag & Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-navy-950 text-gold-400 border border-navy-800 flex items-center justify-center group-hover:scale-105 group-hover:bg-royal-900 group-hover:text-white transition-all">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            {service.categoryLabel}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-navy-900 group-hover:text-royal-600 transition-colors mb-2">
          {service.name}
        </h3>

        {/* Short explanation */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {service.shortDescription}
        </p>

      </div>

      {/* Footer link */}
      <div className="pt-4 border-t border-slate-100 mt-auto">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-600 group-hover:text-royal-800 transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};
