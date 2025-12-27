import { useState } from 'react';
import { motion } from 'framer-motion';
import { MotionPage } from '@/components/MotionPage';
import service4 from '@/assets/service-4.jpg';
import service5 from '@/assets/service-5.jpg';
import service6 from '@/assets/service-6.jpg';
import heroImage from '@/assets/hero-image.jpg';
import aboutImage from '@/assets/about-image.jpg';
import hairplantation2 from '@/assets/hairplantation2.jpg';
import hairplantation3 from '@/assets/hairplantation3.jpg';
import hairplantation4 from '@/assets/hairplantation4.jpg';
import treatment1 from '@/assets/treatment1.jpg';
import skincare1 from '@/assets/skincare1.webp';
import skincare2 from '@/assets/skincare2.jpg';
import clinic1 from '@/assets/clinic1.webp';

const categories = ['All', 'Hair Transplant', 'Skin Care', 'Treatments', 'Clinic'];

const galleryItems = [
  { image: heroImage, category: 'Clinic', title: 'Our Treatment Room' },
  { image: aboutImage, category: 'Clinic', title: 'Our Expert Team' },
  { image: clinic1, category: 'Clinic', title: 'Clinic Interior' },
  { image: hairplantation2, category: 'Hair Transplant', title: 'FUE Hair Transplant' },
  { image: hairplantation3, category: 'Hair Transplant', title: 'Hair Restoration' },
  { image: hairplantation4, category: 'Hair Transplant', title: 'Advanced Transplant' },
  { image: service4, category: 'Skin Care', title: 'Glycolic Skin Renewal Treatment' },
  { image: skincare1, category: 'Skin Care', title: 'Glycolic Brightening Treatment' },
  { image: skincare2, category: 'Skin Care', title: 'Glycolic Acne & Texture Treatment' },
  { image: service5, category: 'Treatments', title: 'Classic Facial' },
  { image: service6, category: 'Treatments', title: 'Deep Cleansing' },
  { image: treatment1, category: 'Treatments', title: 'Hair Treatment' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our state-of-the-art facilities and see the transformations we've achieved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="flex flex-wrap justify-center gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${index}-${item.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl aspect-square w-full sm:w-[280px] md:w-[300px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-primary-foreground text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionPage>
  );
};

export default Gallery;
