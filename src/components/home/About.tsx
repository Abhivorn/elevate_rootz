import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import aboutImage from '@/assets/about-image.jpg';

const highlights = [
  'Expert dermatologists with 15+ years experience',
  'State-of-the-art facilities in India & Dubai',
  'Personalized treatment plans for every patient',
  '100% organic and clinically tested products',
];

export const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  className="w-full h-[500px] object-cover"
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
                <p className="text-4xl font-bold font-serif">15+</p>
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
              Use this space to highlight the things that set you apart from your competition, 
              whether it's a special feature, a unique philosophy, or awards and recognition 
              that you have received. Think of this as your elevator pitch to get the reader's attention.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At Elevate Rootz, we combine cutting-edge technology with natural healing 
              practices to deliver exceptional results. Our team of certified dermatologists 
              and hair transplant specialists are dedicated to helping you achieve your 
              aesthetic goals safely and effectively.
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
