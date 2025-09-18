import React from 'react';
import Image from 'next/image';
import SectionBackground from '../common/SectionBackground';
import WaveDivider from '../common/WaveDivider';

const About = () => {
  return (
    <div id="about" className="relative bg-white text-black py-24 px-6 overflow-hidden">
      {/* <WaveDivider position="top" height={100} fill="#000000" /> */}

      {/* Decorative gradient orbs (match banner style) */}
      <div className="pointer-events-none absolute top-[80px] -left-24 w-[28rem] h-[28rem] rounded-full bg-indigo-500/15 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-pink-500/10 blur-3xl"></div>
      <SectionBackground theme="light" />
      <div className="max-w-7xl mx-auto"> 
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-black mb-6 tracking-wider">ABOUT ME</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto font-light">
            Discover the journey and expertise behind my coaching philosophy
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-2/5 relative">
            <div className="mt-0 flex items-center justify-center relative px-1">
              {/* Accent behind image */}
              <div className="pointer-events-none absolute -z-0 w-56 h-56 md:w-72 md:h-72 rounded-full bg-white/5 blur-2xl"></div>
              <div className="pointer-events-none absolute -top-6 -left-6 w-20 h-20 rounded-full bg-indigo-400/20 blur-2xl"></div>
              <div className="relative z-10 w-full max-w-md">
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-2xl shadow-black/30">
                  <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-[1px]">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                      alt="Coach Portrait"
                      width={774}
                      height={960}
                      className="w-full h-auto object-cover"
                      sizes="(min-width: 1024px) 420px, 80vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h3 className="text-3xl font-bold text-black mb-8 tracking-wide">TRANSFORMING LIVES THROUGH COACHING</h3>
            <p className="text-gray-900 mb-8 text-lg leading-relaxed">
              With over 10 years of experience in professional coaching, I have helped hundreds of individuals 
              and businesses achieve breakthrough results. My approach combines proven methodologies with 
              personalized strategies to unlock your full potential.
            </p>
            <p className="text-gray-900 mb-10 text-lg leading-relaxed">
              My coaching philosophy centers on empowering you to discover your own solutions and build 
              sustainable habits for long-term success. I believe that everyone has the capacity for 
              extraordinary achievement when guided by the right principles and mindset.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="border-l-4 border-black pl-6 py-4">
                <h4 className="font-bold text-black text-2xl tracking-wider">1000+</h4>
                <p className="text-gray-900 mt-2">Clients Coached</p>
              </div>
              <div className="border-l-4 border-black pl-6 py-4">
                <h4 className="font-bold text-black text-2xl tracking-wider">10+</h4>
                <p className="text-gray-900 mt-2">Years Experience</p>
              </div>
              <div className="border-l-4 border-black pl-6 py-4">
                <h4 className="font-bold text-black text-2xl tracking-wider">98%</h4>
                <p className="text-gray-900 mt-2">Success Rate</p>
              </div>
              <div className="border-l-4 border-black pl-6 py-4">
                <h4 className="font-bold text-black text-2xl tracking-wider">50+</h4>
                <p className="text-gray-900 mt-2">Workshops</p>
              </div>
            </div>
            
            <div className="mt-12">
              <button className="bg-black text-white border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 font-semibold py-3 px-8 rounded-full tracking-wider">
                DOWNLOAD MY BIO
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <WaveDivider height={100} fill="#000000" /> */}
    </div>
  );
};

export default About;