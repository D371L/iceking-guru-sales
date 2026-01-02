
import React from 'react';
import { Shield, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-24 sm:py-32 relative" ref={ref as React.RefObject<HTMLElement>} aria-label="אודות ארטם בויקוב מאמן מנטלי">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-7 text-right">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-6 sm:mb-8 leading-none">
              ארטם בויקוב - <span className="text-blue-600">מאמן מנטלי מוסמך</span> <br />
              <span className="text-blue-600">בגישת NLP</span>
            </h2>
            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
              <p>
                הדרך שלי ל<strong>אימון מנטלי</strong> התחילה מהחיים עצמם. לאורך חיי הייתי במסגרות מאתגרות – פנימיות, מסגרות צבאיות וסביבות שדורשות <strong>חוסן מנטלי</strong>, <strong>שליטה עצמית</strong> והתמודדות מתמשכת עם לחץ.
              </p>
              <div className="glass-card p-6 sm:p-8 rounded-3xl border-r-4 border-blue-500 gradient-border hover:shadow-xl transition-all duration-300">
                <p className="text-slate-900 font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
                  מפקד צוות בכיבוי והצלה
                </p>
                <p className="text-base sm:text-lg">
                  כיום אני לוחם אש ומפקד צוות. תפקיד שמפגיש אותך יום־יום עם מצבי קיצון, אחריות גבוהה וקבלת החלטות תחת עומס אמיתי. שם למדתי: אם אתה לא מנהל את המנטליות שלך – היא תנהל אותך. ניסיון זה עוזר לי להבין את הצורך ב<strong>אימון מנטלי</strong> פרקטי.
                </p>
              </div>
              <p>
                כיום אני מאמן מנטלי מוסמך בגישת <strong>NLP Practitioner</strong>. העבודה שלי ב<strong>אימון מנטלי</strong> מבוססת על פרקטיקה — לא תאוריות ולא מוטיבציה רגעית — אלא כלים שעובדים ביום־יום, גם כשאין חשק וגם תחת לחץ. זה מה שהופך את ה<strong>אימון אישי</strong> שלי ליעיל במיוחד עבור אנשים שמחפשים <strong>ביצועים גבוהים</strong>. <a href="#process" className="text-blue-600 hover:text-blue-800 underline font-semibold">למידע על תהליך האימון המנטלי</a>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:gap-6">
             <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] group hover:bg-blue-600 transition-all duration-500 gradient-border hover:shadow-xl hover:-translate-y-1">
                <Zap className="text-blue-600 group-hover:text-white mb-4 sm:mb-6 transition-colors" size={40} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 group-hover:text-white transition-colors">פרקטיקה מעל הכל</h3>
                <p className="text-base sm:text-lg text-slate-500 group-hover:text-blue-100 transition-colors italic">כלים שעובדים בחיים האמיתיים, לא רק בחדר האימון.</p>
             </div>
             <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] group hover:bg-blue-600 transition-all duration-500 gradient-border hover:shadow-xl hover:-translate-y-1">
                <Shield className="text-blue-600 group-hover:text-white mb-4 sm:mb-6 transition-colors" size={40} />
                <h3 className="text-xl sm:text-2xl font-black mb-2 group-hover:text-white transition-colors">חוסן תחת אש</h3>
                <p className="text-base sm:text-lg text-slate-500 group-hover:text-blue-100 transition-colors italic">ניסיון של שנים בניהול אירועי חירום ומצבי קיצון.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
