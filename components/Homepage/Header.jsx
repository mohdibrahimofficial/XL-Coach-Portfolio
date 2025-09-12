import React from 'react';

const Header = () => {
  return (
    <header className="bg-black py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl text-white tracking-wider">COACH PORTFOLIO</div>
        
        <nav className="hidden md:flex gap-8">
          <a 
            className="text-white hover:text-gray-300 transition-all duration-300 relative group"
            href="#home"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="text-white hover:text-gray-300 transition-all duration-300 relative group"
            href="#about"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="text-white hover:text-gray-300 transition-all duration-300 relative group"
            href="#events"
          >
            Events
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="text-white hover:text-gray-300 transition-all duration-300 relative group"
            href="#testimonials"
          >
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            className="text-white hover:text-gray-300 transition-all duration-300 relative group"
            href="#contact"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
        <div className="hidden lg:block">
          <button 
            className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 font-semibold py-2 px-6 rounded-full tracking-wider"
          >
            Book a Session
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;