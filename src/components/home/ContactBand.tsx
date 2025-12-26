import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(123) 456-7890',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@reallygreatsite.com',
    href: 'mailto:hello@reallygreatsite.com',
  },
  {
    icon: MapPin,
    label: 'Locations',
    value: 'India | Dubai',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Sat: 9AM - 7PM',
    href: null,
  },
];

export const ContactBand = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground/70 text-sm">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-primary-foreground font-medium hover:opacity-80 transition-opacity"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-primary-foreground font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
