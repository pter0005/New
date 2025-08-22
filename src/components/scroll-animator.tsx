"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeInUp' | 'zoomInFadeIn';
}

export default function ScrollAnimator({ children, className, animationType = 'fadeInUp' }: ScrollAnimatorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClass = {
    fadeInUp: 'animate-fadeInUp',
    zoomInFadeIn: 'animate-zoomInFadeIn',
  }[animationType];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-1000 ease-out',
        isVisible ? `opacity-100 ${animationClass}` : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
