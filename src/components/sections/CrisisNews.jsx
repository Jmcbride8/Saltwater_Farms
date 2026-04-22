import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Newspaper, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function CrisisNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const prev = () => setCurrent(c => (c - 1 + articles.length) % articles.length);
  const next = () => setCurrent(c => (c + 1) % articles.length);

  useEffect(() => {
    if (articles.length === 0) return;
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % articles.length), 5000);
    return () => clearInterval(timerRef.current);
  }, [articles.length]);

  const fetchArticles = async () => {
    setLoading(true);
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `Today's date is ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Find 5 real news articles published in the last 6 months about the Colorado River water crisis, Lake Mead drought, or Southwest water shortage. 
      For each article, provide the real title, publication name, a 1–2 sentence summary of the key finding or headline fact, the approximate publication date (month and year), and the real URL if you know it (otherwise omit the url field).
      Focus on the most urgent and alarming recent developments — cutbacks, record lows, policy fights, agriculture impacts.
      Only include articles published after ${new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}. Return only real articles you are confident exist.`,
      add_context_from_internet: true,
      response_json_schema: {
        type: 'object',
        properties: {
          articles: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                title: { type: 'string' },
                publication: { type: 'string' },
                date: { type: 'string' },
                summary: { type: 'string' },
                url: { type: 'string' },
                tag: { type: 'string', description: 'One of: Agriculture, Water Rights, Policy, Infrastructure, Climate' },
              },
            },
          },
        },
      },
    });
    setArticles(result.articles || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="mt-20 pt-16 border-t border-border">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Newspaper className="w-4 h-4 text-crisis" />
            <p className="text-sm font-inter font-medium tracking-[0.2em] uppercase text-crisis">Live Coverage</p>
          </div>
          <h3 className="font-playfair text-2xl font-bold text-foreground">The Crisis in the Headlines</h3>
        </div>
        <button
          onClick={fetchArticles}
          disabled={loading}
          className="flex items-center gap-2 text-xs font-inter text-muted-foreground hover:text-foreground transition-colors disabled:opacity-40"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="rounded-xl border border-border p-8 animate-pulse">
          <div className="h-3 bg-muted rounded w-1/4 mb-4" />
          <div className="h-6 bg-muted rounded w-3/4 mb-3" />
          <div className="h-4 bg-muted rounded w-full mb-2" />
          <div className="h-4 bg-muted rounded w-2/3" />
        </div>
      ) : articles.length > 0 && (
        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-border bg-white p-8 flex flex-col min-h-[220px]"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-inter text-xs font-semibold text-teal uppercase tracking-wide">{articles[current].publication}</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-xs font-inter text-muted-foreground">{articles[current].date}</span>
              {articles[current].tag && (
                <>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs font-inter font-medium px-2 py-0.5 rounded-full bg-crisis/10 text-crisis">{articles[current].tag}</span>
                </>
              )}
            </div>
            <h4 className="font-playfair text-2xl font-bold text-foreground mb-3 leading-snug">
              {articles[current].title}
            </h4>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed flex-1">
              {articles[current].summary}
            </p>
            {articles[current].url && (
              <a
                href={articles[current].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-5 text-xs font-inter font-medium text-foreground hover:text-teal transition-colors"
              >
                Read full article <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {articles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? 'bg-crisis w-6' : 'bg-border hover:bg-muted-foreground'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              </button>
              <button onClick={next} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}