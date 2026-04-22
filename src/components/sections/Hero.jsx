import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background — dark, dramatic */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69e878868e7a6c3fe098adbd/b81605987_image.png"
          alt="Epic dust storm front"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Thin top bar accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-teal z-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.25em' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs font-inter font-semibold tracking-[0.25em] uppercase text-teal mb-8"
          >
            The American Southwest is running out of water
          </motion.p>

          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white leading-[1.0] mb-6 tracking-tight">
            The River<br />
            <span className="text-teal">Is Dying.</span>
          </h1>

          <div className="w-16 h-px bg-teal mx-auto mb-6" />

          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white/90 leading-snug mb-6">
            We Built the Fix.
          </h2>

          <p className="font-inter text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Brine-fed evaporative cooling walls that slash freshwater demand by up to 80% —
            turning worthless underground saltwater into the Southwest's most valuable resource.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#crisis')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-teal text-white font-inter font-semibold rounded-sm hover:bg-teal/90 transition-all text-sm tracking-wide uppercase"
            >
              See the Crisis
            </button>
            <button
              onClick={() => document.querySelector('#presale')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border border-white/30 text-white font-inter font-semibold rounded-sm hover:bg-white/10 transition-all text-sm tracking-wide uppercase"
            >
              Join the Solution →
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}