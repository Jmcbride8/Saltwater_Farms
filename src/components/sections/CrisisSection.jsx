import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '1,083', unit: 'ft', label: 'Lake Mead water level in 2022', note: 'vs. 1,229 ft full pool', crisis: true },
  { value: '40M', unit: '+', label: 'People depend on the Colorado River', note: 'across 7 states + Mexico', crisis: false },
  { value: '895 ft', unit: '', label: '"Dead Pool" threshold', note: 'No water flows past Hoover Dam', crisis: true },
  { value: '$1.5T', unit: '+', label: 'Economic output at risk', note: 'Agriculture, cities, industry', crisis: false },
];

function StatCard({ value, unit, label, note, crisis, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      className={`p-8 rounded-lg border ${crisis ? 'border-crisis/30 bg-crisis/5' : 'border-border bg-white'}`}
    >
      <div className={`font-playfair text-4xl md:text-5xl font-bold mb-1 ${crisis ? 'text-crisis' : 'text-teal'}`}>
        {value}<span className="text-2xl">{unit}</span>
      </div>
      <div className="font-inter text-base font-medium text-foreground mb-1">{label}</div>
      <div className="font-inter text-sm text-muted-foreground">{note}</div>
    </motion.div>
  );
}

export default function CrisisSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="crisis" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-crisis mb-4">The Crisis</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hoover Dam Is Running Dry
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Colorado River — lifeblood of the American Southwest — is approaching a point of no return. 
            Lake Mead has dropped to levels not seen since the dam was first filled. If it reaches "dead pool," 
            Hoover Dam stops generating power and stops delivering water entirely.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => <StatCard key={i} {...s} i={i} />)}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
              The Downstream Cascade
            </h3>
            <div className="space-y-4">
              {[
                { icon: '🌾', title: 'Agriculture collapses', text: 'Imperial Valley, Yuma, and Phoenix-area farms — which supply 90% of U.S. winter vegetables — go dry.' },
                { icon: '🏙️', title: 'Cities face rationing', text: 'Las Vegas, Phoenix, Los Angeles, San Diego, and Tucson all draw from the Colorado system.' },
                { icon: '⚡', title: 'Power grid disrupted', text: 'Hoover Dam\'s 2,000+ megawatts power millions of homes. Dead pool ends that entirely.' },
                { icon: '🐟', title: 'Ecosystems destroyed', text: 'The Colorado River Delta, once one of North America\'s richest wetlands, is already a shadow of itself.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-inter font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
              alt="Drought-stricken reservoir"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="font-inter text-white text-sm font-medium">Lake Mead at record lows</p>
              <p className="font-inter text-white/70 text-xs">The "bathtub ring" of exposed rock tells the story</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}