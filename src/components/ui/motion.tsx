
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  animateOnce?: boolean;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-in';
}

export function Motion({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  animateOnce = true,
  animation = 'fade-up',
}: MotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              currentRef.classList.add('animate-' + animation);
            }, delay);
            
            if (animateOnce) {
              observer.unobserve(currentRef);
            }
          } else if (!animateOnce) {
            currentRef.classList.remove('animate-' + animation);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animation, animateOnce, delay, rootMargin, threshold]);
  
  return (
    <div 
      ref={ref} 
      className={cn('opacity-0', className)}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
}

export function MotionGroup({
  children,
  className,
  threshold = 0.1,
  rootMargin = "0px",
  animateOnce = true,
}: Omit<MotionProps, 'animation' | 'delay'>) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentRef.classList.add('active');
            
            if (animateOnce) {
              observer.unobserve(currentRef);
            }
          } else if (!animateOnce) {
            currentRef.classList.remove('active');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateOnce, rootMargin, threshold]);
  
  return (
    <div 
      ref={ref} 
      className={cn('stagger-children', className)}
    >
      {children}
    </div>
  );
}
