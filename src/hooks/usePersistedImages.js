import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

/**
 * Persists images to the database via CrisisCardImage entity.
 * key: section key (e.g. 'crisis')
 * defaults: array of default image URLs
 * cardIds: array of card IDs corresponding to the defaults
 */
export function usePersistedImages(key, defaults, cardIds = []) {
  const [images, setImages] = useState(defaults);
  const [loading, setLoading] = useState(true);

  // Load images from database on mount
  useEffect(() => {
    const loadImages = async () => {
      try {
        const records = await base44.entities.CrisisCardImage.list();
        const imageMap = {};
        records.forEach(r => {
          imageMap[r.cardId] = r.imageUrl;
        });
        
        // Merge stored images with defaults
        const merged = defaults.map((def, i) => {
          const cardId = cardIds[i];
          return imageMap[cardId] || def;
        });
        setImages(merged);
      } catch (error) {
        // Fallback to defaults on error
        setImages(defaults);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [key]);

  const updateImage = async (index, url) => {
    const cardId = cardIds[index];
    if (!cardId) return;

    setImages(prev => {
      const next = [...prev];
      next[index] = url;
      return next;
    });

    try {
      // Check if record exists
      const existing = await base44.entities.CrisisCardImage.filter({ cardId });
      if (existing.length > 0) {
        // Update existing
        await base44.entities.CrisisCardImage.update(existing[0].id, { imageUrl: url });
      } else {
        // Create new
        await base44.entities.CrisisCardImage.create({ cardId, imageUrl: url });
      }
    } catch (error) {
      console.error('Failed to save image:', error);
    }
  };

  return [images, updateImage, loading];
}