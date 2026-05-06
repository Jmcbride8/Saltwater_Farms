import { motion } from 'framer-motion';
import AdminImageCard from '@/components/AdminImageCard';
import { usePersistedImages } from '@/hooks/usePersistedImages';

const chapters = [
  // — Nitrogen arc —
  {
    id: 'nitrogen-starvation',
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
    id: 'nitrogen-breakthrough',
    year: '1909',
    crisis: 'The Breakthrough',
    headline: 'Fritz Haber literally turned air into fertilizer.',
    body: 'Atmospheric nitrogen makes up 78% of the air we breathe — but crops can\'t absorb it. Haber discovered a catalyst to fix it into ammonia. Carl Bosch scaled it at BASF. An invisible, "worthless" gas became the foundation of modern agriculture.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
    imageAlt: 'Industrial chemistry laboratory',
    color: 'border-teal/40',
    accent: 'text-teal',
    bg: 'bg-teal-light/60',
  },
  {
    id: 'nitrogen-result',
    year: 'Result',
    crisis: 'Half the World Fed',
    headline: '6 billion people fed. An empire built.',
    body: 'Haber–Bosch now underpins a third of all global food production — feeding over 6 billion people who could not otherwise exist. BASF became one of the most dominant chemical companies on earth, powering the German economy to this day. One "worthless" molecule. Infinite leverage.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80',
    imageAlt: 'Abundant green farmland from above',
    color: 'border-teal/40',
    accent: 'text-teal',
    bg: 'bg-teal-light/60',
    quote: true,
    darkBg: true,
  },
  // — element divider —
  { elementDivider: true },
  // — Water arc —
  {
    id: 'water-crisis',
    year: 'Today',
    crisis: 'Water Crisis',
    headline: 'The Southwest is running out of water.',
    body: 'Agriculture consumes 85% of the region\'s freshwater, yet desert heat evaporates a staggering portion of it before it ever reaches a crop. Lake Mead is at historic lows. The Colorado River is approaching dead pool. The clock is running.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    imageAlt: 'Cracked dry lakebed',
    color: 'border-crisis/40',
    accent: 'text-crisis',
    bg: 'bg-crisis/5',
  },
  {
    id: 'water-breakthrough',
    year: 'Today',
    crisis: 'The Breakthrough',
    headline: 'Underground brine — written off for centuries.',
    body: 'Vast saline aquifers run beneath the entire desert Southwest — too salty for crops or cities. Zero market value. But pump it to the surface and let desert wind evaporate it, and it cools the air by 20–40°F — slashing the heat that steals the water.',
    image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80',
    imageAlt: 'Desert landscape saline aquifer',
    color: 'border-teal/40',
    accent: 'text-teal',
    bg: 'bg-teal-light/60',
  },
  {
    id: 'water-result',
    year: 'Result',
    crisis: 'Water Supply Saved',
    headline: '40–80% less freshwater. For every farm that joins.',
    body: 'The worthless becomes the solution. Each farm that switches to evaporative brine cooling frees up enormous freshwater allocations — allocations that can be sold back at near 99% margins. Scarcity becomes profit.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    imageAlt: 'Irrigated green fields from above',
    color: 'border-teal/40',
    accent: 'text-teal',
    bg: 'bg-teal-light/60',
    quote: true,
    darkBg: true,
  },
];

// images array excludes divider entries
const defaultImages = chapters.filter(c => !c.elementDivider).map(c => c.image);
const chapterIds = chapters.filter(c => !c.elementDivider).map(c => c.id);

