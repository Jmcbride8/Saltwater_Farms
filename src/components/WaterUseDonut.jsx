import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Agriculture', value: 85, color: '#c94a2a' },
  { name: 'Industrial / Power', value: 9, color: '#94a3b8' },
  { name: 'Residential', value: 6, color: '#bfdbfe' },
];

const segments = [
  { label: 'Agriculture', pct: '85%', color: 'bg-crisis', text: 'text-crisis', desc: 'Farms — overwhelmingly flood-irrigated' },
  { label: 'Industrial / Power', pct: '9%', color: 'bg-slate-400', text: 'text-slate-500', desc: 'Cooling, mining, energy production' },
  { label: 'Residential', pct: '6%', color: 'bg-blue-200', text: 'text-blue-400', desc: 'All cities, households combined' },
];

export default function WaterUseDonut() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-muted border border-border rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Chart */}
      <div className="shrink-0 relative" style={{ width: 200, height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              formatter={(v, n) => [`${v}%`, n]}
              contentStyle={{ fontFamily: 'Inter, sans-serif', fontSize: 12, borderRadius: 8 }}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-playfair text-3xl font-bold text-crisis leading-none">85%</span>
          <span className="font-inter text-xs text-muted-foreground mt-1">to farms</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex-1">
        <p className="font-inter text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">Colorado River Water Use</p>
        <div className="space-y-4">
          {segments.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="flex items-center gap-2 w-24 shrink-0">
                <div className={`w-3 h-3 rounded-full ${s.color} shrink-0`} />
                <span className={`font-playfair text-2xl font-bold ${s.text} leading-none`}>{s.pct}</span>
              </div>
              <div>
                <p className="font-inter text-sm font-medium text-foreground leading-none mb-0.5">{s.label}</p>
                <p className="font-inter text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-inter text-xs text-muted-foreground mt-5 italic">
          Source: Bureau of Reclamation / USGS Southwest water use estimates
        </p>
      </div>
    </motion.div>
  );
}