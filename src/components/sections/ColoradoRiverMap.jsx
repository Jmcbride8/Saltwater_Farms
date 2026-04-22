import { motion } from 'framer-motion';
import { useState } from 'react';

const cities = [
  { id: 'las-vegas', name: 'Las Vegas', state: 'NV', x: 22, y: 32, pop: '2.2M', dependency: 'Hoover Dam primary source' },
  { id: 'phoenix', name: 'Phoenix', state: 'AZ', x: 42, y: 58, pop: '4.9M', dependency: 'Central Arizona Project' },
  { id: 'tucson', name: 'Tucson', state: 'AZ', x: 44, y: 72, pop: '1M', dependency: 'Central Arizona Project' },
  { id: 'los-angeles', name: 'Los Angeles', state: 'CA', x: 8, y: 44, pop: '13M', dependency: 'Colorado River Aqueduct' },
  { id: 'san-diego', name: 'San Diego', state: 'CA', x: 12, y: 56, pop: '3.3M', dependency: 'Colorado River Aqueduct' },
  { id: 'imperial', name: 'Imperial Valley', state: 'CA', x: 20, y: 62, pop: '185K', dependency: 'All-American Canal' },
  { id: 'yuma', name: 'Yuma', state: 'AZ', x: 28, y: 65, pop: '100K', dependency: 'Gila Gravity Main Canal' },
  { id: 'hoover', name: 'Hoover Dam', state: 'NV/AZ', x: 28, y: 28, pop: '2,080 MW', dependency: 'Origin point' },
  { id: 'lake-mead', name: 'Lake Mead', state: 'NV/AZ', x: 24, y: 24, pop: '26.1M ac-ft capacity', dependency: 'Now at ~30% capacity' },
  { id: 'salt-lake', name: 'Salt Lake City', state: 'UT', x: 38, y: 12, pop: '1.2M', dependency: 'Upper Colorado Basin' },
  { id: 'denver', name: 'Denver', state: 'CO', x: 58, y: 14, pop: '2.9M', dependency: 'Upper Colorado Basin' },
  { id: 'albuquerque', name: 'Albuquerque', state: 'NM', x: 60, y: 40, pop: '920K', dependency: 'Rio Grande + Colorado Basin' },
];

const canals = [
  // Colorado River main stem (top to bottom)
  { id: 'river-main', path: 'M 48 4 C 46 10 44 14 42 18 C 40 22 36 24 32 26 C 29 27 28 28 28 28 C 28 32 26 36 24 42 C 22 48 20 54 18 60 C 16 64 14 68 12 74 C 10 78 8 82 6 88', type: 'river', label: 'Colorado River' },
  // Lake Powell to Lake Mead segment
  { id: 'lake-powell', path: 'M 48 4 C 44 8 40 12 38 16 C 35 20 32 22 30 24 C 29 25 28 26 26 26 C 25 25 24 24 24 24', type: 'river', label: 'Upper Colorado' },
  // Nevada Aqueduct - Las Vegas
  { id: 'nevada-aq', path: 'M 26 26 C 24 26 22 28 20 28 C 18 28 16 29 14 30 C 12 31 10 31 8 31', type: 'canal', label: 'Las Vegas Wash' },
  // Hoover to Las Vegas direct line
  { id: 'lv-line', path: 'M 28 28 C 26 28 24 30 22 31 C 20 32 18 32 16 32', type: 'canal', label: 'Southern Nevada Water' },
  // Colorado River Aqueduct to LA
  { id: 'la-aq', path: 'M 26 34 C 22 36 18 38 14 40 C 10 42 8 43 6 44', type: 'aqueduct', label: 'Colorado River Aqueduct' },
  // All-American Canal to Imperial Valley
  { id: 'all-american', path: 'M 20 62 C 18 62 16 62 14 62 C 13 62 12 62 12 62', type: 'aqueduct', label: 'All-American Canal' },
  // Central Arizona Project
  { id: 'cap', path: 'M 28 44 C 30 46 32 48 34 50 C 36 52 38 54 40 56 C 41 57 42 58 42 58', type: 'aqueduct', label: 'Central Arizona Project' },
  // CAP to Tucson
  { id: 'cap-tucson', path: 'M 42 58 C 42 62 42 66 44 72', type: 'canal', label: 'CAP Tucson Branch' },
  // San Diego connection
  { id: 'sd-line', path: 'M 14 56 C 13 56 12 56 11 56', type: 'canal', label: 'San Diego Aqueduct' },
  // Gila Canal to Yuma
  { id: 'gila', path: 'M 22 60 C 24 62 26 63 28 65', type: 'canal', label: 'Gila Gravity Main Canal' },
];

const typeStyles = {
  river: { stroke: '#3b82f6', strokeWidth: 3, dashArray: 'none', opacity: 0.9 },
  aqueduct: { stroke: '#0ea5e9', strokeWidth: 2, dashArray: '6 3', opacity: 0.8 },
  canal: { stroke: '#7dd3fc', strokeWidth: 1.5, dashArray: '4 4', opacity: 0.7 },
};

