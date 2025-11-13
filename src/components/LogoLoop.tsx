import { ReactNode, useEffect, useRef, useState } from 'react';

interface Logo {
  node?: ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

export const LogoLoop = ({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#0a0a0a',
  ariaLabel = 'Partner logos',
}: LogoLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHorizontal = direction === 'left' || direction === 'right';
  const currentSpeed = isHovered ? hoverSpeed : speed;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const track = container.querySelector('.logo-track') as HTMLElement;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const trackSize = isHorizontal ? track.offsetWidth / 2 : track.offsetHeight / 2;

    const animate = () => {
      if (currentSpeed === 0) return;

      const increment = currentSpeed / 60;
      
      if (direction === 'left' || direction === 'up') {
        position += increment;
      } else {
        position -= increment;
      }

      if (Math.abs(position) >= trackSize) {
        position = 0;
      }

      if (isHorizontal) {
        track.style.transform = `translateX(-${position}px)`;
      } else {
        track.style.transform = `translateY(-${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [currentSpeed, direction, isHorizontal]);

  const renderLogo = (logo: Logo, index: number) => {
    const content = (
      <div
        className={`flex items-center justify-center transition-transform duration-300 ${
          scaleOnHover ? 'hover:scale-110' : ''
        }`}
        style={{
          height: isHorizontal ? logoHeight : 'auto',
          width: isHorizontal ? 'auto' : logoHeight,
          minWidth: logoHeight,
          minHeight: logoHeight,
        }}
        title={logo.title || logo.alt}
      >
        {logo.node ? (
          <div className="text-foreground/80 hover:text-primary transition-colors" style={{ fontSize: logoHeight }}>
            {logo.node}
          </div>
        ) : logo.src ? (
          <img
            src={logo.src}
            alt={logo.alt || `Logo ${index + 1}`}
            className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            draggable={false}
          />
        ) : null}
      </div>
    );

    return logo.href ? (
      <a
        key={index}
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0"
        style={{ [isHorizontal ? 'marginRight' : 'marginBottom']: gap }}
      >
        {content}
      </a>
    ) : (
      <div
        key={index}
        className="flex-shrink-0"
        style={{ [isHorizontal ? 'marginRight' : 'marginBottom']: gap }}
      >
        {content}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label={ariaLabel}
    >
      {/* Fade out gradient */}
      {fadeOut && (
        <>
          {isHorizontal ? (
            <>
              <div
                className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{
                  background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
                }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{
                  background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
                }}
              />
            </>
          ) : (
            <>
              <div
                className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
                style={{
                  background: `linear-gradient(to bottom, ${fadeOutColor}, transparent)`,
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${fadeOutColor}, transparent)`,
                }}
              />
            </>
          )}
        </>
      )}

      {/* Logo track - duplicated for seamless loop */}
      <div
        className={`logo-track flex ${isHorizontal ? 'flex-row' : 'flex-col'} ${
          currentSpeed === 0 ? '' : 'will-change-transform'
        }`}
      >
        {/* First set */}
        {logos.map((logo, index) => renderLogo(logo, index))}
        {/* Duplicate for seamless loop */}
        {logos.map((logo, index) => renderLogo(logo, index + logos.length))}
      </div>
    </div>
  );
};