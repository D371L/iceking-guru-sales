// ============================================
// Navigation & Mobile Menu
// ============================================

const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
let isMenuOpen = false;

// Navbar scroll effect with glass morphism
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  if (!navbar) return;
  
  const navInner = navbar.querySelector('.max-w-7xl > div');
  if (!navInner) return;
  
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 20) {
    // Apply glass effect when scrolled
    navbar.classList.remove('py-6');
    navbar.classList.add('py-3');
    
    // Navbar itself should be transparent (no white background)
    navbar.style.backgroundColor = 'transparent';
    navbar.style.backdropFilter = '';
    navbar.style.webkitBackdropFilter = '';
    navbar.style.boxShadow = '';
    navbar.style.borderBottom = '';
    
    // Apply glass effect to inner container (rounded, glass morphism)
    if (navInner) {
      navInner.classList.add('glass-card');
      navInner.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      navInner.style.backdropFilter = 'blur(20px) saturate(180%)';
      navInner.style.webkitBackdropFilter = 'blur(20px) saturate(180%)';
      navInner.style.border = '1px solid rgba(255, 255, 255, 0.6)';
      navInner.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.15)';
      navInner.style.borderRadius = '2rem';
      navInner.style.paddingLeft = '1.5rem';
      navInner.style.paddingRight = '1.5rem';
      navInner.style.paddingTop = '0.75rem';
      navInner.style.paddingBottom = '0.75rem';
    }
  } else {
    // Remove glass effect when at top
    navbar.classList.remove('py-3');
    navbar.classList.add('py-6');
    navbar.style.backgroundColor = 'transparent';
    navbar.style.backdropFilter = '';
    navbar.style.webkitBackdropFilter = '';
    navbar.style.boxShadow = '';
    navbar.style.borderBottom = '';
    
    if (navInner) {
      navInner.classList.remove('glass-card');
      navInner.style.backgroundColor = '';
      navInner.style.backdropFilter = '';
      navInner.style.webkitBackdropFilter = '';
      navInner.style.border = '';
      navInner.style.boxShadow = '';
      navInner.style.borderRadius = '';
      navInner.style.paddingLeft = '';
      navInner.style.paddingRight = '';
      navInner.style.paddingTop = '';
      navInner.style.paddingBottom = '';
    }
  }
  
  lastScrollY = currentScrollY;
});

// Mobile menu toggle
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      mobileMenuBtn.setAttribute('aria-label', 'סגור תפריט');
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.setAttribute('aria-label', 'פתח תפריט');
    }
  });
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (isMenuOpen && !e.target.closest('nav')) {
    isMenuOpen = false;
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('aria-label', 'פתח תפריט');
  }
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isMenuOpen) {
    isMenuOpen = false;
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('aria-label', 'פתח תפריט');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    // Close mobile menu
    if (isMenuOpen) {
      isMenuOpen = false;
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.setAttribute('aria-label', 'פתח תפריט');
    }
  });
});

// ============================================
// Intersection Observer for Animations
// ============================================

const fadeObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, fadeObserverOptions);

// Observe all fade-in-up elements
document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});

// ============================================
// Testimonials Slider
// ============================================

let testimonialText;
let testimonialAuthor;
let testimonialPrev;
let testimonialNext;
let testimonialIndicators;

const testimonials = [
  { name: "אורן", text: "אחי, זה לא יאמן כמה הראש שלי היה עמוס לפני. היום יש לי סדר, יש לי כיוון, ואני מפסיק לברוח מדברים. זה שינה לי את היום־יום." },
  { name: "דניאל", text: "הגעתי אחרי השחרור בלי מושג מה אני רוצה מעצמי. המפגשים איתך עשו לי סדר, פתאום יש מטרה ויש דרך. מרגיש הרבה יותר יציב." },
  { name: "יואב", text: "חשבתי שזה יהיה עוד אימון רגשי כזה... אבל זה היה פרקטי בטירוף. כלים שאני באמת משתמש בהם כשיש לחץ." },
  { name: "עידו", text: "הקטע עם הלחץ פתח לי משהו בראש. פעם הייתי ננעל, היום אני יודע איך לעבוד איתו. מרגיש הרבה יותר חד." },
  { name: "אלון", text: "לא הבנתי עד כמה אמונות קטנות מנהלות אותי. ברגע שזיהינו את זה – הכול התחיל לזוז. מרגיש בן אדם אחר." },
  { name: "רועי", text: "זה לא תהליך קל, אבל הוא אמיתי. מי שמוכן לעבוד על עצמו — זה שווה כל רגע." },
  { name: "ניר", text: "הייתי תקוע בעבודה שלא רציתי ולא ידעתי מה הצעד הבא. פתאום יש לי ביטחון לקבל החלטות ולא לדחות." },
  { name: "תומר", text: "לא חיפשתי מוטיבציה — חיפשתי שליטה. וקיבלתי בדיוק את זה." }
];

