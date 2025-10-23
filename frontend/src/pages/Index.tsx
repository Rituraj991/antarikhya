import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Team from '@/components/sections/Team';
import Events from '@/components/sections/Events';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
  <div className="min-h-screen rounded-2xl bg-background/95 shadow-xl">
      <Header />
  <main className="mt-24 rounded-2xl">
        <Hero />
        <Team />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
