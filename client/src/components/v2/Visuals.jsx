import React, { useEffect, useState } from 'react';

/* Animated "AI commercial being produced" monitor */
export function AdsVisual({ compact = false }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a10] shadow-[0_20px_60px_rgba(255,39,81,0.18)]">
      {/* Scene layers */}
      <div className="absolute inset-0 v2-kenburns" style={{
        background:
          'radial-gradient(60% 70% at 70% 35%, rgba(255,140,90,0.55), transparent 60%),' +
          'radial-gradient(50% 60% at 25% 75%, rgba(231,34,255,0.45), transparent 65%),' +
          'radial-gradient(40% 40% at 80% 85%, rgba(255,39,81,0.5), transparent 70%),' +
          'linear-gradient(160deg, #1a0b1f, #0b0712 60%, #120610)'
      }} />
      {/* Product silhouette */}
      <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 v2-float">
        <div className="mx-auto w-4 h-3 sm:w-5 sm:h-3.5 rounded-t-md bg-gradient-to-b from-amber-200 to-amber-500" /><div className="w-14 h-20 sm:w-16 sm:h-24 rounded-[30%_30%_16%_16%] bg-gradient-to-br from-amber-100/90 via-amber-400/60 to-rose-500/40 border border-amber-100/60 shadow-[0_0_50px_rgba(255,190,120,0.55)] relative overflow-hidden"><div className="absolute inset-y-0 left-2 w-2 bg-white/50 blur-[2px] rounded-full" /><div className="absolute bottom-4 inset-x-2 h-4 rounded bg-black/30 flex items-center justify-center text-[6px] tracking-[0.2em] text-amber-50 font-mono">BRAND</div></div>
        <div className="mx-auto mt-2 w-20 h-2 rounded-full bg-black/50 blur-[3px]" />
      </div>
      {/* Light sweep */}
      <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-18deg] v2-sweep" />
      {/* Letterbox */}
      <div className="absolute inset-x-0 top-0 h-[9%] bg-black/80" />
      <div className="absolute inset-x-0 bottom-0 h-[9%] bg-black/80" />
      {/* HUD */}
      <div className="absolute top-[11%] left-3 sm:left-4 flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] text-white/80">
        <span className="w-2 h-2 rounded-full bg-[#ff2751] v2-blink" /> REC · AI RENDER
      </div>
      <div className="absolute top-[11%] right-3 sm:right-4 font-mono text-[9px] sm:text-[10px] text-white/60">4K · 16:9 · 9:16</div>
      {!compact && (
        <div className="absolute bottom-[14%] left-3 sm:left-4 font-display text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow">
          Festive TVC · 00:30
        </div>
      )}
      {/* Timeline */}
      <div className="absolute bottom-[3%] left-3 right-3 sm:left-4 sm:right-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-[#ff2751] to-[#e722ff]" />
        <div className="absolute top-1/2 -translate-y-1/2 w-0.5 h-3 bg-white v2-playhead" />
      </div>
    </div>
  );
}

const LOG = [
  'New WhatsApp enquiry answered instantly',
  'Lead saved to CRM with name and budget',
  'Follow-up message scheduled for tomorrow',
  'Daily sales report sent to the owner',
  'Appointment confirmed and reminder set'
];

/* Animated automation workflow */
export function AutoVisual({ compact = false }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % LOG.length), 2200);
    return () => clearInterval(t);
  }, []);
  const nodes = [
    { x: 40, y: 60, label: 'WhatsApp', c: '#25D366' },
    { x: 160, y: 30, label: 'AI Agent', c: '#a78bfa' },
    { x: 160, y: 95, label: 'CRM', c: '#22d3ee' },
    { x: 280, y: 60, label: 'Report', c: '#f472b6' }
  ];
  const paths = ['M58 60 C 100 60, 110 30, 142 30', 'M58 60 C 100 60, 110 95, 142 95', 'M178 30 C 220 30, 230 60, 262 60', 'M178 95 C 220 95, 230 60, 262 60'];
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#070b12] shadow-[0_20px_60px_rgba(34,211,238,0.15)]">
      <div className="absolute inset-0 v2-grid-bg opacity-60" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(124,92,255,0.25), transparent 70%)' }} />
      <svg viewBox="0 0 320 125" className="absolute inset-x-0 top-[6%] w-full h-[72%]" aria-hidden="true">
        {paths.map((d, k) => (
          <g key={k}>
            <path d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <path d={d} fill="none" stroke="url(#v2flow)" strokeWidth="1.5" className="v2-dash" />
            <circle r="2.6" fill="#fff">
              <animateMotion dur={`${1.8 + k * 0.35}s`} repeatCount="indefinite" path={d} />
            </circle>
          </g>
        ))}
        <defs>
          <linearGradient id="v2flow" x1="0" x2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        {nodes.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="17" fill="rgba(255,255,255,0.04)" stroke={n.c} strokeOpacity="0.7" />
            <circle cx={n.x} cy={n.y} r="5" fill={n.c} />
            <text x={n.x} y={n.y + 30} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.75)" fontFamily="Space Grotesk, sans-serif">{n.label}</text>
          </g>
        ))}
      </svg>
      {!compact && (
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 backdrop-blur px-3 py-2 font-mono text-[9px] sm:text-[11px] text-cyan-200">
          <span className="relative flex w-2 h-2"><span className="absolute inset-0 rounded-full bg-emerald-400 v2-ring" /><span className="relative w-2 h-2 rounded-full bg-emerald-400" /></span>
          <span key={i} className="truncate animate-fadeIn">{LOG[i]}</span>
        </div>
      )}
    </div>
  );
}
