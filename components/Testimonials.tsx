
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const testimonials = [
  { name: "אורן", text: "אחי, זה לא יאמן כמה הראש שלי היה עמוס לפני. היום יש לי סדר, יש לי כיוון, ואני מפסיק לברוח מדברים. זה שינה לי את היום־יום." },
  { name: "דניאל", text: "הגעתי אחרי השחרור בלי מושג מה אני רוצה מעצמי. המפגשים איתך עשו לי סדר, פתאום יש מטרה ויש דרך. מרגיש הרבה יותר יציב." },
  { name: "יואב", text: "חשבתי שזה יהיה עוד אימון רגשי כזה... אבל זה היה פרקטי בטירוף. כלים שאני באמת משתמש בהם כשיש לחץ." },
  { name: "עידו", text: "הקטע עם הלחץ פתח לי משהו בראש. פעם הייתי ננעל, היום אני יודע איך לעבוד איתו. מרגיש הרבה יותר חד." }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px]"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="text-right">
            <h2 className="text-5xl lg:text-7xl font-black mb-4">השטח מדבר.</h2>
            <p className="text-blue-400 text-xl font-bold">הודעות שקיבלתי מלקוחות אחרי התהליך</p>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
              <ChevronRight size={28} />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
              <ChevronLeft size={28} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Quote className="absolute -top-12 -right-8 text-blue-500/10 w-32 h-32" />
          <div className="min-h-[300px] flex flex-col justify-center">
             <p className="text-3xl lg:text-5xl font-light leading-tight mb-12 animate-in fade-in slide-in-from-right-8 duration-700">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-1 bg-blue-500"></div>
              <h4 className="text-3xl font-black tracking-wide">{testimonials[currentIndex].name}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
