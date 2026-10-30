import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, CheckCircle2, Copy, Check, MapPin, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Data Engineering / Internship Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !senderEmail.trim() || !message.trim()) return;

    // Trigger pre-filled mailto action for functional dispatch
    const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `From: ${name} (${senderEmail})\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-[#38BDF8]/10 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Inquiries & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Let's Discuss Opportunities
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 leading-relaxed">
                I am actively seeking software and data engineering internships, mentorship, and collaborative projects. Reach out via email, LinkedIn, or send a message directly.
              </p>
            </div>

            {/* Email Contact Card */}
            <div className="p-4 rounded-xl bg-[#0F172A] border border-[#38BDF8]/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#0B1120] rounded-lg text-[#38BDF8] border border-white/5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#64748B] uppercase block">Direct Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#38BDF8] transition-colors"
                  >
                    {PERSONAL_INFO.contact.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1.5 text-xs font-mono text-[#94A3B8] hover:text-white bg-[#1E293B] rounded border border-white/5 transition-colors flex items-center gap-1.5 shrink-0"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Social & University Channels */}
            <div className="space-y-3 font-mono text-xs">
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0F172A] border border-white/5 hover:border-[#38BDF8]/30 flex items-center justify-between text-[#94A3B8] hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-[#38BDF8]" />
                  <span>GitHub Profile</span>
                </div>
                <span className="text-[11px] text-[#64748B] group-hover:text-[#38BDF8]">
                  github.com/prernashergar-sketch →
                </span>
              </a>

              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0F172A] border border-white/5 hover:border-[#38BDF8]/30 flex items-center justify-between text-[#94A3B8] hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-[11px] text-[#64748B] group-hover:text-[#38BDF8]">
                  linkedin.com/in/prerna-shergar-8b421b376 →
                </span>
              </a>

              <div className="p-3.5 rounded-xl bg-[#0F172A] border border-white/5 flex items-center gap-2.5 text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-[#38BDF8]" />
                <span>REVA University, Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-[#38BDF8]/20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Send Direct Message</h3>
                    <p className="text-xs text-[#94A3B8]">Fill out the details below to initiate direct email correspondence.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-[11px] font-mono text-[#94A3B8] uppercase mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Alex Johnson"
                        className="w-full px-3.5 py-2.5 bg-[#080E1D] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#94A3B8] uppercase mb-1.5">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g., alex@company.com"
                        className="w-full px-3.5 py-2.5 bg-[#080E1D] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#94A3B8] uppercase mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#080E1D] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#94A3B8] uppercase mb-1.5">
                      Message Content
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share project details, internship requirements, or technical discussion..."
                      className="w-full px-3.5 py-2.5 bg-[#080E1D] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg text-xs transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Dispatch Message to Prerna Shergar
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Message Prepared & Launched</h4>
                    <p className="text-xs text-[#94A3B8] mt-1 max-w-md mx-auto">
                      Your default email client has been opened with your message prefilled for <strong className="text-white">{PERSONAL_INFO.contact.email}</strong>.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-mono text-[#38BDF8] hover:text-white bg-[#1E293B] rounded-lg border border-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
