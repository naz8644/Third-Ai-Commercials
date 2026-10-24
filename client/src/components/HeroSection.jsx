import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle, Clapperboard, Workflow } from 'lucide-react';
import FloatingCore from '../three/FloatingCore';
import CanvasErrorBoundary from './CanvasErrorBoundary';
import { AdsVisual, AutoVisual } from './v2/Visuals';

const channels = [
  { name: 'Asianet News', logo: '/images/logos/asianet_news.jpg' },
  { name: 'Manorama News', logo: '/images/logos/manorama_news.png' },
  { name: 'Mathrubhumi News', logo: '/images/logos/mathrubhumi.png' },
  { name: '24 News', logo: '/images/logos/24_news.png' },
  { name: 'MediaOne', logo: '/images/logos/media_one.png' },
  { name: 'Reporter TV', logo: '/images/logos/reporter_tv.jpg' }
];

const ease = [0.16, 1, 0.3, 1];

function Track({ tone, icon, kicker, title, text, tags, href, cta, visual, delay }) {
  const reduce = useReducedMotion();
  const ads = tone === 'ads';
  return (
    <motion.a
      href={href}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
      className={`group relative block rounded-3xl p-4 sm:p-5 v2-card backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${ads ? 'hover:border-[#ff2751]/50 hover:shadow-[0_30px_80px_rgba(255,39,81,0.18)]' : 'hover:border-cyan-400/50 hover:shadow-[0_30px_80px_rgba(34,211,238,0.15)]'}`}
    >
      {visual}
      <div className="px-1 sm:px-2 pt-5 pb-2 text-left">
        <div className={`flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] ${ads ? 'text-[#ff5d7e]' : 'text-cyan-300'}`}>
          {icon}<span>{kicker}</span>
        </div>
        <h3 className="mt-2 font-display font-bold text-xl sm:text-2xl text-white">{title}</h3>
        <p className="mt-2 text-sm sm:text-[15px] text-gray-400 font-light leading-relaxed">{text}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-300">{t}</span>
          ))}
        </div>
        <div className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${ads ? 'text-[#ff5d7e]' : 'text-cyan-300'}`}>
          {cta}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  );
}

export default function HeroSection() {
  const reduce = useReducedMotion();
  const fade = (d) => (reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease } });

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#050507] pt-28 sm:pt-36 pb-16 sm:pb-24 select-none">
      <div className="absolute inset-x-0 top-0 h-[100svh] z-0 pointer-events-none overflow-hidden opacity-40">
        <CanvasErrorBoundary>
          <FloatingCore className="w-full h-full pointer-events-none" />
        </CanvasErrorBoundary>
      </div>
      <div className="absolute inset-0 v2-grid-bg pointer-events-none" />
      <div className="absolute top-[18%] left-[18%] w-[420px] h-[420px] rounded-full bg-[#ff2751]/20 blur-[140px] pointer-events-none" />
      <div className="absolute top-[22%] right-[14%] w-[420px] h-[420px] rounded-full bg-cyan-400/15 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 30%, transparent 30%, rgba(5,5,7,0.85) 85%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div {...fade(0)} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl font-mono text-[9px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.22em] text-gray-200 whitespace-nowrap">
          <span className="relative flex h-2 w-2"><span className="absolute inset-0 rounded-full bg-emerald-400 v2-ring" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>
          Kerala's AI studio · <span className="text-[#ff5d7e]">Ads</span> + <span className="text-cyan-300">Automation</span>
        </motion.div>

        <motion.h1 {...fade(0.08)} className="mt-7 sm:mt-9 font-display font-black text-white tracking-tight leading-[1.04] text-[2.4rem] sm:text-6xl md:text-7xl lg:text-[4.6rem]">
          <span className="v2-ads-text">AI ads</span> that sell.<br />
          <span className="v2-auto-text">AI automation</span> that saves hours.
        </motion.h1>

        <motion.p {...fade(0.16)} className="mt-6 sm:mt-8 mx-auto max-w-3xl text-gray-300 font-light leading-relaxed text-base sm:text-xl">
          Third AI Commercials is a generative AI studio in Kerala. We create cinematic AI commercials that have aired on Kerala's leading TV channels, and we build AI automations that take repetitive work off your team.
        </motion.p>

        <motion.div {...fade(0.24)} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 sm:py-4 font-bold text-white bg-gradient-to-r from-[#ff2751] via-[#c02bd8] to-[#22a6d3] shadow-[0_0_40px_rgba(231,34,255,0.35)] hover:scale-[1.03] active:scale-95 transition">
            Start a project <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://wa.me/919539101061?text=Hi%20Third%20AI%20Commercials,%20I'd%20like%20to%20know%20more%20about%20your%20AI%20ads%20and%20automation%20services." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 sm:py-4 font-semibold text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur transition">
            <MessageCircle className="w-4 h-4 text-emerald-400" /> Talk on WhatsApp
          </a>
        </motion.div>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <Track
            tone="ads" delay={0.35} href="#ads"
            icon={<Clapperboard className="w-3.5 h-3.5" />} kicker="AI Ad Services"
            title="Commercials that look like a big-budget shoot"
            text="TV commercials, product ads, fashion campaigns and brand films, made with AI in days and built to sell."
            tags={['AI TV Commercials', 'Product Ads', 'Brand Films', 'Reels & UGC']}
            cta="Explore AI ads" visual={<AdsVisual />}
          />
          <Track
            tone="auto" delay={0.45} href="#automation"
            icon={<Workflow className="w-3.5 h-3.5" />} kicker="AI Automation Services"
            title="AI that does your team's repetitive work"
            text="WhatsApp assistants, voice agents, lead follow-ups and reports that run on their own, every day."
            tags={['WhatsApp AI', 'Voice Agents', 'Lead Follow-up', 'Workflows']}
            cta="Explore AI automation" visual={<AutoVisual />}
          />
        </div>
      </div>

      {/* Aired on marquee */}
      <div className="relative z-10 mt-16 sm:mt-24">
        <p className="text-center font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gray-500 mb-6">Our AI ads have aired on</p>
        <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
          <div className="flex w-max gap-4 sm:gap-6 v2-marquee">
            {[...channels, ...channels].map((c, k) => (
              <div key={k} className="h-14 sm:h-16 w-32 sm:w-40 shrink-0 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center p-2.5">
                <img src={c.logo} alt={k < channels.length ? `${c.name} logo` : ''} className="max-h-full max-w-full object-contain opacity-90" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
