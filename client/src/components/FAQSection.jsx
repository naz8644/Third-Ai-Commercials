import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHead } from './v2/Reveal';

export const faqs = [
  ['What does Third AI Commercials do?', 'We are a generative AI studio in Haripad, Alappuzha, Kerala with two services: AI ad production (TV commercials, product ads, fashion campaigns, brand films, reels and AI images) and AI automation (WhatsApp and chat assistants, voice agents, lead follow-up, reports and workflow automation for businesses).'],
  ['Have your AI ads been on television?', 'Yes. Our AI commercials have aired on Kerala TV channels including Asianet News, Manorama News, Mathrubhumi News, 24 News, MediaOne and Reporter TV.'],
  ['How long does an AI ad take?', 'Most AI ads take days rather than the weeks a traditional shoot needs. The exact timeline depends on length and complexity, and we confirm it in your quote.'],
  ['Can you use our real product in an AI ad?', 'Yes. We use photos of your actual product, packaging or location as references so the ad stays true to your brand.'],
  ['Do you make Malayalam ads?', 'Yes. We make ads in Malayalam and English, written for the audience you want to reach.'],
  ['What kind of work can AI automation take over?', 'Repetitive, rule-based work: answering common customer questions on WhatsApp, capturing and following up leads, booking appointments, sending reminders, updating spreadsheets or CRM, and preparing daily reports.'],
  ['Do we need to change our software?', 'Usually not. We connect the tools you already use, such as WhatsApp, Google Sheets, your CRM and email, using platforms like n8n.'],
  ['How much do your services cost?', 'It depends on the scope. Message us on WhatsApp with what you need and we will send a clear quote.']
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4 sm:px-[6vw] bg-[#060609] border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <SectionHead eyebrow="FAQ" title="Questions, answered." />
        <div className="space-y-3">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className={`rounded-2xl v2-card transition ${isOpen ? 'border-white/20' : ''}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6">
                  <h3 className="font-display text-white text-base sm:text-lg">{q}</h3>
                  <Plus className={`w-5 h-5 shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-6 text-sm sm:text-[15px] text-gray-400 font-light leading-relaxed">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
