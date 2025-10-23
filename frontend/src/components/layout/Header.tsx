import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import antarikhyaLogo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '#team' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Club Name */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group" 
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative">
              <img 
                src={antarikhyaLogo} 
                alt="ANTARIKHYA Logo" 
                className="w-12 h-12 rounded-2xl shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">ANTARIKHYA</h1>
              <p className="text-xs text-muted-foreground">The Astronomy Club of JEC</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              (item.name === "Gallery" || item.name === "About") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </button>
              )
            )}
            <Link to ="/joinclub">
            <Button variant="elegant" size="sm" className="ml-4">
              <Star className="w-4 h-4 mr-2" />
              Join Club
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border/30">
            <div className="flex flex-col space-y-1 pt-6">
              {navItems.map((item) =>
                item.name === "Gallery" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-left p-3 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="text-left p-3 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
                  >
                    {item.name}
                  </button>
                )
              )}
              <Link to = "/joinclub">
              <Button variant="elegant" size="sm" className="mt-4 w-fit">
                <Star className="w-4 h-4 mr-2" />
                Join Club
              </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;