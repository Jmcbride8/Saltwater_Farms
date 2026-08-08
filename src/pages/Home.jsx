import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import CrisisNews from '@/components/sections/CrisisNews';
import InsightSection from '@/components/sections/InsightSection';
import DripSection from '@/components/sections/DripSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ProfitSection from '@/components/sections/ProfitSection';
import RegionalTransformationSection from '@/components/sections/RegionalTransformationSection';
import GlobalSection from '@/components/sections/GlobalSection';
import FoundersSection from '@/components/sections/FoundersSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-inter">
      <Nav />
      <Hero />
      <section id="crisis" className="bg-white pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <CrisisNews />
        </div>
      </section>
      <DripSection />
      <HowItWorksSection />
      <RegionalTransformationSection />
      <ProfitSection />
      <InsightSection />
      <FoundersSection />
      <RoadmapSection />
      <GlobalSection />
      <ContactSection />
      <Footer />
    </div>
  );
}