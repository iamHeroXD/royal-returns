'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { companyData } from '@/data/companyData';
import { MegaMenu } from '@/components/MegaMenu';
import { Menu, X, ChevronDown, Phone, Calculator, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-editorialBorder py-3' 
          : 'bg-warmBg/90 backdrop-blur-sm border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Logo Identity */}
          <Link 
            href="/" 
            className="flex flex-col focus:outline-none focus:ring-2 focus:ring-royal-600 rounded-lg p-1"
          >
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-navy-950 leading-tight font-sans">
              ROYAL RETURNS
            </span>
            <span className="text-[10px] font-bold tracking-widest text-royal-600 uppercase">
              Financial Solutions
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-navy-950">
            {/* Services Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              <button 
                className={`flex items-center gap-1.5 hover:text-royal-600 transition-colors ${pathname.startsWith('/services') ? 'text-royal-600 font-extrabold' : ''}`}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                aria-expanded={isMegaMenuOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-royal-600' : ''}`} />
              </button>
            </div>

            <Link 
              href="/services" 
              className={`hover:text-royal-600 transition-colors py-2 ${pathname === '/services' ? 'text-royal-600 font-extrabold' : ''}`}
            >
              Solutions
            </Link>

            <Link 
              href="/emi-calculator" 
              className={`flex items-center gap-1.5 hover:text-royal-600 transition-colors py-2 ${pathname === '/emi-calculator' ? 'text-royal-600 font-extrabold' : ''}`}
            >
              <Calculator className="w-4 h-4 text-royal-600" />
              <span>EMI Calculator</span>
            </Link>

            <Link 
              href="/about" 
              className={`hover:text-royal-600 transition-colors py-2 ${pathname === '/about' ? 'text-royal-600 font-extrabold' : ''}`}
            >
              About
            </Link>

            <a 
              href="#faq" 
              className="hover:text-royal-600 transition-colors py-2"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/contact" 
              className="text-xs font-bold text-navy-950 hover:text-royal-600 transition-colors py-2"
            >
              Contact
            </Link>

            <a 
              href={`tel:${companyData.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-royal-600 transition-colors border border-slate-200 bg-slate-50 px-3.5 py-2 rounded-xl"
            >
              <Phone className="w-3.5 h-3.5 text-royal-600" />
              <span>{companyData.phone}</span>
            </a>

            <Link 
              href="/contact" 
              className="bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Talk to an Advisor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href={`tel:${companyData.phoneRaw}`}
              className="p-2.5 text-royal-600 hover:text-navy-950 bg-slate-100 rounded-xl border border-slate-200"
              aria-label="Call Royal Returns"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-navy-950 hover:text-royal-600 focus:outline-none focus:ring-2 focus:ring-royal-600 rounded-xl bg-slate-100 border border-slate-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Desktop MegaMenu Container */}
      {isMegaMenuOpen && (
        <MegaMenu onClose={() => setIsMegaMenuOpen(false)} />
      )}

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2 text-base font-bold text-navy-950">
            <Link 
              href="/" 
              className={`px-3 py-3 rounded-xl hover:bg-slate-100 ${pathname === '/' ? 'bg-slate-100 text-royal-600 font-extrabold' : ''}`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`px-3 py-3 rounded-xl hover:bg-slate-100 ${pathname === '/about' ? 'bg-slate-100 text-royal-600 font-extrabold' : ''}`}
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-slate-100 text-left text-navy-950 min-h-[44px]"
              >
                <span>Services & Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180 text-royal-600' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-2 text-sm bg-slate-50 rounded-xl mt-1 border border-slate-200">
                  <Link href="/services" className="block py-2 font-extrabold text-royal-600 border-b border-slate-200">
                    All Services Overview →
                  </Link>
                  <Link href="/services/home-loan" className="block py-2 text-slate-700 hover:text-royal-600">Home Loans</Link>
                  <Link href="/services/personal-loan" className="block py-2 text-slate-700 hover:text-royal-600">Personal Loans</Link>
                  <Link href="/services/business-loan" className="block py-2 text-slate-700 hover:text-royal-600">Business Loans</Link>
                  <Link href="/services/loan-against-property" className="block py-2 text-slate-700 hover:text-royal-600">Loan Against Property (LAP)</Link>
                  <Link href="/services/education-loan" className="block py-2 text-slate-700 hover:text-royal-600">Education Loans</Link>
                  <Link href="/services/vehicle-loan" className="block py-2 text-slate-700 hover:text-royal-600">Vehicle Loans</Link>
                  <Link href="/services/loan-consolidation" className="block py-2 text-slate-700 hover:text-royal-600">Loan Consolidation</Link>
                  <Link href="/services/overdraft" className="block py-2 text-slate-700 hover:text-royal-600">Overdraft Facilities</Link>
                  <Link href="/services/fixed-deposit" className="block py-2 text-slate-700 hover:text-royal-600">Fixed Deposit (FD)</Link>
                  <Link href="/services/financial-consulting" className="block py-2 text-slate-700 hover:text-royal-600">Financial Consulting</Link>
                </div>
              )}
            </div>

            <Link 
              href="/emi-calculator" 
              className={`flex items-center gap-2 px-3 py-3 rounded-xl hover:bg-slate-100 min-h-[44px] ${pathname === '/emi-calculator' ? 'bg-slate-100 text-royal-600 font-extrabold' : ''}`}
            >
              <Calculator className="w-5 h-5 text-royal-600" />
              <span>EMI Calculator</span>
            </Link>

            <Link 
              href="/contact" 
              className={`px-3 py-3 rounded-xl hover:bg-slate-100 min-h-[44px] ${pathname === '/contact' ? 'bg-slate-100 text-royal-600 font-extrabold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <Link 
              href="/contact" 
              className="w-full block text-center bg-navy-950 hover:bg-navy-900 text-white font-extrabold py-3.5 rounded-xl shadow-md text-sm min-h-[44px] flex items-center justify-center"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
