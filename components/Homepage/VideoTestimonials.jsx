"use client";
import React, { useState } from 'react';
import SectionBackground from '../common/SectionBackground';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const VideoTestimonials = () => {
  // Sample video testimonials data - in a real application this would come from a CMS or API
  const testimonials = [
    {
      id: 1,
      title: "Sarah's Transformation Journey",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
      client: "Sarah Johnson",
      role: "Entrepreneur"
    },
    {
      id: 2,
      title: "Michael's Leadership Breakthrough",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
      client: "Michael Chen",
      role: "Executive Director"
    },
    {
      id: 3,
      title: "Emma's Career Success Story",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
      client: "Emma Rodriguez",
      role: "Marketing Manager"
    },
    {
      id: 4,
      title: "Sarah's Transformation Journey",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
      client: "Sarah Johnson",
      role: "Entrepreneur"
    },
    {
      id: 5,
      title: "Michael's Leadership Breakthrough",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
      client: "Michael Chen",
      role: "Executive Director"
    },
    {
      id: 6,
      title: "Emma's Career Success Story",
      videoId: "dQw4w9WgXcQ", // Placeholder YouTube ID
      client: "Emma Rodriguez",
      role: "Marketing Manager"
    }
  ];

  const [playingId, setPlayingId] = useState(null);

  const getThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div id="testimonials" className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Decorative gradient orbs (subtle) */}
      {/* <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-indigo-500/20 blur-3xl"></div> */}
      <div className="pointer-events-none absolute bottom-[80px] -right-32 w-[32rem] h-[32rem] rounded-full bg-pink-500/10 blur-3xl"></div>
      <SectionBackground theme="dark" showTopLeftCircle={false} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-wider">VIDEO TESTIMONIALS</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Hear directly from clients who have transformed their lives through coaching
          </p>
        </div>
        {/* Custom Navigation */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 sm:px-4">
          <button
            className="video-nav prev pointer-events-auto inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-white text-black border border-white/20 shadow-md hover:bg-transparent hover:text-white transition cursor-pointer"
            aria-label="Previous"
            role="button"
          >
            ‹
          </button>
          <button
            className="video-nav next pointer-events-auto inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-white text-black border border-white/20 shadow-md hover:bg-transparent hover:text-white transition cursor-pointer"
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
          navigation={{ prevEl: '.video-nav.prev', nextEl: '.video-nav.next' }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-full">
              <div className="group relative w-full h-full">
                <div className="p-[2px] rounded-none bg-gradient-to-b from-white/30 via-white/10 to-transparent transition-transform duration-300 group-hover:-translate-y-1 shadow-lg shadow-black/30 h-full">
                  <div className="relative h-full rounded-none bg-white/5 backdrop-blur-[2px] border border-white/10 overflow-hidden flex flex-col">
                    {/* Accent orbs */}
                    <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-indigo-400/15 blur-2xl"></div>
                    <div className="pointer-events-none absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5 blur-2xl"></div>

                    <div className="pb-0 pt-8 px-8 relative z-10">
                      <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{t.title}</h3>
                    </div>

                    <div className="pt-4 pb-8 px-8 relative z-10">
                      <div className="aspect-video w-full rounded-none overflow-hidden bg-black/60 border border-white/10 relative">
                        {playingId === t.id ? (
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${t.videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                            title={t.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <button
                            type="button"
                            aria-label={`Play ${t.title}`}
                            onClick={() => setPlayingId(t.id)}
                            className="group/vid absolute inset-0 w-full h-full"
                          >
                            {/* Thumbnail */}
                            <img
                              src={getThumb(t.videoId)}
                              alt={`${t.title} thumbnail`}
                              className="w-full h-full object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            {/* Play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/vid:scale-110">
                                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        )}
                      </div>

                      <div className="flex items-center mt-6">
                        <div className="ml-0">
                          <h4 className="font-bold text-white text-lg tracking-wide">{t.client}</h4>
                          <p className="text-gray-400 mt-1">{t.role}</p>
                        </div>
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
          .video-nav.swiper-button-disabled {
            opacity: 0.4;
            cursor: not-allowed;
            pointer-events: none;
          }
        `}</style>
        
        <div className="text-center mt-16">
          <button className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 font-semibold py-3 px-10 rounded-none tracking-wider">
            VIEW ALL TESTIMONIALS
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;