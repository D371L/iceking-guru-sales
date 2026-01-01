
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare,
  ChevronUp
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import WhatIsCoaching from './components/WhatIsCoaching';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import TargetAudience from './components/TargetAudience';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen ice-gradient selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
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
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ice-glow min-w-[56px] min-h-[56px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="צור קשר דרך WhatsApp"
      >
        <MessageSquare size={28} />
      </a>

      {/* Кнопка "Наверх" */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 sm:bottom-28 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 min-w-[48px] min-h-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="חזור למעלה"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;
