import { motion } from 'framer-motion';

export default function FoundersSection() {
  return (
    <section className="py-28 bg-muted">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">The Team</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Modern Partnership
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Like Haber and Bosch — one the inventor, one the industrializer — 
            Saltwater Farms pairs deep agricultural innovation with the business 
            infrastructure to scale it globally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {[
            {
              name: 'Charlie Patton',
              role: 'Innovation',
              company: 'Seawater Greenhouse',
              bio: 'Charlie is the inventor behind the evaporative cooling wall technology, refined through years of work with Seawater Greenhouse — a pioneer in using seawater and solar energy to grow crops in arid coastal environments. His breakthroughs in deploying brackish and saline water for agricultural cooling form the scientific core of Saltwater Farms.',
              tag: 'The Fritz Haber',
            },
            {
              name: 'Jason McBride',
              role: 'Industrialization',
              company: 'E2Eden',
              bio: 'Jason brings the Silicon Valley mindset to bear on humanity\'s greatest challenges. Through E2Eden — "A New Dawn for Dead Seas" — his mission is to deploy innovations that are not only world-changing but profitable, mobilizing capital markets to fund planetary-scale solutions. Like Carl Bosch, he builds the engine that takes the innovation to civilization-defining scale.',
              tag: 'The Carl Bosch',
            },
          ].map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl border border-border p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-inter font-semibold text-teal uppercase tracking-widest bg-teal-light px-3 py-1 rounded-full">
                    {person.tag}
                  </span>
                </div>
                <span className="text-xs font-inter text-muted-foreground uppercase tracking-wide">{person.role}</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">{person.name}</h3>
              <p className="font-inter text-sm text-teal font-medium mb-4">{person.company}</p>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-border p-8 text-center"
        >
          <p className="font-inter text-sm text-muted-foreground uppercase tracking-widest mb-3">The Mission</p>
          <p className="font-playfair text-2xl font-bold text-foreground max-w-3xl mx-auto leading-relaxed">
            "Like BASF turned an innovation into an industry at nation-state scale, we bring the Silicon Valley 
            mindset to convert problems into profitable and thus investable solutions — attracting and deploying 
            capital for change."
          </p>
          <p className="font-inter text-teal text-sm font-medium mt-4">— E2Eden Mission Statement</p>
        </motion.div>
      </div>
    </section>
  );
}