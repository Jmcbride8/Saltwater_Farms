import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import WaterUseDonut from '@/components/WaterUseDonut';

const dripLimitations = [
  {
    title: 'Solves the Wrong Problem',
    desc: 'Drip cuts runoff and deep percolation — not evaporation. In desert heat, 80–90% of water loss happens above ground as crops try to cool themselves. Drip doesn\'t touch that.',
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

export default function DripSection() {
  return (
    <section id="drip-vs-wall" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">Why Not Drip?</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            85% of Water Goes to Farms.<br />
            <span className="text-crisis">Drip Can't Save It.</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Agriculture is the entire problem — and drip irrigation is the obvious answer everyone gets wrong. 
            After decades of subsidies and trials, fewer than <strong className="text-foreground">5% of Imperial Valley acres</strong> use it. 
            Three structural reasons explain why drip fails here — and why we need a fundamentally different approach.
          </p>
        </motion.div>

        <WaterUseDonut />

        {/* Limitations grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {dripLimitations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-muted rounded-xl p-7 border border-border"
            >
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-crisis shrink-0 mt-0.5" />
                <h3 className="font-playfair text-lg font-bold text-foreground">{item.title}</h3>
              </div>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Head-to-head comparison */}
        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-teal-light border border-teal/20 rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <CheckCircle2 className="w-8 h-8 text-teal shrink-0" />
          <div className="flex-1">
            <h4 className="font-playfair text-xl font-bold text-foreground mb-2">
              The Wall Fits the Valley's Existing Reality
            </h4>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              Passive, low-pressure, no emitters to clog. Works with existing flood-friendly crops, IID canal delivery, and local soils. 
              Higher upfront — but the payback comes through <strong className="text-foreground">water-rights monetization</strong>, 
              not just reduced water bills. When water can be sold back to the IID for $300–$800/acre-foot, 
              the economics flip entirely.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-teal text-white font-inter font-semibold text-sm rounded-sm hover:bg-teal/90 transition-all"
            >
              See How It Works <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}