export default function ColoradoRiverMap() {
  const [hovered, setHovered] = useState(null);
  const active = cities.find(c => c.id === hovered);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16 mb-2"
    >
      <p className="font-inter text-sm font-medium tracking-[0.2em] uppercase text-teal mb-3">The Network</p>
      <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
        Where the Water Goes
      </h3>
      <p className="font-inter text-muted-foreground mb-8 max-w-2xl">
        The Colorado River feeds a 1,400-mile network of aqueducts and canals reaching 40 million people. 
        Every dot below depends on it. Hover to see the dependency.
      </p>

      <div className="relative bg-slate-950 rounded-2xl overflow-hidden border border-border">
        {/* Legend */}
        <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-3 flex flex-col gap-2">
          {[
            { label: 'Colorado River', color: '#3b82f6', dash: false, thick: true },
            { label: 'Aqueducts', color: '#0ea5e9', dash: true, thick: false },
            { label: 'Canals', color: '#7dd3fc', dash: true, thick: false },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2">
              <svg width="28" height="8"><line x1="0" y1="4" x2="28" y2="4" stroke={l.color} strokeWidth={l.thick ? 3 : 1.5} strokeDasharray={l.dash ? '5 3' : 'none'} /></svg>
              <span className="font-inter text-xs text-white/70">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Hover tooltip */}
        {active && (
          <div className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-sm rounded-xl px-4 py-3 max-w-[200px]">
            <p className="font-playfair text-white font-bold text-sm">{active.name}</p>
            <p className="font-inter text-white/50 text-xs mb-1">{active.state}</p>
            <p className="font-inter text-sky text-xs font-semibold">{active.pop}</p>
            <p className="font-inter text-white/60 text-xs mt-1">{active.dependency}</p>
          </div>
        )}

        <svg
          viewBox="0 0 80 96"
          className="w-full"
          style={{ minHeight: 320 }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Terrain background hints */}
          <rect width="80" height="96" fill="#0a0f1e" />
          {/* State borders (simplified) */}
          <line x1="32" y1="0" x2="32" y2="28" stroke="#ffffff08" strokeWidth="0.3" />
          <line x1="0" y1="28" x2="80" y2="28" stroke="#ffffff08" strokeWidth="0.3" />
          <line x1="52" y1="28" x2="52" y2="96" stroke="#ffffff08" strokeWidth="0.3" />

          {/* State labels */}
          {[
            { label: 'CA', x: 6, y: 50 },
            { label: 'NV', x: 20, y: 18 },
            { label: 'UT', x: 40, y: 8 },
            { label: 'CO', x: 64, y: 8 },
            { label: 'AZ', x: 40, y: 76 },
            { label: 'NM', x: 66, y: 60 },
          ].map(s => (
            <text key={s.label} x={s.x} y={s.y} fill="#ffffff18" fontSize="4" fontFamily="Inter, sans-serif" fontWeight="700">{s.label}</text>
          ))}

          {/* Canals & aqueducts */}
          {canals.map(c => {
            const s = typeStyles[c.type];
            return (
              <path
                key={c.id}
                d={c.path}
                fill="none"
                stroke={s.stroke}
                strokeWidth={s.strokeWidth}
                strokeDasharray={s.dashArray}
                opacity={s.opacity}
                strokeLinecap="round"
              />
            );
          })}

          {/* Lake Mead fill */}
          <ellipse cx="24" cy="22" rx="3" ry="2" fill="#1d4ed8" opacity="0.4" />
          <ellipse cx="24" cy="22" rx="2" ry="1.2" fill="#3b82f6" opacity="0.3" />

          {/* City dots */}
          {cities.map(city => (
            <g key={city.id} style={{ cursor: 'pointer' }} onMouseEnter={() => setHovered(city.id)} onMouseLeave={() => setHovered(null)}>
              <circle
                cx={city.x}
                cy={city.y}
                r={city.id === 'hoover' ? 2.2 : city.id === 'lake-mead' ? 0 : 1.8}
                fill={city.id === 'hoover' ? '#f97316' : hovered === city.id ? '#ffffff' : '#7dd3fc'}
                opacity={hovered === city.id ? 1 : 0.85}
              />
              {hovered === city.id && (
                <circle cx={city.x} cy={city.y} r="3.5" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
              )}
              <text
                x={city.id === 'los-angeles' || city.id === 'san-diego' ? city.x - 1 : city.x + 2.5}
                y={city.y + 0.5}
                fill={city.id === 'hoover' ? '#fb923c' : '#ffffffaa'}
                fontSize="2.2"
                fontFamily="Inter, sans-serif"
                textAnchor={city.id === 'los-angeles' || city.id === 'san-diego' ? 'end' : 'start'}
              >
                {city.name}
              </text>
            </g>
          ))}
        </svg>

        {/* Bottom bar */}
        <div className="px-6 py-4 border-t border-white/10 flex flex-wrap gap-6 justify-between">
          <div>
            <p className="font-inter text-xs text-white/40 uppercase tracking-widest mb-0.5">Total Reach</p>
            <p className="font-playfair text-white font-bold text-lg">40M+ People</p>
          </div>
          <div>
            <p className="font-inter text-xs text-white/40 uppercase tracking-widest mb-0.5">River Length</p>
            <p className="font-playfair text-white font-bold text-lg">1,450 Miles</p>
          </div>
          <div>
            <p className="font-inter text-xs text-white/40 uppercase tracking-widest mb-0.5">Canal Network</p>
            <p className="font-playfair text-white font-bold text-lg">500+ Miles</p>
          </div>
          <div>
            <p className="font-inter text-xs text-white/40 uppercase tracking-widest mb-0.5">States Affected</p>
            <p className="font-playfair text-white font-bold text-lg">7 + Mexico</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}