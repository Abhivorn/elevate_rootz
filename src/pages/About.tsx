import { motion } from 'framer-motion';
import { Check, Award, Users, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MotionPage } from '@/components/MotionPage';
import aboutImage from '@/assets/about-image.jpg';
import heroImage from '@/assets/hero-image.jpg';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in every treatment and interaction.',
  },
  {
    icon: Users,
    title: 'Patient-Centric',
    description: 'Your needs and comfort are at the center of everything we do.',
  },
  {
    icon: Clock,
    title: 'Innovation',
    description: 'We continuously adopt the latest techniques and technologies.',
  },
];

const milestones = [
  { year: '1975', event: 'Our story began with a vision for better skincare' },
  { year: '1990', event: 'Expanded to include hair restoration services' },
  { year: '2005', event: 'Opened our first international clinic in Dubai' },
  { year: '2020', event: 'Celebrated 10,000+ successful treatments' },
  { year: '2024', event: 'Launched advanced AI-assisted diagnostics' },
];

const About = () => {
  return (
    <MotionPage>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-50" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Since 1975, we've been dedicated to helping people look and feel their best 
              through science-backed treatments and personalized care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src={aboutImage}
                  alt="About Elevate Rootz"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-3xl border-4 border-primary/20 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                What's special about <span className="text-primary">Elevate Rootz</span>?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Use this space to highlight the things that set you apart from your competition, 
                whether it's a special feature, a unique philosophy, or awards and recognition 
                that you have received.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Elevate Rootz, we combine cutting-edge technology with natural healing 
                practices to deliver exceptional results. Our team of certified dermatologists 
                and hair transplant specialists are dedicated to helping you achieve your 
                aesthetic goals safely and effectively.
              </p>
              <ul className="space-y-3">
                {['Expert dermatologists with 15+ years experience', 
                  'State-of-the-art facilities in India & Dubai', 
                  'Personalized treatment plans for every patient'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center hover:shadow-glow transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Journey</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="w-20 shrink-0 text-right">
                  <span className="text-2xl font-serif font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary absolute -left-2 top-2" />
                  <div className="border-l-2 border-primary/30 pl-6 pb-8">
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Visit Us in India & Dubai
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              With locations in two of the world's most dynamic cities, 
              world-class care is never far away.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Find a Location</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MotionPage>
  );
};

export default About;
