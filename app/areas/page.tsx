'use client';

import { MapPin, Phone, Clock, CheckCircle, Sparkles, Users, Shield, Calendar, Star, Leaf, Zap } from 'lucide-react';
import Image from 'next/image';

export default function AreasPage() {
  const areas = [
    {
      region: 'Inner Melbourne',
      suburbs: [
        'Melbourne CBD', 'Carlton', 'Fitzroy', 'Collingwood', 'Richmond',
        'South Yarra', 'Prahran', 'St Kilda', 'South Melbourne', 'Port Melbourne',
        'Docklands', 'Southbank', 'East Melbourne', 'North Melbourne', 'West Melbourne'
      ]
    },
    {
      region: 'Eastern Suburbs',
      suburbs: [
        'Hawthorn', 'Kew', 'Camberwell', 'Box Hill', 'Doncaster',
        'Balwyn', 'Surrey Hills', 'Mont Albert', 'Blackburn', 'Ringwood',
        'Mitcham', 'Nunawading', 'Forest Hill', 'Vermont', 'Templestowe'
      ]
    },
    {
      region: 'South Eastern Suburbs',
      suburbs: [
        'Caulfield', 'Bentleigh', 'Brighton', 'Malvern', 'Toorak',
        'Armadale', 'Glen Iris', 'Oakleigh', 'Clayton', 'Cheltenham',
        'Moorabbin', 'Mentone', 'Mordialloc', 'Frankston', 'Dandenong'
      ]
    },
    {
      region: 'Northern Suburbs',
      suburbs: [
        'Brunswick', 'Coburg', 'Preston', 'Reservoir', 'Thornbury',
        'Northcote', 'Heidelberg', 'Ivanhoe', 'Bundoora', 'Mill Park',
        'Epping', 'Thomastown', 'Greensborough', 'Eltham', 'Diamond Creek'
      ]
    },
    {
      region: 'Western Suburbs',
      suburbs: [
        'Footscray', 'Yarraville', 'Williamstown', 'Newport', 'Altona',
        'Sunshine', 'St Albans', 'Deer Park', 'Caroline Springs', 'Werribee',
        'Point Cook', 'Hoppers Crossing', 'Tarneit', 'Melton', 'Sunbury'
      ]
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 rounded-full mb-6 animate-fade-in border border-blue-200/50">
              <MapPin className="text-blue-600" size={16} />
              <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
                WHERE WE SERVE
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">Service </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Areas</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed animate-slide-up animation-delay-200 max-w-3xl mx-auto">
              We proudly service <span className="text-emerald-600 font-semibold">all Melbourne metro suburbs</span>. Professional cleaning services delivered to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/50 p-8 md:p-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">Melbourne </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Metropolitan Area</span>
            </h2>
            <div className="relative bg-gradient-to-br from-blue-50 via-emerald-50/30 to-blue-50 rounded-3xl h-96 flex items-center justify-center mb-8 border-2 border-blue-200/50 overflow-hidden shadow-inner">
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>

              <div className="text-center animate-float relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <MapPin className="text-white" size={40} />
                </div>
                <p className="text-3xl font-bold text-slate-800 mb-3">All Melbourne Suburbs Covered</p>
                <p className="text-blue-600 text-lg font-medium">From CBD to outer suburbs - we're here for you</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 animate-slide-up animation-delay-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-lg">Wide Coverage</h3>
                  <p className="text-sm text-slate-600">All Melbourne metro suburbs serviced</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 animate-slide-up animation-delay-300 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-lg">Fast Response</h3>
                  <p className="text-sm text-slate-600">Same-day service available</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 animate-slide-up animation-delay-400 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-lg">Easy Booking</h3>
                  <p className="text-sm text-slate-600">Call or book online anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs by Region */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-100 rounded-full mb-6 border border-emerald-200/50">
              <Sparkles className="text-emerald-600" size={16} />
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                OUR COVERAGE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">Suburbs We </span>
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Service</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image Side - Larger and clearly visible */}
                  <div className="md:col-span-2 relative h-64 md:h-auto min-h-[400px]">
                    <Image
                      src={index % 3 === 0 ? '/Services/services01.jpg' : index % 3 === 1 ? '/Services/services02.jpg' : '/Services/services03.jpg'}
                      alt={area.region}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 ${
                      index % 2 === 0
                        ? 'bg-gradient-to-br from-emerald-600/75 to-emerald-700/85'
                        : 'bg-gradient-to-br from-blue-600/75 to-blue-700/85'
                    }`}></div>
                    
                    {/* Content on Image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl bg-white/20 backdrop-blur-sm border-2 border-white/40 mb-4">
                        <MapPin className="text-white" size={36} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {area.region}
                      </h3>
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        <p className="text-sm text-white font-bold">{area.suburbs.length} Suburbs</p>
                      </div>
                    </div>
                  </div>

                  {/* List Side - Clear and readable */}
                  <div className="md:col-span-3 p-6 md:p-8 bg-gradient-to-br from-white to-slate-50">
                    <div className="flex items-center gap-2 mb-6">
                      <div className={`h-1 w-12 rounded-full ${
                        index % 2 === 0 ? 'bg-emerald-500' : 'bg-blue-500'
                      }`}></div>
                      <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Serviced Areas</span>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                      {area.suburbs.map((suburb, subIndex) => (
                        <div 
                          key={subIndex} 
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all group/item hover:shadow-md ${
                            index % 2 === 0
                              ? 'hover:bg-emerald-50 border border-transparent hover:border-emerald-200'
                              : 'hover:bg-blue-50 border border-transparent hover:border-blue-200'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            index % 2 === 0
                              ? 'bg-emerald-500'
                              : 'bg-blue-500'
                          }`}></div>
                          <span className="text-sm font-medium text-slate-700 group-hover/item:text-slate-900 transition-colors">{suburb}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Suburb */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/50 p-10 md:p-12 animate-scale-in">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">Don't See Your </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Suburb Listed?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              We're constantly expanding our service area. Contact us to check if we cover your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Contact Us
                <span className="text-emerald-100">→</span>
              </a>
              <a
                href="tel:1300000000"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-blue-200 hover:bg-blue-50 transition-all shadow-lg"
              >
                <Phone size={20} />
                Call 1300 000 000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 rounded-full mb-6 border border-blue-200/50">
              <CheckCircle className="text-blue-600" size={16} />
              <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">Why Choose </span>
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">Smart Home Care?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: Users,
                title: 'Local Team',
                description: 'Our teams are based across Melbourne, ensuring quick response times and local knowledge.',
                color: 'emerald'
              },
              {
                Icon: Calendar,
                title: 'Flexible Scheduling',
                description: 'We work around your schedule with convenient booking times including weekends.',
                color: 'blue'
              },
              {
                Icon: Star,
                title: 'Consistent Quality',
                description: 'Same high-quality service across all areas - no matter where you are in Melbourne.',
                color: 'emerald'
              },
              {
                Icon: Zap,
                title: 'Same-Day Service',
                description: 'Need urgent cleaning? We offer same-day service subject to availability in most areas.',
                color: 'blue'
              },
              {
                Icon: Shield,
                title: 'Fully Insured',
                description: 'Complete peace of mind with comprehensive insurance coverage and police-checked staff.',
                color: 'emerald'
              },
              {
                Icon: Leaf,
                title: 'Eco-Friendly',
                description: 'We use environmentally friendly, non-toxic products safe for your family and pets.',
                color: 'blue'
              }
            ].map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-3xl overflow-hidden shadow-xl border-2 hover:shadow-2xl transition-all hover:-translate-y-2 animate-slide-up ${feature.color === 'emerald'
                      ? 'bg-white border-emerald-200'
                      : 'bg-white border-blue-200'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Background Header */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={index % 2 === 0 ? '/Services/services01.jpg' : '/Services/services02.jpg'}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 ${feature.color === 'emerald'
                        ? 'bg-gradient-to-br from-emerald-500/85 to-emerald-600/90'
                        : 'bg-gradient-to-br from-blue-500/85 to-blue-600/90'
                      }`}></div>

                    {/* Icon on image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white relative z-10" size={36} />
                      </div>
                    </div>
                  </div>

                  {/* Background decorative element */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 rounded-full blur-3xl ${feature.color === 'emerald' ? 'bg-emerald-200' : 'bg-blue-200'
                      } -translate-x-16 translate-y-16`}></div>
                  </div>

                  {/* Decorative accent line */}
                  <div className={`absolute top-40 left-0 right-0 h-1 ${feature.color === 'emerald'
                      ? 'bg-gradient-to-r from-transparent via-emerald-400 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
                    }`}></div>

                  <div className="relative p-6 pt-8 text-center">
                    <h3 className={`text-xl font-bold mb-3 ${feature.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                      }`}>{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="w-16 h-16 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float">
              <Sparkles className="text-white" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Book Your Cleaning Service?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Get a free quote in minutes - no obligation required
            </p>
            <a
              href="/booking"
              className="inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 shadow-xl group"
            >
              Get Your Free Quote Now
              <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
