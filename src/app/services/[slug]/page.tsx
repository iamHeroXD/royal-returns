import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActiveServices, servicesData } from '@/data/servicesData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { EMICalculatorWidget } from '@/components/EMICalculatorWidget';
import { 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle,
  Layers
} from 'lucide-react';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const activeServices = getActiveServices();
  return activeServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug && s.enabled);
  if (!service) {
    return {
      title: 'Service Not Found | Royal Returns',
    };
  }

  return {
    title: `${service.name} | Royal Returns Financial Solutions`,
    description: `${service.shortDescription} Explore options in Thiruvananthapuram with Royal Returns Financial Solutions.`,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug && s.enabled);

  if (!service) {
    notFound();
  }

  const isLoanOrProperty = service.category === 'loans' || service.category === 'property';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: 'Services', href: '/services' },
          { label: service.name }
        ]} 
      />

      {/* Hero Section */}
      <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 border border-navy-800 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 text-gold-400 font-bold text-xs uppercase tracking-wider border border-navy-800">
            <Layers className="w-3.5 h-3.5" />
            <span>{service.categoryLabel}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {service.name}
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            {service.overview}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-extrabold text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Grid: Main Details & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Content (Col 1 to 8) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Section 1: Use Cases */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-navy-950">What this solution can help with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.useCases.map((useCase, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Eligibility Factors */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-navy-950">Factors influencing eligibility</h2>
            <p className="text-slate-600 text-xs md:text-sm">
              Eligibility depends on applicant profile, lender criteria, documentation and applicable policies. Key parameters usually evaluated include:
            </p>
            <ul className="space-y-2.5 text-sm text-slate-700 pt-1">
              {service.eligibilityFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-royal-600 mt-2 flex-shrink-0" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Typical Documentation */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-xl md:text-2xl font-bold text-navy-950">Typical Documentation Checklist</h2>
              <span className="text-[11px] font-semibold text-royal-600 bg-royal-50 px-2.5 py-1 rounded-full">
                Indicative List
              </span>
            </div>
            <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-2xl text-xs text-blue-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>Documents may vary by lender and applicant profile. Our team helps you compile the correct checklist for your chosen option.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.typicalDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 text-xs font-medium">
                  <FileText className="w-4 h-4 text-royal-600 mt-0.5 flex-shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Process Workflow */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-navy-950">How the process works</h2>
            <div className="space-y-4">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="w-8 h-8 rounded-full bg-navy-950 text-gold-400 font-bold text-xs flex items-center justify-center flex-shrink-0 border border-navy-800">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-950 text-sm">Step {idx + 1}</h3>
                    <p className="text-slate-600 text-xs mt-0.5">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-100 rounded-2xl text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 block mb-1">Final Approval Decision:</strong>
              Please note that final credit underwriting, sanctioning, interest rate determination, and fee structures are conducted solely by the respective bank or financial institution.
            </div>
          </div>

          {/* Optional EMI Calculator Widget on Loan Pages */}
          {isLoanOrProperty && (
            <div className="pt-4">
              <EMICalculatorWidget title={`Estimate EMI for ${service.name}`} compact />
            </div>
          )}

        </div>

        {/* Sidebar Enquiry Form (Col 9 to 12) */}
        <div className="lg:col-span-4" id="enquiry-form">
          <div className="sticky top-24 space-y-6">
            <ContactForm
              defaultServiceSlug={service.slug}
              title={`Enquire: ${service.name}`}
              subtitle="Get in touch to discuss your specific profile and requirements."
            />

            <div className="bg-navy-950 text-white rounded-3xl p-6 border border-navy-800 space-y-3">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Royal Returns Advisory</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We prioritize clarity, client privacy, and zero hidden commitments throughout your consultation.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
