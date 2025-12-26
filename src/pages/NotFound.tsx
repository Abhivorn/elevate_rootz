import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-[150px] font-serif font-bold text-primary/20 leading-none">404</h1>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4 -mt-8">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/"><Home className="w-5 h-5" />Go Home</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
