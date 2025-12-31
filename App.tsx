
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Target, 
  Zap, 
  Shield, 
  MessageSquare,
  Users,
  Award
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIsCoaching from './components/WhatIsCoaching';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import TargetAudience from './components/TargetAudience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen ice-gradient selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIsCoaching />
        <Process />
        <Testimonials />
        <TargetAudience />
      </main>
      <Footer />
      
      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/972500000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ice-glow"
      >
        <MessageSquare size={28} />
      </a>
    </div>
  );
};

export default App;
