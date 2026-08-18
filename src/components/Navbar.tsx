'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { companyData } from '@/data/companyData';
import { MegaMenu } from '@/components/MegaMenu';
import { Menu, X, ChevronDown, Phone, ShieldCheck, Calculator } from 'lucide-react';

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
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-navy-900 border-b border-navy-800/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand identity */}
          <Link 
            href="/" 
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-royal-600 to-navy-900 border border-gold-500/40 flex items-center justify-center shadow-md">
              <ShieldCheck className="w-6 h-6 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg md:text-xl tracking-tight text-white leading-tight">
                ROYAL RETURNS
              </span>
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-gold-400 uppercase">
                Financial Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
            <Link 
              href="/" 
              className={`hover:text-gold-400 transition-colors py-2 ${pathname === '/' ? 'text-gold-400 font-semibold' : ''}`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`hover:text-gold-400 transition-colors py-2 ${pathname === '/about' ? 'text-gold-400 font-semibold' : ''}`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              <button 
                className={`flex items-center gap-1.5 hover:text-gold-400 transition-colors ${pathname.startsWith('/services') ? 'text-gold-400 font-semibold' : ''}`}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                aria-expanded={isMegaMenuOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>
            </div>

            <Link 
              href="/emi-calculator" 
              className={`flex items-center gap-1.5 hover:text-gold-400 transition-colors py-2 ${pathname === '/emi-calculator' ? 'text-gold-400 font-semibold' : ''}`}
            >
              <Calculator className="w-4 h-4 text-gold-400" />
              <span>EMI Calculator</span>
            </Link>

            <Link 
              href="/contact" 
              className={`hover:text-gold-400 transition-colors py-2 ${pathname === '/contact' ? 'text-gold-400 font-semibold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${companyData.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors border border-navy-800 bg-navy-900/80 px-3 py-2 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{companyData.phone}</span>
            </a>

            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all border border-royal-400/30 flex items-center gap-1.5"
            >
              <span>Talk to an Advisor</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href={`tel:${companyData.phoneRaw}`}
              className="p-2 text-gold-400 hover:text-white bg-navy-900 rounded-lg border border-navy-800"
              aria-label="Call Royal Returns"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-lg bg-navy-900 border border-navy-800"
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
        <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-lg hover:bg-navy-900 ${pathname === '/' ? 'bg-navy-900 text-gold-400 font-bold' : ''}`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`px-3 py-2 rounded-lg hover:bg-navy-900 ${pathname === '/about' ? 'bg-navy-900 text-gold-400 font-bold' : ''}`}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-navy-900 text-left text-slate-200"
              >
                <span>Services & Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-2 text-sm bg-navy-900/50 rounded-lg mt-1 border border-navy-800/80">
                  <Link href="/services" className="block py-1.5 font-bold text-gold-400 border-b border-navy-800">
                    All Services Overview →
                  </Link>
                  <Link href="/services/home-loan" className="block py-1 text-slate-300 hover:text-white">Home Loans</Link>
                  <Link href="/services/personal-loan" className="block py-1 text-slate-300 hover:text-white">Personal Loans</Link>
                  <Link href="/services/business-loan" className="block py-1 text-slate-300 hover:text-white">Business Loans</Link>
                  <Link href="/services/loan-against-property" className="block py-1 text-slate-300 hover:text-white">Loan Against Property (LAP)</Link>
                  <Link href="/services/education-loan" className="block py-1 text-slate-300 hover:text-white">Education Loans</Link>
                  <Link href="/services/vehicle-loan" className="block py-1 text-slate-300 hover:text-white">Vehicle Loans</Link>
                  <Link href="/services/loan-consolidation" className="block py-1 text-slate-300 hover:text-white">Loan Consolidation</Link>
                  <Link href="/services/overdraft" className="block py-1 text-slate-300 hover:text-white">Overdraft Facilities</Link>
                  <Link href="/services/fixed-deposit" className="block py-1 text-slate-300 hover:text-white">Fixed Deposit (FD)</Link>
                  <Link href="/services/financial-consulting" className="block py-1 text-slate-300 hover:text-white">Financial Consulting</Link>
                </div>
              )}
            </div>

            <Link 
              href="/emi-calculator" 
              className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-navy-900 ${pathname === '/emi-calculator' ? 'bg-navy-900 text-gold-400 font-bold' : ''}`}
            >
              <Calculator className="w-4 h-4 text-gold-400" />
              <span>EMI Calculator</span>
            </Link>

            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded-lg hover:bg-navy-900 ${pathname === '/contact' ? 'bg-navy-900 text-gold-400 font-bold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          <div className="pt-4 border-t border-navy-800 space-y-3">
            <Link 
              href="/contact" 
              className="w-full block text-center bg-royal-600 hover:bg-royal-500 text-white font-semibold py-3 rounded-lg shadow-md text-sm"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