export default function InsightSection() {
  const [chapterImgs, updateChapterImg] = usePersistedImages('insight', defaultImages, chapterIds);

  // map back: index into non-divider chapters
  let imgIdx = -1;

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
            It's Been Done Before.<br />
            <span className="text-teal">Can We Repeat the Feat?</span>
          </h2>
          <p className="font-inter text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            In 1909, a "worthless" gas saved the world from starvation. Today, a "worthless" brine sits beneath the most water-stressed farmland on earth. The pattern is identical. The question is whether we act.
          </p>
        </motion.div>

        {/* Unified timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {chapters.map((ch, i) => {
              if (ch.elementDivider) {
                return (
                  <motion.div
                    key="element-divider"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="py-10 relative z-10 bg-muted"
                  >
                    {/* "Solved" label */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-border" />
                      <span className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap px-4 py-1.5 border border-border rounded-full bg-background">
                        Same Pattern — New Crisis
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>

                    {/* Element cards side-by-side */}
                    <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
                      {/* NH₃ — Solved */}
                      <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video">
                        <img
                          src="https://media.base44.com/images/public/69e878868e7a6c3fe098adbd/ab7925960_Ammonia.png"
                          alt="NH3 Ammonia — for hungry crops"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="font-inter text-xs font-bold text-white/80 uppercase tracking-widest">Solved ✓</span>
                        </div>
                      </div>

                      {/* H₂O — Next */}
                      <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video">
                        <img
                          src="https://media.base44.com/images/public/69e878868e7a6c3fe098adbd/dd39e7aae_Water.png"
                          alt="H2O Water — for thirsty crops"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="font-inter text-xs font-bold text-white/80 uppercase tracking-widest">Next →</span>
                        </div>
                      </div>
                    </div>

                    <p className="font-inter text-sm text-center text-muted-foreground mt-5 max-w-sm mx-auto">
                      Haber solved nitrogen in 1909. The water crisis is today's equivalent — waiting for its breakthrough.
                    </p>
                  </motion.div>
                );
              }

              imgIdx++;
              const localIdx = imgIdx;
              // Alternate layout: even = text-left / image-right, odd = image-left / text-right
              // But divider resets nothing — we count actual chapter rows
              const row = chapters.slice(0, i).filter(c => !c.elementDivider).length;
              const isEven = row % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  className="md:grid md:grid-cols-2 md:gap-0 items-stretch"
                >
                  {isEven ? (
                    <>
                      <div className={`rounded-tl-2xl rounded-bl-2xl border ${ch.color} ${ch.bg} p-8 md:text-right flex flex-col justify-center`}>
                        <p className={`font-inter text-xs font-semibold tracking-[0.2em] uppercase ${ch.accent} mb-2`}>{ch.year} — {ch.crisis}</p>
                        <h3 className="font-playfair text-2xl font-bold text-foreground mb-4 leading-snug">{ch.headline}</h3>
                        {ch.quote ? (
                          <blockquote className="border-r-4 border-teal pr-4 md:text-right">
                            <p className="font-inter text-sm italic text-slate-500 leading-relaxed">{ch.body}</p>
                          </blockquote>
                        ) : (
                          <p className="font-inter text-sm text-slate-500 leading-relaxed">{ch.body}</p>
                        )}
                      </div>
                      <div className="hidden md:block relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-teal z-10" />
                          <AdminImageCard
                            src={chapterImgs[localIdx]}
                            alt={ch.imageAlt}
                            onImageChange={(url) => updateChapterImg(localIdx, url)}
                            className="rounded-tr-2xl rounded-br-2xl overflow-hidden h-full min-h-[280px]"
                                                     imgClassName="w-full h-full object-cover"
                                                   />
                                               </div>
                                             </>
                                           ) : (
                                             <>
                                               <div className="hidden md:block relative">
                                                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-teal z-10" />
                                                   <AdminImageCard
                                                     src={chapterImgs[localIdx]}
                                                     alt={ch.imageAlt}
                                                     onImageChange={(url) => updateChapterImg(localIdx, url)}
                                                     className="rounded-tl-2xl rounded-bl-2xl overflow-hidden h-full min-h-[280px]"
                            imgClassName="w-full h-full object-cover"
                          />
                      </div>
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
              );
            })}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
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