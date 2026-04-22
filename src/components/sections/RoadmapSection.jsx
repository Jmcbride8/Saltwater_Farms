import { motion } from 'framer-motion';
import { FlaskConical, Factory, Globe, CheckCircle2, Clock } from 'lucide-react';

const phases = [
  {
    icon: FlaskConical,
    phase: 'Phase 1',
    title: 'Proof of Concept',
    timeline: '2026 – 2027',
    status: 'Active',
    statusColor: 'bg-teal text-white',
    description: 'Deploy a single cooling wall system on a partner farm in the Imperial Valley or Yuma area. Rigorously instrument every variable.',
    goals: [
      'Measure actual air temperature reduction across 500–1,000 ft downwind',
      'Track freshwater savings vs. control plot over full growing season',
      'Validate crop yield and quality (lettuce, spinach, herbs)',
      'Establish unit economics: cost per acre-foot of water saved',
      'Independent third-party data verification for investor credibility',
    ],
    deliverable: 'Peer-reviewed dataset + economic model → triggers Phase 2 funding',
  },
  {
    icon: Factory,
    phase: 'Phase 2',
    title: 'Turnkey System Development',
    timeline: '2027 – 2028',
    status: 'Planned',
    statusColor: 'bg-muted text-muted-foreground',
    description: 'Engineer a modular, deployable system that any farmer can purchase and install. Build the supply chain, manufacturing, and support infrastructure.',
    goals: [
      'Standardize wall panel design for rapid deployment',
      'Develop proprietary brine-compatible pump and media systems',
      'Build digital monitoring platform (water savings dashboard)',
      'First commercial installations on early access depositor farms',
      'Establish water credit brokerage partnerships',
    ],
    deliverable: 'Commercially available Saltwater Farms System — priced per acre of coverage',
  },
  {
    icon: Globe,
    phase: 'Phase 3',
    title: 'Regional Scale Deployment',
    timeline: '2028 – 2030',
    status: 'Planned',
    statusColor: 'bg-muted text-muted-foreground',
    description: 'Roll out across Imperial Valley, Yuma, and Phoenix Basin. Establish water credit marketplace. Begin international licensing.',
    goals: [
      '10,000+ acres under Saltwater Farms management',
      'Water credit sales generating $M annual farmer revenue',
      'Expand into Jordan Valley, Australia pilot programs',
      'Policy partnerships with Bureau of Reclamation, USDA',
      'Franchise model for rapid international deployment',
    ],
    deliverable: 'Category-defining agricultural infrastructure company',
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">Roadmap</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            From Pilot to Planet
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            We start where the need is most acute, prove every number with real data, 
            then build the infrastructure to deploy at scale.
          </p>
        </motion.div>

        <div className="space-y-8">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="border border-border rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left */}
                  <div className={`md:w-64 p-8 flex flex-col justify-between ${i === 0 ? 'bg-teal-light' : 'bg-muted'}`}>
                    <div>
                      <div className={`inline-flex items-center gap-1.5 text-xs font-inter font-semibold px-3 py-1 rounded-full mb-4 ${phase.statusColor}`}>
                        {phase.status === 'Active' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {phase.status}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                        <Icon className="w-6 h-6 text-teal" />
                      </div>
                      <p className="font-inter text-xs font-medium text-teal uppercase tracking-widest mb-1">{phase.phase}</p>
                      <h3 className="font-playfair text-2xl font-bold text-foreground">{phase.title}</h3>
                    </div>
                    <div className="mt-6">
                      <p className="font-inter text-sm text-muted-foreground uppercase tracking-wide">Timeline</p>
                      <p className="font-playfair text-xl font-semibold text-foreground">{phase.timeline}</p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex-1 p-8 bg-white">
                    <p className="font-inter text-muted-foreground leading-relaxed mb-6">{phase.description}</p>
                    <div className="space-y-2 mb-6">
                      {phase.goals.map((goal, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                          <p className="font-inter text-sm text-foreground leading-relaxed">{goal}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-teal-light rounded-lg p-4 border border-teal/15">
                      <p className="font-inter text-xs font-semibold text-teal uppercase tracking-widest mb-1">Milestone Deliverable</p>
                      <p className="font-inter text-sm text-foreground">{phase.deliverable}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}