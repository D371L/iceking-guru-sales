
import React from 'react';
import { Users, Briefcase, Rocket, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

const groups = [
  { icon: ShieldCheck, text: "חיילים משוחררים שמחפשים כיוון אזרחי ברור" },
  { icon: Briefcase, text: "אנשים שתקועים בעבודה שהם לא רוצים" },
  { icon: Rocket, text: "אנשי הייטק שחווים שחיקה, לחץ או ריקנות" },
  { icon: HeartPulse, text: "מי שמרגיש שהוא עובד קשה בלי תוצאה פנימית" },
  { icon: Sparkles, text: "מי שרוצה לבנות יציבות, מיקוד וביצועים גבוהים" },
  { icon: Users, text: "מי שמוכן לקחת אחריות ולעבוד על עצמו באמת" }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 ice-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">למי התהליך מיועד?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-blue-50 flex items-center gap-6">
              <div className="p-4 bg-blue-100 rounded-xl text-blue-600">
                <group.icon size={32} />
              </div>
              <span className="text-xl font-bold text-slate-800 leading-tight">{group.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-2 border-blue-100 max-w-2xl mx-auto ice-glow">
             <h3 className="text-3xl font-black text-slate-900 mb-4">מוכן לקחת שליטה?</h3>
             <p className="text-xl text-slate-600 mb-8">הצעד הראשון לחיים מנוהלים מתחיל בשיחה אחת.</p>
             <a 
              href="https://wa.me/972500000000" 
              className="inline-block px-12 py-6 bg-blue-600 text-white text-2xl font-black rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-200"
            >
              צרו קשר עכשיו
            </a>
            <p className="mt-6 font-bold text-blue-600 italic">ARTEM BOIKOV | Mental Coach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
