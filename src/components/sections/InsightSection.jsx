import { motion } from 'framer-motion';

export default function InsightSection() {
  return (
    <section id="insight" className="py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">The Insight</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Agriculture Is the Problem — <br className="hidden md:block" />
            <span className="text-teal">And the Solution</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Farming consumes <strong className="text-foreground">85% of all freshwater</strong> in the U.S. Southwest. 
            The vast majority of that grows crops in the desert — where crops demand up to 
            <strong className="text-foreground"> 10× more water</strong> than they would in temperate climates. 
            Fix farming, and you fix the water crisis.
          </p>
        </motion.div>

        {/* Water math visualization */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              label: 'Desert Evaporation Loss',
              value: '10×',
              desc: 'Crops grown in 110°F heat lose most of their irrigation water before it ever reaches the plant\'s roots or leaves.',
              color: 'text-crisis',
              bg: 'bg-crisis/8',
              border: 'border-crisis/20',
            },
            {
              label: 'Agriculture\'s Water Share',
              value: '85%',
              desc: 'Of all freshwater consumed in the U.S. Southwest goes to growing food — dwarfing residential and industrial use.',
              color: 'text-teal',
              bg: 'bg-teal-light',
              border: 'border-teal/20',
            },
            {
              label: 'Potential Freshwater Saved',
              value: '40–80%',
              desc: 'Cooling air by 20–40°F before it reaches crops slashes evaporation rates dramatically — saving water every single day.',
              color: 'text-teal',
              bg: 'bg-teal-light',
              border: 'border-teal/20',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`rounded-xl p-8 border ${card.bg} ${card.border}`}
            >
              <div className={`font-playfair text-5xl font-bold mb-3 ${card.color}`}>{card.value}</div>
              <div className="font-inter font-semibold text-foreground mb-3 text-base">{card.label}</div>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bosch-Haber analogy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl border border-border p-10 md:p-14"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-3">The Precedent</p>
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-5">
                Like Haber-Bosch Did for Fertilizer
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                By 1900, mankind faced starvation as nitrogen scarcity capped food production. Empires strip-mined 
                the world's islands for guano. Fritz Haber's discovery of a catalyst to convert natural gas into 
                ammonia — industrialized at scale by Carl Bosch at a small company called BASF — 
                changed everything.
              </p>
              <blockquote className="border-l-4 border-teal pl-4 mb-4">
                <p className="font-inter text-sm italic text-muted-foreground">
                  "A third of annual global food production uses ammonia from the Haber–Bosch process, 
                  and that food supports nearly half the world's population."
                </p>
                <cite className="font-inter text-xs text-teal mt-1 block">— Oxford Scientists</cite>
              </blockquote>
              <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                Water is abundant underground in the desert — locked in saline aquifers written off as worthless. 
                <strong className="text-foreground"> Saltwater Farms unlocks it</strong> — not by purifying it, 
                but by using it to cool the air and shield crops from desert heat.
              </p>
              <p className="font-inter text-foreground font-medium leading-relaxed">
                The brine becomes a catalyst. Worthless underground salt water traded for 
                precious, scarce surface freshwater — at world-changing scale.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { then: 'Atmospheric nitrogen', now: 'Underground brine' },
                { then: 'Inaccessible to crops', now: 'Written off as worthless' },
                { then: 'Chemical fixation process', now: 'Evaporative cooling walls' },
                { then: 'Solved the nitrogen crisis', now: 'Solves the water crisis' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 gap-3">
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <p className="text-xs font-inter text-muted-foreground mb-1 uppercase tracking-wide">1909: Haber-Bosch</p>
                    <p className="font-inter text-sm text-foreground font-medium">{row.then}</p>
                  </div>
                  <div className="bg-teal-light rounded-lg p-4 text-center">
                    <p className="text-xs font-inter text-teal mb-1 uppercase tracking-wide">Today: Saltwater Farms</p>
                    <p className="font-inter text-sm text-foreground font-medium">{row.now}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}