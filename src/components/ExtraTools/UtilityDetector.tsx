import React, { useState } from 'react';
import { 
  TrendingUp, 
  PhoneCall, 
  Copy, 
  Check, 
  AlertCircle, 
  Sparkles, 
  Wifi, 
  Smartphone, 
  Zap 
} from 'lucide-react';
import { UtilityBillItem } from '../../types';

export const UtilityDetector: React.FC = () => {
  const [utilities, setUtilities] = useState<UtilityBillItem[]>([
    {
      id: 'util-1',
      provider: 'Spectrum Internet Ultra',
      serviceType: 'Broadband / Internet',
      currentMonthly: 84.99,
      previousMonthly: 49.99,
      hikePercentage: 70.0,
      contractStatus: 'Month-to-Month (Negotiable)',
      potentialMonthlySavings: 35.00,
      aiNegotiationScript: 'Call Retention (say "Cancel Service" at voice prompt):\n"Hi, I noticed my monthly internet rate jumped from $49.99 to $84.99 after my promo period expired. Local fiber and 5G Home Internet (like T-Mobile & Verizon) are currently offering $50/month flat with no equipment fees. Can you re-apply the introductory retention rate so I don\'t have to schedule a service disconnection?"'
    },
    {
      id: 'util-2',
      provider: 'Verizon Wireless Unlimited',
      serviceType: 'Mobile / Cellular',
      currentMonthly: 142.50,
      previousMonthly: 125.00,
      hikePercentage: 14.0,
      contractStatus: 'Month-to-Month (Negotiable)',
      potentialMonthlySavings: 27.00,
      aiNegotiationScript: 'Action Steps:\n1. Audit line item: Remove "Verizon Mobile Protect" insurance ($17/month) on older devices.\n2. Switch billing method to ACH checking autopay for an automatic $10/month per-line discount.'
    },
    {
      id: 'util-3',
      provider: 'SiriusXM All Access Satellite Radio',
      serviceType: 'Cable TV / Bundle',
      currentMonthly: 23.99,
      previousMonthly: 6.99,
      hikePercentage: 243.0,
      contractStatus: 'Month-to-Month (Negotiable)',
      potentialMonthlySavings: 18.00,
      aiNegotiationScript: 'Live Chat or Call:\n"I would like to cancel my SiriusXM subscription. The $23.99/mo rate is too high. If you can provide the standard $5/month for 12 months retention promotion, I will remain subscribed today."'
    }
  ]);

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const totalMonthlySavings = utilities.reduce((acc, u) => acc + u.potentialMonthlySavings, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              High-RPM Tool
            </span>
            <span className="text-xs text-slate-400">Telecom & Utility Creep Radar</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            Utility & Telecom Bill Increase Detector
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Cable, broadband, and cell phone companies quietly hike rates after the first year. Use our pre-written retention negotiation scripts to get your bills lowered in 5 minutes.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-right shrink-0">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Potential Annual Savings
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            ${(totalMonthlySavings * 12).toFixed(0)}/yr
          </div>
          <p className="text-[11px] text-emerald-300">
            ~${totalMonthlySavings.toFixed(2)}/mo off your bills
          </p>
        </div>
      </div>

      {/* Utilities List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {utilities.map((item) => (
          <div 
            key={item.id}
            id={`utility-card-${item.id}`}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold border border-amber-500/30">
                  +{item.hikePercentage.toFixed(0)}% Rate Hike
                </span>
                <span className="text-xs text-slate-400">
                  {item.contractStatus}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">
                {item.provider}
              </h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-lg font-black text-white">${item.currentMonthly.toFixed(2)}/mo</span>
                <span className="text-xs text-slate-500 line-through">(was ${item.previousMonthly.toFixed(2)})</span>
              </div>
            </div>

            {/* Script Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Retention Script:</span>
                </span>
                <button
                  onClick={() => handleCopy(item.id, item.aiNegotiationScript)}
                  className="px-2 py-0.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 border border-slate-700 transition-colors"
                >
                  {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedId === item.id ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed">
                {item.aiNegotiationScript}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Target Savings:</span>
              <span className="text-emerald-400 font-bold">-${item.potentialMonthlySavings.toFixed(2)}/mo</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
