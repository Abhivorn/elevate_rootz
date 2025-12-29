import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import service1 from '@/assets/service-1.jpg';
import service2 from '@/assets/service-2.jpg';
import service3 from '@/assets/service-3.jpg';
import service4 from '@/assets/service-4.jpg';
import service5 from '@/assets/service-5.jpg';
import service6 from '@/assets/service-6.jpg';
import hairplantation2 from '@/assets/hairplantation2.jpg';
import hairplantation4 from '@/assets/hairplantation4.jpg';
import hairplantation5 from '@/assets/hairplantation5.jpg';

const HairProcedures = [
  { name: 'Fue Hair Transplantation', image: hairplantation2 },
  { name: 'Scalp Micropigmentation', image: hairplantation4 },
  { name: 'Advanced Transplantation', image: hairplantation5 },
];

const cleansingServices = [
  { name: 'Glycolic Acid Cleaning', image: service4 },
  { name: 'Classic Facial', image: service5 },
  { name: 'Deep Cleansing Facial', image: service6 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Services = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Premium Treatments for <span className="text-primary">Your Hair</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our range of science-backed treatments designed to rejuvenate and restore your natural beauty.
          </p>
        </motion.div>

        {/* Dermatologist Procedures */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-serif font-semibold text-foreground mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-0.5 bg-primary" />
            Hair Procedures
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {HairProcedures.map((service, index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="service-card group"
              >
                <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-serif font-semibold text-primary-foreground mb-1">
                      {service.name}
                    </h4>
                    <p className="text-primary-foreground/80 font-medium">{service.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Cleansing Services */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-serif font-semibold text-foreground mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-0.5 bg-primary" />
            Cleansing Treatments
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {cleansingServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="service-card group"
              >
                <div className="relative h-72 overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-serif font-semibold text-primary-foreground mb-1">
                      {service.name}
                    </h4>
                    <p className="text-primary-foreground/80 font-medium">{service.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/services" className="group">
              View All Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
