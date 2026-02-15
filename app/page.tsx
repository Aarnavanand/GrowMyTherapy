import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Office from '@/components/sections/Office';
import Specialties from '@/components/sections/Specialties';
import SplitHighlight from '@/components/sections/SplitHighlight';
import Bio from '@/components/sections/Bio';
import FAQs from '@/components/sections/FAQs';
import ProfessionalBackground from '@/components/sections/ProfessionalBackground';
import DarkCTA from '@/components/sections/DarkCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F2]">
      <Header />
      <Hero />
      <Intro />
      <Office />
      <Specialties />
      <SplitHighlight />
      <Bio />
      <FAQs />
      <ProfessionalBackground />
      <DarkCTA />
      <Footer />
    </main>
  );
}
