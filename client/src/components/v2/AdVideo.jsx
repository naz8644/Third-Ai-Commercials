import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AdVideo({ src, poster, label = 'Renaflex · AI TV Commercial', aspectClass = 'aspect-video' }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  // Play only while on screen, to save data and battery
  useEffect(() => {
    const v = ref.current;
    if (!v || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.25 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_20px_60px_rgba(255,39,81,0.18)]`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="AI-generated TV commercial for Renaflex fibre cement board, made by Third AI Commercials"
      />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] text-white/85 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#ff2751] v2-blink" /> MADE WITH AI
      </div>
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-display text-white text-xs sm:text-sm font-semibold drop-shadow pointer-events-none">{label}</div>
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-9 h-9 rounded-full bg-black/55 border border-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-black/75 transition"
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
