import React, { Suspense, lazy } from 'react';
import CustomCursor from '../components/CustomCursor';
import CanvasErrorBoundary from '../components/CanvasErrorBoundary';

// Decorative 3D background — not needed for first paint, so it's split out
// of the main bundle and only fetched once the page is already interactive.
const BackgroundCanvas = lazy(() => import('../components/BackgroundCanvas'));
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AdsSection from '../components/v2/AdsSection';
import AutomationSection from '../components/v2/AutomationSection';
import WhySection from '../components/v2/WhySection';
import ProcessSection from '../components/ProcessSection';
import ReviewsSection from '../components/ReviewsSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-[#ff2751] selection:text-white font-sans relative overflow-x-hidden">
      <CustomCursor />
      <CanvasErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <BackgroundCanvas />
        </Suspense>
      </CanvasErrorBoundary>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AdsSection />
        <AutomationSection />
        <WhySection />
        <ProcessSection />
        <ReviewsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
