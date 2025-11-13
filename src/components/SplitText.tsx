import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotation?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotation?: number;
  };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

export const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 0.5,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasAnimated) return;

    const elements = container.querySelectorAll('.split-char, .split-word, .split-line');
    if (elements.length === 0) return;

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Set initial state
            gsap.set(elements, from);

            // Animate each element with stagger
            gsap.to(elements, {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              onComplete: () => {
                if (onLetterAnimationComplete) {
                  onLetterAnimationComplete();
                }
              },
            });

            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  const splitText = () => {
    if (splitType === 'chars') {
      return text.split('').map((char, index) => (
        <span
          key={index}
          className="split-char inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (splitType === 'words') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="split-word inline-block mr-[0.25em]">
          {word}
        </span>
      ));
    } else {
      // lines
      return text.split('\n').map((line, index) => (
        <span key={index} className="split-line block">
          {line}
        </span>
      ));
    }
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        textAlign,
        whiteSpace: 'nowrap',
      }}
    >
      {splitText()}
    </div>
  );
};

export default SplitText;