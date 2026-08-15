import React, { useState } from 'react';
import { 
  Layers, 
  Calendar, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  Info
} from 'lucide-react';
import { BNPLItem } from '../../types';

export const BNPLTracker: React.FC = () => {
  const [bnplItems, setBnplItems] = useState<BNPLItem[]>([
    {
      id: 'bnpl-1',
      provider: 'Klarna',
      merchant: 'Nike.com Apparel Order',
      installmentAmount: 35.50,
      frequency: 'Bi-Weekly',
      installmentsRemaining: 2,
      totalRemaining: 71.00,
      estimatedPayoffDate: 'Sep 15, 2025',
      interestRate: 0.0
    },
    {
      id: 'bnpl-2',
      provider: 'Afterpay',
      merchant: 'Sephora Cosmetics Split',
      installmentAmount: 28.75,
      frequency: 'Bi-Weekly',
      installmentsRemaining: 3,
      totalRemaining: 86.25,
      estimatedPayoffDate: 'Oct 01, 2025',
      interestRate: 0.0
    },
    {
      id: 'bnpl-3',
      provider: 'Affirm',
      merchant: 'Best Buy Electronics',
      installmentAmount: 54.20,
      frequency: 'Monthly',
      installmentsRemaining: 5,
      totalRemaining: 271.00,
      estimatedPayoffDate: 'Dec 15, 2025',
      interestRate: 15.99
    }
  ]);

  const totalRemainingDebt = bnplItems.reduce((acc, i) => acc + i.totalRemaining, 0);
  const totalMonthlyCommitment = bnplItems.reduce((acc, i) => acc + (i.frequency === 'Bi-Weekly' ? i.installmentAmount * 2 : i.installmentAmount), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-500/30">
              High-RPM Tool
            </span>
            <span className="text-xs text-slate-400">Micro-Installment Consolidator</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            Buy Now Pay Later (BNPL) Debt Tracker
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            "Pay in 4" installments silently stack up into hundreds of dollars in hidden monthly commitments across Klarna, Affirm, Afterpay, and PayPal.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-right">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              True Monthly Drain
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-['Space_Grotesk']">
              ${totalMonthlyCommitment.toFixed(2)}/mo
            </div>
            <p className="text-[11px] text-slate-500">
              Combined recurring payment impact
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-right">
            <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
              Total BNPL Balance
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              ${totalRemainingDebt.toFixed(2)}
            </div>
            <p className="text-[11px] text-purple-300">
              Across {bnplItems.length} active plans
            </p>
          </div>
        </div>
      </div>

      {/* BNPL Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bnplItems.map((item) => (
          <div 
            key={item.id}
            id={`bnpl-card-${item.id}`}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 text-xs font-bold border border-purple-500/30">
                  {item.provider}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {item.frequency}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">
                {item.merchant}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                ${item.installmentAmount.toFixed(2)} per installment • {item.installmentsRemaining} remaining
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Remaining Balance:</span>
                <span className="font-extrabold text-white">${item.totalRemaining.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Est. Payoff:</span>
                <span className="text-emerald-400 font-semibold">{item.estimatedPayoffDate}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">APR Rate:</span>
                <span className="text-slate-300">{item.interestRate === 0 ? '0% Promo' : `${item.interestRate}% APR`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
