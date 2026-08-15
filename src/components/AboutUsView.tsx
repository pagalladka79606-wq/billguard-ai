import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Eye, 
  CheckCircle2, 
  Zap, 
  TrendingDown, 
  Layers, 
  CreditCard, 
  FileText, 
  HelpCircle, 
  ArrowRight,
  Target,
  HeartHandshake,
  KeyRound,
  Ban,
  Database
} from 'lucide-react';

interface AboutUsViewProps {
  onOpenScanner: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({ onOpenScanner, onNavigate }) => {
  const corePillars = [
    {
      icon: Ban,
      title: 'Zero Password Storage',
      desc: 'We never ask for your bank login, passwords, PINs, or 2FA/OTPs. You remain in total control of your financial access credentials at all times.',
      badge: '100% Non-Custodial',
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30'
    },
    {
      icon: Sparkles,
      title: 'AI Subscription Forensics',
      desc: 'Smart pattern-matching algorithms detect forgotten streaming services, creeping price hikes, annual recurring traps, and phantom micro-fees.',
      badge: 'Intelligent Detection',
      color: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/30'
    },
    {
      icon: Eye,
      title: 'Informational & Empowering',
      desc: 'All findings are purely informational and educational, giving you the exact steps, scripts, and links needed to cancel or renegotiate bills.',
      badge: 'Consumer-First',
      color: 'from-amber-500/20 to-orange-500/10',
      border: 'border-amber-500/30'
    },
  ];

  const safetyGuarantees = [
    {
      title: 'No Direct Account Access',
      description: 'We do not connect directly to your checking account or initiate withdrawals or transfers.'
    },
    {
      title: 'No OTPs or 2FA Codes',
      description: 'You will never be prompted for one-time verification passcodes or banking credentials.'
    },
    {
      title: 'Ephemerality by Design',
      description: 'Uploaded statements are parsed in memory and never sold or shared with data brokers.'
    },
    {
      title: 'Actionable Transparency',
      description: 'Clear itemized calculations show your recurring annual burn and exact savings potential.'
    }
  ];

  const whatWeDetect = [
    { name: 'Streaming & Media', examples: 'Netflix, Spotify, Hulu, Disney+, Max', icon: Zap },
    { name: 'Gyms & Wellness', examples: 'Planet Fitness, Equinox, Peloton, Headspace', icon: Layers },
    { name: 'Software & Cloud', examples: 'iCloud, Google One, Adobe, ChatGPT Plus', icon: FileText },
    { name: 'Hidden Bank Fees', examples: 'Monthly maintenance, overdrafts, wire fees', icon: CreditCard },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center space-y-6">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/25 tracking-wide">
          <ShieldCheck className="w-4 h-4" />
          <span>ABOUT BILLGUARD AI</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Simplifying Personal Finance for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">U.S. Consumers</span>
        </h1>

        {/* Primary Prompt Text verbatim */}
        <div className="max-w-3xl mx-auto space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          <p className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 shadow-inner text-slate-200">
            <strong>BillGuard AI</strong> is a smart financial tool designed to help U.S. consumers identify forgotten subscriptions, recurring charges, streaming service payments, and hidden monthly expenses.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            id="about-scan-btn"
            onClick={onOpenScanner}
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Try BillGuard AI Scanner</span>
          </button>
          <button
            id="about-guides-btn"
            onClick={() => onNavigate('seo_guides')}
            className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
          >
            <span>Explore Guides</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Our Mission */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">
              Our Mission
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Our mission is to make personal finance simpler by using AI-powered analysis to help users understand where their money is going.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every month, millions of Americans pay for subscriptions they never use, unannounced 15–30% price hikes on utilities and streaming services, or recurring membership fees buried inside 40-page statements. We believe transparency should be effortless and accessible to everyone.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 text-xs text-emerald-400 font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Dedicated to consumer clarity and effortless money management</span>
          </div>
        </div>

        {/* Security & Privacy Commitment */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <KeyRound className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">
              Privacy & Security First
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-medium">
              We do not request banking passwords, OTPs, or direct account access. All analysis is informational and focused on helping users make better financial decisions.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Unlike traditional fintech apps that require ongoing Plaid credentials or direct bank logins, BillGuard AI operates on an entirely read-only model. You can test sample bank statements or upload your own text summaries without exposing sensitive account numbers.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 text-xs text-teal-400 font-medium">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>No passwords • No bank logins • Pure informational clarity</span>
          </div>
        </div>

      </section>

      {/* Core Pillars */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            How We Protect and Empower You
          </h2>
          <p className="text-slate-400 text-sm">
            Built from the ground up to respect consumer privacy and deliver actionable financial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-b ${pillar.color} bg-slate-900/90 border ${pillar.border} space-y-4 flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-950/90 border border-slate-800 text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison: Traditional Apps vs BillGuard AI */}
      <section className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
            Architecture Comparison
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
            How BillGuard AI Differs from Traditional Finance Apps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Traditional Apps */}
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-rose-900/30 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <Ban className="w-4 h-4" />
              <span>Traditional Bank-Linking Apps</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Demands bank login credentials & multi-factor tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Maintains permanent continuous access to transaction streams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Frequently sells anonymized spending habits to data aggregators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Requires recurring monthly subscription fees just to view charts</span>
              </li>
            </ul>
          </div>

          {/* BillGuard AI */}
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>BillGuard AI Read-Only Approach</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Zero passwords or OTPs required:</strong> Complete peace of mind</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Instant Informational Reports:</strong> See savings in seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>FTC Click-to-Cancel Ready:</strong> Exact cancellation steps & phone scripts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>No Account Locking:</strong> Use whenever you need without lock-in</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recurring Charges Covered */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
              What BillGuard AI Detects
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Identifies recurring drains across popular U.S. services and financial institutions.
            </p>
          </div>
          <button
            id="about-view-tools-btn"
            onClick={() => onNavigate('fee_analyzer')}
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Explore Fee Analyzer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whatWeDetect.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white">{cat.name}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cat.examples}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety & Compliance Guarantee */}
      <section className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
              Our Transparency & Security Guarantees
            </h3>
            <p className="text-xs text-slate-400">
              Clear commitments on how we handle informational processing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {safetyGuarantees.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-5.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            Ready to Uncover Forgotten Subscriptions?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Run an informational scan in seconds without linking bank credentials. See exactly where you can cut unnecessary spending.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            id="about-cta-scan-now"
            onClick={onOpenScanner}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Launch AI Scanner</span>
          </button>
          <button
            id="about-cta-pricing"
            onClick={() => onNavigate('pricing')}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
          >
            View Pricing & Plans
          </button>
        </div>
      </section>

    </div>
  );
};
