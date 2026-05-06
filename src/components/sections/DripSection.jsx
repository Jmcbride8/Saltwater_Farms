import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, ChevronDown } from 'lucide-react';
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
  const [openIndex, setOpenIndex] = useState(null);

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
        <div className="space-y-3 mb-16">
          {dripLimitations.map((item, i) => {
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



      </div>
    </section>
  );
}