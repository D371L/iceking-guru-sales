
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhatIsCoaching: React.FC = () => {
  const points = [
    "בניית משמעת פנימית ועקביות",
    "שליטה במחשבות וברגשות תחת לחץ",
    "קבלת החלטות במצבי עומס",
    "יציאה מדפוסים שחוזרים על עצמם",
    "חיזוק ביטחון עצמי דרך פעולה"
  ];

  return (
    <section id="what-is" className="py-24 ice-gradient" aria-label="מה זה אימון מנטלי">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-right">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              מה זה <span className="text-blue-600">אימון מנטלי?</span>
            </h2>
            <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
              <p>
                <strong>אימון מנטלי</strong> הוא תהליך קצר, ממוקד ומדויק, שנועד לייצר שליטה, יציבות ותוצאות — גם כשיש לחץ, עומס ואחריות. זהו <strong>תהליך אימון מנטלי</strong> מקצועי שמבוסס על כלים פרקטיים. <a href="#about" className="text-blue-600 hover:text-blue-800 underline font-semibold">למידע נוסף על המאמן ארטם בויקוב</a>.
              </p>
              <p className="font-bold">
                זה לא טיפול ולא שיחות ארוכות. זה <strong>אימון מנטלי מקצועי</strong> לאנשים שחיים בעולם אמיתי.
              </p>
              <p>
                ה<strong>אימון מנטלי</strong> מתאים לאנשים שלא מחכים שדברים יסתדרו לבד — הם מבינים שאם הם לא בונים את עצמם מנטלית, הלחץ והעומס יעשו את זה במקומם. <strong>אימון אישי</strong> זה מה שדרוש כדי ליצור שינוי אמיתי. <a href="#process" className="text-blue-600 hover:text-blue-800 underline font-semibold">ראה את תהליך האימון המנטלי</a>.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-blue-100 shadow-2xl space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">במהלך <strong>תהליך האימון המנטלי</strong> אנחנו עובדים על:</h3>
              <ul className="space-y-4">
                {points.map((point, index) => (
                  <li key={index} className="flex items-center gap-4 bg-white/80 p-5 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0" size={28} />
                    <span className="text-xl font-medium text-slate-800">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCoaching;
