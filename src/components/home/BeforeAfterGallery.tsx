import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import service1 from '@/assets/service-1.jpg';
import service2 from '@/assets/service-2.jpg';
import hairplantation2 from '@/assets/hairplantation2.jpg';
import hairplantation3 from '@/assets/hairplantation3.jpg';
import hairplantation4 from '@/assets/hairplantation4.jpg';
import hairplantation5 from '@/assets/hairplantation5.jpg';
import hairplantation6 from '@/assets/hairplantation6.jpg';
import hairplantation7 from '@/assets/hairplantation7.jpg';
import treatment1 from '@/assets/treatment1.jpg';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforePosition?: string;
  afterPosition?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforePosition,
  afterPosition,
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const isComposite = beforeImage === afterImage;

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        style={afterPosition ? { objectPosition: afterPosition } : (beforeImage === afterImage ? { objectPosition: 'bottom' } : undefined)}
        draggable={false}
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={beforePosition ? { objectPosition: beforePosition } : (beforeImage === afterImage ? { objectPosition: 'top' } : undefined)}
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <ArrowLeftRight className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-foreground/80 backdrop-blur-sm text-primary-foreground text-sm font-medium rounded-full">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium rounded-full">
        {afterLabel}
      </div>

      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-foreground/60 backdrop-blur-sm text-primary-foreground text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        Drag to compare
      </div>
    </div>
  );
};

const transformations = [
  {
    id: 1,
    beforeImage: service1,
    afterImage: service2,
    title: 'Skin Rejuvenation',
    description: 'Advanced glow treatment - 6 sessions',
  },
  {
    id: 2,
    beforeImage: hairplantation6,
    afterImage: hairplantation7,
    title: 'Hair Transplant Result',
    description: 'FUE procedure - 3000 grafts',
  },
];

export const BeforeAfterGallery = () => {
  return (
    <section className="section-padding bg-background">
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
            Transformations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Before & <span className="text-primary">After</span> Results
          </h2>
          <p className="text-lg text-muted-foreground">
            See the incredible transformations achieved by our patients. Drag the slider to compare before and after results.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforePosition={(item as any).beforePosition}
                afterPosition={(item as any).afterPosition}
              />
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
