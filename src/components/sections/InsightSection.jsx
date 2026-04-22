import { motion } from 'framer-motion';

const chapters = [
  {
    year: '1900',
    crisis: 'Global Starvation',
    headline: 'The world was running out of food.',
    body: 'By 1900, every continent faced the same ceiling: not enough nitrogen to grow enough food. Farmers exhausted soil. Empires strip-mined Pacific islands for seabird guano. Malthus seemed right — population would outgrow the planet\'s ability to feed it.',
    stat: '1B+',
    statLabel: 'people at risk of starvation',
    color: 'border-crisis/40',
    accent: 'text-crisis',
    bg: 'bg-crisis/5',
  },
  {
    year: '1909',
    crisis: 'The Breakthrough',
    headline: 'Fritz Haber found nitrogen in thin air.',
    body: 'Atmospheric nitrogen makes up 78% of the air we breathe — but crops can\'t absorb it. Haber discovered a catalyst to fix it into ammonia. Carl Bosch scaled it at a company called BASF. An invisible, abundant, "worthless" gas became the foundation of modern agriculture.',
    stat: '78%',
    statLabel: 'of air is nitrogen — all of it inaccessible to plants',
    color: 'border-teal/40',
    accent: 'text-teal',
    bg: 'bg-teal-light/60',
  },
  {
    year: 'Today',
    crisis: 'The Result',
    headline: 'Half the world eats because of that one discovery.',
    body: '"A third of annual global food production uses ammonia from the Haber–Bosch process, and that food supports nearly half the world\'s population." The locked-up became unlocked. The worthless became essential.',
    stat: '50%',
    statLabel: 'of humanity fed by a single chemistry breakthrough',
    color: 'border-teal/40',
    accent: 'text-teal',
    bg: 'bg-teal-light/60',
    quote: true,
  },
];

export default function InsightSection() {
  return (
    <section id="insight" className="py-28 bg-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">The Precedent</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            This Has Happened Before.
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A hidden, abundant resource — written off as worthless — unlocked to feed a starving world. 
            History is repeating itself.
          </p>
        </motion.div>

        {/* Chapter timeline */}
        <div className="relative mb-20">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {chapters.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className={`md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 1 ? '' : ''}`}
              >
                {/* Left column — alternates */}
                {i % 2 === 0 ? (
                  <>
                    <div className={`rounded-2xl border ${ch.color} ${ch.bg} p-8 md:text-right`}>
                      <p className={`font-inter text-xs font-semibold tracking-[0.2em] uppercase ${ch.accent} mb-2`}>{ch.year} — {ch.crisis}</p>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-4 leading-snug">{ch.headline}</h3>
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed">{ch.body}</p>
                    </div>
                    {/* Center dot */}
                    <div className="hidden md:flex items-center justify-start pl-0 relative">
                      <div className="absolute -left-6 w-4 h-4 rounded-full bg-white border-2 border-teal z-10" />
                      <div className={`ml-6 rounded-xl p-6 border border-border bg-white w-full`}>
                        <div className={`font-playfair text-4xl font-bold ${ch.accent} mb-1`}>{ch.stat}</div>
                        <p className="font-inter text-xs text-muted-foreground">{ch.statLabel}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex items-center justify-end pr-0 relative">
                      <div className={`mr-6 rounded-xl p-6 border border-border bg-white w-full`}>
                        <div className={`font-playfair text-4xl font-bold ${ch.accent} mb-1`}>{ch.stat}</div>
                        <p className="font-inter text-xs text-muted-foreground">{ch.statLabel}</p>
                      </div>
                      <div className="absolute -right-6 w-4 h-4 rounded-full bg-white border-2 border-teal z-10" />
                    </div>
                    <div className={`rounded-2xl border ${ch.color} ${ch.bg} p-8`}>
                      <p className={`font-inter text-xs font-semibold tracking-[0.2em] uppercase ${ch.accent} mb-2`}>{ch.year} — {ch.crisis}</p>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-4 leading-snug">{ch.headline}</h3>
                      {ch.quote ? (
                        <blockquote className="border-l-4 border-teal pl-4">
                          <p className="font-inter text-sm italic text-muted-foreground leading-relaxed">{ch.body}</p>
                        </blockquote>
                      ) : (
                        <p className="font-inter text-sm text-muted-foreground leading-relaxed">{ch.body}</p>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* The pivot — "Now it's water" */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-foreground text-white rounded-2xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <p className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-4">Now It's Water</p>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-5 leading-snug">
              The Southwest sits on an ocean of useless brine.
            </h3>
            <p className="font-inter text-white/70 leading-relaxed mb-5">
              Deep saline aquifers run under the entire desert Southwest — salty water so concentrated it's 
              been written off for centuries. No crop can drink it. No city will pipe it. Zero market value.
            </p>
            <p className="font-inter text-white/70 leading-relaxed">
              Saltwater Farms doesn't try to purify it. We <em className="text-white not-italic font-medium">evaporate</em> it — 
              using the desert's own heat and wind to cool farm air by 20–40°F. 
              The brine does the work. The freshwater is saved.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { resource: 'Atmospheric N₂', worthless: 'Can\'t feed crops', unlocked: 'Haber-Bosch', icon: '⚗️' },
              { resource: 'Underground brine', worthless: 'Can\'t irrigate', unlocked: 'Saltwater Farms', icon: '🌊' },
            ].map((row, i) => (
              <div key={i} className={`rounded-xl p-5 ${i === 1 ? 'bg-teal' : 'bg-white/10'}`}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{row.icon}</span>
                  <div className="flex-1">
                    <p className={`font-inter text-xs font-semibold uppercase tracking-wide mb-1 ${i === 1 ? 'text-white/60' : 'text-white/50'}`}>The Resource</p>
                    <p className="font-playfair text-lg font-bold text-white mb-2">{row.resource}</p>
                    <div className="flex items-center gap-3">
                      <span className={`font-inter text-xs px-2 py-0.5 rounded ${i === 1 ? 'bg-white/20 text-white/70' : 'bg-white/10 text-white/50'}`}>
                        ✗ {row.worthless}
                      </span>
                      <span className="text-white/30 text-xs">→</span>
                      <span className={`font-inter text-xs px-2 py-0.5 rounded font-semibold ${i === 1 ? 'bg-white text-teal' : 'bg-teal text-white'}`}>
                        ✓ {row.unlocked}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <p className="font-inter text-xs text-white/40 text-center pt-2">
              Same pattern. Different century. Same scale of impact.
            </p>
          </div>
        </motion.div>

        {/* Water math — bottom stats */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { value: '85%', label: 'of Southwest freshwater goes to agriculture', accent: 'text-crisis' },
            { value: '10×', label: 'more water lost to desert heat vs. temperate farms', accent: 'text-crisis' },
            { value: '40–80%', label: 'freshwater savings with evaporative cooling', accent: 'text-teal' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 border border-border text-center"
            >
              <div className={`font-playfair text-4xl font-bold mb-2 ${s.accent}`}>{s.value}</div>
              <p className="font-inter text-sm text-muted-foreground leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}