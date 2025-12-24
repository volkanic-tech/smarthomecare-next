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
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-100 rounded-full mb-6 animate-fade-in border border-emerald-200/50">
              <Sparkles className="text-emerald-600" size={16} />
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                BOOK NOW
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">Book Your </span>
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Cleaning Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed animate-slide-up animation-delay-200 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you with a <span className="text-emerald-600 font-semibold">free quote within 2 hours</span>
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 px-4 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: CheckCircle, text: 'Free Quote', color: 'emerald' },
              { icon: Sparkles, text: 'No Obligation', color: 'blue' },
              { icon: Clock, text: '2-Hour Response', color: 'emerald' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={`flex items-center gap-3 px-6 py-3 rounded-2xl border shadow-sm animate-fade-in ${item.color === 'emerald'
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-blue-50 border-blue-200'
                  }`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color === 'emerald'
                      ? 'bg-emerald-500'
                      : 'bg-blue-500'
                    }`}>
                    <Icon className="text-white" size={18} />
                  </div>
                  <span className="text-slate-700 font-bold">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-slate-200/50 p-8 md:p-10 space-y-10 animate-slide-up">
                {/* Personal Information */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <User size={22} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                        Your Information
                      </h2>
                      <p className="text-sm text-slate-500">Tell us about yourself</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="md:col-span-2 relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                        Property Details
                      </h2>
                      <p className="text-sm text-slate-500">Where should we clean?</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Property Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Suburb *
                        </label>
                        <input
                          type="text"
                          name="suburb"
                          required
                          value={formData.suburb}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white"
                          placeholder="Melbourne"
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          name="postcode"
                          required
                          value={formData.postcode}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white"
                          placeholder="3000"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Home size={22} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                        Service Details
                      </h2>
                      <p className="text-sm text-slate-500">What do you need?</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white cursor-pointer"
                      >
                        <option value="residential">Standard Home Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="move">Move-In/Move-Out Cleaning</option>
                        <option value="carpet">Carpet Cleaning</option>
                        <option value="window">Window Cleaning</option>
                        <option value="spring">Spring Cleaning</option>
                      </select>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white cursor-pointer"
                      >
                        <option value="1-bedroom">1 Bedroom</option>
                        <option value="2-bedroom">2 Bedroom</option>
                        <option value="3-bedroom">3 Bedroom</option>
                        <option value="4-bedroom">4+ Bedroom</option>
                        <option value="office">Office/Commercial</option>
                      </select>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Frequency *
                      </label>
                      <select
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white cursor-pointer"
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
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calendar size={22} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                        Preferred Date & Time
                      </h2>
                      <p className="text-sm text-slate-500">When works best for you?</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white cursor-pointer"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white cursor-pointer"
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
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition text-slate-700 font-medium bg-slate-50 focus:bg-white resize-none"
                    placeholder="Any specific requirements or areas of focus?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
                >
                  <Sparkles className="group-hover:rotate-12 transition-transform" size={22} />
                  Get Your Free Quote
                  <span className="text-emerald-100 font-normal">→</span>
                </button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by Smart Home Care Services regarding your quote.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 animate-fade-in animation-delay-300">
              {/* Contact Info */}
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white rounded-3xl p-8 shadow-2xl border border-emerald-500/20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full translate-y-16 -translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
                  <p className="mb-6 opacity-90 text-emerald-50">Prefer to speak with someone? Give us a call!</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/15 transition-all">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs opacity-75 uppercase tracking-wide font-semibold">Phone</p>
                        <p className="font-bold text-lg">1300 SMART CLEAN</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/15 transition-all">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs opacity-75 uppercase tracking-wide font-semibold">Email</p>
                        <p className="font-bold">info@smarthomecare.com.au</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/15 transition-all">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs opacity-75 uppercase tracking-wide font-semibold">Hours</p>
                        <p className="font-bold">7 Days • 6AM - 8PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Book With Us?</h3>
              <ul className="space-y-4">
                {[
                  { text: 'Free, no-obligation quotes', color: 'emerald' },
                  { text: '100% satisfaction guarantee', color: 'blue' },
                  { text: 'Flexible scheduling', color: 'emerald' },
                  { text: 'Fully insured & police-checked', color: 'blue' },
                  { text: 'Eco-friendly products', color: 'emerald' },
                  { text: 'Competitive pricing', color: 'blue' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${item.color === 'emerald' ? 'bg-emerald-100' : 'bg-blue-100'
                      }`}>
                      <CheckCircle className={`flex-shrink-0 ${item.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                        }`} size={16} />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
