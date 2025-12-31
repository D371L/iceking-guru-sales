
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Container */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-blue-200 rounded-[2.5rem] opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="ארטם בויקוב" 
                  className="w-full h-auto object-cover rounded-[1.8rem] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm mb-8 tracking-widest">
              MENTAL TRAINING & PEAK PERFORMANCE
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] mb-8 text-slate-900">
              שיש שליטה <span className="text-blue-600">בראש</span> <br />
              יש שליטה <span className="text-gradient">בחיים</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-slate-500 mb-12 font-light leading-relaxed">
              הגיע הזמן להפסיק לפעול על אוטומט.<br />
              <span className="font-bold text-slate-800">בוא נבנה את הזהות המנצחת שלך.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row-reverse gap-6">
              <a 
                href="https://wa.me/972500000000" 
                className="ice-button text-white px-12 py-6 rounded-2xl text-2xl font-black flex items-center justify-center gap-3 group"
              >
                צרו קשר עוד היום
                <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              </a>
              <div className="flex items-center justify-center gap-4 text-slate-400">
                <span className="h-px w-12 bg-slate-200"></span>
                <p className="text-lg font-medium italic">שיחת ייעוץ 1 על 1 ללא עלות</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
