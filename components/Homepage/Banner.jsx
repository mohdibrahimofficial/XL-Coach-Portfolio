import React from 'react';
import Image from 'next/image';

const Banner = () => {
  // In a real implementation, this would be dynamic data
  const slides = [
    {
      id: 1,
      title: "TRANSFORM YOUR LIFE WITH PROFESSIONAL COACHING",
      subtitle: "Unlock your potential and achieve extraordinary results",
      ctaText: "BOOK A SESSION",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=960&q=80"
    },
    {
      id: 2,
      title: "ELEVATE YOUR BUSINESS TO NEW HEIGHTS",
      subtitle: "Strategic coaching for entrepreneurs and executives",
      ctaText: "LEARN MORE",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=960&q=80"
    },
    {
      id: 3,
      title: "CREATE LASTING CHANGE IN YOUR CAREER",
      subtitle: "Navigate transitions with confidence and clarity",
      ctaText: "GET STARTED",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=960&q=80"
    }
  ];

  // CSS-only slider via keyframes for SSR safety

  return (
    <div id="home" className="banner-section relative bg-black py-20 md:py-40 px-6 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="banner-slider-root relative min-h-[460px] md:min-h-[540px]">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`banner-slide banner-slide-${index} grid md:grid-cols-2 gap-10 items-center z-0`}>
              {/* Left: Text content */}
              <div className="text-center md:text-left px-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/90 text-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Premium Coaching
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)]">
                  {slide.title}
                </h1>
                {/* Accent underline */}
                <div className="mx-auto md:mx-0 h-1 w-28 bg-gradient-to-r from-white via-white/70 to-transparent rounded-full mb-8"></div>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl md:max-w-xl mx-auto md:mx-0 mb-8 md:mb-12 font-light">
                  {slide.subtitle}
                </p>
                <div className="flex justify-center md:justify-start gap-6 mb-8 md:mb-10">
                  <a
                    href="#contact"
                    aria-label="Go to Contact section"
                    className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 font-semibold text-sm md:text-lg px-5 py-2.5 md:px-10 md:py-4 rounded-full tracking-wider shadow-lg hover:shadow-white/20"
                  >
                    {slide.ctaText}
                  </a>
                  <a
                    href="#testimonials"
                    aria-label="Go to Videos section"
                    className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold text-sm md:text-lg px-5 py-2.5 md:px-10 md:py-4 rounded-full tracking-wider hover:shadow-lg hover:shadow-white/10"
                  >
                    WATCH VIDEO
                  </a>
                </div>
              </div>

              {/* Right: Image (hidden on mobile) */}
              <div className="hidden md:flex md:mt-0 items-center justify-center relative px-1">
                {/* Accent behind image */}
                <div className="pointer-events-none absolute -z-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-white/5 blur-2xl"></div>
                <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-indigo-400/20 blur-2xl"></div>
                <div className="relative z-10 w-full max-w-md">
                  <div className="p-[2px] rounded-2xl bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-2xl shadow-black/30">
                    <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-[1px]">
                      <Image
                        src={slide.image}
                        alt="Professional coach portrait"
                        width={960}
                        height={1280}
                        className="w-full h-auto object-contain md:object-cover"
                        priority={index === 0}
                        sizes="(min-width: 768px) 420px, 80vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Animations moved to global CSS (app/globals.css) for SSR safety */}
        </div>

        {/* Slide indicators synced with CSS timing (hidden on mobile) */}
        <div className="hidden md:flex pointer-events-none absolute inset-x-0 md:bottom-44 z-20 justify-center space-x-3">
          {slides.map((s, i) => (
            <span key={s.id} className={`banner-dot banner-dot-${i}`}></span>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      {/* Wave border at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.66,168.19-17.55,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C64.06,116.41,137,121.77,205.55,109.83,247,102.55,284.79,63.2,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;