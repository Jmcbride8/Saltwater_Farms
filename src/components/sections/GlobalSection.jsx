import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const regions = [
  {
    name: 'Imperial Valley & Coachella, CA',
    flag: '🇺🇸',
    context: 'Supplies 90% of U.S. winter vegetables. Facing mandatory Colorado River cutbacks of 20–40%.',
    opportunity: 'Immediate — largest water-stressed farming district in the U.S.',
    priority: 'Primary Market',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    name: 'Arizona: Yuma & Phoenix Basin',
    flag: '🇺🇸',
    context: 'Arizona faces the steepest Colorado River cuts. Yuma grows 90% of U.S. leafy greens in winter.',
    opportunity: 'Critical — farmers are already fallowing land for water credits.',
    priority: 'Primary Market',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    name: 'Jordan River Valley',
    flag: '🇯🇴',
    context: 'One of the world\'s most water-stressed regions. The Dead Sea is shrinking by 1 meter per year.',
    opportunity: 'Jordan, Israel, and Palestine share a river at a fraction of its historical flow.',
    priority: 'Near-Term Expansion',
    image: 'https://images.unsplash.com/photo-1466220549276-aef9ce186540?w=600&q=80',
  },
  {
    name: 'Australian Outback',
    flag: '🇦🇺',
    context: 'Massive saline aquifer systems underlie much of inland Australia. Extreme heat limits agriculture.',
    opportunity: 'Vast brine resources + existing farming infrastructure in Murray-Darling Basin.',
    priority: 'Near-Term Expansion',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80',
  },
  {
    name: 'Sahara & North Africa',
    flag: '🌍',
    context: 'The Nubian Sandstone Aquifer holds one of the world\'s largest fossil water reserves — mostly saline.',
    opportunity: 'Morocco, Egypt, Tunisia seeking food self-sufficiency with minimal water.',
    priority: 'Long-Term Vision',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80',
  },
  {
    name: 'Atacama & Coastal Chile/Peru',
    flag: '🇨🇱',
    context: 'Driest non-polar desert on Earth. Proximity to the Pacific creates unique evaporative dynamics.',
    opportunity: 'Growing water stress threatens copper mining and emerging agriculture.',
    priority: 'Long-Term Vision',
    image: 'https://images.unsplash.com/photo-1531761535209-3405e3c2413e?w=600&q=80',
  },
];

const priorityColors = {
  'Primary Market': 'bg-teal text-white',
  'Near-Term Expansion': 'bg-teal-light text-teal',
  'Long-Term Vision': 'bg-muted text-muted-foreground',
};

export default function GlobalSection() {
  return (
    <section id="global" className="py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Globe className="w-8 h-8 text-teal" />
          </div>
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">Global Opportunity</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where Brine Meets Need
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The pattern repeats everywhere: hot, dry climate + saline aquifer + stressed freshwater supply + farmland. 
            These regions don't need more freshwater. They need a smarter way to use what they have underground.
          </p>
        </motion.div>

        {/* Dead seas targets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-foreground text-white rounded-2xl p-8 mb-12"
        >
          <h3 className="font-playfair text-2xl font-bold mb-3">Farm Dead Seas & Deserts Worldwide</h3>
          <p className="font-inter text-white/70 text-sm leading-relaxed mb-6 max-w-2xl">
            Every evaporating salt body on Earth is a potential brine source. Every adjacent desert is a potential farm. 
            These locations share a common trait: abundant saline water, desperate freshwater scarcity.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Salton Sea, CA', 'Great Salt Lake, UT', 'The Dead Sea, Jordan', 'Lake Eyre, Australia', 'Chott el Djerid, Tunisia', 'Qattara Depression, Egypt'].map(loc => (
              <span key={loc} className="font-inter text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white/80">
                {loc}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={region.image} alt={region.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-inter font-semibold px-3 py-1 rounded-full ${priorityColors[region.priority]}`}>
                    {region.priority}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{region.flag}</span>
                  <h3 className="font-playfair text-lg font-bold text-foreground">{region.name}</h3>
                </div>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-3">{region.context}</p>
                <div className="pt-3 border-t border-border">
                  <p className="font-inter text-xs font-medium text-teal">{region.opportunity}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}