let currentTestimonialIndex = 0; // Start with first testimonial (Oren) as shown in the image
let isAutoPlaying = true;
let testimonialInterval = null;

// Variables will be initialized in initializeTestimonials()

function updateTestimonial(index) {
  if (testimonialText && testimonialAuthor) {
    testimonialText.textContent = testimonials[index].text;
    testimonialAuthor.querySelector('span').textContent = testimonials[index].name;
    
    // Update indicators
    testimonialIndicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.remove('w-2', 'bg-white/30');
        indicator.classList.add('w-8', 'bg-blue-500');
        indicator.setAttribute('aria-selected', 'true');
      } else {
        indicator.classList.remove('w-8', 'bg-blue-500');
        indicator.classList.add('w-2', 'bg-white/30');
        indicator.setAttribute('aria-selected', 'false');
      }
    });
  }
}

function nextTestimonial() {
  isAutoPlaying = false;
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
    testimonialInterval = null;
  }
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  updateTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
  isAutoPlaying = false;
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
    testimonialInterval = null;
  }
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentTestimonialIndex);
}

function goToTestimonial(index) {
  isAutoPlaying = false;
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
    testimonialInterval = null;
  }
  currentTestimonialIndex = index;
  updateTestimonial(currentTestimonialIndex);
}

// Initialize testimonials - create indicators dynamically
function initTestimonialIndicators() {
  const container = document.getElementById('testimonial-indicators-container');
  if (container) {
    container.innerHTML = '';
    testimonials.forEach((_, index) => {
      const button = document.createElement('button');
      button.className = `testimonial-indicator h-2 ${index === 0 ? 'w-8 rounded-full bg-blue-500' : 'w-2 rounded-full bg-white/30'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 hover:bg-white/50`;
      button.setAttribute('aria-label', `הצג המלצה ${index + 1}`);
      button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      button.setAttribute('role', 'tab');
      button.setAttribute('data-index', index);
      button.addEventListener('click', () => goToTestimonial(index));
      container.appendChild(button);
    });
    testimonialIndicators = document.querySelectorAll('.testimonial-indicator');
  }
}

// Initialize testimonials when DOM is ready
function initializeTestimonials() {
  testimonialText = document.getElementById('testimonial-text');
  testimonialAuthor = document.getElementById('testimonial-author');
  testimonialPrev = document.getElementById('testimonial-prev');
  testimonialNext = document.getElementById('testimonial-next');
  
  if (testimonialText && testimonialAuthor) {
    initTestimonialIndicators();
    updateTestimonial(0); // Start with first testimonial (Oren) as shown in the image
    
    if (testimonialNext) {
      testimonialNext.addEventListener('click', nextTestimonial);
    }
    
    if (testimonialPrev) {
      testimonialPrev.addEventListener('click', prevTestimonial);
    }
    
    // Auto-play testimonials
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      const testimonialsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && isAutoPlaying) {
            if (!testimonialInterval) {
              testimonialInterval = setInterval(() => {
                if (isAutoPlaying) {
                  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
                  updateTestimonial(currentTestimonialIndex);
                }
              }, 5000);
            }
          } else {
            if (testimonialInterval) {
              clearInterval(testimonialInterval);
              testimonialInterval = null;
            }
          }
        });
      }, { threshold: 0.5 });
      
      testimonialsObserver.observe(testimonialsSection);
    }
  }
}

// Try to initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTestimonials);
} else {
  initializeTestimonials();
}

// ============================================
// Achievement Counters
// ============================================

function animateCounter(element, target, suffix, duration = 2000) {
  const steps = 60;
  const stepTime = duration / steps;
  const increment = target / steps;
  let currentStep = 0;
  let currentValue = 0;
  
  const timer = setInterval(() => {
    currentStep++;
    currentValue = Math.min(Math.floor(increment * currentStep), target);
    element.textContent = currentValue + suffix;
    
    if (currentStep >= steps) {
      clearInterval(timer);
      element.textContent = target + suffix;
    }
  }, stepTime);
}

const achievementsSection = document.querySelector('.ice-gradient section');
if (achievementsSection) {
  const countersObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const suffix = counter.getAttribute('data-suffix') || '';
          if (target && !counter.classList.contains('animated')) {
            counter.classList.add('animated');
            animateCounter(counter, target, suffix);
          }
        });
        countersObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  countersObserver.observe(achievementsSection);
}

