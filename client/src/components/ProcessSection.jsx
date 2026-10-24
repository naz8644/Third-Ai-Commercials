import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHead } from './v2/Reveal';

const tracks = {
  ads: {
    label: 'AI Ads',
    steps: [
      ['Strategy', 'One call to map your brand, audience and goal.'],
      ['Script', 'Shot-by-shot script written for AI production. You approve it first.'],
      ['Creative direction', 'Style, mood, colour and characters locked before production.'],
      ['AI production', 'Multiple AI models generate every scene at cinematic quality.'],
      ['Edit and sound', 'Graded, sound-designed and timed until it feels premium.'],
      ['Delivery', 'Every format for TV, YouTube and social, ready to launch.']
    ]
  },
  auto: {
    label: 'AI Automation',
    steps: [
      ['Discovery call', 'We learn how your business runs and where time is lost.'],
      ['Workflow map', 'We map the tasks to automate and show you the plan before building.'],
      ['Build', 'We set up the AI agents and connect your WhatsApp, CRM, sheets and email.'],
      ['Test', 'Your team tries it with real cases and we fine-tune the answers and steps.'],
      ['Launch', 'It goes live, with simple training for your staff.'],
      ['Support', 'We monitor, improve and add new automations as you grow.']
    ]
  }
};

export default function ProcessSection() {
  const [tab, setTab] = useState('ads');
  const ads = tab === 'ads';
  return (
    <section id="process" className="relative py-24 sm:py-32 px-4 sm:px-[6vw] bg-[#050507] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionHead eyebrow="Process" title="Simple, clear, and fast." sub="Two services, one way of working: you see and approve everything before we build it." />
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full border border-white/10 bg-white/[0.03]" role="tablist">
            {Object.entries(tracks).map(([k, v]) => (
              <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-sm font-semibold transition ${tab === k ? (k === 'ads' ? 'bg-gradient-to-r from-[#ff2751] to-[#e722ff] text-white' : 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white') : 'text-gray-400 hover:text-white'}`}>
                {v.label}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.ol key={tab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {tracks[tab].steps.map(([t, d], i) => (
              <li key={t} className="relative rounded-2xl p-6 v2-card">
                <span className={`font-mono text-xs ${ads ? 'text-[#ff5d7e]' : 'text-cyan-300'}`}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-white text-lg">{t}</h3>
                <p className="mt-1.5 text-[13px] sm:text-sm text-gray-400 font-light leading-relaxed">{d}</p>
                <div className={`absolute left-6 right-6 bottom-0 h-px ${ads ? 'bg-gradient-to-r from-[#ff2751]/60 to-transparent' : 'bg-gradient-to-r from-cyan-400/60 to-transparent'}`} />
              </li>
            ))}
          </motion.ol>
        </AnimatePresence>
      </div>
    </section>
  );
}
