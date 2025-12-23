'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from 'lucide-react';

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
    alert('Thank you for your message! We will get back to you within 24 hours.');
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
                CONTACT US
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Get In <span className="text-[#0a9fe1]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#f370ae] leading-relaxed animate-slide-up animation-delay-200">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                      placeholder="John Smith"
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
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                      placeholder="john@example.com"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="service">Service Question</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                    placeholder="Tell us how we can help you..."
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
                  <Sparkles className="text-white" size={28} />
                  <h3 className="text-2xl font-bold">Contact Info</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Call Us</p>
                      <a href="tel:1300000000" className="text-lg font-bold hover:text-white/80 transition">
                        1300 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Email Us</p>
                      <a href="mailto:info@smarthomecare.com" className="text-lg font-bold hover:text-white/80 transition break-all">
                        info@smarthomecare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Service Area</p>
                      <p className="text-lg font-bold">Greater Melbourne</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Business Hours</p>
                      <p className="text-lg font-bold">Mon - Sat: 7 AM - 7 PM</p>
                      <p className="text-sm opacity-90">Sunday: 9 AM - 5 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 animate-slide-up animation-delay-400">
                <h3 className="text-2xl font-bold text-[#0a9fe1] mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/booking" className="text-[#f370ae] hover:text-[#0a9fe1] transition font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      Book a Service
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-[#f370ae] hover:text-[#0a9fe1] transition font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-[#f370ae] hover:text-[#0a9fe1] transition font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/areas" className="text-[#f370ae] hover:text-[#0a9fe1] transition font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      Service Areas
                    </a>
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-[#f6f6f6] rounded-3xl shadow-xl p-6 border-2 border-[#f370ae]/20 animate-slide-up animation-delay-600">
                <p className="text-sm font-semibold text-[#0a9fe1] mb-2">Emergency Service?</p>
                <p className="text-[#f370ae] mb-3">We offer 24/7 emergency cleaning</p>
                <a
                  href="tel:1300000000"
                  className="block text-center bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white py-3 rounded-full font-bold hover:shadow-xl transition-all"
                >
                  Call Now
                </a>
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
                SERVICE AREA
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f370ae] mb-4">
              We Serve <span className="text-[#0a9fe1]">Greater Melbourne</span>
            </h2>
            <p className="text-xl text-[#f370ae] max-w-2xl mx-auto">
              Providing professional cleaning services across Melbourne's suburbs
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#f6f6f6] rounded-3xl shadow-xl overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d806520.3116143243!2d144.4927704!3d-37.9715852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890"
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
