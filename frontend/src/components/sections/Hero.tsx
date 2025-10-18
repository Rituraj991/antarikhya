import React from 'react';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { Telescope, Users, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import videoplaybackWebm from '@/assets/videoplayback.webm';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Numeric values for counters
  const stats = [
    { icon: Users, value: 100, label: 'Active Members' },
    { icon: Calendar, value: 50, label: 'Events Conducted' },
    { icon: Telescope, value: 25, label: 'Stargazing Sessions' },
    { icon: MapPin, value: 5, label: 'Years Active' },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoplaybackWebm}
        autoPlay
        muted
        playsInline
        poster="/src/assets/cosmic-hero-bg.jpg"
        ref={video => {
          if (video) {
            video.onloadedmetadata = () => {
              video.currentTime = 10;
            };
            video.ontimeupdate = () => {
              if (video.currentTime >= 50) {
                video.currentTime = 10;
                video.play();
              }
            };
          }
        }}
      />
      {/* Elegant Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/60 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 fade-in">
            <div className="mb-8">
              <h1 className="text-7xl md:text-9xl font-bold mb-6 text-gradient leading-none">
                ANTARIKHYA
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-secondary/90 mb-8 tracking-wide">
                The Astronomy Club of JEC
              </h2>
              <div className="text-lg md:text-xl text-accent font-light mb-12 tracking-widest">
                योग: कम्र्मषु कौशलम्
              </div>
            </div>

            <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Fostering a community of students passionate about astronomy and space sciences.
              <br className="hidden md:block" />
              Enhancing understanding through hands-on activities and cosmic exploration.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button 
                size="lg" 
                variant="elegant" 
                className="text-lg px-10 py-4 h-14 group"
                onClick={() => scrollToSection('#events')}
              >
                <Telescope className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Explore Events
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="glass" 
                className="text-lg px-10 py-4 h-14"
                onClick={() => scrollToSection('#contact')}
              >
                Join Our Community
              </Button>
            </div>
          </div>

          {/* Refined Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const count = useCounterAnimation(stat.value, 1200 + index * 200);
              return (
                <div 
                  key={index} 
                  className="glass-card p-8 text-center group scale-in rounded-3xl shadow-lg border border-border/30 bg-background/80 backdrop-blur-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {count}
                    {stat.label === 'Active Members' ? '+' : stat.label === 'Events Conducted' ? '+' : stat.label === 'Stargazing Sessions' ? '+' : ''}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium rounded-xl px-2 py-1 bg-muted/20 inline-block">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-secondary/30 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/4 right-10 w-5 h-5 bg-primary/15 rounded-xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;