// ============================================
// Scroll to Top Button
// ============================================

let scrollTopBtn = null;
let aboutSection = null;

function updateScrollTopButton() {
  // Get button if not already cached
  if (!scrollTopBtn) {
    scrollTopBtn = document.getElementById('scroll-top-btn');
  }
  
  // Get about section if not already cached
  if (!aboutSection) {
    aboutSection = document.getElementById('about');
  }
  
  if (scrollTopBtn && aboutSection) {
    const aboutRect = aboutSection.getBoundingClientRect();
    // Show button when about section is visible in viewport or has been scrolled past
    const isAboutVisible = aboutRect.top < window.innerHeight && aboutRect.bottom > 0;
    const isAboutPassed = aboutRect.top < 0;
    
    if (isAboutVisible || isAboutPassed) {
      scrollTopBtn.classList.remove('hidden');
      scrollTopBtn.style.display = 'flex';
    } else {
      scrollTopBtn.classList.add('hidden');
      scrollTopBtn.style.display = 'none';
    }
  }
}

// Initialize scroll to top button when DOM is ready
function initScrollTopButton() {
  scrollTopBtn = document.getElementById('scroll-top-btn');
  
  if (scrollTopBtn) {
    // Check initial state
    updateScrollTopButton();
    
    // Add click handler
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
  }
}

// Add scroll listener (only once, outside function to avoid duplicates)
window.addEventListener('scroll', updateScrollTopButton);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initScrollTopButton();
  // Also check after a short delay to ensure everything is loaded
  setTimeout(() => {
    updateScrollTopButton();
  }, 100);
});

// Also initialize immediately if DOM is already loaded
if (document.readyState !== 'loading') {
  initScrollTopButton();
  setTimeout(() => {
    updateScrollTopButton();
  }, 100);
}

// ============================================
// Google Analytics Event Tracking
// ============================================

document.querySelectorAll('.cta-click').forEach(button => {
  button.addEventListener('click', (e) => {
    const label = button.getAttribute('data-label');
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'conversion',
        event_label: label,
        value: 1
      });
    }
    
    // Track WhatsApp clicks separately
    if (button.href && button.href.includes('wa.me')) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: label || 'whatsapp',
          value: 1
        });
      }
    }
  });
});

// ============================================
// Current Year
// ============================================

const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// ============================================
// Image Error Handling
// ============================================

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    // Fallback to placeholder if image fails to load
    if (!this.dataset.fallback) {
      this.dataset.fallback = 'true';
      this.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'1000\'%3E%3Crect width=\'800\' height=\'1000\' fill=\'%23e0f2fe\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\' font-family=\'Arial\' font-size=\'24\' fill=\'%230364a1\'%3EImage%3C/text%3E%3C/svg%3E';
    }
  });
});

// ============================================
// Intersection Observer for Fade-in Animations
// ============================================

const fadeInObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, fadeInObserverOptions);

// ============================================
// Initialize on DOM Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize testimonials if not already initialized
  if (!testimonialText || !testimonialAuthor) {
    initializeTestimonials();
  } else if (!testimonialText.textContent.trim()) {
    updateTestimonial(0);
  }
  
  // Initialize navbar scroll effect
  if (navbar) {
    const navInner = navbar.querySelector('.max-w-7xl > div');
    if (navInner && window.scrollY > 20) {
      navbar.classList.remove('py-6');
      navbar.classList.add('py-3');
      navbar.style.backgroundColor = 'transparent';
      navInner.classList.add('glass-card');
      navInner.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      navInner.style.backdropFilter = 'blur(20px) saturate(180%)';
      navInner.style.webkitBackdropFilter = 'blur(20px) saturate(180%)';
      navInner.style.border = '1px solid rgba(255, 255, 255, 0.6)';
      navInner.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.15)';
      navInner.style.borderRadius = '2rem';
    }
  }
  
  // Scroll to top button is initialized in initScrollTopButton()
  
  // Set up Intersection Observer for all fade-in-up elements
  const fadeElements = document.querySelectorAll('.fade-in-up');
  fadeElements.forEach(el => {
    // Check if element is already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    } else {
      fadeObserver.observe(el);
    }
  });
  
  // Also observe elements with opacity-0 translate-y-10 classes
  const hiddenElements = document.querySelectorAll('.opacity-0.translate-y-10');
  hiddenElements.forEach(el => {
    fadeObserver.observe(el);
  });
});

