import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, ChevronDown } from 'lucide-react';
import WaterUseDonut from '@/components/WaterUseDonut';

const dripLimitations = [
  {
    title: 'Wrong Crops, Wrong Equipment',
    desc: 'Drip was engineered for row crops — tomatoes, strawberries, peppers — where plants are small, spaced wide, and hand- or gently-harvested. The Imperial Valley and Yuma grow field crops: wheat, alfalfa, cotton, lettuce at scale. These are planted with broadcast seeders, harvested with combines and mechanical cutters that run directly over the soil. Buried drip tape gets shredded in a single pass. Surface lines tangle in equipment and rip out. Farmers aren\'t being stubborn — drip is physically incompatible with mechanized field crop production.',
  },
  {
    title: 'Salt Destroys the Soil',
    desc: 'Colorado River water runs 700–850 ppm. Precise drip application concentrates salt in the root zone. Farmers must periodically flood-irrigate to leach it — defeating the entire purpose.',
  },
  {
    title: 'The Economics Never Work',
    desc: 'At $1,500–$5,000/acre upfront with no water-rights monetization, adoption has stayed below 5% for decades. Drip saves on the water bill. It doesn\'t generate new revenue.',
  },
];

const desalLimitations = [
  {
    title: 'The Math Is Brutal',
    desc: 'Industrial desalination costs $800–$2,000 per acre-foot of water. Farmers in the Imperial Valley generate roughly $500–$800 per acre-foot in crop revenue. Even before energy, labor, or land costs — desal puts you underwater before you plant a seed.',
  },
  {
    title: 'Energy Costs Kill the Margin',
    desc: 'Reverse osmosis desalination consumes 3–10 kWh per cubic meter of water. Delivering enough water for a single 500-acre farm requires the energy equivalent of powering hundreds of homes — permanently. There\'s no crop in the world with that margin.',
  },
  {
    title: 'It Ignores the Real Problem',
    desc: 'Desalination adds new supply to a broken system. It doesn\'t reduce the 85% of Colorado River water lost to agricultural evaporation. You\'d need to desalinate an ocean to compensate — while the original problem keeps draining the river.',
  },
];

const pivotLimitations = [
  {
    title: 'It Still Burns Freshwater',
    desc: 'Pivot changes how water is delivered, not where it comes from. You\'re still drawing the same depleted Colorado River allocations. The river keeps draining at the same rate — you\'ve just built a more efficient way to empty it.',
  },
  {
    title: 'Desert Air Steals It Mid-Air',
    desc: 'Overhead spray arcs throw water into 110°F+ air with single-digit humidity. 20–30% evaporates before it ever touches the soil — the exact problem we\'re trying to solve. The heat that steals the water wins twice: once in the air, once in the soil.',
  },
  {
    title: 'Built for the Wrong Ground',
    desc: 'Center pivots need large, flat, contiguous fields and circle-friendly layouts. Much of the Southwest\'s productive acreage is fragmented, terraced, or oddly shaped. At $400–$800/acre upfront with no new revenue stream, adoption only makes sense where the geometry does — and it rarely does here.',
  },
];

function LimitationList({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3 mb-16">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="bg-muted rounded-xl border border-border overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center gap-3 px-6 py-5 text-left"
            >
              <XCircle className="w-5 h-5 text-crisis shrink-0" />
              <h3 className="font-playfair text-lg font-bold text-foreground flex-1">{item.title}</h3>
              <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed px-6 pb-5">{item.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

const tabs = [
  { id: 'drip', label: 'Why Not Drip?' },
  { id: 'pivot', label: 'Why Not Pivot Irrigation?' },
  { id: 'desal', label: 'Why Not Desalination?' },
];

export default function DripSection() {
  const [activeTab, setActiveTab] = useState('drip');

  const isDrip = activeTab === 'drip';
  const isPivot = activeTab === 'pivot';

  return (
    <section id="drip-vs-wall" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">A Difference That Makes a Difference</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            85% of Water Goes to Farms.<br />
            <span className="text-teal">That's Where the Answer Lives.</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Agriculture is the overwhelming majority of Southwest water use — which is exactly why a solution that reclaims farm water moves the needle, and why drip irrigation and desalination, despite decades of investment, never have. They treat the symptoms. We treat the 85%.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted rounded-xl p-1 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg font-inter text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-foreground shadow-sm border border-border'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <WaterUseDonut />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {isDrip ? (
              <LimitationList items={dripLimitations} />
            ) : isPivot ? (
              <>
                {/* Pivot evaporation callout */}
                <div className="bg-crisis/5 border border-crisis/20 rounded-2xl p-6 mb-8 flex flex-col md:flex-row gap-6 items-center">
                  <div className="text-center md:text-left">
                    <div className="font-playfair text-5xl font-bold text-crisis leading-none">30%</div>
                    <div className="font-inter text-sm text-crisis/80 mt-1">of sprayed water lost to desert air</div>
                  </div>
                  <div className="w-px bg-crisis/20 self-stretch hidden md:block" />
                  <div className="text-center md:text-left">
                    <div className="font-playfair text-5xl font-bold text-foreground leading-none">0%</div>
                    <div className="font-inter text-sm text-muted-foreground mt-1">new water created</div>
                  </div>
                  <div className="w-px bg-crisis/20 self-stretch hidden md:block" />
                  <div className="flex-1 font-inter text-sm text-muted-foreground leading-relaxed">
                    Pivot is a delivery upgrade, not a water solution. It still draws the same depleted freshwater — and in desert heat, a third of it evaporates before reaching the soil. You've built a more efficient way to empty the river.
                  </div>
                </div>
                <LimitationList items={pivotLimitations} />
              </>
            ) : (
              <>
                {/* Desal cost callout */}
                <div className="bg-crisis/5 border border-crisis/20 rounded-2xl p-6 mb-8 flex flex-col md:flex-row gap-6 items-center">
                  <div className="text-center md:text-left">
                    <div className="font-playfair text-5xl font-bold text-crisis leading-none">$2,000</div>
                    <div className="font-inter text-sm text-crisis/80 mt-1">per acre-foot — desalination cost</div>
                  </div>
                  <div className="w-px bg-crisis/20 self-stretch hidden md:block" />
                  <div className="text-center md:text-left">
                    <div className="font-playfair text-5xl font-bold text-foreground leading-none">$700</div>
                    <div className="font-inter text-sm text-muted-foreground mt-1">per acre-foot — max crop revenue</div>
                  </div>
                  <div className="w-px bg-crisis/20 self-stretch hidden md:block" />
                  <div className="flex-1 font-inter text-sm text-muted-foreground leading-relaxed">
                    The gap is unbridgeable. No crop — not almonds, not lettuce, not anything — generates enough revenue to pay for desalinated water at scale. The math is fatal before you add labor, land, or energy costs.
                  </div>
                </div>
                <LimitationList items={desalLimitations} />
              </>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}