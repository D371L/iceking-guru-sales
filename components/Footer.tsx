
import React from 'react';

const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Проверяем, что это якорная ссылка
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offset = 100; // Отступ от верха (учитывая высоту навбара)
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-right">
            <span className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-cyan-300 uppercase">
              ARTEM BOIKOV
            </span>
            <p className="mt-2 text-slate-400 font-light">אימון מנטלי מבוסס תוצאות בגישת NLP</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-blue-400 transition-colors">בית</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-blue-400 transition-colors">נעים להכיר</a>
            <a href="#what-is" onClick={(e) => handleSmoothScroll(e, '#what-is')} className="hover:text-blue-400 transition-colors">אימון מנטלי</a>
            <a href="#process" onClick={(e) => handleSmoothScroll(e, '#process')} className="hover:text-blue-400 transition-colors">תהליך העבודה</a>
            <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')} className="hover:text-blue-400 transition-colors">המלצות</a>
          </div>

          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ארטם בויקוב. כל הזכויות שמורות.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
