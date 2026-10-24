import React from 'react';
import Reveal from './Reveal';

export default function ServiceGrid({ list, tone }) {
  const ads = tone === 'ads';
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {list.map((item, idx) => (
        <Reveal key={item.title} delay={(idx % 4) * 0.06}>
          <article
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
            }}
            className={`group relative h-full rounded-2xl p-6 v2-card overflow-hidden transition-all duration-500 hover:-translate-y-1 ${ads ? 'hover:border-[#ff2751]/40' : 'hover:border-cyan-400/40'}`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(260px circle at var(--mx,50%) var(--my,50%), ${ads ? 'rgba(255,39,81,0.16)' : 'rgba(34,211,238,0.14)'}, transparent 65%)` }} />
            <div className="relative flex items-center justify-between mb-5">
              <div className={`p-2.5 rounded-xl border ${ads ? 'text-[#ff5d7e] bg-[#ff2751]/10 border-[#ff2751]/30' : 'text-cyan-300 bg-cyan-400/10 border-cyan-400/30'}`}>{item.icon}</div>
              <span className="font-mono text-xs text-gray-600">{String(idx + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="relative font-display text-lg text-white leading-snug mb-2">{item.title}</h3>
            <p className="relative text-[13px] text-gray-400 font-light leading-relaxed">{item.desc}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
