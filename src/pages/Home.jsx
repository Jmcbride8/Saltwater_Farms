import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import CrisisSection from '@/components/sections/CrisisSection';
import InsightSection from '@/components/sections/InsightSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ProfitSection from '@/components/sections/ProfitSection';
import GlobalSection from '@/components/sections/GlobalSection';
import FoundersSection from '@/components/sections/FoundersSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import PresaleSection from '@/components/sections/PresaleSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-inter">
      <Nav />
      <Hero />
      <CrisisSection />
      <InsightSection />
      <HowItWorksSection />
      <ProfitSection />
      <GlobalSection />
      <FoundersSection />
      <RoadmapSection />
      <PresaleSection />
      <Footer />
    </div>
  );
}