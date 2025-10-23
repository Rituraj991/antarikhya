import React from 'react';
import { Heart, Star, Mail, Phone, MapPin } from 'lucide-react';
import antarikhyaLogo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={antarikhyaLogo} 
                alt="ANTARIKHYA Logo" 
                className="w-12 h-12 rounded-full glow-primary"
              />
              <div>
                <h3 className="text-xl font-bold text-gradient">ANTARIKHYA</h3>
                <p className="text-sm text-muted-foreground">The Astronomy Club of JEC</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Fostering a community of students passionate about astronomy and space sciences. 
              Join us to explore the wonders of the cosmos through hands-on activities, educational events, 
              and stargazing sessions.
            </p>
            <div className="text-accent font-medium text-sm">
              योग: कम्र्मषु कौशलम्
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">antarikhya@jec.ac.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Jorhat Engineering College<br />
                    Jorhat, Assam 785007
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center justify-center text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© 2025 ANTARIKHYA, The Astronomy Club of JEC. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
