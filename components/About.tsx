
import React from 'react';
import { Shield, Zap, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-7 text-right">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-none">
              הניסיון שלי נכתב <br />
              <span className="text-blue-600">בשטח, לא בספרים.</span>
            </h2>
            <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-light">
              <p>
                הדרך שלי לאימון מנטלי התחילה מהחיים עצמם. לאורך חיי הייתי במסגרות מאתגרות – פנימיות, מסגרות צבאיות וסביבות שדורשות חוסן, שליטה עצמית והתמודדות מתמשכת עם לחץ.
              </p>
              <div className="glass-card p-8 rounded-3xl border-r-4 border-blue-500">
                <p className="text-slate-900 font-bold text-2xl mb-4">
                  מפקד צוות בכיבוי והצלה
                </p>
                <p>
                  כיום אני לוחם אש ומפקד צוות. תפקיד שמפגיש אותך יום־יום עם מצבי קיצון, אחריות גבוהה וקבלת החלטות תחת עומס אמיתי. שם למדתי: אם אתה לא מנהל את המנטליות שלך – היא תנהל אותך.
                </p>
              </div>
              <p>
                כיום אני מאמן מנטלי מוסמך בגישת <span className="text-slate-900 font-bold">NLP Practitioner</span>. העבודה שלי מבוססת על פרקטיקה — לא תאוריות ולא מוטיבציה רגעית — אלא כלים שעובדים ביום־יום, גם כשאין חשק וגם תחת לחץ.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
             <div className="glass-card p-10 rounded-[2.5rem] group hover:bg-blue-600 transition-all duration-500">
                <Zap className="text-blue-600 group-hover:text-white mb-6 transition-colors" size={48} />
                <h3 className="text-2xl font-black mb-2 group-hover:text-white transition-colors">פרקטיקה מעל הכל</h3>
                <p className="text-slate-500 group-hover:text-blue-100 transition-colors italic">כלים שעובדים בחיים האמיתיים, לא רק בחדר האימון.</p>
             </div>
             <div className="glass-card p-10 rounded-[2.5rem] group hover:bg-blue-600 transition-all duration-500">
                <Shield className="text-blue-600 group-hover:text-white mb-6 transition-colors" size={48} />
                <h3 className="text-2xl font-black mb-2 group-hover:text-white transition-colors">חוסן תחת אש</h3>
                <p className="text-slate-500 group-hover:text-blue-100 transition-colors italic">ניסיון של שנים בניהול אירועי חירום ומצבי קיצון.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
