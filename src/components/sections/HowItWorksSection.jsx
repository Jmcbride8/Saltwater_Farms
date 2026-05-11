import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Droplets, Thermometer, Leaf, DollarSign, ChevronDown } from 'lucide-react';

const steps = [
  {
    icon: Droplets,
    number: '01',
    title: 'Tap the Brine',
    desc: 'Wells access deep saline aquifers — water so salty it\'s useless for irrigation and has zero market value. Abundant throughout the desert Southwest.',
  },
  {
    icon: Wind,
    number: '02',
    title: 'Build the Cooling Wall',
    desc: 'Brine is pumped through porous evaporative media panels arranged in a wall perpendicular to prevailing desert winds. As hot dry air passes through, water evaporates — cooling the air by 20–40°F.',
  },
  {
    icon: Thermometer,
    number: '03',
    title: 'Create a Sheltered Microclimate',
    desc: 'Cooled, humidified air flows downwind across the farm. Crops experience conditions closer to coastal California — dramatically reducing water stress and evapotranspiration demand.',
  },
  {
    icon: Leaf,
    number: '04',
    title: 'Grow More with Less',
    desc: 'Freshwater irrigation demand drops 40–80%. Higher-value crops like lettuce, spinach, and herbs — previously impractical in summer desert heat — become viable year-round.',
  },
  {
    icon: DollarSign,
    number: '05',
    title: 'Sell the Savings',
    desc: 'Freed-up freshwater allocations can be sold or leased to municipalities, developers, or water banks — generating a new revenue stream for farmers beyond their crops.',
  },
];

function StepsList() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative">
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="md:flex gap-8 items-start relative"
            >
              <div className="hidden md:flex w-16 h-16 shrink-0 rounded-full bg-teal-light border-4 border-white items-center justify-center z-10 shadow-sm">
                <Icon className="w-6 h-6 text-teal" />
              </div>
              <div className="bg-muted rounded-xl flex-1 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-3 px-7 py-5 text-left"
                >
                  <div className="md:hidden w-10 h-10 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <span className="font-inter text-xs font-medium text-teal tracking-widest uppercase shrink-0">{step.number}</span>
                  <h3 className="font-playfair text-xl font-bold text-foreground flex-1">{step.title}</h3>
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
                      <p className="font-inter text-muted-foreground leading-relaxed px-7 pb-6">{step.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">How It Works</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Salt for Water.<br />
            <span className="text-teal">A Simple Trade.</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            No desalination. No complex chemistry. Just the physics of evaporation — proven for millennia — 
            deployed at farm scale with modern engineering.
          </p>
        </motion.div>

        {/* Outcome KPI cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 grid md:grid-cols-3 gap-4"
        >
          {[
            { metric: '40–80%', label: 'Freshwater savings', sub: 'Per irrigated acre' },
            { metric: '20–40°F', label: 'Air temperature reduction', sub: 'Downwind microclimate' },
            { metric: '+1 Month', label: 'Extended cool crop window', sub: 'High-value leafy crops' },
          ].map((item, i) => (
            <div key={i} className="bg-teal text-white rounded-xl p-7 text-center">
              <div className="font-playfair text-4xl font-bold mb-1">{item.metric}</div>
              <div className="font-inter font-medium text-white/90 mb-1">{item.label}</div>
              <div className="font-inter text-sm text-white/60">{item.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Visual schematic image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-2xl overflow-hidden border border-border shadow-sm"
        >
          <img
            src="https://media.base44.com/images/public/69e878868e7a6c3fe098adbd/5cd844788_image.png"
            alt="Saltwater Farms evaporative cooling wall diagram"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Steps */}
        <StepsList />
      </div>
    </section>
  );
}