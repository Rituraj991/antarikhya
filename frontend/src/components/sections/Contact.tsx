import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post("http://localhost:5000/api/message", form);
      if (res.status === 201) {
        setStatus("Message sent successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "antarikhya@jec.ac.in",
      href: "mailto:antarikhya@jec.ac.in",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jorhat Engineering College, Jorhat, Assam 785007",
      href: "https://maps.google.com/?q=Jorhat+Engineering+College",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/antarikhya_jec",
      color: "text-pink-400",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/antarikhya.jec",
      color: "text-blue-400",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/antarikhya_jec",
      color: "text-sky-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join our cosmic journey? Get in touch for more info about
            events, membership, or collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Section */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a space enthusiast, a student interested in astronomy, or someone
                looking to collaborate with us — we'd love to hear from you.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
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

            {/* About */}
            <div className="bg-card/40 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-border/40">
              <h4 className="text-lg font-semibold mb-3 text-accent">About JEC</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jorhat Engineering College is one of Assam’s premier engineering institutes,
                established in 1960. ANTARIKHYA, the official astronomy club, promotes space science
                education and research among students.
              </p>
            </div>
          </div>

          {/* Right Section — Contact Form */}
          <div className="bg-card/40 backdrop-blur-lg border border-border/40 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all"
                disabled={loading}
              >
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {status && (
              <p className="text-sm text-center mt-4 text-muted-foreground">{status}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
