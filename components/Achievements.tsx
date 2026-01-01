import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const achievements = [
  { number: 100, suffix: '+', label: 'לקוחות מרוצים', color: 'blue' },
  { number: 5, suffix: '+', label: 'שנות ניסיון', color: 'cyan' },
  { number: 95, suffix: '%', label: 'שיעור הצלחה', color: 'sky' },
];

const Achievements: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [counters, setCounters] = React.useState([0, 0, 0]);

  React.useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 секунды
    const steps = 60;
    const stepTime = duration / steps;

    achievements.forEach((achievement, index) => {
      let currentStep = 0;
      const increment = achievement.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(
            Math.floor(increment * currentStep),
            achievement.number
          );
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);
    });
  }, [isVisible]);

  return (
    <section className="py-16 sm:py-24 ice-gradient" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map((achievement, index) => {
            const colorClasses = {
              blue: 'text-blue-600',
              cyan: 'text-cyan-600',
              sky: 'text-sky-600'
            };
            return (
              <div 
                key={index}
                className="text-center glass-card p-8 sm:p-10 rounded-3xl gradient-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 ${colorClasses[achievement.color as keyof typeof colorClasses]}`}>
                  {counters[index]}{achievement.suffix}
                </div>
                <div className="text-lg sm:text-xl text-slate-600 font-bold">
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

