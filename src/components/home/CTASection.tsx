import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 animate-pulse-glow"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground leading-tight">
              The <span className="text-primary">Elevate Rootz</span> Mission
            </h2>

            {/* Description */}
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Share your company's mission, vision, or background with your potential clients. 
              Set yourself apart from the competition with a strong brand persona that puts 
              your clients first.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="group">
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
