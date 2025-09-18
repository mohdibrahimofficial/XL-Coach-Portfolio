'use client';

import React, { useState } from 'react';
import WaveDivider from '../common/WaveDivider';
import SectionBackground from '../common/SectionBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to send message');
      }

      setSuccess('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="relative bg-white text-black py-24 px-6 overflow-hidden">
      {/* <WaveDivider position="top" height={100} fill="#000000" /> */}
      {/* Decorative gradient orbs (subtle) */}
      <div className="pointer-events-none absolute top-[80px] -left-24 w-[28rem] h-[28rem] rounded-full bg-indigo-500/15 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-20  -right-32 w-[32rem] h-[32rem] rounded-full bg-pink-500/10 blur-3xl"></div>
      <SectionBackground theme="light" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-black mb-6 tracking-wider">CONTACT ME</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto font-light">
            Ready to start your transformation? Reach out today.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form Card */}
          <div className="lg:w-1/2">
            <div className="rounded-2xl shadow-none">
              <div className="relative rounded-2xl bg-white border border-black/10 p-8 md:p-10 light-form shadow-sm">
                {/* Accent orbs */}
                <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-indigo-500/10 blur-2xl"></div>
                <div className="pointer-events-none absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-black/5 blur-2xl"></div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-black mb-2 font-semibold tracking-wider">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white text-black border border-black/20 placeholder-gray-500 outline-none focus:ring-2 focus:ring-black/30 focus:border-black/40 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-black mb-2 font-semibold tracking-wider">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white border border-black/20 text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-black/30 focus:border-black/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-black mb-2 font-semibold tracking-wider">Mobile Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g., 555-123-4567"
                      value={formData.phone}
                      maxLength={10}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white border border-black/20 text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-black/30 focus:border-black/40 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-black mb-2 font-semibold tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white border border-black/20 text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-black/30 focus:border-black/40 transition-all"
                      rows="6"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    aria-busy={loading}
                    className={`bg-black text-white border-2 border-black transition-all duration-300 font-semibold rounded-full w-full py-5 cursor-pointer text-lg tracking-wider shadow hover:shadow-black/10 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-transparent hover:text-black'}`}
                  >
                    {loading ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>

                  {success && (
                    <p className="text-green-400 text-sm">{success}</p>
                  )}
                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="lg:w-1/2">
            <div className="rounded-2xl shadow-none h-full">
              <div className="relative rounded-2xl bg-white border border-black/10 p-8 md:p-10 h-full shadow-sm">
                {/* Accent orbs */}
                <div className="pointer-events-none absolute -top-6 -left-6 w-24 h-24 rounded-full bg-indigo-500/10 blur-2xl"></div>
                <div className="pointer-events-none absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-black/5 blur-2xl"></div>

                <h3 className="text-2xl font-bold text-black mb-8 tracking-wider">CONTACT INFORMATION</h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-black text-white p-3 rounded-full mr-6 shadow">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg tracking-wider">Phone</h4>
                      <p className="text-gray-900 mt-2">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-black text-white p-3 rounded-full mr-6 shadow">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg tracking-wider">Email</h4>
                      <p className="text-gray-900 mt-2">info@coachportfolio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-black text-white p-3 rounded-full mr-6 shadow">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg tracking-wider">Office</h4>
                      <p className="text-gray-900 mt-2">123 Success Avenue<br />New York, NY 10001</p>
                    </div>
                  </div>
                </div>

                <div className="my-10 h-px w-full bg-black/10"></div>

                <div>
                  <h4 className="font-bold text-black text-xl mb-6 tracking-wider">OFFICE HOURS</h4>
                  <div className="space-y-3">
                    <p className="text-gray-900 flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></p>
                    <p className="text-gray-900 flex justify-between"><span>Saturday</span><span>10:00 AM - 4:00 PM</span></p>
                    <p className="text-gray-900 flex justify-between"><span>Sunday</span><span>Closed</span></p>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <WaveDivider height={100} fill="#000000" /> */}
    </div>
  );
};

export default Contact;