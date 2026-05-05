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
      className="flex gap-5 justify-center mt-14"
    >
      {/* NH3 — Solved */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#22c55e] flex flex-col"
        style={{ width: 200, height: 130 }}
      >
        <div className="flex items-center justify-between px-4 pt-3.5 pb-0">
          <span className="font-inter text-sm font-bold text-white/60">1</span>
          <span className="font-inter text-[11px] font-bold uppercase tracking-[0.15em] text-white">Solved ✓</span>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 pb-3">
          <div className="font-playfair text-5xl font-bold text-white leading-none">
            NH<sub className="text-3xl align-sub">3</sub>
          </div>
          <div className="font-inter text-sm font-semibold text-white mt-2">Ammonia</div>
          <div className="font-inter text-[11px] text-white/70">for hungry crops</div>
        </div>
      </div>

      {/* H2O — Solving now */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0ea5e9] flex flex-col"
        style={{ width: 200, height: 130 }}
      >
        <div className="flex items-center justify-between px-4 pt-3.5 pb-0">
          <span className="font-inter text-sm font-bold text-white/60">2</span>
          <div className="flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
              className="font-inter text-[11px] font-bold uppercase tracking-[0.15em] text-white"
            >
              Solving now
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
            H<sub className="text-3xl align-sub">2</sub>O
          </div>
          <div className="font-inter text-sm font-semibold text-white mt-2">Water</div>
          <div className="font-inter text-[11px] text-white/70">for thirsty crops</div>
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
          <p className="text-xs font-inter font-semibold tracking-[0.3em] uppercase text-white/70 mb-8 border border-white/20 inline-block px-4 py-2 rounded-sm">
            The Next Green Revolution
          </p>

          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-6 tracking-tight drop-shadow-2xl">
            Water is Locked<br />
            <span className="text-white">in the Desert.</span><br />
            <span className="italic text-white/80">We're unlocking it.</span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            A century ago, the world faced mass starvation — until Fritz Haber literally turned air into fertilizer.
            Today, the arid Southwest faces collapse. We're doing it again: turning worthless underground brine
            into water, cooling, and abundance.
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
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}