import { motion } from 'framer-motion';
import AdminImageCard from '@/components/AdminImageCard';
import { usePersistedImages } from '@/hooks/usePersistedImages';

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
  const [chapterImgs, updateChapterImg] = usePersistedImages(
    'insight-chapter-images',
    chapters.map(c => c.image)
  );
  const [panelImgs, updatePanelImg] = usePersistedImages(
    'insight-panel-images',
    [
      'https://images.unsplash.com/photo-1581093577421-f561a654a353?w=600&q=80',
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80',
    ]
  );

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
          <p className="font-inter text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
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
                      <p className="font-inter text-sm text-slate-500 leading-relaxed">{ch.body}</p>
                    </div>
                    {/* Image */}
                    <div className="hidden md:block relative">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-teal z-10" />
                      <AdminImageCard
                        src={chapterImgs[i]}
                        alt={ch.imageAlt}
                        onImageChange={(url) => updateChapterImg(i, url)}
                        className="rounded-tr-2xl rounded-br-2xl overflow-hidden h-full min-h-[220px]"
                        imgClassName="w-full h-full object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image */}
                    <div className="hidden md:block relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-teal z-10 translate-x-1/2" />
                      <AdminImageCard
                        src={chapterImgs[i]}
                        alt={ch.imageAlt}
                        onImageChange={(url) => updateChapterImg(i, url)}
                        className="rounded-tl-2xl rounded-bl-2xl overflow-hidden h-full min-h-[220px]"
                        imgClassName="w-full h-full object-cover"
                      />
                    </div>
                    {/* Text blurb */}
                    <div className={`rounded-tr-2xl rounded-br-2xl border ${ch.color} ${ch.bg} p-8 flex flex-col justify-center`}>
                      <p className={`font-inter text-xs font-semibold tracking-[0.2em] uppercase ${ch.accent} mb-2`}>{ch.year} — {ch.crisis}</p>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-4 leading-snug">{ch.headline}</h3>
                      {ch.quote ? (
                        <blockquote className="border-l-4 border-teal pl-4">
                          <p className="font-inter text-sm italic text-slate-500 leading-relaxed">{ch.body}</p>
                        </blockquote>
                      ) : (
                        <p className="font-inter text-sm text-slate-500 leading-relaxed">{ch.body}</p>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* The pivot — parallel analogy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-foreground text-white rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="px-10 md:px-14 pt-12 pb-8 text-center border-b border-white/10">
            <p className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">The Pattern</p>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold leading-snug max-w-2xl mx-auto">
              Can we repeat history?<br />
              <span className="text-teal">We think so.</span>
            </h3>
          </div>

          {/* Two-column comparison */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Left — Haber */}
            <div className="p-10 md:p-12 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-inter text-xs font-semibold tracking-widest uppercase text-white/40">1909</span>
                <span className="h-px flex-1 bg-white/10" />
                <span className="font-inter text-xs font-semibold tracking-widest uppercase text-white/40">Haber-Bosch</span>
              </div>
              <AdminImageCard
                src={panelImgs[0]}
                alt="Industrial gas facility"
                onImageChange={(url) => updatePanelImg(0, url)}
                className="rounded-xl overflow-hidden h-44 mb-6"
                imgClassName="w-full h-full object-cover"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </AdminImageCard>
              <p className="font-inter text-xs font-medium uppercase tracking-widest text-white/40 mb-1">The abundant but useless resource</p>
              <p className="font-playfair text-2xl font-bold text-white mb-3">Atmospheric Nitrogen</p>
              <p className="font-inter text-sm text-white/60 leading-relaxed mb-5">
                78% of the air we breathe — yet crops couldn't absorb it. Written off as inaccessible. Every farmer on earth was limited by it.
              </p>
              <div className="mt-auto pt-5 border-t border-white/10">
                <p className="font-inter text-xs text-white/40 mb-1">The catalyst</p>
                <p className="font-inter text-sm font-medium text-white">A chemical process to fix N₂ into ammonia</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="font-inter text-xs text-white/40 mb-1">The result</p>
                <p className="font-playfair text-lg font-bold text-teal">Fed half the world</p>
              </div>
            </div>

            {/* Right — Saltwater Farms */}
            <div className="p-10 md:p-12 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-inter text-xs font-semibold tracking-widest uppercase text-teal/70">Today</span>
                <span className="h-px flex-1 bg-white/10" />
                <span className="font-inter text-xs font-semibold tracking-widest uppercase text-teal/70">Saltwater Farms</span>
              </div>
              <AdminImageCard
                src={panelImgs[1]}
                alt="Desert landscape with saline aquifer"
                onImageChange={(url) => updatePanelImg(1, url)}
                className="rounded-xl overflow-hidden h-44 mb-6"
                imgClassName="w-full h-full object-cover"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </AdminImageCard>
              <p className="font-inter text-xs font-medium uppercase tracking-widest text-white/40 mb-1">The abundant but useless resource</p>
              <p className="font-playfair text-2xl font-bold text-white mb-3">Underground Brine</p>
              <p className="font-inter text-sm text-white/60 leading-relaxed mb-5">
                Vast saline aquifers run under the entire desert Southwest — too salty for crops or cities. Written off for centuries. Zero market value.
              </p>
              <div className="mt-auto pt-5 border-t border-white/10">
                <p className="font-inter text-xs text-white/40 mb-1">The catalyst</p>
                <p className="font-inter text-sm font-medium text-white">Evaporate it through desert wind to cool farms by 20–40°F</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="font-inter text-xs text-white/40 mb-1">The result</p>
                <p className="font-playfair text-lg font-bold text-teal">Saves the water supply</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-10 md:px-14 py-6 border-t border-white/10 text-center">
            <p className="font-inter text-sm text-white/40 italic">
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
              <p className="font-inter text-sm text-slate-500 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}