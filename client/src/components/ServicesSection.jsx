import React from 'react';

const servicesList = [
  {
    title: 'AI Commercial Videos',
    desc: "Your brand deserves a commercial that actually looks like a commercial. We create high-end video ads with cinematic visuals, real-feeling characters, and professional direction — the kind of quality that used to cost a fortune. Now it doesn't have to.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4M10 8l5 3-5 3V8z" fill="rgba(255, 42, 59, 0.2)" />
      </svg>
    )
  },
  {
    title: 'AI Product Ads',
    desc: "People scroll past hundreds of ads every day. Yours won't be one of them. We build product ads so visually sharp and unexpected that your audience stops, watches, and remembers.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
        <path d="M3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    )
  },
  {
    title: 'AI Fashion Campaigns',
    desc: "Your collection deserves to be seen the right way. We create campaign visuals that make people stop, look twice, and remember your brand — no big production budget needed.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: 'AI Cinematic Films',
    desc: 'Some brands have a story worth telling properly. We take your idea from script to final cut, with real narrative, sound design, and visuals that feel like cinema.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
        <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
      </svg>
    )
  },
  {
    title: 'AI UGC Videos',
    desc: "The content your audience already trusts, done right. We produce natural, platform-ready videos that feel like real people talking about your brand — built for Reels, TikTok, and YouTube.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    )
  },
  {
    title: 'AI Image Generation',
    desc: 'Every brand needs visuals that look like they mean business. We create high-resolution images, product shots, hero creatives, and social media assets — impossible to scroll past.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    )
  },
  {
    title: 'AI Motion Graphics',
    desc: 'Movement done right makes your brand unforgettable. From logo animations to full motion toolkits, we design graphics that bring energy and consistency to everything your brand puts out.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    )
  },
  {
    title: 'AI Brand Content',
    desc: "Posting consistently is hard. Looking good while doing it is harder. We build and manage your brand's visual content so that every post, every campaign, and every platform tells the same story.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

const automationList = [
  {
    title: 'AI WhatsApp & Chat Assistants',
    desc: 'An AI assistant that answers customer questions on WhatsApp and your website day and night, shares prices and details, qualifies leads and books appointments, then hands hot leads to your team.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 01-12.3 7.5L3 21l2-5.6A8.4 8.4 0 1121 11.5z" />
      </svg>
    )
  },
  {
    title: 'AI Voice Agents',
    desc: 'AI callers that answer enquiry calls, confirm orders and appointments, and make follow-up and reminder calls, so no customer call goes unanswered.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" /><path d="M19 10v1a7 7 0 01-14 0v-1M12 18v4M8 22h8" />
      </svg>
    )
  },
  {
    title: 'Lead Capture & Follow-up',
    desc: 'Every enquiry from your website, Instagram, Facebook and ads lands in one place automatically and gets a quick reply and timely follow-ups, so leads stop slipping away.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.5 5.1L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.5-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.7 1.1z" />
      </svg>
    )
  },
  {
    title: 'Sales & Email Automation',
    desc: 'Personalised outreach and follow-up emails, quotation reminders and customer updates that go out on time without anyone typing them one by one.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" /><path d="M22 6l-10 7L2 6" />
      </svg>
    )
  },
  {
    title: 'Reports & Document Automation',
    desc: 'Daily sales reports, invoices, quotations and summaries created automatically from your data and sent to the right people every morning.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" />
      </svg>
    )
  },
  {
    title: 'Social Media Automation',
    desc: 'Content calendars, captions, scheduling and comment replies handled by AI, so your pages stay active and consistent with less daily effort.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" />
      </svg>
    )
  },
  {
    title: 'Workflow & CRM Integration',
    desc: 'We connect the tools you already use, such as Google Sheets, CRM, WhatsApp, email and accounting software, so data moves between them automatically instead of being copied by hand.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
      </svg>
    )
  },
  {
    title: 'Custom AI Agents for Your Team',
    desc: 'AI agents built around your business that take over repetitive office work like data entry, research, order tracking and customer updates, freeing your staff for work that needs people.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`service-card-${index}`);
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const renderGrid = (list, prefix) => (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
      {list.map((item, idx) => (
        <div
          key={prefix + idx}
          id={`service-card-${prefix}${idx}`}
          onMouseMove={(e) => handleMouseMove(e, `${prefix}${idx}`)}
          className="service-card bg-[#0B0B11] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden hover:bg-[#0e0e16] transition-all duration-300 group"
        >
          {/* Mouse Spotlight */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
            style={{ background: 'radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 42, 59, 0.18), transparent 60%)' }}
          />

          <div className="flex items-center justify-between relative z-10 text-brand-red mb-5">
            <div className="p-2 rounded-xl bg-brand-red/10 border border-brand-red/30">{item.icon}</div>
            <div className="font-display text-xs text-gray-500 font-mono">0{idx + 1}</div>
          </div>

          <div className="relative z-10">
            <h3 className="font-display text-base sm:text-lg font-normal text-white leading-snug group-hover:text-brand-red transition-colors mb-2">
              {item.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-400 font-light leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="section" id="services">
      <div className="eyebrow">Capabilities</div>
      <h2 className="big-title text-[clamp(28px,5vw,64px)] mb-10 sm:mb-14 max-w-3xl">
        AI ads that sell.<br />AI automation that saves hours.
      </h2>

      <h3 id="ai-ad-services" className="font-display text-xl sm:text-2xl text-white mb-5">AI Ad Services</h3>
      {renderGrid(servicesList, 'ad-')}

      <div id="automation" className="mt-16 sm:mt-20 mb-5 max-w-3xl">
        <div className="eyebrow">New</div>
        <h3 className="font-display text-xl sm:text-2xl text-white mb-2">AI Automation Services</h3>
        <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
          We automate the repetitive work inside your company with AI, from answering enquiries and following up leads to reports and data entry, so your team saves hours every day.
        </p>
      </div>
      {renderGrid(automationList, 'auto-')}
    </section>
  );
}
