'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, MessageCircle, CheckCircle, Headphones, Shield, HelpCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-32 pb-20 px-4 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-emerald-200 rounded-full mb-6 shadow-lg animate-fade-in">
              <Sparkles className="text-emerald-600" size={16} />
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">We're Here to </span>
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Help</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed animate-slide-up animation-delay-200 max-w-3xl mx-auto">
              Have questions or need assistance? Our friendly team is ready to help. Send us a message and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl space-y-8">
          {/* Row 1: Form and Contact Info */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-2xl border-2 border-slate-100 p-8 md:p-10 animate-slide-up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <Send className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Send us a Message</h2>
                    <p className="text-sm text-slate-600">Fill out the form below and we'll get back to you</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-slate-800 placeholder:text-slate-400 hover:border-slate-300"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 placeholder:text-slate-400 hover:border-slate-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-slate-800 placeholder:text-slate-400 hover:border-slate-300"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-slate-800 hover:border-slate-300"
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
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-slate-800 placeholder:text-slate-400 hover:border-slate-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all transform hover:scale-[1.02] hover:-translate-y-0.5 flex items-center justify-center gap-2 border-2 border-emerald-600"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
              </div>
            </div>

            {/* Contact Info Card */}
            <div>
              {/* Contact Card */}
              <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-600 rounded-3xl shadow-2xl border-2 border-emerald-500 p-8 text-white animate-slide-up animation-delay-200 overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Contact Info</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                    <div className="bg-white/25 p-3 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1 font-semibold">Call Us</p>
                      <a href="tel:1300000000" className="text-lg font-bold hover:text-white/90 transition">
                        1300 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                    <div className="bg-white/25 p-3 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1 font-semibold">Email Us</p>
                      <a href="mailto:info@smarthomecare.com" className="text-lg font-bold hover:text-white/90 transition break-all">
                        info@smarthomecare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                    <div className="bg-white/25 p-3 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1 font-semibold">Service Area</p>
                      <p className="text-lg font-bold">Greater Melbourne</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                    <div className="bg-white/25 p-3 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg">
                      <Clock size={22} />
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1 font-semibold">Business Hours</p>
                      <p className="text-lg font-bold">Mon - Sat: 7 AM - 7 PM</p>
                      <p className="text-sm opacity-90">Sunday: 9 AM - 5 PM</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Quick Links & Emergency - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Quick Links Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-slide-up animation-delay-400">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/booking" className="group flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition font-medium">
                        <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        Book a Service
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="group flex items-center gap-2 text-slate-600 hover:text-blue-600 transition font-medium">
                        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="group flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition font-medium">
                        <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/areas" className="group flex items-center gap-2 text-slate-600 hover:text-blue-600 transition font-medium">
                        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        Service Areas
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Emergency Contact */}
                <div className="bg-blue-600 rounded-2xl shadow-lg border border-blue-500 p-6 animate-slide-up animation-delay-600">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">24/7 Emergency</p>
                  </div>
                  <p className="text-white text-base font-bold mb-4">Need urgent cleaning?</p>
                  <a
                    href="tel:1300000000"
                    className="block text-center bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
        </div>
      </section>

      {/* Response Time Stats */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">24hrs</h3>
              <p className="text-sm text-slate-600 font-medium">Response Time</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">100%</h3>
              <p className="text-sm text-slate-600 font-medium">Satisfaction Rate</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Headphones className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">24/7</h3>
              <p className="text-sm text-slate-600 font-medium">Support Available</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">Secure</h3>
              <p className="text-sm text-slate-600 font-medium">Data Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
              <HelpCircle className="text-emerald-600" size={16} />
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                COMMON QUESTIONS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">Frequently Asked </span>
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-start gap-3">
                <span className="text-emerald-600 flex-shrink-0">Q:</span>
                <span>How quickly will you respond to my inquiry?</span>
              </h3>
              <p className="text-slate-600 ml-8">We aim to respond to all inquiries within 24 hours during business days. For urgent cleaning needs, call our emergency line for immediate assistance.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">Q:</span>
                <span>What's the best way to contact you?</span>
              </h3>
              <p className="text-slate-600 ml-8">You can reach us via the contact form above, email, phone, or our social media channels. For quotes and bookings, we recommend using the contact form or calling directly.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-start gap-3">
                <span className="text-emerald-600 flex-shrink-0">Q:</span>
                <span>Do you offer emergency cleaning services?</span>
              </h3>
              <p className="text-slate-600 ml-8">Yes! We provide 24/7 emergency cleaning services for urgent situations. Call our emergency hotline at 1300 000 000 for immediate assistance.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">Q:</span>
                <span>Can I get a quote through the contact form?</span>
              </h3>
              <p className="text-slate-600 ml-8">Absolutely! Select "Request a Quote" in the subject field and provide details about your cleaning needs. We'll get back to you with a customized quote within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Contact Methods */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Connect With Us</h3>
          <p className="text-slate-600 mb-8">Follow us on social media for cleaning tips, special offers, and updates</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-lg transition-all hover:-translate-y-1">
              <Facebook size={22} />
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-blue-400 flex items-center justify-center text-slate-600 hover:text-blue-400 hover:shadow-lg transition-all hover:-translate-y-1">
              <Twitter size={22} />
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-pink-500 flex items-center justify-center text-slate-600 hover:text-pink-500 hover:shadow-lg transition-all hover:-translate-y-1">
              <Instagram size={22} />
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-blue-700 flex items-center justify-center text-slate-600 hover:text-blue-700 hover:shadow-lg transition-all hover:-translate-y-1">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-blue-200 rounded-full mb-6 shadow-lg">
              <MapPin className="text-blue-600" size={16} />
              <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
                OUR SERVICE AREA
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">Serving </span>
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Greater Melbourne</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional cleaning services delivered across all Melbourne suburbs
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border-2 border-slate-100 overflow-hidden h-[500px]">
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
