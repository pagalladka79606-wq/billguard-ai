import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink, 
  PhoneCall, 
  FileText, 
  AlertCircle,
  Send
} from 'lucide-react';
import { SubscriptionItem, NegotiationDraft } from '../../types';

interface NegotiationModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscription: SubscriptionItem | null;
}

export const NegotiationModal: React.FC<NegotiationModalProps> = ({
  isOpen,
  onClose,
  subscription,
}) => {
  const [targetOutcome, setTargetOutcome] = useState<'Full Cancellation & Refund' | '50% Retention Discount' | 'Downgrade to Free Tier' | 'Fee Waiver'>('Full Cancellation & Refund');
  const [userName, setUserName] = useState('John Doe');
  const [accountNumber, setAccountNumber] = useState('');
  const [customReason, setCustomReason] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [draft, setDraft] = useState<NegotiationDraft | null>(null);

  useEffect(() => {
    if (subscription) {
      setCustomReason(subscription.riskReason || 'Household budget audit');
      generateLetter(subscription, targetOutcome);
    }
  }, [subscription, targetOutcome]);

  if (!isOpen || !subscription) return null;

  const generateLetter = async (sub: SubscriptionItem, outcome: string) => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/generate-negotiation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subscriptionName: sub.name,
          monthlyCost: sub.monthlyCost,
          reason: customReason || sub.riskReason,
          targetOutcome: outcome,
          userName: userName,
          accountIdentifier: accountNumber || '[Account / Email]'
        })
      });
      const data = await res.json();
      if (data.success) {
        setDraft({
          subject: data.subject,
          body: data.body,
          serviceName: sub.name,
          targetOutcome: outcome as any,
          phoneScript: data.phoneScript
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (draft) {
      const fullText = `Subject: ${draft.subject}\n\n${draft.body}`;
      navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleMailto = () => {
    if (draft) {
      const mailtoUrl = `mailto:?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="negotiation-modal-container"
        className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-['Space_Grotesk']">
                AI Cancellation & Negotiation Generator
              </h2>
              <p className="text-xs text-slate-400">
                Target: {subscription.name} (${subscription.monthlyCost}/mo • ${subscription.annualCost}/yr)
              </p>
            </div>
          </div>

          <button
            id="close-negotiation-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          
          {/* Target Outcome Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">
              Select Your Target Outcome:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                'Full Cancellation & Refund',
                '50% Retention Discount',
                'Downgrade to Free Tier',
                'Fee Waiver'
              ].map((outcome) => (
                <button
                  key={outcome}
                  onClick={() => setTargetOutcome(outcome as any)}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                    targetOutcome === outcome
                      ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {outcome}
                </button>
              ))}
            </div>
          </div>

          {/* User Customization Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-400">
                Your Full Name (Sign-off)
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-400">
                Account ID / Registered Email (Optional)
              </label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="e.g. user@example.com or #8492"
                className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Generated Letter Output */}
          {draft && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Generated Official Notice (FTC Rule Compliant)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 border border-slate-700 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Letter'}</span>
                  </button>
                  <button
                    onClick={handleMailto}
                    className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 shadow-sm transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open in Email</span>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 space-y-3 whitespace-pre-line leading-relaxed max-h-60 overflow-y-auto">
                <div className="font-bold text-blue-300 pb-2 border-b border-slate-800">
                  Subject: {draft.subject}
                </div>
                <div>{draft.body}</div>
              </div>

              {/* Phone Script Accordion */}
              {draft.phoneScript && (
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Center Retention Script (If Phone Call Required)</span>
                  </div>
                  <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">
                    {draft.phoneScript}
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between text-xs text-slate-400">
          <span>Cited: FTC Rule 16 CFR Part 425</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
