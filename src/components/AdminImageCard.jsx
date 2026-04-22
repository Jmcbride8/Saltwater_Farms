import { useState, useRef } from 'react';
import { Pencil, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';

/**
 * Wraps any image card with an admin-only edit button.
 * Props:
 *  - src: current image URL
 *  - alt: image alt text
 *  - onImageChange: (newUrl) => void  — called after successful upload
 *  - children: overlay content rendered on top of the image
 *  - className: extra classes for the outer wrapper
 *  - imgClassName: extra classes for the <img>
 */
export default function AdminImageCard({ src, alt, onImageChange, children, className = '', imgClassName = '' }) {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);

  const isAdmin = user?.role === 'admin';

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    onImageChange(file_url);
    setUploading(false);
    e.target.value = '';
  };

  return (
    <div className={`relative group ${className}`}>
      <img src={src} alt={alt} className={imgClassName} />
      {children}

      {isAdmin && (
        <>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 bg-black/70 hover:bg-black/90 text-white text-xs font-inter font-medium rounded transition-all opacity-0 group-hover:opacity-100"
          >
            {uploading ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <Pencil className="w-3 h-3" />
            )}
            {uploading ? 'Uploading…' : 'Replace Image'}
          </button>
        </>
      )}
    </div>
  );
}