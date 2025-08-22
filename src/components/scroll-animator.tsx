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
        threshold: 0.1, 
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
        'opacity-0', // Start with opacity 0
        isVisible && animationClass, // Apply animation class when visible
        className
      )}
    >
      {children}
    </div>
  );
}
