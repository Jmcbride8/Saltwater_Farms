import { motion } from 'framer-motion';
import { Wind, Droplets, Thermometer, Leaf, DollarSign } from 'lucide-react';

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

        {/* Steps */}
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="md:flex gap-8 items-start relative"
                >
                  <div className="hidden md:flex w-16 h-16 shrink-0 rounded-full bg-teal-light border-4 border-white items-center justify-center z-10 shadow-sm">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <div className="bg-muted rounded-xl p-7 flex-1 md:ml-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="md:hidden w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal" />
                      </div>
                      <span className="font-inter text-xs font-medium text-teal tracking-widest uppercase">{step.number}</span>
                      <h3 className="font-playfair text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="font-inter text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Outcome callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid md:grid-cols-3 gap-4"
        >
          {[
            { metric: '40–80%', label: 'Freshwater savings', sub: 'Per irrigated acre' },
            { metric: '20–40°F', label: 'Air temperature reduction', sub: 'Downwind microclimate' },
            { metric: '3–4×', label: 'More growing seasons', sub: 'High-value leafy crops' },
          ].map((item, i) => (
            <div key={i} className="bg-teal text-white rounded-xl p-7 text-center">
              <div className="font-playfair text-4xl font-bold mb-1">{item.metric}</div>
              <div className="font-inter font-medium text-white/90 mb-1">{item.label}</div>
              <div className="font-inter text-sm text-white/60">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}