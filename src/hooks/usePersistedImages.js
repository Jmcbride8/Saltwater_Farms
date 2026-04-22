import { useState } from 'react';

/**
 * Like useState but persists to localStorage.
 * key: unique string per section (e.g. 'crisis-card-images')
 * defaults: array of default image URLs
 */
export function usePersistedImages(key, defaults) {
  const [images, setImages] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge: use stored value where present, fall back to default
        return defaults.map((def, i) => parsed[i] || def);
      }
    } catch {}
    return defaults;
  });

  const updateImage = (index, url) => {
    setImages(prev => {
      const next = prev.map((v, i) => (i === index ? url : v));
      try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  return [images, updateImage];
}