import { Droplets } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="font-playfair text-lg">Saltwater Farms</span>
            </div>
            <p className="font-inter text-sm text-white/60 leading-relaxed">
              Brine-fed evaporative cooling walls to create sheltered microclimates — 
              trading worthless underground saltwater for precious freshwater.
            </p>
          </div>

          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-widest text-white/40 mb-4">Navigate</p>
            <div className="space-y-2">
              {['The Crisis', 'The Insight', 'How It Works', 'Global Opportunity', 'Roadmap', 'Early Access'].map(item => (
                <button key={item}
                  onClick={() => document.querySelector(`#${item.toLowerCase().replace(/\s+/g, '-').replace("'", '')}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block font-inter text-sm text-white/60 hover:text-white transition-colors">
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-widest text-white/40 mb-4">The Mission</p>
            <p className="font-inter text-sm text-white/60 leading-relaxed mb-4">
              We believe the water crisis in the American Southwest — and deserts worldwide — 
              is solvable. The answer is already underground.
            </p>
            <div className="inline-block px-4 py-2 rounded-lg bg-white/10 text-white/80 text-sm font-inter">
              Targeting 2028 Commercial Deployment
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs text-white/40">
            © 2026 Saltwater Farms. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/40">
            Imperial Valley · Yuma · Phoenix · Jordan Valley · Australia
          </p>
        </div>
      </div>
    </footer>
  );
}