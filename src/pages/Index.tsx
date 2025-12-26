import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { Features } from '@/components/home/Features';
import { About } from '@/components/home/About';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { ContactBand } from '@/components/home/ContactBand';
import { MotionPage } from '@/components/MotionPage';

const Index = () => {
  return (
    <MotionPage>
      <Hero />
      <Services />
      <Features />
      <About />
      <Testimonials />
      <CTASection />
      <ContactBand />
    </MotionPage>
  );
};

export default Index;
