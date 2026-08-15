import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Crown, 
  ArrowRight,
  HelpCircle,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingViewProps {
  isProUser: boolean;
  onTogglePro: () => void;
  onOpenScanner: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({
  isProUser,
  onTogglePro,
  onOpenScanner,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const handleSimulateUpgrade = () => {
    onTogglePro();
    setShowCheckoutModal(false);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#34D399', '#FBBF24', '#60A5FA']
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-in fade-in duration-300">
      
      {/* Pricing Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Save 10x Your Subscription or Get 100% Refund</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk']">
          Transparent, Fair Pricing for Every Household
        </h1>
        <p className="text-base text-slate-300 max-w-xl mx-auto">
          Start for free to uncover immediate waste. Upgrade to Pro for automated recurring monitoring, price-hike defense, and custom dispute letters.
        </p>

        {/* Monthly vs Annual Toggle */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          <button
            id="billing-cycle-toggle"
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-14 h-7 rounded-full bg-slate-800 p-1 border border-slate-700 relative transition-colors"
          >
            <div className={`w-5 h-5 rounded-full bg-emerald-400 transition-transform ${
              billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
            }`} />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-bold ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`}>
              Annual Billing
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-[10px]">
              Save 34%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Tier 1: Free Plan */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Free Forever
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Basic Audit
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Ideal for a one-time quick checkup of your monthly bank statement.
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white font-['Space_Grotesk']">$0</span>
              <span className="text-sm text-slate-400">/ forever</span>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>1 statement scan</strong> per month</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Basic subscription detection</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Annual waste calculation</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-500">
                <span>✕ Unlimited statements</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-500">
                <span>✕ AI Cancellation Letter generator</span>
              </div>
            </div>
          </div>

          <button
            id="free-plan-start-btn"
            onClick={onOpenScanner}
            className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
          >
            Start Free Scan
          </button>
        </div>

        {/* Tier 2: Premium Pro Plan */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/50 border-2 border-emerald-500/80 space-y-6 flex flex-col justify-between relative shadow-2xl shadow-emerald-500/10">
          <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md">
            Most Popular in USA
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Crown className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  BillGuard Pro
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                Unlimited Autopilot
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                For active households that want continuous protection against stealth price hikes.
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white font-['Space_Grotesk']">
                {billingCycle === 'monthly' ? '$9.99' : '$6.58'}
              </span>
              <span className="text-sm text-slate-400">
                {billingCycle === 'monthly' ? '/ month' : '/ mo (billed $79/yr)'}
              </span>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-200">
              <div className="flex items-center gap-2.5 font-medium text-emerald-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Unlimited statement & screenshot scans</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Click AI Cancellation & Refund letter generator</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-time price hike radar (+15% alert notifications)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Credit Card Fee waiver scripts ($35 overdrafts, $95 card fees)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Buy Now Pay Later (BNPL) combined debt tracker</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Utility & Telecom retention negotiation scripts</span>
              </div>
            </div>
          </div>

          <button
            id="pro-plan-upgrade-btn"
            onClick={() => setShowCheckoutModal(true)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>{isProUser ? '✓ Pro Plan Active (Click to Switch)' : 'Upgrade to BillGuard Pro — $9.99/mo'}</span>
          </button>
        </div>

      </div>

      {/* 30-Day Money Back Guarantee Box */}
      <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4 text-xs text-slate-300">
        <ShieldCheck className="w-10 h-10 text-emerald-400 shrink-0" />
        <div>
          <h4 className="font-bold text-white text-sm">
            100% 30-Day Money-Back Guarantee
          </h4>
          <p className="text-slate-400 mt-0.5">
            If BillGuard Pro does not help you uncover and cancel at least $100 in unwanted subscriptions in your first 30 days, simply contact us for a 100% immediate refund.
          </p>
        </div>
      </div>

      {/* Checkout Modal Simulation */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 space-y-6 shadow-2xl text-slate-100">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                Activate BillGuard Pro
              </h3>
              <p className="text-xs text-slate-400">
                Unlock unlimited AI scans, cancellation dispute letters, and price hike alerts.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>BillGuard Pro ({billingCycle === 'monthly' ? 'Monthly' : 'Annual'})</span>
                <span className="font-bold text-white">{billingCycle === 'monthly' ? '$9.99/mo' : '$79.00/yr'}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>30-Day Savings Guarantee</span>
                <span>Included</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                id="confirm-checkout-simulate-btn"
                onClick={handleSimulateUpgrade}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                <span>Simulate Instant Pro Upgrade</span>
              </button>
              <button
                id="close-checkout-modal-btn"
                onClick={() => setShowCheckoutModal(false)}
                className="w-full py-2.5 rounded-xl text-slate-400 hover:text-white text-xs font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
