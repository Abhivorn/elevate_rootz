import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '911234567890'; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to book an appointment at Elevate Rootz.');

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.8,
          y: isOpen ? 0 : 10,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-20 right-0 w-72 max-w-[calc(100vw-2rem)] bg-card rounded-2xl shadow-card border border-border overflow-hidden mb-2"
      >
        {/* Header */}
        <div className="bg-primary px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Elevate Rootz</p>
              <p className="text-white/80 text-xs">Typically replies instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-[#ECE5DD]">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-sm text-gray-700">
              👋 Hi there! How can we help you today?
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Click below to start a conversation on WhatsApp.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-4 bg-card">
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-primary hover:bg-[#7A8935] text-white font-medium py-3 px-4 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Start Chat
          </button>
        </div>
      </motion.div>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.div>
      </motion.button>

      {/* Pulse animation */}
      {!isOpen && (
        <span className="absolute -inset-1 rounded-full bg-primary/30 animate-ping pointer-events-none" />
      )}
    </div>
  );
};
