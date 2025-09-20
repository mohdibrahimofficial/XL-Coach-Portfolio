"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function EventsCarouselClient({ events = [] }) {
  // Using selector-based navigation is more robust across devices (esp. mobile)

  return (
    <div className="relative">
      {/* Custom Navigation */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 sm:px-4">
        <button
          className="events-nav prev pointer-events-auto -left-6 md:-left-10 relative inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-white text-black border border-white/20 shadow-md hover:bg-transparent hover:text-white transition cursor-pointer"
          aria-label="Previous"
          role="button"
        >
          ‹
        </button>
        <button
          className="events-nav next pointer-events-auto -right-6 md:-right-10 relative inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-white text-black border border-white/20 shadow-md hover:bg-transparent hover:text-white transition cursor-pointer"
          aria-label="Next"
          role="button"
        >
          ›
        </button>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{ prevEl: '.events-nav.prev', nextEl: '.events-nav.next' }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className="h-full">
            <div className="group relative w-full h-full">
              <div className="p-[1.5px] rounded-none bg-gradient-to-b from-white/15 via-white/8 to-transparent transition-transform duration-300 group-hover:-translate-y-1 shadow-sm shadow-black/20 h-full">
                <div className="relative rounded-none bg-white/5 backdrop-blur-[2px] border border-white/12 overflow-hidden h-full flex flex-col min-h-[360px]">

                  {/* Accent orbs (soft) */}
                  <div className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/8 blur-3xl"></div>
                  <div className="pointer-events-none absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-white/6 blur-3xl"></div>

                  {/* Price badge (glassy) */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block rounded-full bg-white/85 text-black text-xs font-bold tracking-wide px-3 py-1 border border-white/20 shadow-sm">
                      {event.price}
                    </span>
                  </div>

                  <div className="pt-6 px-6 mt-6 flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-wide leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-gray-300/90 text-sm leading-relaxed mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Chips (subtle) */}
                    <div className="mt-2 mb-1 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-white/90 bg-white/10 rounded-full px-2.5 py-1 border border-white/15">
                        <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-white/90 bg-white/10 rounded-full px-2.5 py-1 border border-white/15">
                        <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-white/90 bg-white/10 rounded-full px-2.5 py-1 border border-white/15">
                        <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 pb-6 px-6">
                    <div className="my-4 h-px w-full bg-white/10"></div>
                    <div className="flex justify-end">
                      <button 
                        className="border border-white text-white/95 hover:bg-white hover:text-black transition-all duration-300 font-semibold rounded-none cursor-pointer px-5 py-2 tracking-wide shadow-sm hover:shadow-md hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                      >
                        REGISTER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Disabled state styles for edge slides */}
      <style jsx>{`
        .events-nav.swiper-button-disabled {
          opacity: 0.4;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
