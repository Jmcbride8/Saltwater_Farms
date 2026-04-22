import { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const locations = [
  'Imperial Valley, CA',
  'Yuma, AZ',
  'Phoenix, AZ',
  'Tucson, AZ',
  'Coachella Valley, CA',
  'Other Arizona',
  'Other California',
  'Other',
];

const farmSizes = ['Under 50 acres', '50–200 acres', '200–500 acres', '500–1,000 acres', 'Over 1,000 acres'];
const interestLevels = ['Just exploring', 'Seriously interested', 'Ready to pilot'];

const initialForm = {
  first_name: '', last_name: '', email: '', phone: '',
  farm_name: '', location: '', farm_acres: '', primary_crops: '',
  interest_level: '', notes: '', deposit_amount: 500,
};

export default function PresaleSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.email || !form.location || !form.farm_acres) {
      setError('Please fill in all required fields.');
      return;
    }
    setStatus('loading');
    setError('');
    await base44.entities.FarmerDeposit.create(form);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <section id="presale" className="py-28 bg-teal">
        <div className="max-w-xl mx-auto px-6 text-center">
          <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">You're on the List</h2>
          <p className="font-inter text-white/80 text-lg leading-relaxed mb-6">
            Thank you, {form.first_name}. We'll be in touch as we finalize our pilot program details. 
            Early access depositors get priority placement and locked-in pricing.
          </p>
          <p className="font-inter text-white/60 text-sm">
            Expected pilot outreach: Q3 2026 · Commercial deployment: 2028
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="presale" className="py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">Early Access</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Reserve Your<br />
              <span className="text-teal">Farm's Spot</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
              We're building a waitlist of Imperial Valley and Arizona farmers who want to be the 
              first to deploy Saltwater Farms technology when our pilot data is validated.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: '🔒', title: 'Priority placement', desc: 'First-come, first-served installation queue once commercial systems are ready in 2028.' },
                { icon: '💰', title: 'Locked pricing', desc: 'Early access depositors lock in pilot-era pricing — before broader market rollout.' },
                { icon: '🤝', title: 'Co-design input', desc: 'Help shape the system design for your specific crops, land, and water conditions.' },
                { icon: '♻️', title: 'Fully refundable', desc: 'Your $500 deposit is 100% refundable if we don\'t meet our technical milestones by 2028.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-inter font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="font-inter text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-border p-6">
              <p className="font-inter text-sm text-muted-foreground mb-2">Target launch regions</p>
              <div className="flex gap-2 flex-wrap">
                {['Imperial Valley, CA', 'Yuma, AZ', 'Phoenix Basin, AZ', 'Coachella Valley, CA'].map(r => (
                  <span key={r} className="text-xs font-inter font-medium bg-teal-light text-teal px-3 py-1.5 rounded-full">{r}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-playfair text-2xl font-bold text-foreground">Reserve Early Access</h3>
                <div className="text-right">
                  <div className="font-playfair text-2xl font-bold text-teal">$500</div>
                  <div className="font-inter text-xs text-muted-foreground">Refundable deposit</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">First Name *</label>
                    <input value={form.first_name} onChange={e => set('first_name', e.target.value)}
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Last Name *</label>
                    <input value={form.last_name} onChange={e => set('last_name', e.target.value)}
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="Smith" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Email *</label>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                    placeholder="jane@smithfarms.com" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Phone</label>
                    <input value={form.phone} onChange={e => set('phone', e.target.value)}
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="(760) 555-0100" />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Farm Name</label>
                    <input value={form.farm_name} onChange={e => set('farm_name', e.target.value)}
                      className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="Smith Farms LLC" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Location *</label>
                  <select value={form.location} onChange={e => set('location', e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-white">
                    <option value="">Select your region…</option>
                    {locations.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Farm Size *</label>
                  <select value={form.farm_acres} onChange={e => set('farm_acres', e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors bg-white">
                    <option value="">Select farm size…</option>
                    {farmSizes.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Primary Crops</label>
                  <input value={form.primary_crops} onChange={e => set('primary_crops', e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                    placeholder="Lettuce, alfalfa, dates…" />
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Interest Level</label>
                  <div className="grid grid-cols-3 gap-2">
                    {interestLevels.map(lvl => (
                      <button key={lvl} type="button" onClick={() => set('interest_level', lvl)}
                        className={`text-xs font-inter py-2 px-2 rounded-lg border transition-colors ${
                          form.interest_level === lvl
                            ? 'bg-teal text-white border-teal'
                            : 'bg-white text-muted-foreground border-border hover:border-teal/40'
                        }`}>
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-muted-foreground mb-1.5">Anything else?</label>
                  <textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={3}
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
                    placeholder="Your water situation, specific crops, questions…" />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-crisis text-sm font-inter">
                    <AlertCircle className="w-4 h-4" /> {error}
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="w-full py-4 bg-teal text-white font-inter font-semibold rounded-lg hover:bg-teal/90 transition-colors flex items-center justify-center gap-2 text-base">
                  {status === 'loading' ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                  ) : (
                    'Reserve My Spot — $500 Refundable'
                  )}
                </button>

                <p className="font-inter text-xs text-muted-foreground text-center">
                  No charge today. We'll contact you to complete your deposit. 100% refundable through 2028.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}