
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-500 rounded-3xl ${scrolled ? 'glass-card px-8 py-3' : 'px-4'}`}>
          <div className="flex justify-between items-center">
            
            {/* Right Side: Desktop Menu & Mobile Toggle */}
            <div className="flex items-center gap-10">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-slate-600 hover:text-blue-600 font-medium text-sm tracking-wide transition-all"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/972500000000"
                  className="ice-button text-white px-7 py-2.5 rounded-2xl font-bold text-sm tracking-wide"
                >
                  צרו קשר
                </a>
              </div>

              {/* Mobile Button */}
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2 focus:outline-none">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Left Side: Logo */}
            <div className="flex items-center">
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className="text-2xl font-black tracking-tighter text-gradient uppercase"
              >
                ARTEM BOIKOV
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 glass-card rounded-3xl p-8 animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-6 text-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/972500000000"
              className="ice-button text-white py-4 rounded-2xl font-black text-lg shadow-lg"
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
