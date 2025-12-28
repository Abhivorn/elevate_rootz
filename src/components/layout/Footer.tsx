import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: 'https://www.instagram.com/elevaterootz/' },
  { icon: Twitter, href: '#' },
  { icon: Youtube, href: '#' },
];

const quickLinks = [
  { href: '/services', label: 'Our Services' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  { href: '/services#hair-transplant', label: 'Hair Transplant' },
  { href: '/services#prp-therapy', label: 'PRP Therapy' },
  { href: '/services#skin-treatments', label: 'Skin Treatments' },
  { href: '/services#dermatology', label: 'GFP' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={logo} alt="Elevate Rootz" className="h-16 w-auto brightness-0 invert hover:brightness-100 hover:invert-0 hover:scale-105 transition-all duration-300 cursor-pointer" />
            <p className="text-primary-foreground/70 leading-relaxed">
              Premium hair transplant and skin care solutions with 4 clinics across India and Dubai.
              25 Years warranty | 6000+ Patients | Science-based treatments tailored to your unique needs.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-primary-foreground/70">
                  Hyderabad, Telangana<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+91 9172923268" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  +91 9172923268
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@elevaterootz.com" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  info@elevaterootz.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/70">WED - MON: 10:30 AM - 7 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Elevate Rootz. All rights reserved. | Developed by{' '}
            <a
              href="https://www.abhivorn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Abhivorn Technologies.pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
