import React, { useState } from 'react';
import { 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  FileText, 
  Sparkles,
  ArrowRight,
  User,
  Inbox
} from 'lucide-react';

interface ContactViewProps {
  onOpenScanner: () => void;
  onNavigate: (tab: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenScanner, onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Support');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSubmitted(true);
  };

  const faqList = [
    {
      q: 'How does BillGuard AI identify subscriptions without asking for my bank password?',
      a: 'We use intelligent pattern recognition and Gemini 3.7 AI to parse standard bank statement PDFs, CSV summaries, or screenshots. You provide the text or image; we never request your online bank logins, credentials, or OTPs.'
    },
    {
      q: 'How quickly does support answer?',
      a: 'Our team reviews all incoming inquiries and typically responds within 24–48 hours.'
    },
    {
      q: 'Can you help me cancel a stubborn subscription?',
      a: 'Yes! BillGuard AI generates custom 1-click FTC Click-to-Cancel demand letters and negotiation phone scripts for every detected charge.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-in fade-in duration-300">
      
      {/* Header */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center space-y-4">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/25 tracking-wide">
          <Mail className="w-4 h-4" />
          <span>DIRECT SUPPORT & FEEDBACK</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
          Contact Us
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-slate-200 font-['Space_Grotesk']">
          Need help or have feedback?
        </p>

        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          We’re here to help you audit recurring charges, optimize subscription savings, or answer questions about our privacy practices.
        </p>
      </section>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Contact Info Cards (2 Columns) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Email Info Card */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-500/30 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Inbox className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                  Direct Email
                </h3>
                <p className="text-xs text-slate-400">Official support channel</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Email Address</p>
              <a 
                href="mailto:support@billguardai.com"
                className="text-base sm:text-lg font-extrabold text-emerald-400 hover:text-emerald-300 transition-colors block break-all font-mono"
              >
                support@billguardai.com
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
              <Clock className="w-5 h-5 text-teal-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block font-medium">Response Window:</strong>
                We usually respond within 24–48 hours.
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>We never ask for account passwords or banking OTPs via email.</span>
            </div>
          </div>

          {/* Quick FAQ summary */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-400" />
              <span>Quick Help Topics</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div 
                onClick={() => onNavigate('privacy')}
                className="p-3 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 cursor-pointer border border-slate-800/80 flex items-center justify-between transition-colors"
              >
                <span>Read our full Privacy Policy</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div 
                onClick={() => onNavigate('about')}
                className="p-3 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 cursor-pointer border border-slate-800/80 flex items-center justify-between transition-colors"
              >
                <span>Learn about BillGuard AI</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div 
                onClick={() => onNavigate('seo_guides')}
                className="p-3 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 cursor-pointer border border-slate-800/80 flex items-center justify-between transition-colors"
              >
                <span>Subscription Cancellation Guides</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form (3 Columns) */}
        <div className="lg:col-span-3">
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Send Us a Message</span>
              </h2>
              <p className="text-xs text-slate-400">
                Have a question, feedback, or need help with statement analysis?
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you! We have received your inquiry and will respond to <strong className="text-emerald-300">{email}</strong> within 24–48 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Taylor"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Topic / Inquiry Type</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="General Support">General Support</option>
                    <option value="Statement Scanning Question">Statement Scanning Question</option>
                    <option value="Privacy & Data Question">Privacy & Data Question</option>
                    <option value="Feature Feedback">Feature Feedback & Suggestions</option>
                    <option value="Partnership / Affiliate">Partnership & Media</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Message / Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you audit your subscriptions or manage recurring expenses?"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Support</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* FAQ Section */}
      <section className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
            Frequently Asked Support Questions
          </h3>
          <p className="text-xs text-slate-400">
            Answers to common questions regarding privacy, scans, and savings calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-emerald-400 leading-snug">
                {faq.q}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
