import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CrisisNews from '@/components/sections/CrisisNews';
import AdminImageCard from '@/components/AdminImageCard';
import { usePersistedImages } from '@/hooks/usePersistedImages';

const stats = [
  { value: '40M', unit: '+', label: 'People depend on the Colorado River', note: 'across 7 states + Mexico', crisis: false },
  { value: '$1.5T', unit: '+', label: 'Economic output at risk', note: 'Agriculture, cities, industry', crisis: false },
];

const defaultCards = [
  {
    id: 'agriculture-collapses',
    stat: '90%',
    label: 'of U.S. winter vegetables',
    title: 'Agriculture Collapses',
    text: 'Imperial Valley, Yuma, and Phoenix-area farms — the nation\'s winter salad bowl — go dry. Supermarket shelves empty. Food prices spike nationwide.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  },
  {
    id: 'cities-face-rationing',
    stat: '40M+',
    label: 'people cut off',
    title: 'Cities Face Rationing',
    text: 'Las Vegas, Phoenix, Los Angeles, San Diego, Tucson. Every major Southwest city draws from the Colorado. Mandatory cuts begin. Growth stops.',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
  },
  {
    id: 'power-grid-disrupted',
    stat: '2,080',
    label: 'megawatts gone dark',
    title: 'Power Grid Disrupted',
    text: 'Hoover Dam\'s hydroelectric output powers millions of homes across Nevada, Arizona, and California. Dead pool silences it permanently.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  },
  {
    id: 'ecosystems-erased',
    stat: '100%',
    label: 'of the delta, gone',
    title: 'Ecosystems Erased',
    text: 'The Colorado River Delta — once one of North America\'s richest wetlands — is already a ghost of itself. Dead pool makes it official.',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
  },
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

    </motion.div>
  );
}

export default function CrisisSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [cardImgs, updateImg] = usePersistedImages('crisis', [
    ...defaultCards.map(c => c.img),
    'https://images.unsplash.com/photo-1577720643272-265ef5a79f3b?w=800&q=80',
    'https://images.unsplash.com/photo-1606070945920-f3cda9f69e5a?w=800&q=80',
  ], [
    ...defaultCards.map(c => c.id),
    'hoover-then',
    'hoover-now',
  ]);

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
            Hoover Dam Reaches Dead Pool by End of 2026
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lake Mead is on track to hit dead pool before the end of 2026. When it does, Hoover Dam stops generating power and stops delivering water — permanently. 40 million people across 7 states lose their primary water source overnight.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 mb-16">
          {/* Then — with KPI overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AdminImageCard
              src={cardImgs[defaultCards.length]}
              alt="Hoover Dam at full capacity"
              onImageChange={(url) => updateImg(defaultCards.length, url)}
              className="relative rounded-lg overflow-hidden h-64 group"
              imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
              <div className="absolute top-0 left-0 right-0 p-5">
                <div className="font-playfair text-6xl font-bold text-white leading-none">40M<span className="text-3xl">+</span></div>
                <div className="font-inter text-xs text-white/80 mt-1">People depend on the Colorado River</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="font-playfair text-sm font-bold text-white">1994–2010</h4>
                <p className="font-inter text-xs text-white/70">At full capacity</p>
              </div>
            </AdminImageCard>
          </motion.div>

          {/* Now — with KPI overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <AdminImageCard
              src={cardImgs[defaultCards.length + 1]}
              alt="Hoover Dam near dead pool"
              onImageChange={(url) => updateImg(defaultCards.length + 1, url)}
              className="relative rounded-lg overflow-hidden h-64 group"
              imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
              <div className="absolute top-0 left-0 right-0 p-5">
                <div className="font-playfair text-6xl font-bold text-white leading-none">$1.5T<span className="text-3xl">+</span></div>
                <div className="font-inter text-xs text-white/80 mt-1">Economic output at risk</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="font-playfair text-sm font-bold text-white">2023–2024</h4>
                <p className="font-inter text-xs text-white/70">Near dead pool</p>
              </div>
            </AdminImageCard>
          </motion.div>
        </div>

        {/* Downstream Cascade */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="font-inter text-sm font-medium tracking-[0.2em] uppercase text-crisis mb-3">The Downstream Cascade</p>
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-10">
            When the River Dies, Everything Dies With It
          </h3>
        </motion.div>

        {/* Downstream Cascade */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {defaultCards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <AdminImageCard
                src={cardImgs[i] || item.img}
                fallbackSrc={item.img}
                alt={item.title}
                onImageChange={(url) => updateImg(i, url)}
                className="relative rounded-2xl overflow-hidden h-64 group"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                  <div className="self-end text-right">
                    <div className="font-playfair text-3xl font-bold text-white leading-none">{item.stat}</div>
                    <div className="font-inter text-xs text-white/60 mt-1">{item.label}</div>
                  </div>
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="font-inter text-xs text-white/70 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </AdminImageCard>
            </motion.div>
          ))}
        </div>

        <CrisisNews />
      </div>
    </section>
  );
}