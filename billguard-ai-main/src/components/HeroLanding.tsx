import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  EyeOff, 
  FileCheck, 
  Sparkles, 
  AlertTriangle, 
  Layers, 
  TrendingDown, 
  PlayCircle,
  UploadCloud,
  FileSpreadsheet,
  Check
} from 'lucide-react';
import { SAMPLE_STATEMENTS } from '../data/sampleStatements';
import { DemoStatement } from '../types';

interface HeroLandingProps {
  onOpenScanner: () => void;
  onSelectDemo: (demo: DemoStatement) => void;
  onExploreTools?: (toolId: string) => void;
  onOpenLegal?: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({
  onOpenScanner,
  onSelectDemo,
  onExploreTools = (_toolId: string) => {},
  onOpenLegal = (_type: 'privacy' | 'terms' | 'disclaimer') => {},
}) => {
  return (
    <div className="relative overflow-hidden pt-6 pb-20">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pill / US Statistics */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-200 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-400">85% of Americans</span>
            <span className="text-slate-400">pay for subscriptions they forgot to cancel</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.1]">
            Stop Wasting Money on <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent underline decoration-emerald-500/40 decoration-wavy decoration-2">
              Forgotten Subscriptions
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Drop in your bank statement, credit card PDF, or screenshot. Our AI instantly exposes hidden recurring charges, sneaky +20% price increases, and free trial traps.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="hero-scan-my-bills-btn"
              onClick={onOpenScanner}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <Zap className="w-5 h-5 fill-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Scan My Bills</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-try-sample-btn"
              onClick={() => onSelectDemo(SAMPLE_STATEMENTS[0])}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-base hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5 text-emerald-400" />
              <span>Try Live Demo Statement</span>
            </button>
          </div>

          {/* Strict Trust Indicators */}
          <div className="pt-6 pb-2 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium">Bank-level security (256-bit)</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <EyeOff className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium">Read-only analysis</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium">No banking login required</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium">Auto-deleted after scan</span>
            </div>
          </div>
        </div>

        {/* Interactive Quick-Drop & Demo Selector Box */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    Step 1 of 3
                  </span>
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                    Choose an upload method or test a realistic US statement
                  </h3>
                </div>
                <p className="text-sm text-slate-400 mt-1">
                  Supports PDF statements, CSV exports, or screenshots from Chase, Bank of America, Amex, Wells Fargo, Apple, or Google.
                </p>
              </div>

              <button
                id="hero-quick-upload-btn"
                onClick={onOpenScanner}
                className="w-full md:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shrink-0 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Upload Statement / Screenshot</span>
              </button>
            </div>

            {/* Pre-loaded 4 Sample Statements */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Or click one of 4 pre-loaded real-world scenarios:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {SAMPLE_STATEMENTS.map((demo) => (
                  <div
                    key={demo.id}
                    id={`demo-card-${demo.id}`}
                    onClick={() => onSelectDemo(demo)}
                    className="p-4 rounded-2xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                          {demo.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 group-hover:text-emerald-300">
                          Test &rarr;
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-white line-clamp-2">
                        {demo.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {demo.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">Uncovers:</span>
                      <span className="text-xs font-extrabold text-emerald-400">
                        ~${demo.expectedAnnualWaste.toFixed(0)}/yr
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid / How BillGuard AI Saves You $1,284/year */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
              Engineered Specifically for the American Consumer
            </h2>
            <p className="text-base text-slate-400 mt-2">
              Subscription billing is designed to be invisible. BillGuard AI shines a high-intensity forensic light on your recurring cash drain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 relative group hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Duplicate & Overlapping Scan
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Paying for Hulu, Netflix, and Max simultaneously? Multiple 2TB cloud storage drives? BillGuard flags duplicate content and calculates consolidation savings.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Saves ~$380/yr on streaming
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 relative group hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-400">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Stealth Price Hike Radar
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                When Adobe, Spectrum, or gym memberships increase prices by 15-30% without explicit alerts, BillGuard detects the delta and provides negotiation phone scripts.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-amber-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Detects unnotified increases
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 relative group hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                1-Click AI Cancellation Letters
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Stop jumping through 10-step cancellation mazes. Our AI drafts legally-grounded cancellation demands citing FTC Click-to-Cancel rules with refund clauses.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-blue-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> 1-Click copy & mailto links
              </div>
            </div>

          </div>
        </div>

        {/* Extra Tools Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              High-RPM Financial Toolkit
            </span>
            <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
              More than just subscriptions: Credit Card Fees & BNPL Debt
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Audit sneaky $35 bank overdraft charges, track Klarna/Afterpay installment schedules, and negotiate expired internet promotional rates.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 shrink-0">
            <button
              id="hero-fee-analyzer-btn"
              onClick={() => onExploreTools('fee_analyzer')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
            >
              Fee Analyzer
            </button>
            <button
              id="hero-bnpl-tracker-btn"
              onClick={() => onExploreTools('bnpl_tracker')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
            >
              BNPL Tracker
            </button>
            <button
              id="hero-utility-btn"
              onClick={() => onExploreTools('utility_detector')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
            >
              Utility Rate Hikes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
