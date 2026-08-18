'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-card-hover border border-slate-200/90 hover:border-royal-500/40 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden"
    >
      {/* Accent glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-royal-500/5 rounded-full blur-2xl group-hover:bg-royal-500/10 transition-all pointer-events-none" />

      <div>
        {/* Category Tag & Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-navy-950 text-gold-400 border border-navy-800 flex items-center justify-center group-hover:bg-royal-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-md">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-extrabold tracking-wider uppercase text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
            {service.categoryLabel}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-royal-600 transition-colors mb-2 tracking-tight">
          {service.name}
        </h3>

        {/* Short explanation */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
          {service.shortDescription}
        </p>
      </div>

      {/* Footer link */}
      <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-600 group-hover:text-royal-800 transition-colors"
        >
          <span>Learn Solution Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
