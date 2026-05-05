import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

// Maps section key to the correct entity
const ENTITY_MAP = {
  crisis: base44.entities.CrisisCardImage,
  insight: base44.entities.InsightCardImage,
  global: base44.entities.GlobalRegionImage,
};

/**
 * Persists images to the database.
 * key: section key — 'crisis' | 'insight' | 'global'
 * defaults: array of default image URLs
 * cardIds: array of unique card IDs corresponding to the defaults
 */
export function usePersistedImages(key, defaults, cardIds = []) {
  const [images, setImages] = useState(defaults);
  const [loading, setLoading] = useState(true);

  const entity = ENTITY_MAP[key];

  useEffect(() => {
    if (!entity) {
      setLoading(false);
      return;
    }

    const loadImages = async () => {
      try {
        const records = await entity.list();
        const imageMap = {};
        records.forEach(r => {
          imageMap[r.cardId] = r.imageUrl;
        });

        const merged = defaults.map((def, i) => {
          const cardId = cardIds[i];
          return (cardId && imageMap[cardId]) ? imageMap[cardId] : def;
        });
        setImages(merged);
      } catch {
        setImages(defaults);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [key]);

  const updateImage = async (index, url) => {
    if (!entity) return;
    const cardId = cardIds[index];
    if (!cardId) return;

    // Optimistic UI update
    setImages(prev => {
      const next = [...prev];
      next[index] = url;
      return next;
    });

    try {
      const existing = await entity.filter({ cardId });
      if (existing.length > 0) {
        await entity.update(existing[0].id, { imageUrl: url });
      } else {
        await entity.create({ cardId, imageUrl: url });
      }
    } catch (error) {
      console.error('Failed to save image:', error);
    }
  };

  return [images, updateImage, loading];
}