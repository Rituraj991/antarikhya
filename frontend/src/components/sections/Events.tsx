import React from 'react';
import { Calendar, MapPin, Clock, Users, Telescope, BookOpen, Camera, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Geminids Meteor Shower Observation",
      date: "December 13-14, 2024",
      time: "10:00 PM - 2:00 AM",
      location: "JEC Campus Ground",
      description: "Join us for the spectacular Geminids meteor shower, one of the year's best meteor showers with up to 120 meteors per hour.",
      icon: Star,
      type: "Stargazing"
    },
    {
      title: "Astronomy Photography Workshop",
      date: "January 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Seminar Hall A",
      description: "Learn the art of astrophotography from capturing the moon and planets to deep-sky objects.",
      icon: Camera,
      type: "Workshop"
    },
    {
      title: "Solar Eclipse Viewing Party",
      date: "March 29, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "JEC Observatory",
      description: "Safe viewing of the partial solar eclipse with proper equipment and expert guidance.",
      icon: Telescope,
      type: "Special Event"
    }
  ];

  const pastEvents = [
    {
      title: "Mars Opposition Night",
      date: "October 2024",
      participants: "85+ attendees",
      description: "Observed Mars at its closest approach to Earth with telescopes and discussed Martian exploration missions.",
      icon: Telescope
    },
    {
      title: "Astronomy Quiz Competition",
      date: "September 2024",
      participants: "120+ participants",
      description: "Inter-college astronomy quiz with exciting prizes and challenging questions about space exploration.",
      icon: BookOpen
    },
    {
      title: "Perseid Meteor Shower Watch",
      date: "August 2024",
      participants: "60+ stargazers",
      description: "Overnight camping event to witness the peak of Perseid meteor shower with hot cocoa and space stories.",
      icon: Star
    },
    {
      title: "Planetarium Visit",
      date: "July 2024",
      participants: "40+ members",
      description: "Educational trip to Guwahati Planetarium featuring shows on black holes and exoplanets.",
      icon: Camera
    }
  ];

  return (
    <section id="events" className="section-elegant bg-gradient-to-b from-muted/20 via-background to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Explore the cosmos through our exciting stargazing sessions and workshops
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-16 text-primary">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-4">
                    <event.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="bg-accent/20 text-accent px-4 py-2 rounded-xl text-sm font-semibold">
                    {event.type}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-gradient">{event.title}</h4>
                
                <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-secondary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-secondary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-sm mb-6 leading-relaxed text-foreground/80">{event.description}</p>
                
                <Button variant="elegant" className="w-full">
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-16 text-secondary">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="glass-card p-8 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-3 text-gradient">{event.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-secondary">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center">
                    <event.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gradient">Stay Connected</h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Don't miss our exciting astronomy events. Join our newsletter for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="elegant" size="lg">
                <Star className="w-5 h-5 mr-2" />
                Join Newsletter
              </Button>
              <Button variant="glass" size="lg">
                Follow Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;