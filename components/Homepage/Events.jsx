import React from 'react';
import EventsCarouselClient from './EventsCarouselClient';
import SectionBackground from '../common/SectionBackground';
import WaveDivider from '../common/WaveDivider';

const Events = () => {
  // Sample events data - in a real application this would come from a CMS or API
  const events = [
    {
      id: 1,
      title: "Leadership Mastery Workshop",
      date: "June 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "New York City, NY",
      description: "A comprehensive workshop on developing leadership skills for executives and managers.",
      price: "$299"
    },
    {
      id: 2,
      title: "Career Transition Summit",
      date: "July 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Los Angeles, CA",
      description: "Learn strategies for successful career transitions in today's competitive market.",
      price: "$199"
    },
    {
      id: 3,
      title: "Mindset Transformation Retreat",
      date: "August 5, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "Miami, FL",
      description: "A weekend retreat focused on transforming limiting beliefs and building success mindset.",
      price: "$499"
    },
    {
      id: 4,
      title: "Executive Communication Bootcamp",
      date: "September 12, 2025",
      time: "9:30 AM - 4:30 PM",
      location: "Chicago, IL",
      description: "Master persuasive communication and executive presence.",
      price: "$249"
    },
    {
      id: 5,
      title: "High-Performance Habits Lab",
      date: "September 26, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Austin, TX",
      description: "Build sustainable habits that compound results.",
      price: "$179"
    },
    {
      id: 6,
      title: "Women in Leadership Forum",
      date: "October 10, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      description: "Strategies and networks for advancing women leaders.",
      price: "$329"
    },
    {
      id: 7,
      title: "Sales Mindset Intensive",
      date: "October 24, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Seattle, WA",
      description: "Shift beliefs to consistently hit your revenue goals.",
      price: "$159"
    },
    {
      id: 8,
      title: "Startup Leadership Sprint",
      date: "November 7, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Denver, CO",
      description: "Lead fast-moving teams with clarity and confidence.",
      price: "$209"
    },
    {
      id: 9,
      title: "Mindfulness for Leaders",
      date: "November 21, 2025",
      time: "8:30 AM - 12:30 PM",
      location: "Remote / Live Online",
      description: "Calm focus and resilience under pressure.",
      price: "$129"
    },
    {
      id: 10,
      title: "Career Clarity Weekend",
      date: "December 6, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Boston, MA",
      description: "Define your next role with purpose and a plan.",
      price: "$389"
    },
    {
      id: 11,
      title: "Team Culture Reset",
      date: "December 13, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Portland, OR",
      description: "Rebuild trust, accountability, and energy in teams.",
      price: "$279"
    },
    {
      id: 12,
      title: "Personal Branding for Executives",
      date: "January 10, 2026",
      time: "9:00 AM - 1:00 PM",
      location: "Remote / Live Online",
      description: "Clarify and communicate your value in any room.",
      price: "$199"
    },
    {
      id: 13,
      title: "Negotiation Masterclass",
      date: "January 24, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Atlanta, GA",
      description: "Win better deals through principled negotiation.",
      price: "$349"
    }
  ];

  // Distribute events across exactly 3 slides so cards aren't full-width
  const slidesData = [
    events.slice(0, 5),
    events.slice(5, 9),
    events.slice(9)
  ];

  return (
    <div id="events" className="relative bg-black py-24 px-6 overflow-hidden">
      {/* <WaveDivider position="top" height={100} fill="#ffffff" /> */}

      {/* Decorative gradient orbs (match banner style) */}
      <div className="pointer-events-none absolute top-[80px] -left-24 w-[28rem] h-[28rem] rounded-full bg-indigo-500/20 blur-3xl"></div>
      {/* <div className="pointer-events-none absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-pink-500/10 blur-3xl"></div> */}
      <SectionBackground theme="dark" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-wider">UPCOMING EVENTS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Join me at these transformative events designed to accelerate your personal and professional growth
          </p>
        </div>
        
        <EventsCarouselClient events={events} />
      </div>
    </div>
  );
};

export default Events;