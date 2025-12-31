
import React from 'react';

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
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">מפת הדרכים שלך</h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            תהליך מובנה ומזוקק בן 7 שלבים שהופך תאוריה לזהות חדשה ומנצחת.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`group glass-card p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 ${index === steps.length - 1 ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-5xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                  0{index + 1}
                </span>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{step.title}</h3>
              <p className="text-lg text-blue-600 font-bold mb-4 opacity-80">{step.subtitle}</p>
              <div className="w-12 h-1 bg-blue-100 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="lg:col-span-1 ice-button rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center text-white">
            <h4 className="text-2xl font-black mb-4">מוכן להתחיל?</h4>
            <p className="text-blue-100 mb-6 text-sm">אל תיתן לעוד שנה לעבור באוטומט</p>
            <a href="https://wa.me/972500000000" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-black hover:scale-105 transition-transform">
              בוא נצא לדרך
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
