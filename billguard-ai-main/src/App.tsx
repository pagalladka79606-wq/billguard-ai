import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroLanding } from './components/HeroLanding';
import { ScannerModal } from './components/ScannerModal';
import { SavingsReportView } from './components/SavingsReportView';
import { FeeAnalyzer } from './components/ExtraTools/FeeAnalyzer';
import { BNPLTracker } from './components/ExtraTools/BNPLTracker';
import { UtilityDetector } from './components/ExtraTools/UtilityDetector';
import { AffiliateMarketplace } from './components/AffiliateMarketplace';
import { PricingView } from './components/PricingView';
import { SEOPagesView } from './components/SEOPagesView';
import { AboutUsView } from './components/AboutUsView';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { ContactView } from './components/ContactView';
import { NegotiationModal } from './components/ExtraTools/NegotiationModal';
import { LegalModals } from './components/LegalModals';
import { Footer } from './components/Footer';
import { SavingsReport, SubscriptionItem, DemoStatement } from './types';
import { SAMPLE_STATEMENTS } from './data/sampleStatements';
import { trackPageView, trackEvent } from './lib/analytics';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<DemoStatement | null>(null);
  const [activeReport, setActiveReport] = useState<SavingsReport | null>(null);
  const [negotiatorSub, setNegotiatorSub] = useState<SubscriptionItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);
  const [isProUser, setIsProUser] = useState<boolean>(false);

  // Track page views in GA4 for realtime visitor tracking on route/tab change
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'BillGuard AI — Home',
      about: 'About Us — BillGuard AI',
      privacy: 'Privacy Policy — BillGuard AI',
      contact: 'Contact Us — BillGuard AI',
      pricing: 'Pricing & Plans — BillGuard AI',
      seo_guides: 'Guides — BillGuard AI',
      fee_analyzer: 'Fee Analyzer — BillGuard AI',
      bnpl_tracker: 'BNPL Tracker — BillGuard AI',
      utility_detector: 'Utility Hikes — BillGuard AI',
      affiliates: 'Deals — BillGuard AI',
      report: 'Savings Report — BillGuard AI',
    };
    const title = titles[currentTab] || `BillGuard AI — ${currentTab}`;
    trackPageView(title, `/${currentTab === 'home' ? '' : currentTab}`);
  }, [currentTab]);

  // Initialize with local storage report or demo report on first mount
  useEffect(() => {
    try {
      const savedReport = localStorage.getItem('billguard_current_report');
      if (savedReport) {
        setActiveReport(JSON.parse(savedReport));
      }
      const savedPro = localStorage.getItem('billguard_is_pro');
      if (savedPro === 'true') {
        setIsProUser(true);
      }
    } catch (e) {
      console.warn('Storage read error:', e);
    }
  }, []);

  const handleScanComplete = (report: SavingsReport) => {
    setActiveReport(report);
    try {
      localStorage.setItem('billguard_current_report', JSON.stringify(report));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
    setCurrentTab('report');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDemo = (demo: DemoStatement) => {
    setSelectedDemo(demo);
    setIsScannerOpen(true);
  };

  const handleUpdateSubStatus = (subId: string, newStatus: 'active' | 'cancelled' | 'kept') => {
    if (!activeReport) return;
    const updatedSubs = activeReport.subscriptions.map((s) => {
      if (s.id === subId) {
        return { ...s, status: newStatus };
      }
      return s;
    });

    const updatedReport: SavingsReport = {
      ...activeReport,
      subscriptions: updatedSubs
    };

    setActiveReport(updatedReport);
    try {
      localStorage.setItem('billguard_current_report', JSON.stringify(updatedReport));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
  };

  const handleTogglePro = () => {
    const nextPro = !isProUser;
    setIsProUser(nextPro);
    try {
      localStorage.setItem('billguard_is_pro', String(nextPro));
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950 font-sans relative">
      {/* Ambient background lighting gradient layers for Elegant Dark */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.08),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,rgba(14,165,233,0.04),rgba(255,255,255,0))] pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => {
          if (tab === 'scanner') {
            setSelectedDemo(null);
            setIsScannerOpen(true);
            return;
          }
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenScanner={() => {
          setSelectedDemo(null);
          setIsScannerOpen(true);
        }}
        hasActiveReport={!!activeReport}
        isProUser={isProUser}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HeroLanding
            onOpenScanner={() => {
              setSelectedDemo(null);
              setIsScannerOpen(true);
            }}
            onSelectDemo={handleSelectDemo}
            onExploreTools={(tool) => {
              setCurrentTab(tool);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenLegal={(type) => setLegalModalType(type)}
          />
        )}

        {currentTab === 'about' && (
          <AboutUsView
            onOpenScanner={() => {
              setSelectedDemo(null);
              setIsScannerOpen(true);
            }}
            onNavigate={(tab) => {
              if (tab === 'scanner') {
                setSelectedDemo(null);
                setIsScannerOpen(true);
                return;
              }
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'privacy' && (
          <PrivacyPolicyView
            onOpenScanner={() => {
              setSelectedDemo(null);
              setIsScannerOpen(true);
            }}
            onNavigate={(tab) => {
              if (tab === 'scanner') {
                setSelectedDemo(null);
                setIsScannerOpen(true);
                return;
              }
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView
            onOpenScanner={() => {
              setSelectedDemo(null);
              setIsScannerOpen(true);
            }}
            onNavigate={(tab) => {
              if (tab === 'scanner') {
                setSelectedDemo(null);
                setIsScannerOpen(true);
                return;
              }
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'report' && (
          <SavingsReportView
            report={activeReport}
            onOpenScanner={() => {
              setSelectedDemo(null);
              setIsScannerOpen(true);
            }}
            onOpenNegotiator={(sub) => setNegotiatorSub(sub)}
            onUpdateSubscriptionStatus={handleUpdateSubStatus}
          />
        )}

        {currentTab === 'fee_analyzer' && <FeeAnalyzer />}

        {currentTab === 'bnpl_tracker' && <BNPLTracker />}

        {currentTab === 'utility_detector' && <UtilityDetector />}

        {currentTab === 'affiliates' && (
          <AffiliateMarketplace totalAnnualSaved={activeReport?.totalAnnualSavings || 1428.60} />
        )}

        {currentTab === 'pricing' && (
          <PricingView
            isProUser={isProUser}
            onTogglePro={handleTogglePro}
            onOpenScanner={() => {
              setSelectedDemo(null);
              setIsScannerOpen(true);
            }}
          />
        )}

        {currentTab === 'seo_guides' && (
          <SEOPagesView
            onOpenScanner={() => {
              setSelectedDemo(null);
              setIsScannerOpen(true);
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive Modals */}
      <ScannerModal
        isOpen={isScannerOpen}
        onClose={() => {
          setIsScannerOpen(false);
          setSelectedDemo(null);
        }}
        onScanComplete={handleScanComplete}
        initialDemo={selectedDemo}
      />

      <NegotiationModal
        isOpen={!!negotiatorSub}
        onClose={() => setNegotiatorSub(null)}
        subscription={negotiatorSub}
      />

      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
