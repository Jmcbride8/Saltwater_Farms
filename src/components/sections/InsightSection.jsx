import { motion } from 'framer-motion';

const chapters = [
  {
    year: '1900',
    crisis: 'Global Starvation',
    headline: 'The world was running out of food.',
    body: 'By 1900, every continent faced the same ceiling: not enough nitrogen to grow enough food. Farmers exhausted soil. Empires strip-mined Pacific islands for seabird guano. Malthus seemed right — population would outgrow the planet\'s ability to feed it.',
    image: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=600&q=80',
    imageAlt: 'Barren cracked farmland',
    color: 'border-crisis/40',
    accent: 'text-crisis',
    bg: 'bg-crisis/5',
  },
  {
    year: '1909',
    crisis: 'The Breakthrough',
    headline: 'Fritz Haber found nitrogen in thin air.',
    body: 'Atmospheric nitrogen makes up 78% of the air we breathe — but crops can\'t absorb it. Haber discovered a catalyst to fix it into ammonia. Carl Bosch scaled it at a company called BASF. An invisible, abundant, "worthless" gas became the foundation of modern agriculture.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
    imageAlt: 'Industrial chemistry laboratory',
    color: 'border-teal/40',
    accent: 'text-teal',
    bg: 'bg-teal-light/60',
  },
  {
    year: 'Today',
    crisis: 'The Result',
    headline: 'Half the world eats because of that one discovery.',
    body: '"A third of annual global food production uses ammonia from the Haber–Bosch process, and that food supports nearly half the world\'s population." The locked-up became unlocked. The worthless became essential.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80',
    imageAlt: 'Abundant green farmland from above',
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
                className="md:grid md:grid-cols-2 md:gap-0 items-stretch"
              >
                {i % 2 === 0 ? (
                  <>
                    {/* Text blurb */}
                    <div className={`rounded-tl-2xl rounded-bl-2xl border ${ch.color} ${ch.bg} p-8 md:text-right flex flex-col justify-center`}>
                      <p className={`font-inter text-xs font-semibold tracking-[0.2em] uppercase ${ch.accent} mb-2`}>{ch.year} — {ch.crisis}</p>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-4 leading-snug">{ch.headline}</h3>
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed">{ch.body}</p>
                    </div>
                    {/* Image */}
                    <div className="hidden md:block relative">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-teal z-10" />
                      <div className="rounded-tr-2xl rounded-br-2xl overflow-hidden h-full min-h-[220px]">
                        <img src={ch.image} alt={ch.imageAlt} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image */}
                    <div className="hidden md:block relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-teal z-10 translate-x-1/2" />
                      <div className="rounded-tl-2xl rounded-bl-2xl overflow-hidden h-full min-h-[220px]">
                        <img src={ch.image} alt={ch.imageAlt} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    {/* Text blurb */}
                    <div className={`rounded-tr-2xl rounded-br-2xl border ${ch.color} ${ch.bg} p-8 flex flex-col justify-center`}>
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
              {
                resource: 'Atmospheric N₂',
                label: '1909 — Haber-Bosch',
                tag: 'Written off as inaccessible',
                result: 'Fed half the world',
                image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?w=600&q=80',
                imageAlt: 'Industrial gas facility',
              },
              {
                resource: 'Underground brine',
                label: 'Today — Saltwater Farms',
                tag: 'Written off as worthless',
                result: 'Saves the water supply',
                image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80',
                imageAlt: 'Desert landscape with underground water',
              },
            ].map((row, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 flex h-28">
                <div className="w-36 shrink-0 relative">
                  <img src={row.image} alt={row.imageAlt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className={`flex-1 p-4 flex flex-col justify-center ${i === 1 ? 'bg-teal' : 'bg-white/10'}`}>
                  <p className="font-inter text-xs text-white/60 mb-1">{row.label}</p>
                  <p className="font-playfair text-base font-bold text-white mb-2">{row.resource}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-inter text-xs text-white/50 line-through">{row.tag}</span>
                    <span className="text-white/30">→</span>
                    <span className={`font-inter text-xs font-semibold ${i === 1 ? 'text-white' : 'text-teal'}`}>{row.result}</span>
                  </div>
                </div>
              </div>
            ))}
            <p className="font-inter text-xs text-white/40 text-center pt-1">
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