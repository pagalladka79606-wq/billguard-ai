import React, { useState } from 'react';
import { 
  CreditCard, 
  ShieldAlert, 
  PhoneCall, 
  Check, 
  Copy, 
  DollarSign, 
  Sparkles, 
  ArrowRight,
  TrendingDown,
  Info
} from 'lucide-react';
import { FeeItem } from '../../types';

export const FeeAnalyzer: React.FC = () => {
  const [fees, setFees] = useState<FeeItem[]>([
    {
      id: 'fee-1',
      feeType: 'Annual Card Fee',
      institution: 'Chase Sapphire Preferred / Amex',
      amount: 95.00,
      chargeDate: 'Recent Statement',
      isWaivable: true,
      waiveProbability: 'High (85%+)',
      aiWaiverScript: 'Call retention line (number on back of card):\n"Hello, I noticed the $95 annual membership fee posted. I really value the card benefits, but given my spending history, is there a retention bonus or statement credit available to help offset this fee for the upcoming year?"'
    },
    {
      id: 'fee-2',
      feeType: 'Overdraft / NSF',
      institution: 'Checking Account',
      amount: 35.00,
      chargeDate: 'Recent Month',
      isWaivable: true,
      waiveProbability: 'High (85%+)',
      aiWaiverScript: 'Call customer service:\n"Hi, I am calling regarding the $35 overdraft fee on my account. This was an isolated occurrence and I immediately replenished the balance. As a loyal customer in good standing, could you please grant a one-time courtesy refund?"'
    },
    {
      id: 'fee-3',
      feeType: 'Late Payment Fee',
      institution: 'Credit Card Issuer',
      amount: 40.00,
      chargeDate: 'Past 60 Days',
      isWaivable: true,
      waiveProbability: 'High (85%+)',
      aiWaiverScript: 'Call issuer:\n"I noticed the $40 late charge. I had technical issues with autopay setup and have now paid the full statement balance. May I request a one-time fee waiver and confirmation that no negative report is made to credit bureaus?"'
    },
    {
      id: 'fee-4',
      feeType: 'Paper Statement Fee',
      institution: 'Retail Store Card',
      amount: 3.50,
      chargeDate: 'Recurring Monthly ($42/yr)',
      isWaivable: true,
      waiveProbability: 'High (85%+)',
      aiWaiverScript: 'Enroll in e-Delivery in mobile app to eliminate $3.50/month ($42/year) recurring paper billing charge.'
    }
  ]);

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const totalFeeSavings = fees.reduce((acc, f) => acc + f.amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              High-RPM Tool
            </span>
            <span className="text-xs text-slate-400">Card & Bank Fee Recovery</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            Credit Card & Bank Fee Analyzer
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            American banks collect over $14.5 Billion annually in overdraft, late, and stealth account maintenance fees. Use our AI scripts to request instant courtesy waivers.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-right shrink-0">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Recoverable Bank Fees
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            ${totalFeeSavings.toFixed(2)}
          </div>
          <p className="text-[11px] text-emerald-300">
            Average 84% phone refund success rate
          </p>
        </div>
      </div>

      {/* Fee Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fees.map((fee) => (
          <div 
            key={fee.id}
            id={`fee-card-${fee.id}`}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {fee.institution}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {fee.feeType}
                </h3>
                <p className="text-xs text-slate-400">
                  Charged: {fee.chargeDate}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xl font-black text-red-400 font-['Space_Grotesk']">
                  -${fee.amount.toFixed(2)}
                </span>
                <div className="text-[10px] font-bold text-emerald-400">
                  Refund Chance: {fee.waiveProbability}
                </div>
              </div>
            </div>

            {/* AI Script Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Proven Bank Waiver Phone Script:</span>
                </span>
                <button
                  onClick={() => handleCopy(fee.id, fee.aiWaiverScript)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 border border-slate-700 transition-colors"
                >
                  {copiedId === fee.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedId === fee.id ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed">
                {fee.aiWaiverScript}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
