import React from 'react';
import { Tv, Timer, Languages, Layers } from 'lucide-react';
import Reveal, { SectionHead } from './Reveal';
import ServiceGrid from './ServiceGrid';
import { AdsVisual } from './Visuals';
import { servicesList } from '../ServicesSection';

const points = [
  { icon: <Tv className="w-5 h-5" />, t: 'Broadcast quality', d: 'Our AI commercials have aired on Asianet News, Manorama News, Mathrubhumi News, 24 News, MediaOne and Reporter TV.' },
  { icon: <Timer className="w-5 h-5" />, t: 'Days, not months', d: 'No sets, crews or reshoots. Script to final cut in a fraction of the time of a traditional shoot.' },
  { icon: <Languages className="w-5 h-5" />, t: 'Made for Kerala and beyond', d: 'Malayalam and English ads with local culture, festivals and faces that your audience connects with.' },
  { icon: <Layers className="w-5 h-5" />, t: 'Every format', d: 'TV, YouTube, Instagram Reels and print-ready stills from one production.' }
];

export default function AdsSection() {
  return (
    <section id="ads" className="relative py-24 sm:py-32 px-4 sm:px-[6vw] bg-[#050507] overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ff2751]/10 blur-[160px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHead tone="ads" eyebrow="AI Ad Services" title={<>Cinematic AI ads that make people <span className="v2-ads-text">stop and buy.</span></>}
          sub="Anyone can generate a video now. We build ads with strategy, story and cultural understanding, so every frame works to grow your brand and bring you customers." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-14 sm:mb-20">
          <Reveal><AdsVisual /></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.07}>
                <div className="h-full rounded-2xl p-5 v2-card">
                  <div className="text-[#ff5d7e] mb-3">{p.icon}</div>
                  <h3 className="font-display text-white text-base sm:text-lg mb-1.5">{p.t}</h3>
                  <p className="text-[13px] text-gray-400 font-light leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <ServiceGrid list={servicesList} tone="ads" />
      </div>
    </section>
  );
}
