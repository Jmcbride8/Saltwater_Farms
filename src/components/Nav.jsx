import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const links = [
  { label: 'The Crisis', href: '#crisis' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'The Insight', href: '#insight' },
  { label: 'Global Impact', href: '#global' },
  { label: 'Roadmap', href: '#roadmap' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleNav('#hero')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center">
            <Droplets className="w-4 h-4 text-white" />
          </div>
          <span className={`font-playfair font-600 text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`}>Saltwater Farms</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l.href} onClick={() => handleNav(l.href)}
              className={`text-sm font-inter font-medium transition-colors duration-300 ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/90 hover:text-white'}`}>
              {l.label}
            </button>
          ))}
          <button onClick={() => handleNav('#presale')}
            className="ml-2 px-4 py-2 bg-teal text-white text-sm font-medium rounded hover:bg-teal/90 transition-colors">
            Reserve Early Access
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-6 flex flex-col gap-4">
          {links.map(l => (
            <button key={l.href} onClick={() => handleNav(l.href)}
              className="text-sm text-left text-muted-foreground hover:text-foreground transition-colors py-1">
              {l.label}
            </button>
          ))}
          <button onClick={() => handleNav('#presale')}
            className="px-4 py-2 bg-teal text-white text-sm font-medium rounded">
            Reserve Early Access
          </button>
        </div>
      )}
    </nav>
  );
}