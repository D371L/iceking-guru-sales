
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          
          {/* Image Container */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1" ref={ref as React.RefObject<HTMLDivElement>}>
            <div className={`relative group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-blue-200 rounded-[2.5rem] opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl glass-card p-2 gradient-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                  srcSet="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop 400w,
                          https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop 800w,
                          https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="ארטם בויקוב - מאמן מנטלי מוסמך" 
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-[1.8rem] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  width="800"
                  height="1000"
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-10 -right-10 glass-card p-6 rounded-3xl floating shadow-xl hidden md:block">
                <p className="text-blue-600 font-black text-3xl mb-1">100%</p>
                <p className="text-slate-600 font-bold text-sm">שליטה מנטלית</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12 text-right order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm mb-6 sm:mb-8 tracking-widest">
              MENTAL TRAINING & PEAK PERFORMANCE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black leading-[1.1] mb-6 sm:mb-8 text-slate-900">
              שיש שליטה <span className="text-blue-600">בראש</span> <br />
              יש שליטה <span className="text-gradient">בחיים</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-500 mb-8 sm:mb-12 font-light leading-relaxed">
              הגיע הזמן להפסיק לפעול על אוטומט.<br />
              <span className="font-bold text-slate-800">בוא נבנה את הזהות המנצחת שלך.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-6">
              <a 
                href="https://wa.me/972500000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="ice-button text-white px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl sm:text-2xl font-black flex items-center justify-center gap-3 group min-h-[56px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="צור קשר דרך WhatsApp"
              >
                צרו קשר עוד היום
                <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={24} />
              </a>
              <div className="flex items-center justify-center gap-4 text-slate-400">
                <span className="h-px w-12 bg-slate-200"></span>
                <p className="text-base sm:text-lg font-medium italic">שיחת ייעוץ 1 על 1 ללא עלות</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
