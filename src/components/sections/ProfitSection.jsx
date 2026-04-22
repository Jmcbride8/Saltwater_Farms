import { motion } from 'framer-motion';
import Flywheel from '@/components/Flywheel';

const streams = [
  {
    symbol: '+$',
    title: 'Higher Value Crops',
    desc: 'Improved microclimate conditions increase yields and enable upgrade to higher value crops — lettuce, spinach, herbs — that command 3–5× the price of commodity crops grown in summer heat.',
    detail: 'Cooler temperatures extend growing seasons by months, enabling multiple harvests per year.',
  },
  {
    symbol: '+$$',
    title: 'Land Value Increase',
    desc: 'Infrastructure improvements drive higher land values for resale. Farms equipped with cooling wall systems become demonstrably more productive and resilient assets.',
    detail: 'Improved land productivity translates directly into higher appraisal value and better financing terms.',
  },
  {
    symbol: '+$$$',
    title: 'Water Rights Sales',
    desc: 'Reduction in freshwater consumption through substitution with saltwater enables sale of freed-up water allocations. Water credits sell at near 99% margins.',
    detail: 'In Arizona and California, water rights trade for $1,500–$5,000+ per acre-foot — creating a powerful secondary revenue stream.',
  },
];

export default function ProfitSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">The Business Case</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Not Just Sustainable —<br />
            <span className="text-teal">Profitably So</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Saltwater Farms creates three compounding revenue streams on top of existing farm operations. 
            The math works before you count the environmental benefit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {streams.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="rounded-2xl border border-border p-8 hover:shadow-md transition-shadow"
            >
              <div className="font-playfair text-4xl font-bold text-teal mb-4">{s.symbol}</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="pt-4 border-t border-border">
                <p className="font-inter text-xs text-teal font-medium leading-relaxed">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flywheel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-border rounded-2xl p-10 md:p-14 text-center shadow-sm"
        >
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">The Economic Flywheel</h3>
          <p className="font-inter text-muted-foreground mb-10 text-sm">Solving scarcity for profit</p>
          <Flywheel />
        </motion.div>
      </div>
    </section>
  );
}