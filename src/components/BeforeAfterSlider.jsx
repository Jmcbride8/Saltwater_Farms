import { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

/**
 * BeforeAfterSlider
 * Props:
 *  - beforeSrc: URL of the "before" image (shown on the right side)
 *  - afterSrc:  URL of the "after" image (shown on the left side, clipped)
 *  - beforeLabel: label text (default "Before")
 *  - afterLabel:  label text (default "After")
 *  - className: wrapper class
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const getPos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  };

  const onMouseDown = (e) => {
    dragging.current = true;
    e.preventDefault();
  };

  const onMouseMove = useCallback((e) => {
    if (!dragging.current) return;
    setPosition(getPos(e.clientX));
  }, []);

  const onMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);

  const onTouchMove = useCallback((e) => {
    setPosition(getPos(e.touches[0].clientX));
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none cursor-col-resize w-full ${className}`}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
    >
      {/* Before image — always full size, sits behind */}
      <img
        src={beforeSrc}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After image — full size, clipped via clipPath so it never moves */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-col-resize"
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={(e) => { dragging.current = true; }}
        onTouchEnd={() => { dragging.current = false; }}
      >
        <ChevronsLeftRight className="w-5 h-5 text-slate-600" />
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-4 z-10 pointer-events-none">
        <span className="font-inter text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded bg-black/60 text-white">
          {afterLabel}
        </span>
      </div>
      <div className="absolute bottom-3 right-4 z-10 pointer-events-none">
        <span className="font-inter text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded bg-black/60 text-white">
          {beforeLabel}
        </span>
      </div>
    </div>
  );
}