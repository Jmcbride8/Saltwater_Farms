import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { label: 'Build Farms',     sub: 'Deploy cooling walls'      },
  { label: 'Save Water',      sub: '40–80% freshwater saved'   },
  { label: 'Sell Water',      sub: 'Rights at ~99% margin'     },
  { label: 'Generate Profit', sub: 'Compounding returns'       },
  { label: 'Scale',           sub: 'More farms, more impact'   },
];

const N = steps.length;
const SIZE = 420;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RING_R = 155;
const RING_W = 52;
const GAP_DEG = 4;
const COLOR = '#1d6fa4'; // teal brand color

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
  const back1 = deg2rad(angleDeg - 90 - 11);
  const back2 = deg2rad(angleDeg - 90 + 11);
  const br = r - 9;
  return `M ${tipX} ${tipY} L ${cx + br * Math.cos(back1)} ${cy + br * Math.sin(back1)} L ${cx + br * Math.cos(back2)} ${cy + br * Math.sin(back2)} Z`;
}

export default function Flywheel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const sliceDeg = 360 / N;

  return (
    <div ref={ref} className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

      {/* SVG wheel */}
      <div className="relative shrink-0">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-72 md:w-80 lg:w-96 drop-shadow-sm">
          {/* Ghost track */}
          <circle cx={CX} cy={CY} r={RING_R} fill="none" stroke="#f1f5f9" strokeWidth={RING_W + 10} />

          {steps.map((step, i) => {
            const startDeg = sliceDeg * i + GAP_DEG / 2;
            const endDeg   = sliceDeg * (i + 1) - GAP_DEG / 2;
            const midDeg   = (startDeg + endDeg) / 2;
            // number badge position — just outside the ring
            const badgeR   = RING_R + RING_W / 2 + 2;
            const bx = CX + badgeR * Math.cos(deg2rad(midDeg - 90));
            const by = CY + badgeR * Math.sin(deg2rad(midDeg - 90));
            // opacity steps: first is full, last slightly lighter to show progression
            const opacity = 0.55 + (i / (N - 1)) * 0.45;

            return (
              <g key={i}>
                <motion.path
                  d={arcPath(CX, CY, RING_R, startDeg, endDeg)}
                  fill="none"
                  stroke={COLOR}
                  strokeWidth={RING_W}
                  strokeLinecap="butt"
                  style={{ opacity }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity } : {}}
                  transition={{ duration: 0.55, delay: i * 0.13, ease: 'easeOut' }}
                />
                {/* Arrowhead */}
                <motion.path
                  d={arrowHead(CX, CY, RING_R, endDeg + 2.5)}
                  fill={COLOR}
                  style={{ opacity }}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity } : {}}
                  transition={{ delay: 0.7 + i * 0.13 }}
                />
                {/* Number badge on the arc */}
                <motion.circle
                  cx={bx} cy={by} r={13}
                  fill="white"
                  stroke={COLOR}
                  strokeWidth="1.5"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.65 + i * 0.13, type: 'spring', stiffness: 200 }}
                  style={{ transformOrigin: `${bx}px ${by}px` }}
                />
                <motion.text
                  x={bx} y={by + 4.5}
                  textAnchor="middle"
                  fill={COLOR}
                  fontSize="11"
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.75 + i * 0.13 }}
                >
                  {i + 1}
                </motion.text>
              </g>
            );
          })}

          {/* Center hub */}
          <circle cx={CX} cy={CY} r={88} fill="white" />
          <circle cx={CX} cy={CY} r={88} fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x={CX} y={CY - 14} textAnchor="middle" fill="#0f172a" fontSize="16" fontFamily="Playfair Display, serif" fontWeight="700">Saltwater</text>
          <text x={CX} y={CY + 7}  textAnchor="middle" fill="#0f172a" fontSize="16" fontFamily="Playfair Display, serif" fontWeight="700">Farms</text>
          <text x={CX} y={CY + 27} textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="1">∞ flywheel</text>
        </svg>
      </div>

      {/* Legend — numbers match the wheel */}
      <div className="flex flex-col gap-5">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
          >
            <div
              className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-inter font-bold shrink-0 mt-0.5"
              style={{ borderColor: COLOR, color: COLOR, backgroundColor: 'white' }}
            >
              {i + 1}
            </div>
            <div>
              <p className="font-inter font-semibold text-foreground text-sm leading-tight">{step.label}</p>
              <p className="font-inter text-muted-foreground text-xs mt-0.5">{step.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}