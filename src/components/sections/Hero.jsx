import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80"
          alt="Desert farm landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-6">
            A Revolution in Desert Agriculture
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-700 text-foreground leading-[1.1] mb-6">
            Farm the Desert.<br />
            <span className="text-teal">Save the Water.</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Evaporative cooling walls fed by worthless underground brine — 
            trading salt for fresh water at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#insight')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-teal text-white font-inter font-medium rounded hover:bg-teal/90 transition-all text-base"
            >
              Discover the Insight
            </button>
            <button
              onClick={() => document.querySelector('#presale')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-foreground/20 text-foreground font-inter font-medium rounded hover:bg-foreground/5 transition-all text-base"
            >
              Reserve Early Access →
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}