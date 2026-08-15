import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  TrendingUp, 
  Layers, 
  CreditCard, 
  Zap, 
  Gift, 
  BookOpen, 
  Lock, 
  Menu, 
  X, 
  DollarSign, 
  Info,
  Mail
} from 'lucide-react';

interface NavbarProps {
  currentTab?: string;
  activeTab?: string;
  onNavigate?: (tab: string) => void;
  setActiveTab?: (tab: string) => void;
  onOpenScanner: () => void;
  hasActiveReport?: boolean;
  isProUser?: boolean;
  totalSaved?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  activeTab,
  onNavigate,
  setActiveTab,
  onOpenScanner,
  hasActiveReport = false,
  isProUser = false,
  totalSaved = 0
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const selectedTab = currentTab || activeTab || 'home';
  const handleNav = onNavigate || setActiveTab || (() => {});

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'privacy', label: 'Privacy', icon: ShieldCheck },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'seo_guides', label: 'Guides', icon: BookOpen },
    { id: 'fee_analyzer', label: 'Fee Analyzer', icon: CreditCard },
    { id: 'bnpl_tracker', label: 'BNPL', icon: Layers },
    { id: 'report', label: 'Report', icon: FileText, badge: hasActiveReport ? 'Active' : undefined },
  ];

  const handleNavClick = (id: string) => {
    handleNav(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#020617]/90 backdrop-blur-md">
      {/* Top US Trust Bar */}
      <div className="w-full bg-gradient-to-r from-emerald-950/40 via-slate-950 to-slate-950 px-4 py-1.5 text-xs text-slate-300 border-b border-emerald-900/30 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Bank-Grade 256-Bit Read-Only Analysis
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-400">
              No banking passwords or Plaid login required
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-medium text-[11px] border border-emerald-500/20">
              <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
              US Consumers Saved $3.4M+ in 2025
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          id="brand-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
            <ShieldCheck className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                BillGuard<span className="text-emerald-400">.ai</span>
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                USA
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Subscription Killer & Bill Negotiator
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = selectedTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-800/90 text-emerald-400 shadow-sm border border-slate-700/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px]">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden sm:flex items-center gap-3">
          {totalSaved > 0 && (
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>You Saved: ${totalSaved.toFixed(0)}/yr</span>
            </div>
          )}
          <button
            id="nav-scan-cta-btn"
            onClick={onOpenScanner}
            className="relative group px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Scan My Bills</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            id="mobile-scan-quick-btn"
            onClick={onOpenScanner}
            className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1"
          >
            <Zap className="w-3.5 h-3.5 fill-slate-950" />
            <span>Scan</span>
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#020617] px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = selectedTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2 text-left ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-300 bg-slate-900/60 border border-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="pt-2">
            <button
              id="mobile-nav-full-scan-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenScanner();
              }}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Upload Statement & Scan Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
