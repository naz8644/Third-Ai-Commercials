import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ eyebrow, title, sub, align = 'center', tone = 'mix' }) {
  const eyebrowColor = tone === 'auto' ? 'text-cyan-300 border-cyan-400/30 bg-cyan-400/[0.06]' : tone === 'ads' ? 'text-[#ff5d7e] border-[#ff2751]/30 bg-[#ff2751]/[0.06]' : 'text-white/80 border-white/15 bg-white/[0.04]';
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-4xl mb-12 sm:mb-16`}>
      <Reveal>
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-5 ${eyebrowColor}`}>{eyebrow}</div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05]">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
