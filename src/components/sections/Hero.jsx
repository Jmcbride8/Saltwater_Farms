import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69e878868e7a6c3fe098adbd/647cbaebf_Picture1.jpg"
          alt="Lake Mead aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-teal z-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="text-xs font-inter font-semibold tracking-[0.25em] uppercase text-white/90 mb-6">
            Beyond conservation — a new paradigm
          </p>

          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white leading-[1.0] mb-8 tracking-tight">
            Unlocking<br />
            <span className="text-teal">Abundance.</span>
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