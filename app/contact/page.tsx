'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Heart, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out to Smart Home Care Services. Our team will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#f6f6f6] pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                WE ARE HERE FOR YOU
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Get In <span className="text-[#0a9fe1]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-slide-up animation-delay-200">
              Whether you are ready to start care, need help understanding your Home Care Package, or just want to chat about your options, our friendly Tasmanian team is ready to listen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-6 animate-slide-up">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                    How Can We Help? *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700 bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Enquiry</option>
                    <option value="hcp">Home Care Package Discussion</option>
                    <option value="private">Private Care Rates</option>
                    <option value="employment">Employment Opportunities</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-gray-700"
                    placeholder="Please share any details about your care needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar - Contact Info */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] rounded-3xl shadow-xl p-8 text-white animate-slide-up animation-delay-200">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="text-white" size={28} />
                  <h3 className="text-2xl font-bold">Contact Info</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Call Us</p>
                      <a href="tel:1300762782" className="text-lg font-bold hover:text-white/80 transition">
                        1300 SMART
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Email Us</p>
                      <a href="mailto:info@smarthomecareservices.com.au" className="text-sm font-bold hover:text-white/80 transition break-all">
                        info@smarthomecareservices.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Head Office</p>
                      <p className="text-lg font-bold">Devonport, TAS</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Office Hours</p>
                      <p className="text-lg font-bold">Mon - Fri: 8 AM - 5 PM</p>
                      <p className="text-sm opacity-90">Care provided 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 animate-slide-up animation-delay-400">
                <h3 className="text-2xl font-bold text-[#0a9fe1] mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/home-care-packages" className="text-gray-700 hover:text-[#0a9fe1] transition font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      Home Care Packages
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-gray-700 hover:text-[#0a9fe1] transition font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-700 hover:text-[#0a9fe1] transition font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/areas" className="text-gray-700 hover:text-[#0a9fe1] transition font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      Service Areas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                OUR COMMUNITY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f370ae] mb-4">
              Proudly <span className="text-[#0a9fe1]">Tasmanian</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Delivering professional and compassionate aged care services across Tasmania.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#f6f6f6] rounded-3xl shadow-xl overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525049.805566373!2d145.41901306352033!3d-42.00227183652875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e205ab04c44f9%3A0x67399fcb6bb2fb8b!2sTasmania!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
