import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

function ElementCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.7 }}
      className="flex gap-3 justify-center mt-10"
    >
      {/* NH3 — Solved */}
      <div className="relative w-36 rounded-2xl overflow-hidden shadow-xl bg-[#22c55e]" style={{ aspectRatio: '1.6/1' }}>
        <div className="absolute top-2.5 left-3 text-white/70 font-inter text-xs font-bold">1</div>
        <div className="absolute top-2.5 right-3 text-white font-inter text-[10px] font-bold uppercase tracking-widest">Solved ✓</div>
        <div className="flex flex-col items-center justify-center h-full pb-2 pt-4">
          <div className="font-playfair text-4xl font-bold text-white leading-none">
            NH<sub className="text-2xl">3</sub>
          </div>
          <div className="font-inter text-xs font-semibold text-white mt-1.5">Ammonia</div>
          <div className="font-inter text-[10px] text-white/70">for hungry crops</div>
        </div>
      </div>

      {/* H2O — Solving now */}
      <div className="relative w-36 rounded-2xl overflow-hidden shadow-xl bg-[#38bdf8]" style={{ aspectRatio: '1.6/1' }}>
        <div className="absolute top-2.5 left-3 text-white/70 font-inter text-xs font-bold">2</div>
        {/* Pulsing "loading" indicator */}
        <div className="absolute top-2.5 right-3 flex items-center gap-1">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="font-inter text-[10px] font-bold uppercase tracking-widest text-white"
          >
            Solving now
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            className="w-1 h-1 rounded-full bg-white inline-block"
          />
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
            className="w-1 h-1 rounded-full bg-white inline-block"
          />
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="w-1 h-1 rounded-full bg-white inline-block"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full pb-2 pt-4">
          <div className="font-playfair text-4xl font-bold text-white leading-none">
            H<sub className="text-2xl">2</sub>O
          </div>
          <div className="font-inter text-xs font-semibold text-white mt-1.5">Water</div>
          <div className="font-inter text-[10px] text-white/70">for thirsty crops</div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-teal z-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="text-xs font-inter font-semibold tracking-[0.3em] uppercase text-white/70 mb-8 border border-white/20 inline-block px-4 py-2 rounded-sm">
            Beyond conservation — a new paradigm
          </p>

          <h1 className="font-playfair text-7xl md:text-9xl font-bold text-white leading-[0.95] mb-8 tracking-tight drop-shadow-2xl">
            Unlocking<br />
            <span className="text-white">Abundance.</span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-xl mx-auto mb-12">
            The Southwest doesn't have a scarcity problem — it has a locked-resource problem. 
            Worthless underground brine, turned into water and profit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#insight')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-teal text-white font-inter font-semibold rounded-sm hover:bg-teal/90 transition-all text-sm tracking-wide uppercase"
            >
              See How It Works
            </button>
            <button
              onClick={() => document.querySelector('#presale')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border border-white/50 text-white font-inter font-semibold rounded-sm hover:bg-white/10 transition-all text-sm tracking-wide uppercase"
            >
              Join the Movement →
            </button>
          </div>

          <ElementCards />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}