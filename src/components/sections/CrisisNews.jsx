import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Newspaper, RefreshCw } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function CrisisNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    setLoading(true);
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `Find 5 recent, real news articles about the Colorado River water crisis, Lake Mead drought, or Southwest water shortage from 2023–2025. 
      For each article, provide the real title, publication name, a 1–2 sentence summary of the key finding or headline fact, the approximate date, and the real URL if you know it (otherwise omit the url field).
      Focus on the most urgent and alarming recent developments — cutbacks, record lows, policy fights, agriculture impacts.
      Return only real articles you are confident exist.`,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="rounded-xl border border-border p-6 animate-pulse">
              <div className="h-3 bg-muted rounded w-1/3 mb-3" />
              <div className="h-4 bg-muted rounded w-full mb-2" />
              <div className="h-4 bg-muted rounded w-4/5 mb-4" />
              <div className="h-3 bg-muted rounded w-full mb-1" />
              <div className="h-3 bg-muted rounded w-2/3" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-xl border border-border bg-white p-6 flex flex-col hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-inter text-xs font-semibold text-teal uppercase tracking-wide">{article.publication}</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-xs font-inter text-muted-foreground">{article.date}</span>
              </div>
              <h4 className="font-playfair text-lg font-bold text-foreground mb-2 leading-snug">
                {article.title}
              </h4>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed flex-1">
                {article.summary}
              </p>
              {article.url && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-xs font-inter font-medium text-foreground hover:text-teal transition-colors"
                >
                  Read full article <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}