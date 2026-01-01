
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие меню при клике вне его
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('nav')) {
          setIsOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  // Закрытие меню при нажатии Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

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
    // Закрываем мобильное меню после клика
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'בית', href: '#home' },
    { name: 'נעים להכיר', href: '#about' },
    { name: 'אימון מנטלי', href: '#what-is' },
    { name: 'תהליך העבודה', href: '#process' },
    { name: 'המלצות', href: '#testimonials' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-500 rounded-3xl ${scrolled ? 'glass-card px-6 sm:px-8 py-3' : 'px-4'}`}>
          <div className="flex justify-between items-center">
            
            {/* Right Side: Desktop Menu & Mobile Toggle */}
            <div className="flex items-center gap-6 sm:gap-10">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6 sm:gap-8">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-slate-600 hover:text-blue-600 font-medium text-sm tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1 min-h-[44px] flex items-center"
                    aria-label={`נווט ל${item.name}`}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/972500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ice-button text-white px-6 sm:px-7 py-2.5 rounded-2xl font-bold text-sm tracking-wide min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="צור קשר דרך WhatsApp"
                >
                  צרו קשר
                </a>
              </div>

              {/* Mobile Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="text-slate-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Left Side: Logo */}
            <div className="flex items-center">
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className="text-xl sm:text-2xl font-black tracking-tighter text-gradient uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2"
                aria-label="חזור לעמוד הבית"
              >
                ARTEM BOIKOV
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-24 left-4 right-4 sm:left-6 sm:right-6 glass-card rounded-3xl p-6 sm:p-8 animate-in fade-in zoom-in duration-300"
          role="menu"
          aria-label="תפריט נייד"
        >
          <div className="flex flex-col gap-4 sm:gap-6 text-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-lg sm:text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                role="menuitem"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/972500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="ice-button text-white py-4 rounded-2xl font-black text-base sm:text-lg shadow-lg min-h-[56px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              role="menuitem"
              aria-label="צור קשר דרך WhatsApp"
            >
              צרו קשר עוד היום
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
