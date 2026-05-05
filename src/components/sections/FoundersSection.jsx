import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Pencil, Loader2, UserCircle2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';

const founders = [
  {
    id: 'charlie',
    name: 'Charlie Patton',
    role: 'Innovation',
    company: 'Seawater Greenhouse',
    bio: 'Charlie is the inventor behind the evaporative cooling wall technology, refined through years of work with Seawater Greenhouse — a pioneer in using seawater and solar energy to grow crops in arid coastal environments. His breakthroughs in deploying brackish and saline water for agricultural cooling form the scientific core of Saltwater Farms.',
    tag: 'The Fritz Haber',
  },
  {
    id: 'jason',
    name: 'Jason McBride',
    role: 'Industrialization',
    company: 'E2Eden',
    bio: 'Jason brings the Silicon Valley mindset to bear on humanity\'s greatest challenges. Through E2Eden — "A New Dawn for Dead Seas" — his mission is to deploy innovations that are not only world-changing but profitable, mobilizing capital markets to fund planetary-scale solutions. Like Carl Bosch, he builds the engine that takes the innovation to civilization-defining scale.',
    tag: 'The Carl Bosch',
  },
];

function FounderCard({ person, isAdmin }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [recordId, setRecordId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    base44.entities.FounderImage.filter({ founderId: person.id }).then((records) => {
      if (records.length > 0) {
        setImageUrl(records[0].imageUrl);
        setRecordId(records[0].id);
      }
    });
  }, [person.id]);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    if (recordId) {
      await base44.entities.FounderImage.update(recordId, { imageUrl: file_url });
    } else {
      const rec = await base44.entities.FounderImage.create({ founderId: person.id, imageUrl: file_url });
      setRecordId(rec.id);
    }
    setImageUrl(file_url);
    setUploading(false);
    e.target.value = '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl border border-border overflow-hidden"
    >
      {/* Portrait */}
      <div className="relative group h-72 bg-muted flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={person.name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <UserCircle2 className="w-20 h-20 opacity-30" />
            {isAdmin && <p className="font-inter text-sm opacity-50">Upload a photo</p>}
          </div>
        )}
        {isAdmin && (
          <>
            <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            <button
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="flex items-center gap-2 px-4 py-2 bg-black/70 text-white text-sm font-inter font-medium rounded-lg">
                {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Pencil className="w-4 h-4" />}
                {uploading ? 'Uploading…' : 'Replace Photo'}
              </span>
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-8">
        <div className="flex items-start justify-end mb-4">
          <span className="text-xs font-inter text-muted-foreground uppercase tracking-wide">{person.role}</span>
        </div>
        <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">{person.name}</h3>
        <p className="font-inter text-sm text-teal font-medium mb-4">{person.company}</p>
        <p className="font-inter text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
      </div>
    </motion.div>
  );
}

export default function FoundersSection() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <section className="py-28 bg-muted">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-teal mb-4">The Team</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Modern Partnership
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Like Haber and Bosch — one the inventor, one the industrialist — we collaborated to combine deep agricultural innovation with the operational expertise to create a globally scalable enterprise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {founders.map((person) => (
            <FounderCard key={person.id} person={person} isAdmin={isAdmin} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-border p-8 text-center"
        >
          <p className="font-inter text-sm text-muted-foreground uppercase tracking-widest mb-3">The Mission</p>
          <p className="font-playfair text-2xl font-bold text-foreground max-w-3xl mx-auto leading-relaxed">
            "Like BASF turned an innovation into an industry at nation-state scale, we bring the Silicon Valley 
            mindset to convert problems into profitable and thus investable solutions — attracting and deploying 
            capital for change."
          </p>
          <p className="font-inter text-teal text-sm font-medium mt-4">— E2Eden Mission Statement</p>
        </motion.div>
      </div>
    </section>
  );
}