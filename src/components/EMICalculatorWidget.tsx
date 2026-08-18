'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Info, PieChart, Sparkles } from 'lucide-react';

interface EMICalculatorWidgetProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export const EMICalculatorWidget: React.FC<EMICalculatorWidgetProps> = ({
  title = "Loan EMI Calculator",
  subtitle = "Estimate your indicative monthly repayment, total interest burden, and total payable amount.",
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

  // SVG Donut Chart Calculation
  const strokeDashoffset = 283 - (283 * principalPercent) / 100;

  return (
    <div className={`bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden ${compact ? 'p-6' : 'p-6 md:p-10'}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-8">
        <div>
          <div className="flex items-center gap-2 text-royal-600 font-extrabold text-xs uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Reducing-Balance Tool</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-950 tracking-tight">{title}</h2>
          <p className="text-slate-600 text-sm mt-1">{subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sliders & Inputs (Col 1 to 7) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Loan Amount */}
          <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/70">
            <div className="flex items-center justify-between">
              <label htmlFor={amountInputId} className="text-sm font-extrabold text-navy-950">
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
                  className="w-36 md:w-44 text-right font-extrabold text-navy-950 bg-white border border-slate-300 rounded-xl pl-7 pr-3 py-2 text-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500 shadow-sm"
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
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal-600"
            />
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span>₹10,000</span>
              <span>₹10 Lakhs</span>
              <span>₹5 Cr+</span>
            </div>
          </div>

          {/* 2. Interest Rate */}
          <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/70">
            <div className="flex items-center justify-between">
              <label htmlFor={rateInputId} className="text-sm font-extrabold text-navy-950">
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
                  className="w-24 text-right font-extrabold text-navy-950 bg-white border border-slate-300 rounded-xl pr-7 pl-3 py-2 text-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500 shadow-sm"
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
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal-600"
            />
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span>0% (Special Case)</span>
              <span>8.5%</span>
              <span>30%</span>
            </div>
          </div>

          {/* 3. Loan Tenure */}
          <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/70">
            <div className="flex items-center justify-between">
              <label htmlFor={tenureInputId} className="text-sm font-extrabold text-navy-950">
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
                  className="w-24 text-right font-extrabold text-navy-950 bg-white border border-slate-300 rounded-xl pr-12 pl-3 py-2 text-sm focus:ring-2 focus:ring-royal-500 focus:border-royal-500 shadow-sm"
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
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal-600"
            />
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>

        </div>

        {/* Results Card & Donut Chart (Col 8 to 12) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl border border-navy-800 relative overflow-hidden">
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block">
              Estimated Repayment
            </span>
            <div className="px-2.5 py-1 rounded-full bg-royal-950 border border-royal-700/50 text-[10px] text-royal-300 font-bold">
              {tenureYears * 12} Monthly Payments
            </div>
          </div>

          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {formatCurrency(monthlyEmi)}
              <span className="text-xs font-normal text-slate-400 ml-1">/ month</span>
            </div>
          </div>

          {/* SVG Donut Breakdown */}
          <div className="flex items-center gap-6 pt-2">
            <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#1E3A8A"
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#EAB308"
                  strokeWidth="10"
                  strokeDasharray="283"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-white">{principalPercent}%</span>
                <span className="text-[9px] text-slate-400">Principal</span>
              </div>
            </div>

            <div className="space-y-2 text-xs flex-1">
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500" />
                  Principal:
                </span>
                <span className="font-bold text-white">{formatCurrency(principal)}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-royal-600" />
                  Interest:
                </span>
                <span className="font-bold text-gold-400">{formatCurrency(totalInterest)}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300 pt-1.5 border-t border-navy-800">
                <span className="font-bold text-white">Total Payable:</span>
                <span className="font-bold text-white text-sm">{formatCurrency(totalPayment)}</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-extrabold text-sm py-4 px-6 rounded-2xl shadow-glow-gold hover:shadow-xl transition-all"
            >
              <span>Discuss Your Loan Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

      {/* Disclaimer */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
        <Info className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
        <p className="leading-relaxed">
          <strong>Disclaimer:</strong> This calculator provides an estimate for illustration purposes only. Actual interest rates, processing fees, tenure, and final repayment terms depend on applicant profile and lender credit assessment.
        </p>
      </div>

    </div>
  );
};
