import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs md:text-sm text-slate-500 font-medium">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="flex items-center">
          <Link 
            href="/" 
            className="flex items-center gap-1 hover:text-royal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-royal-500 rounded px-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-slate-900 font-semibold truncate max-w-[200px] md:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-royal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-royal-500 rounded px-1 truncate max-w-[150px] md:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
