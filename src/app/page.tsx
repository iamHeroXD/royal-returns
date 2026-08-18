import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { TrustStrip } from '@/components/TrustStrip';
import { ServiceCategoryTabs } from '@/components/ServiceCategoryTabs';
import { ProcessSteps } from '@/components/ProcessSteps';
import { EMICalculatorWidget } from '@/components/EMICalculatorWidget';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ContactForm } from '@/components/ContactForm';
import { ManagingDirectorCard } from '@/components/ManagingDirectorCard';
import { servicesData } from '@/data/servicesData';
import { companyData } from '@/data/companyData';
import { 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2,
  Users,
  Building,
  Briefcase,
  Layers
} from 'lucide-react';

export default function HomePage() {
  const whyUsPoints = [
    {
      title: 'Personalized Guidance',
      desc: 'Advice based strictly on your individual requirement, cash flow, and circumstances.',
      icon: Users,
    },
    {
      title: 'Wide Banking Network',
      desc: 'Access to a broad network of reputed banks and regulated financial institutions.',
      icon: Building,
    },
    {
      title: 'Simple Process & Support',
      desc: 'Clear guidance on required documentation and step-by-step application assistance.',
      icon: CheckCircle2,
    },
    {
      title: 'Customer-Focused Service',
      desc: 'We prioritize clear communication, transparency, and responsive service.',
      icon: ShieldCheck,
    },
    {
      title: 'Multiple Financial Solutions',
      desc: 'One convenient place to explore property loans, business funding, personal loans, and savings.',
      icon: Layers,
    },
    {
      title: 'Long-Term Relationships',
      desc: 'Focused on empowering clients to make informed financial decisions now and in the future.',
      icon: Briefcase,
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Credibility Strip */}
      <TrustStrip />

      {/* 3. Services Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-50 text-royal-700 font-bold text-xs uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            Solutions built around your financial priorities.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Explore property finance, personal & business loans, deposit options, and advisory services tailored to your profile.
          </p>
        </div>

        <ServiceCategoryTabs services={servicesData} />
      </section>

      {/* 4. About Section */}
      <section className="bg-gradient-to-b from-slate-900 to-navy-950 text-white py-16 md:py-24 border-y border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 text-gold-400 font-bold text-xs uppercase tracking-wider border border-navy-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>About Royal Returns</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                A reliable partner for your banking and financial needs.
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                At <strong className="text-white">ROYAL RETURNS Financial Solutions</strong>, we help individuals and businesses navigate financial decisions through reliable, transparent, and customer-focused guidance. With access to a network of reputed banks and financial institutions, we help clients explore solutions aligned with their circumstances.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-200 pt-2">
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Property & Home Financing</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Business Capital & Overdraft</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Education & Vehicle Loans</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Term & Recurring Deposits</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <span>Learn About Royal Returns</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ManagingDirectorCard />
            </div>

          </div>
        </div>
      </section>

      {/* 5. Why Royal Returns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
            Why Choose Royal Returns?
          </h2>
          <p className="text-slate-600 text-sm">
            Built around transparency, accessibility, and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsPoints.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-navy-950 text-gold-400 border border-navy-800 flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-900 text-base">{pt.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. How It Works (4-Step Process) */}
      <section className="bg-slate-100/80 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-royal-600">
              Clear & Simple Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              How the process works
            </h2>
            <p className="text-slate-600 text-sm">
              We make financial decisions structured and easy to understand.
            </p>
          </div>

          <ProcessSteps />
        </div>
      </section>

      {/* 7. Live EMI Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EMICalculatorWidget />
      </section>

      {/* 8. FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-royal-600">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
            Clear answers to common questions
          </h2>
        </div>

        <FAQAccordion />
      </section>

      {/* 9. Contact / Lead Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-6 bg-navy-950 text-white rounded-2xl p-8 border border-navy-800 shadow-xl">
            <div>
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block mb-1">
                Get In Touch
              </span>
              <h3 className="text-2xl font-extrabold text-white">Contact Royal Returns</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Reach out to discuss your loan or savings requirement with our advisory team.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-navy-800 text-sm">
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

            <div className="pt-4 border-t border-navy-800">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                Managing Director
              </h4>
              <p className="text-sm font-bold text-white">{companyData.managingDirector.name}</p>
              <p className="text-xs text-slate-400">{companyData.managingDirector.title}</p>
            </div>
          </div>

          {/* Form (Col 6 to 12) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
