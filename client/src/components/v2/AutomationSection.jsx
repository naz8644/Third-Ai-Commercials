import React from 'react';
import { Gem, Building2, Stethoscope, ShoppingBag, GraduationCap, Factory } from 'lucide-react';
import Reveal, { SectionHead } from './Reveal';
import ServiceGrid from './ServiceGrid';
import { AutoVisual } from './Visuals';
import { automationList } from '../ServicesSection';

const useCases = [
  { icon: <Gem className="w-5 h-5" />, t: 'Jewellery and textile showrooms', d: 'WhatsApp assistant shares new collections and prices, answers enquiries and books store visits.' },
  { icon: <Building2 className="w-5 h-5" />, t: 'Real estate', d: 'Every portal and ad lead gets an instant reply, site-visit booking and timely follow-ups.' },
  { icon: <Stethoscope className="w-5 h-5" />, t: 'Clinics and hospitals', d: 'Appointment booking, reminders and common patient questions handled automatically.' },
  { icon: <ShoppingBag className="w-5 h-5" />, t: 'Retail and D2C brands', d: 'Order updates, abandoned-cart messages and review requests without manual work.' },
  { icon: <GraduationCap className="w-5 h-5" />, t: 'Education', d: 'Admission enquiries answered, counsellor follow-ups scheduled and fee reminders sent.' },
  { icon: <Factory className="w-5 h-5" />, t: 'Distributors and manufacturers', d: 'Dealer orders, stock updates and daily sales reports compiled and shared automatically.' }
];

const steps = ['Find the repetitive tasks', 'Design the workflow', 'Build and connect your tools', 'Test with your team', 'Go live and improve'];

export default function AutomationSection() {
  return (
    <section id="automation" className="relative py-24 sm:py-32 px-4 sm:px-[6vw] bg-[#04060a] overflow-hidden border-t border-white/5">
      <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] rounded-full bg-cyan-400/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-violet-500/10 blur-[150px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHead tone="auto" eyebrow="AI Automation Services" title={<>Your team's repetitive work, <span className="v2-auto-text">done by AI.</span></>}
          sub="We study how your business runs, find the tasks that eat your team's time, and build AI automations around them: answering enquiries, following up leads, updating records and sending reports." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-14 sm:mb-20">
          <Reveal className="lg:order-2"><AutoVisual /></Reveal>
          <div className="lg:order-1">
            <Reveal><h3 className="font-display text-white text-xl sm:text-2xl mb-6">How we automate a business</h3></Reveal>
            <ol className="space-y-3">
              {steps.map((s, i) => (
                <Reveal key={s} delay={i * 0.06} as="li">
                  <div className="flex items-center gap-4 rounded-xl p-3.5 v2-card">
                    <span className="w-9 h-9 shrink-0 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 font-mono text-xs flex items-center justify-center">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-gray-200 text-sm sm:text-base">{s}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.3}><p className="mt-5 text-sm text-gray-500">Built with tools like n8n, the WhatsApp Business platform, Google Workspace and your existing CRM.</p></Reveal>
          </div>
        </div>
        <ServiceGrid list={automationList} tone="auto" />
        <div className="mt-16 sm:mt-24">
          <Reveal><h3 className="font-display text-white text-2xl sm:text-3xl mb-2 text-center">What you can automate</h3></Reveal>
          <Reveal delay={0.05}><p className="text-center text-gray-400 font-light mb-10">Examples by industry</p></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {useCases.map((u, i) => (
              <Reveal key={u.t} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-2xl p-5 v2-card hover:border-cyan-400/30 transition">
                  <div className="text-cyan-300 mb-3">{u.icon}</div>
                  <h4 className="font-display text-white text-base mb-1.5">{u.t}</h4>
                  <p className="text-[13px] text-gray-400 font-light leading-relaxed">{u.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
