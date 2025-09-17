import React from 'react';

const WaveDivider = ({
  height = 100,
  fill = '#ffffff',
  className = '',
  position = 'bottom' // 'bottom' | 'top'
}) => {
  const isTop = position === 'top';
  const containerPosClass = isTop ? 'top-0' : 'bottom-0';
  const flipClass = isTop ? 'rotate-180' : '';
  return (
    <div className={`pointer-events-none absolute ${containerPosClass} left-0 w-full overflow-hidden leading-[0] ${className}`} aria-hidden>
      <svg
        className={`relative block w-[calc(100%+1.3px)] h-[100px] ${flipClass}`}
        style={{ height }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C200,20 400,140 600,80 C800,20 1000,140 1200,80 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
