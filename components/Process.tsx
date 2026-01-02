
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const steps = [
  { title: "אבחון מנטלי", subtitle: "היכן אתה נמצא באמת?", color: "blue" },
  { title: "פרופיל אישי", subtitle: "מיקוד בחוזקות וחסמים", color: "cyan" },
  { title: "האני העתידי", subtitle: "בניית חזון מדויק", color: "sky" },
  { title: "הבוס האמיתי", subtitle: "זיהוי שורשי המעצורים", color: "indigo" },
  { title: "זהות מנצחת", subtitle: "יצירת תוצאות טבעיות", color: "blue" },
  { title: "לחץ כמנוע", subtitle: "ויסות וביצועים גבוהים", color: "cyan" },
  { title: "זהות חדשה", subtitle: "הטמעה לתוך היום-יום", color: "slate" }
];

const Process: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>} aria-label="תהליך אימון מנטלי">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 sm:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6">מפת הדרכים שלך</h2>
          <p className="text-lg sm:text-xl text-slate-500 font-light max-w-2xl mx-auto">
            <strong>תהליך אימון מנטלי</strong> מובנה ומזוקק בן 7 שלבים שהופך תאוריה לזהות חדשה ומנצחת. כל שלב ב<strong>אימון המנטלי</strong> מוביל לתוצאות מעשיות. <a href="#testimonials" className="text-blue-600 hover:text-blue-800 underline font-semibold">ראה המלצות מלקוחות שעברו את התהליך</a>.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" itemScope itemType="https://schema.org/HowTo">
          {steps.map((step, index) => (
            <li 
              key={index} 
              itemProp="step" 
              itemScope 
              itemType="https://schema.org/HowToStep"
              className={`group glass-card p-8 sm:p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 gradient-border ${
                index === steps.length - 1 ? 'lg:col-span-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <meta itemProp="position" content={String(index + 1)} />
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                  0{index + 1}
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold shadow-sm group-hover:shadow-md transition-shadow">
                  {index + 1}
                </div>
              </div>
              <h3 itemProp="name" className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
              <p itemProp="text" className="text-base sm:text-lg text-blue-600 font-bold mb-4 opacity-80">{step.subtitle}</p>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full group-hover:w-full group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-500"></div>
            </li>
          ))}
        </ol>
        
        {/* CTA Card */}
        <div className="mt-6 lg:col-span-1 ice-button rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-center items-center text-center text-white gradient-shadow hover:scale-105 transition-transform min-h-[200px] max-w-md mx-auto">
          <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">מוכן להתחיל את <strong>תהליך האימון המנטלי</strong>?</h4>
          <p className="text-blue-100 mb-4 sm:mb-6 text-xs sm:text-sm">אל תיתן לעוד שנה לעבור באוטומט</p>
            <a 
              href="https://wa.me/972500000000" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-black hover:scale-105 transition-transform min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              aria-label="צור קשר דרך WhatsApp"
              onClick={() => {
                // Google Analytics event tracking
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'cta_click', {
                    event_category: 'conversion',
                    event_label: 'process_whatsapp',
                    value: 1
                  });
                }
              }}
            >
              בוא נצא לדרך
            </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
