import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import aboutImage from '@/assets/about-image.jpg';

const highlights = [
  'Expert dermatologists with 9+ years experience',
  'State-of-the-art facilities in India & Dubai',
  'Personalized treatment plans for every patient',
  '100% organic and clinically tested products',
];

export const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src={aboutImage}
                  alt="About Elevate Rootz"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-3xl border-4 border-primary/20 -z-10" />
              
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow"
              >
                <p className="text-4xl font-bold font-serif">9+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                What's special about <span className="text-primary">Elevate Rootz</span>?
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
            Elevate Rootz, established in 2016, was founded with the vision of delivering excellence in hair restoration and aesthetic care. Since the beginning, the focus has been on innovation, precision, and personalized treatment to achieve natural and lasting results.
            </p>

            <p className="text-muted-foreground leading-relaxed">
             Our team of certified dermatologists, surgeons, and OT technicians brings years of experience and has successfully performed thousands of procedures. By combining advanced technology with natural healing practices, we ensure safe, effective, and customized solutions for every patient.
            </p>

              <p className="text-muted-foreground leading-relaxed">
             At Elevate Rootz, patient care goes beyond the procedure. We maintain clear communication and provide complete medical guidance from consultation to recovery. With state-of-the-art facilities in India and Dubai, we follow international standards to deliver consistent, high-quality outcomes.
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild>
              <Link to="/about" className="group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
