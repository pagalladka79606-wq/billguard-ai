import React, { useState } from 'react';
import { 
  FileText, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  PhoneCall, 
  Trash2, 
  Check, 
  ChevronRight, 
  Download, 
  Share2, 
  ArrowUpRight, 
  Layers, 
  Flame, 
  DollarSign, 
  Filter, 
  Search,
  ExternalLink,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SavingsReport, SubscriptionItem, RiskLevel } from '../types';

interface SavingsReportViewProps {
  report: SavingsReport | null;
  onOpenScanner: () => void;
  onOpenNegotiator: (sub: SubscriptionItem) => void;
  onUpdateSubscriptionStatus: (subId: string, status: 'active' | 'cancelled' | 'kept') => void;
}

export const SavingsReportView: React.FC<SavingsReportViewProps> = ({
  report,
  onOpenScanner,
  onOpenNegotiator,
  onUpdateSubscriptionStatus,
}) => {
  const [filterRisk, setFilterRisk] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  if (!report) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-slate-800 text-slate-400 mx-auto flex items-center justify-center border border-slate-700">
          <FileText className="w-8 h-8 text-emerald-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
            No Statement Scanned Yet
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Upload your bank statement PDF, CSV, or screenshot to generate your forensic subscription and savings report.
          </p>
        </div>
        <button
          id="empty-report-scan-btn"
          onClick={onOpenScanner}
          className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 fill-slate-950" />
          <span>Scan My First Statement</span>
        </button>
      </div>
    );
  }

  const handleCancelClick = (sub: SubscriptionItem) => {
    if (sub.status === 'cancelled') {
      onUpdateSubscriptionStatus(sub.id, 'active');
    } else {
      onUpdateSubscriptionStatus(sub.id, 'cancelled');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10B981', '#34D399', '#FBBF24']
      });
    }
  };

  const cancelledSubs = report.subscriptions.filter(s => s.status === 'cancelled');
  const realizedMonthlySavings = cancelledSubs.reduce((acc, curr) => acc + curr.monthlyCost, 0);
  const realizedAnnualSavings = realizedMonthlySavings * 12;

  const filteredSubs = report.subscriptions.filter(sub => {
    const matchesRisk = filterRisk === 'all' || sub.riskLevel.toLowerCase() === filterRisk.toLowerCase();
    const matchesCategory = filterCategory === 'all' || sub.category === filterCategory;
    const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) || sub.riskReason.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRisk && matchesCategory && matchesSearch;
  });

  const categories = Array.from(new Set(report.subscriptions.map(s => s.category)));

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Top Banner / Statement Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              Audit Complete
            </span>
            <span className="text-xs text-slate-400">
              {report.createdAt ? new Date(report.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Live Demo'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
            {report.bankName} Savings Forensic Report
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Statement Period: {report.statementPeriod} • {report.subscriptions.length} recurring subscriptions detected
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            id="print-report-btn"
            onClick={handlePrintReport}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export / Print</span>
          </button>
          <button
            id="rescan-statement-btn"
            onClick={onOpenScanner}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md shadow-emerald-500/20"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Scan Another Statement</span>
          </button>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Total Annual Potential Savings */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-emerald-500/20">
            <DollarSign className="w-16 h-16 -mr-4 -mt-4 stroke-[1.5]" />
          </div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Potential Annual Savings
          </span>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] mt-2">
            ${report.totalAnnualSavings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-emerald-300/80 mt-1 font-medium">
            Based on eliminating flagged & high-risk charges
          </p>
        </div>

        {/* Metric 2: Monthly Waste */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 relative">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Monthly Cash Waste
          </span>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] mt-2">
            ${report.totalMonthlyWaste.toLocaleString('en-US', { minimumFractionDigits: 2 })}<span className="text-lg text-slate-400 font-normal">/mo</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Across {report.highRiskCount} high-risk services
          </p>
        </div>

        {/* Metric 3: Realized Savings */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Realized Savings
            </span>
            {cancelledSubs.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                {cancelledSubs.length} Cancelled
              </span>
            )}
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-['Space_Grotesk'] mt-2">
            ${realizedAnnualSavings.toFixed(0)}<span className="text-lg text-slate-400 font-normal">/yr</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {cancelledSubs.length > 0 ? `Saved $${realizedMonthlySavings.toFixed(2)}/mo in cash flow` : 'Click "Cancel" on cards below to lock in savings'}
          </p>
        </div>

        {/* Metric 4: Anomalies Found */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 relative">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Detected Anomalies
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
              {report.priceHikesCount + report.duplicatesCount}
            </span>
            <span className="text-xs text-slate-400">
              ({report.priceHikesCount} price hikes, {report.duplicatesCount} duplicates)
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Requires direct review or negotiation
          </p>
        </div>

      </div>

      {/* AI Recommendation Engine Insights Box */}
      {report.insights && report.insights.length > 0 && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/30 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
              AI Recommendation Engine Insights
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {report.insights.map((insight) => (
              <div
                key={insight.id}
                className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                      insight.severity === 'high' 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {insight.type.replace('_', ' ')}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      Save ~${insight.estimatedAnnualSavings.toFixed(0)}/yr
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-200">
                    {insight.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subscriptions Table & Filters */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        
        {/* Table Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
              Recurring Charges Breakdown ({filteredSubs.length})
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Review each subscription, generate 1-click cancellation letters, or request retention discounts.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <div className="relative flex-1 sm:w-48">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search merchant..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <select
              value={filterRisk}
              onChange={(e) => setFilterRisk(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">All Risk Levels</option>
              <option value="high">High Risk Only</option>
              <option value="medium">Medium Risk</option>
              <option value="low">Low Risk</option>
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">All Categories</option>
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Subscription Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-3">Subscription</th>
                <th className="py-3 px-3">Monthly</th>
                <th className="py-3 px-3">Annual</th>
                <th className="py-3 px-3">Last Charged</th>
                <th className="py-3 px-3">Risk & Reason</th>
                <th className="py-3 px-3 text-right">Action / Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredSubs.map((sub) => {
                const isCancelled = sub.status === 'cancelled';
                return (
                  <tr 
                    key={sub.id} 
                    id={`sub-row-${sub.id}`}
                    className={`hover:bg-slate-800/40 transition-colors ${
                      isCancelled ? 'opacity-60 bg-emerald-950/10' : ''
                    }`}
                  >
                    {/* Name & Category */}
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                          isCancelled 
                            ? 'bg-slate-800 text-slate-400' 
                            : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {sub.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className={`font-bold text-sm ${isCancelled ? 'line-through text-slate-400' : 'text-white'}`}>
                              {sub.name}
                            </span>
                            {sub.priceIncreaseDetected && (
                              <span className="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                +{sub.percentageIncrease ? `${sub.percentageIncrease}%` : 'Price Hike'}
                              </span>
                            )}
                            {sub.isTrialConversion && (
                              <span className="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-red-500/20 text-red-400 border border-red-500/30">
                                Trial Trap
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400">
                            {sub.category}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Monthly Cost */}
                    <td className="py-4 px-3 font-semibold text-slate-200">
                      ${sub.monthlyCost.toFixed(2)}
                    </td>

                    {/* Annual Cost */}
                    <td className="py-4 px-3 font-bold text-white">
                      ${sub.annualCost.toFixed(2)}
                    </td>

                    {/* Last Charged */}
                    <td className="py-4 px-3 text-slate-400">
                      {sub.lastChargedDate}
                    </td>

                    {/* Risk Level & Reason */}
                    <td className="py-4 px-3 max-w-xs">
                      <div className="space-y-1">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          sub.riskLevel === 'High'
                            ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                            : sub.riskLevel === 'Medium'
                            ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {sub.riskLevel} Risk
                        </span>
                        <p className="text-[11px] text-slate-400 leading-tight">
                          {sub.riskReason}
                        </p>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Generate AI Cancellation Letter */}
                        <button
                          id={`negotiate-btn-${sub.id}`}
                          onClick={() => onOpenNegotiator(sub)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors"
                          title="Generate AI Cancellation Letter or Negotiation Script"
                        >
                          <Mail className="w-3.5 h-3.5 text-blue-400" />
                          <span className="hidden sm:inline">AI Letter</span>
                        </button>

                        {/* Mark Cancelled Toggle */}
                        <button
                          id={`cancel-toggle-btn-${sub.id}`}
                          onClick={() => handleCancelClick(sub)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                            isCancelled
                              ? 'bg-emerald-500 text-slate-950 shadow-sm'
                              : 'bg-red-500/15 hover:bg-red-500/25 text-red-400 border border-red-500/30'
                          }`}
                        >
                          {isCancelled ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Cancelled</span>
                            </>
                          ) : (
                            <>
                              <span>Cancel</span>
                            </>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>

      {/* Realized Savings Next Step Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Next Step: Grow Your Recovered Savings
          </span>
          <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
            Put your ${report.totalAnnualSavings.toFixed(0)} into a 4.40% High-Yield Savings Account
          </h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Don't leave your recovered cash in a 0.01% checking account. Earn an additional $60+/year in passive interest with FDIC-insured partner accounts.
          </p>
        </div>

        <a
          href="#affiliates"
          className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
        >
          <span>Explore High-Yield Offers</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
