import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { label: 'Build Farms', sub: 'Deploy cooling walls', color: '#3b82f6' },
  { label: 'Save Water', sub: '40–80% freshwater saved', color: '#22c55e' },
  { label: 'Sell Water', sub: 'Rights at 99% margin', color: '#06b6d4' },
  { label: 'Generate Profit', sub: 'Compounding returns', color: '#a78bfa' },
  { label: 'Scale', sub: 'More farms, more impact', color: '#f59e0b' },
];

const N = steps.length;
const CX = 200;
const CY = 200;
const R = 130; // center of labels
const ARROW_R = 155; // radius for arrows

function polarToXY(angleDeg, r) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

export default function Flywheel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg viewBox="0 0 400 400" className="w-full max-w-md" aria-label="Flywheel diagram">
        {/* Outer ring track */}
        <circle cx={CX} cy={CY} r={ARROW_R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="40" />

        {/* Colored arc segments */}
        {steps.map((step, i) => {
          const startAngle = (360 / N) * i - 90;
          const endAngle = (360 / N) * (i + 1) - 90 - 4; // 4° gap
          const start = polarToXY(startAngle + 90, ARROW_R);
          const end = polarToXY(endAngle + 90, ARROW_R);
          const largeArc = (360 / N) > 180 ? 1 : 0;

          const startRad = ((startAngle) * Math.PI) / 180;
          const endRad = ((endAngle) * Math.PI) / 180;

          const x1 = CX + ARROW_R * Math.cos(startRad);
          const y1 = CY + ARROW_R * Math.sin(startRad);
          const x2 = CX + ARROW_R * Math.cos(endRad);
          const y2 = CY + ARROW_R * Math.sin(endRad);

          return (
            <motion.path
              key={i}
              d={`M ${x1} ${y1} A ${ARROW_R} ${ARROW_R} 0 ${largeArc} 1 ${x2} ${y2}`}
              fill="none"
              stroke={step.color}
              strokeWidth="28"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
            />
          );
        })}

        {/* Center circle */}
        <circle cx={CX} cy={CY} r={70} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <text x={CX} y={CY - 8} textAnchor="middle" fill="white" fontSize="13" fontFamily="Playfair Display, serif" fontWeight="bold">
          Saltwater
        </text>
        <text x={CX} y={CY + 10} textAnchor="middle" fill="white" fontSize="13" fontFamily="Playfair Display, serif" fontWeight="bold">
          Farms
        </text>
        <text x={CX} y={CY + 28} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter, sans-serif">
          ∞ flywheel
        </text>

        {/* Step labels */}
        {steps.map((step, i) => {
          const angleDeg = (360 / N) * i + 360 / N / 2;
          const labelR = 220;
          const pos = polarToXY(angleDeg, labelR);

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
            >
              <text
                x={pos.x}
                y={pos.y - 4}
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
              >
                {step.label}
              </text>
              <text
                x={pos.x}
                y={pos.y + 10}
                textAnchor="middle"
                fill="rgba(255,255,255,0.45)"
                fontSize="7.5"
                fontFamily="Inter, sans-serif"
              >
                {step.sub}
              </text>
            </motion.g>
          );
        })}

        {/* Arrowhead dots at end of each arc */}
        {steps.map((step, i) => {
          const endAngle = (360 / N) * (i + 1) - 90 - 4;
          const endRad = (endAngle * Math.PI) / 180;
          const x = CX + ARROW_R * Math.cos(endRad);
          const y = CY + ARROW_R * Math.sin(endRad);
          return (
            <motion.circle
              key={i}
              cx={x} cy={y} r={4}
              fill={step.color}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.15 }}
            />
          );
        })}
      </svg>
    </div>
  );
}