import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Trash2, 
  AlertTriangle, 
  Mail, 
  EyeOff, 
  CheckCircle2, 
  FileText, 
  UserCheck, 
  Ban, 
  Database,
  ArrowRight
} from 'lucide-react';

interface PrivacyPolicyViewProps {
  onOpenScanner: () => void;
  onNavigate: (tab: string) => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onOpenScanner, onNavigate }) => {
  const policyHighlights = [
    {
      title: 'We do not ask for banking passwords or OTPs.',
      desc: 'BillGuard AI is 100% non-custodial and read-only. We never request your online banking login, master passwords, PINs, or 2-factor authentication codes.',
      icon: Ban,
      badge: 'Zero Password Storage'
    },
    {
      title: 'Uploaded files are used only for temporary subscription analysis.',
      desc: 'Your bank statement files, screenshots, and text excerpts are processed strictly in volatile memory solely to calculate subscriptions, rate hikes, and hidden fees.',
      icon: EyeOff,
      badge: 'Single-Purpose Processing'
    },
    {
      title: 'We do not sell personal financial information.',
      desc: 'We never sell, rent, monetize, or disclose your personal spending habits or transactional data to third-party advertisers or data brokers.',
      icon: ShieldCheck,
      badge: 'No Data Broker Selling'
    },
    {
      title: 'Files may be automatically deleted after processing.',
      desc: 'Statement data is not retained on our permanent storage servers once your forensic savings report is produced.',
      icon: Trash2,
      badge: 'Automatic Deletion'
    },
    {
      title: 'Users should remove sensitive information before uploading documents.',
      desc: 'As an additional layer of personal protection, we advise redacting personal names, home addresses, and full bank account numbers prior to scanning.',
      icon: AlertTriangle,
      badge: 'Consumer Redaction Tip'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center space-y-5">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/25 tracking-wide">
          <ShieldCheck className="w-4 h-4" />
          <span>OFFICIAL PRIVACY POLICY</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
          Privacy Policy
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-emerald-400 font-['Space_Grotesk']">
          BillGuard AI values your privacy.
        </p>

        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          Last Updated: 2026 • Compliant with US Consumer Data Privacy Guidelines
        </p>
      </section>

      {/* Core Privacy Policy Statements (Exact Requirements Box) */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-['Space_Grotesk']">
              Our Fundamental Privacy Commitments
            </h2>
            <p className="text-xs text-slate-400">
              Clear, transparent rules governing your financial data and statement safety.
            </p>
          </div>
        </div>

        {/* Verbatim 5 Core Directives */}
        <div className="space-y-4">
          {policyHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/90 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-slate-700 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 shrink-0 self-start">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white font-sans">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Support Direct Line */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-950 to-slate-950 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Have questions about your data?</p>
              <p className="text-sm font-bold text-white">
                If you have any questions, contact:{' '}
                <a 
                  href="mailto:support@billguardai.com" 
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  support@billguardai.com
                </a>
              </p>
            </div>
          </div>

          <button
            id="privacy-contact-btn"
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-colors shrink-0"
          >
            Visit Contact Page &rarr;
          </button>
        </div>
      </section>

      {/* Detailed Technical Privacy Architecture */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>Volatile Memory Architecture</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            When you submit text or upload a statement image for parsing, processing occurs entirely in ephemeral RAM. No transactional history is persisted to cold relational databases or indexed for longitudinal tracking.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>User Autonomy & Redaction</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            You are always encouraged to black out or delete your full legal name, physical address, and account numbers prior to upload. Our subscription pattern matcher only requires dates, merchant labels, and debit amounts.
          </p>
        </div>

      </section>

      {/* CTA */}
      <div className="pt-4 flex items-center justify-center gap-4">
        <button
          id="privacy-cta-scan"
          onClick={onOpenScanner}
          className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
        >
          <span>Run a Safe, Anonymous Scan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
