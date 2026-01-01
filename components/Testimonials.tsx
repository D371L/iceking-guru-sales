
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  { name: "אורן", text: "אחי, זה לא יאמן כמה הראש שלי היה עמוס לפני. היום יש לי סדר, יש לי כיוון, ואני מפסיק לברוח מדברים. זה שינה לי את היום־יום." },
  { name: "דניאל", text: "הגעתי אחרי השחרור בלי מושג מה אני רוצה מעצמי. המפגשים איתך עשו לי סדר, פתאום יש מטרה ויש דרך. מרגיש הרבה יותר יציב." },
  { name: "יואב", text: "חשבתי שזה יהיה עוד אימון רגשי כזה... אבל זה היה פרקטי בטירוף. כלים שאני באמת משתמש בהם כשיש לחץ." },
  { name: "עידו", text: "הקטע עם הלחץ פתח לי משהו בראש. פעם הייתי ננעל, היום אני יודע איך לעבוד איתו. מרגיש הרבה יותר חד." }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, isVisible] = useIntersectionObserver();

  // Автопрокрутка каждые 5 секунд
  useEffect(() => {
    if (!isVisible || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 sm:py-32 bg-slate-900 text-white overflow-hidden relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px]"></div>
      
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div className="text-right">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4">השטח מדבר.</h2>
            <p className="text-blue-400 text-lg sm:text-xl font-bold">הודעות שקיבלתי מלקוחות אחרי התהליך</p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button 
              onClick={prev} 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 min-w-[48px] min-h-[48px]"
              aria-label="המלצה קודמת"
            >
              <ChevronRight size={24} />
            </button>
            <button 
              onClick={next} 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 min-w-[48px] min-h-[48px]"
              aria-label="המלצה הבאה"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Quote className="absolute -top-12 -right-8 text-blue-500/10 w-24 h-24 sm:w-32 sm:h-32" />
          <div className="min-h-[250px] sm:min-h-[300px] flex flex-col justify-center">
             <p className="text-2xl sm:text-3xl lg:text-5xl font-light leading-tight mb-8 sm:mb-12 transition-all duration-500">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 sm:w-16 h-1 bg-blue-500"></div>
              <h4 className="text-2xl sm:text-3xl font-black tracking-wide">{testimonials[currentIndex].name}</h4>
            </div>
          </div>
        </div>

        {/* Индикаторы прогресса */}
        <div className="flex gap-2 justify-center mt-8 sm:mt-12" role="tablist" aria-label="בחר המלצה">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                index === currentIndex 
                  ? 'w-8 bg-blue-500' 
                  : 'w-2 bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`הצג המלצה ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
