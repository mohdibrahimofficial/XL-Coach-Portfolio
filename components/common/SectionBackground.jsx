import React from 'react';

/*
  SectionBackground
  - Subtle, performant animated SVG shapes for section backgrounds
  - Props:
    - theme: 'dark' | 'light' (controls fill colors/opacities)
    - className: extra classes for positioning tweaks if needed
*/
const SectionBackground = ({
  theme = 'dark',
  className = '',
  showTopLeftCircle = true,
  showRightBlob = true,
  showBottomWave = true,
  showStar = true,
  showZigzag = true,
  showPill = true,
}) => {
  const isDark = theme === 'dark';
  const fillPrimary = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
  const fillSecondary = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
  const fillTertiary = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)';

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden -z-0 ${className}`} aria-hidden>
      {/* Top-left floating circle */}
      {showTopLeftCircle && (
        <svg className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bgshape-float-slow blur-3xl" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill={fillPrimary} />
        </svg>
      )}

      {/* Mid-right elongated blob */}
      {showRightBlob && (
      <svg className="absolute top-1/4 -right-28 w-[32rem] h-[32rem] bgshape-move-top-left blur-3xl" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="bg-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fillSecondary} />
            <stop offset="100%" stopColor={fillTertiary} />
          </linearGradient>
        </defs>
        <path
          d="M38.9,-54.1C51.8,-49.9,64.8,-43.7,69.3,-33.4C73.9,-23.1,69.9,-8.7,66.6,5.4C63.3,19.6,60.7,33.4,52.7,44.3C44.7,55.2,31.3,63.2,17.4,66.7C3.5,70.2,-11,69.2,-25.9,65C-40.8,60.7,-56.1,53.2,-64.3,41.4C-72.5,29.5,-73.6,13.3,-72.8,-2.1C-72,-17.5,-69.2,-32,-60.7,-41.9C-52.1,-51.9,-37.8,-57.3,-24.2,-61.7C-10.7,-66.2,2.1,-69.6,14.1,-67.7C26.1,-65.9,38.2,-58.3,38.9,-54.1Z"
          transform="translate(100 100)"
          fill="url(#bg-grad-1)"
        />
      </svg>
      )}

      {/* Bottom-left gentle wave band */}
      {showBottomWave && (
        <svg className="absolute -bottom-40 -left-10 w-[40rem] h-[18rem] bgshape-drift-slow" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d="M0,120 C200,60 400,180 600,120 C800,60 1000,180 1200,120 L1200,200 L0,200 Z" fill={fillSecondary} />
        </svg>
      )}

      {/* Top-right star moving right */}
      {showStar && (
        <svg className="absolute -top-10 right-10 w-24 h-24 bgshape-move-right" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="50,5 61,35 93,38 68,57 75,88 50,72 25,88 32,57 7,38 39,35"
            fill={fillPrimary}
          />
        </svg>
      )}

      {/* Mid-left small circle zigzag */}
      {showZigzag && (
        <svg className="absolute top-1/3 left-6 w-10 h-10 bgshape-zigzag" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill={fillTertiary} />
        </svg>
      )}

      {/* Bottom-right pill moving top-left */}
      {showPill && (
        <svg className="absolute bottom-8 right-6 w-40 h-14 bgshape-move-top-left" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="196" height="56" rx="28" fill={fillSecondary} />
        </svg>
      )}
    </div>
  );
};

export default SectionBackground;
