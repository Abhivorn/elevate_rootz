import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { Features } from '@/components/home/Features';
import { About } from '@/components/home/About';
import { BeforeAfterGallery } from '@/components/home/BeforeAfterGallery';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
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
      <BeforeAfterGallery />
      <Testimonials />
      <FAQ />
      <CTASection />
      <ContactBand />
    </MotionPage>
  );
};

export default Index;
