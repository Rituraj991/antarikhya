import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "antarikhya@jec.ac.in",
      href: "mailto:antarikhya@jec.ac.in"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jorhat Engineering College, Jorhat, Assam 785007",
      href: "https://maps.google.com/?q=Jorhat+Engineering+College"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/antarikhya_jec", color: "text-pink-400" },
    { icon: Facebook, href: "https://facebook.com/antarikhya.jec", color: "text-blue-400" },
    { icon: Twitter, href: "https://twitter.com/antarikhya_jec", color: "text-sky-400" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join our cosmic journey? Get in touch with us for more information about events, membership, or collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a space enthusiast, a student interested in astronomy, or someone looking to collaborate with us, 
                we'd love to hear from you. Reach out through any of the channels below.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all duration-300">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card/50 backdrop-blur rounded-lg flex items-center justify-center hover:bg-card transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* College Information */}
            <div className="card-glass p-6">
              <h4 className="text-lg font-semibold mb-3 text-accent">About JEC</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jorhat Engineering College is a premier technical institution in Assam, established in 1960. 
                ANTARIKHYA operates as the official astronomy club, promoting space science education and research among students.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-cosmic p-8">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    placeholder="Enter your first name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Enter your last name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="What's this about?"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..."
                  className="bg-background/50 border-border/50 focus:border-primary min-h-[120px]"
                />
              </div>
              
              <Button className="w-full btn-cosmic">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 24-48 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;