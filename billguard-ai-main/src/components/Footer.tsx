import React from 'react';
import { ShieldCheck, Lock, Heart, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onNavigate }) => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#020617] text-slate-400 text-xs">
      {/* Top Compliance & Disclaimer Banner */}
      <div className="border-b border-slate-800/60 bg-slate-950/80 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Important USA Regulatory & Security Disclaimers</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-5xl">
            <strong>BillGuard AI is not a bank.</strong> Analysis is informational only. Files are 256-bit encrypted and automatically deleted from server memory immediately after processing. No financial, investment, accounting, or legal advice is provided. Past savings statistics reflect historical user averages.
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Brand Col */}
        <div className="col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-slate-950 font-bold">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-lg font-bold text-white font-['Space_Grotesk']">
              BillGuard<span className="text-emerald-400">.ai</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            America's AI-driven subscription auditor and recurring fee negotiator. Uncover hidden bills, recurring price hikes, and duplicate subscriptions.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
            <Lock className="w-3.5 h-3.5" />
            <span>Zero Banking Logins Stored • 100% Read-Only</span>
          </div>
          <div className="pt-1">
            <button 
              id="footer-about-btn"
              onClick={() => onNavigate('about')} 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 text-xs font-semibold transition-colors"
            >
              <span>About BillGuard AI</span>
              <span className="text-emerald-400">→</span>
            </button>
          </div>
        </div>

        {/* Col 1: Platform */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Platform
          </h4>
          <ul className="space-y-2">
            <li>
              <button id="footer-link-about" onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('scanner')} className="hover:text-emerald-400 transition-colors">
                Statement Scanner
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('fee_analyzer')} className="hover:text-emerald-400 transition-colors">
                Card Fee Analyzer
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('bnpl_tracker')} className="hover:text-emerald-400 transition-colors">
                BNPL Debt Tracker
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('utility_detector')} className="hover:text-emerald-400 transition-colors">
                Utility Rate Radar
              </button>
            </li>
          </ul>
        </div>

        {/* Col 2: SEO Guides */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Guides & SEO
          </h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('seo_guides')} className="hover:text-emerald-400 transition-colors">
                Forgotten Subscriptions
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('seo_guides')} className="hover:text-emerald-400 transition-colors">
                Recurring Payment Detector
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('seo_guides')} className="hover:text-emerald-400 transition-colors">
                Cancel Subscriptions in 1 Click
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('affiliates')} className="hover:text-emerald-400 transition-colors">
                High-Yield Savings Deals
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Legal & Support */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Trust & Support
          </h4>
          <ul className="space-y-2">
            <li>
              <button id="footer-link-about-trust" onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors">
                About BillGuard AI
              </button>
            </li>
            <li>
              <button id="footer-link-privacy" onClick={() => onNavigate('privacy')} className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </button>
            </li>
            <li>
              <button id="footer-link-contact" onClick={() => onNavigate('contact')} className="hover:text-emerald-400 transition-colors">
                Contact Us (support@billguardai.com)
              </button>
            </li>
            <li>
              <button onClick={() => onOpenLegal('terms')} className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </button>
            </li>
            <li>
              <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-emerald-400 transition-colors">
                Disclaimers & Disclosures
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800/60 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-3">
        <div>
          © {new Date().getFullYear()} BillGuard AI Inc. All rights reserved. Made for United States Consumers.
        </div>
        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <span>SOC2 Type II Standards</span>
          <span>•</span>
          <span>TLS 1.3 256-Bit</span>
          <span>•</span>
          <span>FTC Click-to-Cancel Ready</span>
        </div>
      </div>
    </footer>
  );
};
