import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-white text-black font-extrabold grid place-items-center shadow-sm">CP</div>
          <div className="font-bold text-lg sm:text-xl text-white tracking-widest">COACH PORTFOLIO</div>
        </div>
        
        <nav className="hidden md:flex gap-6 lg:gap-8">
          <a 
            className="text-white/90 hover:text-white transition-colors duration-300 relative group"
            href="#home"
          >
            Home
            <span className="pointer-events-none absolute -bottom-1 left-0 w-0 h-px bg-white/80 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="text-white/90 hover:text-white transition-colors duration-300 relative group"
            href="#about"
          >
            About
            <span className="pointer-events-none absolute -bottom-1 left-0 w-0 h-px bg-white/80 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="text-white/90 hover:text-white transition-colors duration-300 relative group"
            href="#events"
          >
            Events
            <span className="pointer-events-none absolute -bottom-1 left-0 w-0 h-px bg-white/80 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="text-white/90 hover:text-white transition-colors duration-300 relative group"
            href="#testimonials"
          >
            Testimonials
            <span className="pointer-events-none absolute -bottom-1 left-0 w-0 h-px bg-white/80 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="text-white/90 hover:text-white transition-colors duration-300 relative group"
            href="#contact"
          >
            Contact
            <span className="pointer-events-none absolute -bottom-1 left-0 w-0 h-px bg-white/80 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
        <div className="hidden lg:block">
          <a 
            href="#contact"
            aria-label="Go to Contact section"
            className="bg-white text-black border border-white/30 hover:bg-transparent hover:text-white transition-all duration-300 font-semibold py-2.5 px-6 rounded-none tracking-wider shadow-sm hover:shadow-white/10"
          >
            Book a Session
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;