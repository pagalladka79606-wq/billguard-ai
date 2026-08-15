import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  Calendar,
  Share2,
  ChevronRight,
  TrendingDown,
  ShieldCheck
} from 'lucide-react';
import { SEO_ARTICLES, SEOArticle } from '../data/seoArticles';

interface SEOPagesViewProps {
  onOpenScanner: () => void;
}

export const SEOPagesView: React.FC<SEOPagesViewProps> = ({ onOpenScanner }) => {
  const [selectedSlug, setSelectedSlug] = useState<string>('forgotten-subscriptions');
  const article = SEO_ARTICLES[selectedSlug] || SEO_ARTICLES['forgotten-subscriptions'];

  const articleKeys = Object.keys(SEO_ARTICLES);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Top SEO Hub Nav */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            Consumer Knowledge Hub
          </span>
          <span className="text-xs text-slate-400">Target SEO Keywords & USA Guides</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
          Personal Finance Guides & Subscription Forensics
        </h1>
        
        {/* Article Selector Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {articleKeys.map((key) => {
            const item = SEO_ARTICLES[key];
            const isSelected = selectedSlug === key;
            return (
              <button
                key={key}
                id={`seo-article-tab-${key}`}
                onClick={() => setSelectedSlug(key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <span>{item.keyword}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Article Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Article Body */}
        <div className="lg:col-span-2 space-y-8 p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800">
          
          {/* Article Header */}
          <div className="space-y-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readingTime}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Updated {article.lastUpdated}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] leading-tight">
              {article.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {article.introSummary}
            </p>
          </div>

          {/* Key Stat Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-950 border border-emerald-500/30 flex items-center gap-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-['Space_Grotesk']">
              {article.statsHighlight.number}
            </div>
            <div className="text-xs text-slate-300">
              <p className="font-semibold text-white">{article.statsHighlight.label}</p>
              <p className="text-slate-400 mt-0.5">Source: {article.statsHighlight.source}</p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                  {sec.heading}
                </h3>
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
                {sec.bulletPoints && (
                  <div className="space-y-2 pt-1 pl-2">
                    {sec.bulletPoints.map((bp, bpIdx) => (
                      <div key={bpIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQs Accordion/List */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-400" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {article.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {faq.question}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Sidebar Jump-to-Action */}
        <div className="space-y-6">
          
          {/* Quick Scanner Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-950/60 border border-emerald-500/40 space-y-4 sticky top-24">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                Audit Your Bills Now
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Drop your bank statement into BillGuard AI to uncover every hidden subscription in under 5 seconds.
              </p>
            </div>

            <button
              id="seo-sidebar-scan-btn"
              onClick={onOpenScanner}
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <span>Scan My Statement for Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>256-bit encryption • Zero bank login</span>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Related US Guides
            </h4>
            <div className="space-y-2">
              {articleKeys.filter(k => k !== selectedSlug).slice(0, 4).map((k) => {
                const item = SEO_ARTICLES[k];
                return (
                  <button
                    key={k}
                    onClick={() => setSelectedSlug(k)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-left text-xs font-semibold text-slate-300 hover:text-white border border-slate-850 flex items-center justify-between group transition-colors"
                  >
                    <span className="truncate pr-2">{item.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
