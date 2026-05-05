import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Pencil, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

// ── Generic admin-uploadable image block ──────────────────────────────────────
function UploadableImage({ imageKey, defaultSrc, alt, className = '', imgClassName = '' }) {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const [src, setSrc] = useState(defaultSrc);
  const [recordId, setRecordId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    base44.entities.RegionalTransformationImage.filter({ imageKey }).then((records) => {
      if (records.length > 0) {
        setSrc(records[0].imageUrl);
        setRecordId(records[0].id);
      }
    });
  }, [imageKey]);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    if (recordId) {
      await base44.entities.RegionalTransformationImage.update(recordId, { imageUrl: file_url });
    } else {
      const rec = await base44.entities.RegionalTransformationImage.create({ imageKey, imageUrl: file_url });
      setRecordId(rec.id);
    }
    setSrc(file_url);
    setUploading(false);
    e.target.value = '';
  };

  return (
    <div className={`relative group ${className}`}>
      <img src={src} alt={alt} className={imgClassName} />
      {isAdmin && (
        <>
          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 bg-black/70 hover:bg-black/90 text-white text-xs font-inter font-medium rounded transition-all opacity-0 group-hover:opacity-100"
          >
            {uploading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Pencil className="w-3 h-3" />}
            {uploading ? 'Uploading…' : 'Replace Image'}
          </button>
        </>
      )}
    </div>
  );
}

// ── Timeline cards ────────────────────────────────────────────────────────────
const timelineCards = [
  {
    key: 'timeline-today',
    label: 'Today',
    labelColor: 'text-crisis',
    badgeColor: 'bg-crisis/10 border-crisis/30 text-crisis',
    heading: 'A Region in Collapse',
    body: 'Lake Mead at historic lows. The Colorado River over-allocated by 20%. Farms fallowing. Cities rationing. The status quo is not sustainable.',
    defaultImg: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
  },
  {
    key: 'timeline-trajectory',
    label: 'Current Trajectory',
    labelColor: 'text-foreground',
    badgeColor: 'bg-muted border-border text-muted-foreground',
    heading: 'Accelerating Crisis',
    body: 'Without intervention, Bureau of Reclamation projections show dead pool within 10–15 years. $1.5 trillion in economic output at risk. Permanent agricultural abandonment.',
    defaultImg: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  },
  {
    key: 'timeline-restoration',
    label: 'Restoration',
    labelColor: 'text-teal',
    badgeColor: 'bg-teal-light border-teal/30 text-teal',
    heading: 'A Recharged Basin',
    body: 'Widespread brine evaporation drives measurable increases in local precipitation, river recharge, and aquifer recovery — without removing a single farm from production.',
    defaultImg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  },
];

export default function RegionalTransformationSection() {
  return (
    <section id="regional-transformation" className="py-28 bg-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">Beyond the Farm Gate</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Regional Transformation<br />at Scale
          </h2>
          <p className="font-inter text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            When enough farms adopt evaporative brine cooling, the effects compound — 
            changing the microclimate, recharging the watershed, and reversing the crisis at a regional level.
          </p>
        </motion.div>

        {/* ── The Oasis Effect ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <p className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-2">Phenomenon 01</p>
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-10">The Oasis Effect</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-muted-foreground leading-relaxed mb-4">
              A single brine evaporation wall cools a farm. But when dozens of farms across a valley adopt the system, 
              something larger emerges: a persistent cool, moist air mass — an engineered oasis. Cooler surface 
              temperatures reduce the heat island effect, crops require less irrigation, soil retains moisture longer, 
              and the microclimate begins to self-reinforce.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed mb-4">
              During early trials in Oman, nobody planted the grass — <em>it just appeared.</em> Wild grasses and low 
              vegetation began spontaneously sprouting in surrounding desert soil that had seen no rain, no irrigation, 
              and no human intervention. The moisture thrown off by the evaporative system was quietly changing the 
              local microclimate. Humidity levels rose enough to sustain germination. The desert, given just a fraction 
              more moisture in the air, responded with an explosion of growth.
            </p>
            <blockquote className="border-l-4 border-teal pl-5 mt-2">
              <p className="font-inter text-sm italic text-slate-500 leading-relaxed">
                "At scale across a valley, these effects don't add — they multiply. A region written off as 
                permanently arid becomes a candidate for genuine agricultural restoration."
              </p>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <BeforeAfterSlider
              beforeSrc="https://media.base44.com/images/public/69e878868e7a6c3fe098adbd/27cd7cb44_ChatGPTImageMay5202603_13_41PM.png"
              afterSrc="https://media.base44.com/images/public/69e878868e7a6c3fe098adbd/4021d489f_ChatGPTImageMay5202603_15_02PM.png"
              beforeLabel="Before"
              afterLabel="After"
              className="rounded-2xl overflow-hidden shadow-lg h-80"
            />
            <p className="font-inter text-xs text-slate-400 mt-3 text-center">
              Drag to compare — before &amp; after evaporative brine cooling
            </p>
          </motion.div>
        </div>

        {/* ── Rainfall Effect ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <p className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-2">Phenomenon 02</p>
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-10">Rainfall Effect in the Colorado River Basin</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <UploadableImage
              imageKey="rainfall-effect"
              defaultSrc="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
              alt="Colorado River Basin aerial"
              className="rounded-2xl overflow-hidden shadow-lg"
              imgClassName="w-full h-80 object-cover"
            />
            <p className="font-inter text-xs text-slate-400 mt-3 text-center">
              Colorado River Basin — headwaters to delta
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <p className="font-inter text-muted-foreground leading-relaxed mb-5">
              Increased atmospheric moisture from widespread brine evaporation doesn't just cool the valley — 
              it feeds the regional water cycle. Moisture-laden air moves inland and upward, seeding precipitation 
              over the mountains that feed the Colorado River.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed mb-5">
              This is not theoretical. Desert greening projects in the Sahel and Arabian Peninsula have demonstrated 
              that large-scale surface moisture changes measurably alter regional precipitation patterns within 5–10 years.
            </p>
            <blockquote className="border-l-4 border-teal pl-5 mt-6">
              <p className="font-inter text-sm italic text-slate-500 leading-relaxed">
                "Large-scale land surface changes that increase evapotranspiration can initiate a positive feedback 
                loop — more moisture, more clouds, more rain — reversing desertification at the regional scale."
              </p>
              <cite className="font-inter text-xs text-teal font-medium mt-2 block not-italic">
                — Synthesized from IPCC AR6 & Brovkin et al., vegetation-climate feedback literature
              </cite>
            </blockquote>
          </motion.div>
        </div>

        {/* ── Timeline Cards ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-2">The Fork in the Road</p>
          <h3 className="font-playfair text-3xl font-bold text-foreground">Three Possible Futures</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {timelineCards.map((card, i) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <UploadableImage
                imageKey={card.key}
                defaultSrc={card.defaultImg}
                alt={card.label}
                className="relative"
                imgClassName="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className={`inline-block text-xs font-inter font-semibold tracking-widest uppercase px-3 py-1 rounded-full border mb-4 ${card.badgeColor}`}>
                  {card.label}
                </span>
                <h4 className="font-playfair text-xl font-bold text-foreground mb-3">{card.heading}</h4>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}