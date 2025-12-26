import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MotionPage } from '@/components/MotionPage';
import service1 from '@/assets/service-1.jpg';
import service2 from '@/assets/service-2.jpg';
import service3 from '@/assets/service-3.jpg';
import service4 from '@/assets/service-4.jpg';
import service5 from '@/assets/service-5.jpg';
import service6 from '@/assets/service-6.jpg';

const allServices = [
  {
    category: 'Dermatologist Procedures',
    services: [
      { name: 'Pixelite 2.0', price: '$150/session', image: service1, description: 'Advanced laser skin resurfacing treatment for smoother, younger-looking skin.' },
      { name: 'Microneedling', price: '$100/session', image: service2, description: 'Stimulate collagen production for improved skin texture and tone.' },
      { name: 'Carbon Laser Peel', price: '$100/session', image: service3, description: 'Deep cleansing treatment for oily skin and enlarged pores.' },
    ],
  },
  {
    category: 'Cleansing Treatments',
    services: [
      { name: 'Glycolic Acid Cleaning', price: '$60', image: service4, description: 'Exfoliating treatment that removes dead skin cells for a brighter complexion.' },
      { name: 'Classic Facial', price: '$70', image: service5, description: 'Traditional facial with cleansing, exfoliation, and hydration.' },
      { name: 'Deep Cleansing Facial', price: '$90', image: service6, description: 'Intensive treatment for congested and problem skin.' },
    ],
  },
  {
    category: 'Hair Transplant',
    services: [
      { name: 'FUE Hair Transplant', price: 'Consultation', image: service1, description: 'Follicular Unit Extraction for natural-looking hair restoration.' },
      { name: 'PRP Therapy', price: '$200/session', image: service2, description: 'Platelet-Rich Plasma therapy to stimulate hair growth.' },
      { name: 'Scalp Micropigmentation', price: 'Consultation', image: service3, description: 'Non-surgical solution for the appearance of fuller hair.' },
    ],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Premium <span className="text-primary">Treatments</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our comprehensive range of dermatology and hair transplant services, 
              all delivered by certified experts using the latest technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      {allServices.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}
        >
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-semibold text-foreground mb-12 flex items-center gap-4"
            >
              <span className="w-16 h-1 bg-primary rounded-full" />
              {category.category}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-card overflow-hidden hover:shadow-glow transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                          {service.price}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Schedule a consultation with our experts and discover the perfect treatment plan for you.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="group">
                Book Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MotionPage>
  );
};

export default Services;
