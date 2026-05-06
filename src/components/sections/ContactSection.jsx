import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('loading');
    await base44.integrations.Core.SendEmail({
      to: 'jason@e2eden.com',
      subject: `Investor Inquiry from ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    });
    setStatus('success');
  };

  return (
    <section id="contact" className="py-28 bg-muted">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">Get in Touch</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interested in Investing?
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're actively engaging strategic investors and partners who want to be part of the solution to the US Southwest's water crisis. Reach out to start a conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left panel */}
            <div className="bg-teal p-10 flex flex-col justify-between">
              <div>
                <p className="font-inter text-white/70 text-xs uppercase tracking-widest mb-6">Why Now</p>
                <div className="space-y-6">
                  {[
                    { label: 'Proven Technology', desc: 'Field-validated at our Oman test site. Not a concept — a working system.' },
                    { label: 'Massive Market', desc: '$1.5T+ in economic output at risk across the US Southwest alone.' },
                    { label: 'Near 99% Margins', desc: 'Water rights trading creates a recurring, high-margin revenue stream.' },
                    { label: 'Urgent Timeline', desc: 'Lake Mead reaches dead pool by end of 2026. The window is now.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0" />
                      <div>
                        <p className="font-inter font-semibold text-white text-sm mb-0.5">{item.label}</p>
                        <p className="font-inter text-white/65 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="font-inter text-white/60 text-xs">Direct inquiries</p>
                <a href="mailto:jason@e2eden.com" className="font-inter text-white text-sm font-medium mt-1 block hover:underline">
                  jason@e2eden.com
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <CheckCircle2 className="w-12 h-12 text-teal mb-4" />
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">Message Sent</h3>
                  <p className="font-inter text-muted-foreground text-sm">
                    Thank you, {form.name}. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Your Name *</label>
                    <input
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      required
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      required
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="jane@fund.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Message</label>
                    <textarea
                      value={form.message}
                      onChange={e => set('message', e.target.value)}
                      rows={4}
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
                      placeholder="Tell us about your interest, fund size, or questions…"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 bg-teal text-white font-inter font-semibold rounded-lg hover:bg-teal/90 transition-colors flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                    ) : (
                      <><Mail className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}