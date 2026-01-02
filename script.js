// ============================================
// Navigation & Mobile Menu
// ============================================

const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
let isMenuOpen = false;

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.remove('py-6');
    navbar.classList.add('py-3');
    const navInner = navbar.querySelector('.max-w-7xl > div');
    if (navInner) {
      navInner.classList.add('glass-card', 'px-6', 'sm:px-8', 'py-3');
    }
  } else {
    navbar.classList.remove('py-3');
    navbar.classList.add('py-6');
    const navInner = navbar.querySelector('.max-w-7xl > div');
    if (navInner) {
      navInner.classList.remove('glass-card', 'px-6', 'sm:px-8', 'py-3');
    }
  }
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

const observerOptions = {
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
}, observerOptions);

// Observe all fade-in-up elements
document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});

// ============================================
// Testimonials Slider
// ============================================

const testimonials = [
  { name: "אורן", text: "אחי, זה לא יאמן כמה הראש שלי היה עמוס לפני. היום יש לי סדר, יש לי כיוון, ואני מפסיק לברוח מדברים. זה שינה לי את היום־יום." },
  { name: "דניאל", text: "הגעתי אחרי השחרור בלי מושג מה אני רוצה מעצמי. המפגשים איתך עשו לי סדר, פתאום יש מטרה ויש דרך. מרגיש הרבה יותר יציב." },
  { name: "יואב", text: "חשבתי שזה יהיה עוד אימון רגשי כזה... אבל זה היה פרקטי בטירוף. כלים שאני באמת משתמש בהם כשיש לחץ." },
  { name: "עידו", text: "הקטע עם הלחץ פתח לי משהו בראש. פעם הייתי ננעל, היום אני יודע איך לעבוד איתו. מרגיש הרבה יותר חד." }
];

let currentTestimonialIndex = 0;
let isAutoPlaying = true;
let testimonialInterval = null;

const testimonialText = document.getElementById('testimonial-text');
const testimonialAuthor = document.getElementById('testimonial-author');
const testimonialPrev = document.getElementById('testimonial-prev');
const testimonialNext = document.getElementById('testimonial-next');
const testimonialIndicators = document.querySelectorAll('.testimonial-indicator');

function updateTestimonial(index) {
  if (testimonialText && testimonialAuthor) {
    testimonialText.textContent = `"${testimonials[index].text}"`;
    testimonialAuthor.querySelector('span').textContent = testimonials[index].name;
    
    // Update indicators
    testimonialIndicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.remove('w-2', 'bg-slate-600');
        indicator.classList.add('w-8', 'bg-blue-500');
        indicator.setAttribute('aria-selected', 'true');
      } else {
        indicator.classList.remove('w-8', 'bg-blue-500');
        indicator.classList.add('w-2', 'bg-slate-600');
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

// Initialize testimonials
if (testimonialText && testimonialAuthor) {
  updateTestimonial(0);
  
  if (testimonialNext) {
    testimonialNext.addEventListener('click', nextTestimonial);
  }
  
  if (testimonialPrev) {
    testimonialPrev.addEventListener('click', prevTestimonial);
  }
  
  testimonialIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToTestimonial(index));
  });
  
  // Auto-play testimonials
  const testimonialsSection = document.getElementById('testimonials');
  if (testimonialsSection) {
    const testimonialsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && isAutoPlaying) {
          testimonialInterval = setInterval(() => {
            if (isAutoPlaying) {
              currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
              updateTestimonial(currentTestimonialIndex);
            }
          }, 5000);
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

const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn?.classList.remove('hidden');
  } else {
    scrollTopBtn?.classList.add('hidden');
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
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
// Initialize on DOM Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Trigger initial animations for elements already in viewport
  const fadeElements = document.querySelectorAll('.fade-in-up');
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
});

