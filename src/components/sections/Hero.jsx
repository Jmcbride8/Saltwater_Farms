import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

function Dot({ delay }) {
  return (
    <motion.span
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay }}
      className="w-1.5 h-1.5 rounded-full bg-white inline-block"
    />
  );
}

function ElementCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.8 }}
      className="flex gap-3 justify-center mt-14 w-full overflow-x-hidden"
    >
      {/* NH3 — Solved */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-xl bg-[#22c55e] flex flex-col flex-shrink-0"
        style={{ width: 160, height: 120 }}
      >
        <div className="flex items-center justify-center px-3 pt-3">
          <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-white">Solved ✓</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 pb-3">
          <div className="font-playfair text-5xl font-bold text-white leading-none">
            NH<sub className="text-2xl">3</sub>
          </div>
          <div className="font-inter text-sm font-semibold text-white mt-2">Fertilizer</div>
        </div>
      </div>

      {/* H2O — Solving now */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-xl bg-[#0ea5e9] flex flex-col flex-shrink-0"
        style={{ width: 160, height: 120 }}
      >
        <div className="flex items-center justify-center px-3 pt-3 gap-1">
          <div className="flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
              className="font-inter text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap"
            >
              Solving
            </motion.span>
            <div className="flex gap-0.5 items-center">
              <Dot delay={0} />
              <Dot delay={0.2} />
              <Dot delay={0.4} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 pb-3">
          <div className="font-playfair text-5xl font-bold text-white leading-none">
            H<sub className="text-2xl">2</sub>O
          </div>
          <div className="font-inter text-sm font-semibold text-white mt-2">Water</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69e878868e7a6c3fe098adbd/a5410601f_ChatGPTImageMay5202602_21_40PM.png"
          alt="Lake Mead aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-teal z-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-8 tracking-tight drop-shadow-2xl">
            The Green Revolution<br />
            <span className="text-white/90">2.0</span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Solving water to green the desert and feed the next 6 billion people
          </p>

          <ElementCards />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}