import React from 'react';
import { Target, Handshake, MapPin, Sparkles } from 'lucide-react';
import Reveal, { SectionHead } from './Reveal';

const items = [
  { icon: <Target className="w-5 h-5" />, t: 'Results first, tools second', d: 'A beautiful ad is worthless if it does not sell, and an automation is worthless if your team does not use it. We start from your goal.' },
  { icon: <Sparkles className="w-5 h-5" />, t: 'One AI partner for growth and operations', d: 'The same team that brings you customers with ads makes sure every enquiry is answered and followed up.' },
  { icon: <MapPin className="w-5 h-5" />, t: 'Rooted in Kerala', d: 'Based in Haripad, Alappuzha. We understand Malayali audiences, local festivals and how businesses here actually work.' },
  { icon: <Handshake className="w-5 h-5" />, t: 'Founder-led, direct', d: 'You work directly with the founders, from the first call to delivery and support, with no layers in between.' }
];

export default function WhySection() {
  return (
    <section id="why" className="relative py-24 sm:py-32 px-4 sm:px-[6vw] bg-[#060609] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-r from-[#ff2751]/10 via-violet-500/10 to-cyan-400/10 blur-[150px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHead eyebrow="Why Third AI" title={<>Ads that bring customers.<br className="hidden sm:block" /> Systems that <span className="v2-grad-text">never drop them.</span></>} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((x, i) => (
            <Reveal key={x.t} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-3xl p-6 sm:p-8 v2-card">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-[#ff2751]/70 via-violet-500/60 to-cyan-400/60 mb-5">{x.icon}</div>
                <h3 className="font-display text-white text-lg sm:text-xl mb-2">{x.t}</h3>
                <p className="text-sm sm:text-[15px] text-gray-400 font-light leading-relaxed">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
