'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { TrustStrip } from '@/components/TrustStrip';
import { PathwaySelector } from '@/components/PathwaySelector';
import { ServiceExplorer } from '@/components/ServiceExplorer';
import { EMICalculatorWidget } from '@/components/EMICalculatorWidget';
import { ProcessSteps } from '@/components/ProcessSteps';
import { ManagingDirectorCard } from '@/components/ManagingDirectorCard';
import { WhyUsSection } from '@/components/WhyUsSection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ContactForm } from '@/components/ContactForm';
import { companyData } from '@/data/companyData';
import { ArrowRight, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Factual Trust Strip */}
      <TrustStrip />

      {/* 03. Big Human Purpose Statement with Image Frame */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 border-b border-slate-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            <span className="text-xs font-mono tracking-widest text-royal-600 uppercase font-bold">
              OUR PURPOSE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.12]">
              Big financial decisions deserve clear guidance.
            </h2>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed font-normal pt-2">
              From choosing a home-loan structure to understanding funding options, we help you navigate the next step with clearer information and personalized service.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-slate-200 shadow-md group"
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
              alt="Royal Returns Financial Consultation Desk"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="font-extrabold text-white text-sm block">Transparent Profile Assessment</span>
              <span className="text-[10px] text-slate-300">Akkulam, Thiruvananthapuram</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 04. Pathway Selector ("What are you planning?") */}
      <PathwaySelector />

      {/* 05. Service Architecture (Editorial Category Rows) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="solutions">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-3"
        >
          <span className="text-xs font-mono tracking-widest text-royal-600 uppercase font-bold">
            SERVICE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Solutions built around your requirements.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Explore property finance, personal & commercial funding, deposit options, and advisory services.
          </p>
        </motion.div>

        <ServiceExplorer />
      </section>

      {/* 06. Interactive EMI Calculator ("Let's make the numbers clearer.") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EMICalculatorWidget 
          title="Let's make the numbers clearer."
          subtitle="Calculate indicative monthly repayments, total interest burden, and total payable amount."
        />
      </section>

      {/* 07. How It Works Timeline ("A clear path from enquiry to decision.") */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-3"
          >
            <span className="text-xs font-mono tracking-widest text-royal-600 uppercase font-bold">
              PROCESS TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              A clear path from enquiry to decision
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              We reduce complexity around borrowing and financial documentation.
            </p>
          </motion.div>

          <ProcessSteps />
        </div>
      </section>

      {/* 08. Human Point of Contact (Managing Director Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-2"
        >
          <span className="text-xs font-mono tracking-widest text-royal-600 uppercase font-bold">
            LEADERSHIP
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            A human point of contact
          </h2>
        </motion.div>

        <ManagingDirectorCard />
      </section>

      {/* 09. Core Principles ("Why Royal Returns") */}
      <WhyUsSection />

      {/* 10. Closing CTA Section */}
      <section className="bg-navy-950 text-white py-16 md:py-24 border-y border-navy-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-mono tracking-widest text-gold-400 uppercase font-bold">
            GET STARTED
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have a financial requirement?<br />Let&apos;s talk.
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discuss your requirements with our team in Akkulam, Thiruvananthapuram for transparent profile evaluation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-extrabold text-sm px-8 py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98] group"
            >
              <span>Talk to an Advisor</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`tel:${companyData.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm px-7 py-4 rounded-2xl border border-navy-800 transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call {companyData.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. Two-Column Editorial FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="faq">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            <span className="text-xs font-mono tracking-widest text-royal-600 uppercase font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              Clear answers to common questions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Have questions about document requirements, loan approval, or EMI calculations? Here are straightforward answers.
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <FAQAccordion />
          </div>

        </div>
      </section>

      {/* 12. Contact Form & Office Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details (Col 1 to 5) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 bg-navy-950 text-white rounded-3xl p-8 border border-navy-900 shadow-xl relative overflow-hidden"
          >
            <div>
              <span className="text-xs font-mono tracking-widest text-gold-400 uppercase font-bold block mb-1">
                LOCATION & DETAILS
              </span>
              <h3 className="text-2xl font-extrabold text-white">ROYAL RETURNS</h3>
              <p className="text-royal-300 font-bold text-xs uppercase tracking-wider">Financial Solutions</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-navy-900 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-slate-300 text-xs mt-0.5">{companyData.fullLocation}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <a href={`tel:${companyData.phoneRaw}`} className="text-gold-400 hover:underline font-semibold text-xs mt-0.5 block">
                    {companyData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <a href={`mailto:${companyData.email}`} className="text-gold-400 hover:underline font-semibold text-xs mt-0.5 block break-all">
                    {companyData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-navy-900">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                Managing Director
              </h4>
              <p className="text-sm font-bold text-white">{companyData.managingDirector.name}</p>
              <p className="text-xs text-slate-400">{companyData.managingDirector.title}</p>
            </div>
          </motion.div>

          {/* Form (Col 6 to 12) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

        </div>
      </section>

    </div>
  );
}
