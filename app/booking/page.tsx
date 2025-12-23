'use client';

import { useState } from 'react';
import { Calendar, Clock, Home, Building2, Mail, Phone, User, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    postcode: '',
    serviceType: 'residential',
    propertyType: '2-bedroom',
    date: '',
    time: 'morning',
    frequency: 'once',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
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
                BOOK NOW
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Book Your <span className="text-[#0a9fe1]">Cleaning Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#f370ae] leading-relaxed animate-slide-up animation-delay-200">
              Fill out the form below and we'll get back to you with a free quote within 2 hours
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: CheckCircle, text: 'Free Quote' },
              { icon: CheckCircle, text: 'No Obligation' },
              { icon: CheckCircle, text: '2-Hour Response' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <Icon className="text-[#0a9fe1]" size={20} />
                  <span className="text-[#f370ae] font-semibold">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-8 animate-slide-up">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0a9fe1] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0a9fe1]/20 to-[#0a9fe1]/10 rounded-xl flex items-center justify-center">
                      <User size={20} className="text-[#0a9fe1]" />
                    </div>
                    Your Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                        Full Name *
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
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0a9fe1] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#f370ae]/20 to-[#f370ae]/10 rounded-xl flex items-center justify-center">
                      <MapPin size={20} className="text-[#f370ae]" />
                    </div>
                    Property Details
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                        Property Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                          Suburb *
                        </label>
                        <input
                          type="text"
                          name="suburb"
                          required
                          value={formData.suburb}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                          placeholder="Melbourne"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          name="postcode"
                          required
                          value={formData.postcode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                          placeholder="3000"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0a9fe1] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0a9fe1]/20 to-[#0a9fe1]/10 rounded-xl flex items-center justify-center">
                      <Home size={20} className="text-[#0a9fe1]" />
                    </div>
                    Service Details
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                        Service Type *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                      >
                        <option value="residential">Standard Home Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="move">Move-In/Move-Out Cleaning</option>
                        <option value="carpet">Carpet Cleaning</option>
                        <option value="window">Window Cleaning</option>
                        <option value="spring">Spring Cleaning</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                        Property Type *
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                      >
                        <option value="1-bedroom">1 Bedroom</option>
                        <option value="2-bedroom">2 Bedroom</option>
                        <option value="3-bedroom">3 Bedroom</option>
                        <option value="4-bedroom">4+ Bedroom</option>
                        <option value="office">Office/Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                        Frequency *
                      </label>
                      <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                      >
                        <option value="once">One-time Service</option>
                        <option value="weekly">Weekly</option>
                        <option value="fortnightly">Fortnightly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0a9fe1] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#f370ae]/20 to-[#f370ae]/10 rounded-xl flex items-center justify-center">
                      <Calendar size={20} className="text-[#f370ae]" />
                    </div>
                    Preferred Date & Time
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                      >
                        <option value="morning">Morning (8am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 4pm)</option>
                        <option value="evening">Evening (4pm - 8pm)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-semibold text-[#0a9fe1] mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#f6f6f6] focus:border-[#0a9fe1] focus:ring-2 focus:ring-[#0a9fe1]/20 outline-none transition text-[#f370ae]"
                    placeholder="Any specific requirements or areas of focus?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Get Your Free Quote
                </button>

                <p className="text-sm text-[#f370ae] text-center">
                  By submitting this form, you agree to be contacted by Smart Home Care Services regarding your quote.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 animate-fade-in animation-delay-300">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-[#0a9fe1] to-[#f370ae] text-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                <p className="mb-6 opacity-90">Prefer to speak with someone? Give us a call!</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Phone</p>
                      <p className="font-bold">1300 SMART CLEAN</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Email</p>
                      <p className="font-bold text-sm">info@smarthomecare.com.au</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Hours</p>
                      <p className="font-bold">7 Days • 6AM - 8PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-[#0a9fe1] mb-6">Why Book With Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Free, no-obligation quotes',
                    '100% satisfaction guarantee',
                    'Flexible scheduling',
                    'Fully insured & police-checked',
                    'Eco-friendly products',
                    'Competitive pricing'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-[#0a9fe1] flex-shrink-0" size={20} />
                      <span className="text-[#f370ae]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
