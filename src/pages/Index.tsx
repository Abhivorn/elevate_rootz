import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
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
  const [showAppointmentCard, setShowAppointmentCard] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    const visitCount = parseInt(localStorage.getItem('visitCount') || '0');

    if (!hasVisited) {
      // New user
      localStorage.setItem('hasVisited', 'true');
      localStorage.setItem('visitCount', '1');
    } else {
      // Returning user
      const newCount = visitCount + 1;
      localStorage.setItem('visitCount', newCount.toString());
      setTimeout(() => {
        setShowAppointmentCard(true);
      }, 3000);
    }

    // On any click
    const handleClick = () => {
      setShowAppointmentCard(true);
      document.removeEventListener('click', handleClick);
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

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

      {/* Appointment Card */}
      <AnimatePresence>
        {showAppointmentCard && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 left-4 right-4 md:left-auto md:bottom-24 md:right-6 z-40 max-w-sm mx-auto md:mx-0"
          >
            <div className="glass-card p-6 shadow-glow">
              <button
                onClick={() => setShowAppointmentCard(false)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Book Your Appointment</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a consultation with our hair transplant experts.
                  </p>
                  <Button size="sm" onClick={() => setShowBookingModal(true)}>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader>
            <DialogTitle>Book Your Appointment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your full name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+1 234 567 8900" />
            </div>
            <div>
              <Label htmlFor="service">Service</Label>
              <Input id="service" placeholder="Hair Transplant, Facial, etc." />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your needs..." className="min-h-[80px]" />
            </div>
            <Button className="w-full" onClick={() => {
              toast.success('Appointment request submitted!');
              setShowBookingModal(false);
            }}>
              Submit Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </MotionPage>
  );
};

export default Index;
