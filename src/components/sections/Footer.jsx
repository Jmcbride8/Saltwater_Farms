import { Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

export default function Footer() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

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
              {[
                { label: 'The Crisis', href: '#crisis' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'The Insight', href: '#insight' },
                { label: 'Global Impact', href: '#global' },
                { label: 'Roadmap', href: '#roadmap' },
                { label: 'Early Access', href: '#presale' },
              ].map(item => (
                <button key={item.href}
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block font-inter text-sm text-white/60 hover:text-white transition-colors">
                  {item.label}
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
          <div className="flex items-center gap-4">
            <p className="font-inter text-xs text-white/40">
              © 2026 Saltwater Farms. All rights reserved.
            </p>
            {isAdmin && (
              <Link to="/archive" className="font-inter text-xs text-white/30 hover:text-white/70 transition-colors">
                Archive
              </Link>
            )}
          </div>
          <p className="font-inter text-xs text-white/40">
            Imperial Valley · Yuma · Phoenix · Jordan Valley · Australia
          </p>
        </div>
      </div>
    </footer>
  );
}