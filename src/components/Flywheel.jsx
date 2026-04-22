import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { label: 'Build Farms',      sub: 'Deploy cooling walls',       color: '#3b82f6' },
  { label: 'Save Water',       sub: '40–80% freshwater saved',    color: '#22c55e' },
  { label: 'Sell Water',       sub: 'Rights at 99% margin',       color: '#06b6d4' },
  { label: 'Generate Profit',  sub: 'Compounding returns',        color: '#a78bfa' },
  { label: 'Scale',            sub: 'More farms, more impact',    color: '#f59e0b' },
];

const N = steps.length;
const SIZE = 500;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RING_R = 140;
const RING_W = 44;
const GAP_DEG = 5;

function deg2rad(d) { return (d * Math.PI) / 180; }

function arcPath(cx, cy, r, startDeg, endDeg) {
  const s = deg2rad(startDeg - 90);
  const e = deg2rad(endDeg - 90);
  const x1 = cx + r * Math.cos(s);
  const y1 = cy + r * Math.sin(s);
  const x2 = cx + r * Math.cos(e);
  const y2 = cy + r * Math.sin(e);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

function arrowHead(cx, cy, r, angleDeg) {
  const rad = deg2rad(angleDeg - 90);
  const tipX = cx + r * Math.cos(rad);
  const tipY = cy + r * Math.sin(rad);
  // perpendicular offset
  const perpRad = rad + Math.PI / 2;
  const size = 7;
  const backRad = deg2rad(angleDeg - 90 - 12);
  const bx = cx + (r - size * 0.8) * Math.cos(backRad);
  const by = cy + (r - size * 0.8) * Math.sin(backRad);
  const backRad2 = deg2rad(angleDeg - 90 + 12);
  const bx2 = cx + (r - size * 0.8) * Math.cos(backRad2);
  const by2 = cy + (r - size * 0.8) * Math.sin(backRad2);
  return `M ${tipX} ${tipY} L ${bx} ${by} L ${bx2} ${by2} Z`;
}

export default function Flywheel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const sliceDeg = 360 / N;

  return (
    <div ref={ref} className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
      {/* SVG wheel */}
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-72 md:w-80 shrink-0">
        {/* Subtle track */}
        <circle cx={CX} cy={CY} r={RING_R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={RING_W + 8} />

        {/* Arc segments */}
        {steps.map((step, i) => {
          const startDeg = sliceDeg * i + GAP_DEG / 2;
          const endDeg   = sliceDeg * (i + 1) - GAP_DEG / 2;
          const midDeg   = (startDeg + endDeg) / 2;

          return (
            <g key={i}>
              <motion.path
                d={arcPath(CX, CY, RING_R, startDeg, endDeg)}
                fill="none"
                stroke={step.color}
                strokeWidth={RING_W}
                strokeLinecap="butt"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              />
              {/* Arrow tip at end of arc */}
              <motion.path
                d={arrowHead(CX, CY, RING_R, endDeg + 3)}
                fill={step.color}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.12 }}
              />
            </g>
          );
        })}

        {/* Center hub */}
        <circle cx={CX} cy={CY} r={78} fill="#111827" />
        <circle cx={CX} cy={CY} r={78} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x={CX} y={CY - 14} textAnchor="middle" fill="white" fontSize="15" fontFamily="Playfair Display, serif" fontWeight="bold">Saltwater</text>
        <text x={CX} y={CY + 6}  textAnchor="middle" fill="white" fontSize="15" fontFamily="Playfair Display, serif" fontWeight="bold">Farms</text>
        <text x={CX} y={CY + 26} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="Inter, sans-serif">∞ flywheel</text>
      </svg>

      {/* Step list legend */}
      <div className="flex flex-col gap-4 text-left">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
          >
            <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ backgroundColor: step.color }} />
            <div>
              <p className="font-inter font-semibold text-white text-sm leading-tight">{step.label}</p>
              <p className="font-inter text-white/45 text-xs mt-0.5">{step.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}