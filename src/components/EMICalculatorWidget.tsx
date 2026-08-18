'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Info, ShieldAlert } from 'lucide-react';

interface EMICalculatorWidgetProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export const EMICalculatorWidget: React.FC<EMICalculatorWidgetProps> = ({
  title = "Loan EMI Calculator",
  subtitle = "Estimate your indicative monthly repayment, total interest, and total payable amount.",
  compact = false,
}) => {
  const amountInputId = useId();
  const rateInputId = useId();
  const tenureInputId = useId();

  const [principal, setPrincipal] = useState<number>(1000000); // Default ₹10,00,000
  const [annualRate, setAnnualRate] = useState<number>(8.5);   // Default 8.5%
  const [tenureYears, setTenureYears] = useState<number>(15);  // Default 15 years

  // Reducing Balance EMI Calculation with 0% interest handling
  const calculateEMI = () => {
    const P = Math.max(0, principal);
    const n = Math.max(1, tenureYears * 12);
    
    if (annualRate <= 0) {
      // Special case for 0% interest rate
      const monthlyEmi = P / n;
      const totalPayment = P;
      const totalInterest = 0;
      return { monthlyEmi, totalInterest, totalPayment };
    }

    const r = annualRate / (12 * 100);
    const compoundFactor = Math.pow(1 + r, n);
    const monthlyEmi = (P * r * compoundFactor) / (compoundFactor - 1);
    const totalPayment = monthlyEmi * n;
    const totalInterest = totalPayment - P;

    return { monthlyEmi, totalInterest, totalPayment };
  };

  const { monthlyEmi, totalInterest, totalPayment } = calculateEMI();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  const principalPercent = totalPayment > 0 ? Math.round((principal / totalPayment) * 100) : 100;
  const interestPercent = 100 - principalPercent;

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden ${compact ? 'p-6' : 'p-6 md:p-10'}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-8">
        <div>
          <div className="flex items-center gap-2 text-royal-600 font-bold text-xs uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Financial Tool</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900">{title}</h2>
          <p className="text-slate-600 text-sm mt-1">{subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sliders & Inputs (Col 1 to 7) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Loan Amount */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor={amountInputId} className="text-sm font-bold text-slate-800">
                Loan Amount (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-sm">₹</span>
                <input
                  id={amountInputId}
                  type="number"
                  min={10000}
                  max={100000000}
                  step={10000}
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-36 md:w-44 text-right font-bold text-navy-900 bg-slate-50 border border-slate-300 rounded-lg pl-7 pr-3 py-1.5 text-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500"
                />
              </div>
            </div>
            <input
              type="range"
              min={10000}
              max={50000000}
              step={50000}
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              aria-label="Loan Amount slider"
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal-600"
            />
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span>₹10,000</span>
              <span>₹1 Cr</span>
              <span>₹5 Cr+</span>
            </div>
          </div>

          {/* 2. Interest Rate */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor={rateInputId} className="text-sm font-bold text-slate-800">
                Annual Interest Rate (% p.a.)
              </label>
              <div className="relative">
                <input
                  id={rateInputId}
                  type="number"
                  min={0}
                  max={30}
                  step={0.1}
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value))}
                  className="w-24 text-right font-bold text-navy-900 bg-slate-50 border border-slate-300 rounded-lg pr-7 pl-3 py-1.5 text-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-sm">%</span>
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={30}
              step={0.1}
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
              aria-label="Interest rate slider"
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal-600"
            />
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span>0%</span>
              <span>15%</span>
              <span>30%</span>
            </div>
          </div>

          {/* 3. Loan Tenure */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor={tenureInputId} className="text-sm font-bold text-slate-800">
                Loan Tenure (Years)
              </label>
              <div className="relative">
                <input
                  id={tenureInputId}
                  type="number"
                  min={1}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-24 text-right font-bold text-navy-900 bg-slate-50 border border-slate-300 rounded-lg pr-12 pl-3 py-1.5 text-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-xs">Yrs</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              aria-label="Loan tenure slider"
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal-600"
            />
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>

        </div>

        {/* Results Card & Visualization (Col 8 to 12) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-2xl p-6 md:p-8 space-y-6 shadow-xl border border-navy-800">
          <div>
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block mb-1">
              Estimated Monthly Repayment
            </span>
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {formatCurrency(monthlyEmi)}
              <span className="text-xs font-normal text-slate-400 ml-1">/ month</span>
            </div>
          </div>

          {/* Breakdown summary */}
          <div className="space-y-3 pt-4 border-t border-navy-800 text-sm">
            <div className="flex justify-between text-slate-300">
              <span>Principal Amount:</span>
              <span className="font-bold text-white">{formatCurrency(principal)}</span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>Total Interest Payable:</span>
              <span className="font-bold text-gold-400">{formatCurrency(totalInterest)}</span>
            </div>

            <div className="flex justify-between text-slate-300 pt-2 border-t border-navy-800/80">
              <span className="font-bold text-white">Total Amount Payable:</span>
              <span className="font-bold text-white text-base">{formatCurrency(totalPayment)}</span>
            </div>
          </div>

          {/* Visual Percentage Allocation Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-royal-500 inline-block"></span>
                Principal ({principalPercent}%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-400 inline-block"></span>
                Interest ({interestPercent}%)
              </span>
            </div>

            <div className="h-3 w-full bg-navy-900 rounded-full overflow-hidden flex border border-navy-800">
              <div 
                className="bg-royal-500 h-full transition-all duration-300" 
                style={{ width: `${principalPercent}%` }} 
              />
              <div 
                className="bg-gold-400 h-full transition-all duration-300" 
                style={{ width: `${interestPercent}%` }} 
              />
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <span>Discuss Your Loan Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

      {/* Mandatory Illustration Disclaimer */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
        <Info className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
        <p className="leading-relaxed">
          <strong>Disclaimer:</strong> This calculator provides an estimate for illustration purposes only. Actual rates, fees, tenure and final repayment terms depend on individual applicant profile and lender approval policies.
        </p>
      </div>

    </div>
  );
};
