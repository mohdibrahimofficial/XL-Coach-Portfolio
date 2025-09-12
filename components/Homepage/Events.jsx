import React from 'react';

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
    }
  ];

  return (
    <div id="events" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-wider">UPCOMING EVENTS</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Join me at these transformative events designed to accelerate your personal and professional growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div key={event.id} className="group relative">
              <div className="p-[2px] rounded-2xl bg-gradient-to-b from-white/30 via-white/10 to-transparent transition-transform duration-300 group-hover:-translate-y-1 shadow-2xl shadow-black/30">
                <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-[2px] border border-white/10">
                  {/* Accent orbs */}
                  <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-indigo-400/15 blur-2xl"></div>
                  <div className="pointer-events-none absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5 blur-2xl"></div>

                  <div className="pb-0 pt-8 px-8">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                      {event.title}
                    </h3>

                    <div className="mt-4 space-y-2">
                      <p className="text-gray-300 font-semibold flex items-center">
                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {event.date}
                      </p>
                      <p className="text-gray-400 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {event.time}
                      </p>
                      <p className="text-gray-400 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {event.location}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 pb-8 px-8">
                    <div className="my-6 h-px w-full bg-white/10"></div>
                    <p className="text-gray-300 mb-6">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-xl tracking-wider">{event.price}</span>
                      <button 
                        className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 font-semibold rounded-full cursor-pointer px-6 py-2 tracking-wider shadow-lg hover:shadow-white/10"
                      >
                        REGISTER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 font-semibold py-3 px-10 rounded-full tracking-wider">
            VIEW ALL EVENTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;