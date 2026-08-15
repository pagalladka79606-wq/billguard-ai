import React, { useState } from 'react';
import { 
  Gift, 
  ExternalLink, 
  Star, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight, 
  DollarSign, 
  Award,
  Filter
} from 'lucide-react';
import { AFFILIATE_OFFERS } from '../data/affiliateOffers';
import { AffiliateOffer } from '../types';

interface AffiliateMarketplaceProps {
  totalAnnualSaved?: number;
}

export const AffiliateMarketplace: React.FC<AffiliateMarketplaceProps> = ({
  totalAnnualSaved = 1428.60,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredOffers = AFFILIATE_OFFERS.filter(offer => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'savings') return offer.category === 'High-Yield Savings';
    if (activeFilter === 'cards') return offer.category === 'Cashback Credit Cards';
    if (activeFilter === 'credit') return offer.category === 'Credit & Identity';
    if (activeFilter === 'insurance') return offer.category === 'Insurance Savings';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              High-RPM USA Financial Marketplace
            </span>
            <span className="text-xs text-slate-400">Curated Partner Products</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            Multiply Your Recovered Subscription Money
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Don't let your recovered subscription cash sit idle in checking earning 0.01%. Put it to work in high-yield savings, earn 5% cashback on groceries, and monitor your credit for free.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-right shrink-0">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Potential Extra Earnings
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            +$520.00<span className="text-sm font-normal text-slate-400">/yr</span>
          </div>
          <p className="text-[11px] text-emerald-300">
            From HYSA interest & welcome bonuses
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { id: 'all', label: 'All Recommendations' },
          { id: 'savings', label: 'High-Yield Savings (4.40%+ APY)' },
          { id: 'cards', label: 'Top Cashback Credit Cards' },
          { id: 'credit', label: 'Free Credit Monitoring' },
          { id: 'insurance', label: 'Insurance Refinancing' },
        ].map((tab) => (
          <button
            key={tab.id}
            id={`affiliate-tab-${tab.id}`}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === tab.id
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffers.map((offer) => (
          <div
            key={offer.id}
            id={`offer-card-${offer.id}`}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Category & Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {offer.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
                  {offer.highlightBadge}
                </span>
              </div>

              {/* Title & Provider */}
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
                  <span>{offer.provider}</span>
                  <span>•</span>
                  <span className="flex items-center text-amber-400 font-semibold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {offer.rating}
                  </span>
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {offer.description}
              </p>

              {/* Features List */}
              <div className="space-y-1.5 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                {offer.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Area */}
            <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Est. Added Value:</span>
                <span className="text-emerald-400 font-bold">+${offer.estimatedExtraAnnualValue.toFixed(0)}/yr</span>
              </div>

              <a
                href={offer.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all"
              >
                <span>{offer.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Partner Compensation Disclosure */}
      <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
        <p>
          <strong className="text-slate-300">Partner Compensation Disclosure:</strong> BillGuard AI is an independent, advertising-supported service. We may receive compensation from the companies whose products we review or feature. This compensation may impact how and where products appear on this site. Opinions expressed are solely those of the BillGuard AI editorial team.
        </p>
      </div>

    </div>
  );
};
