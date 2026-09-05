"use client";

import { MapPin, Phone, Clock, CheckCircle, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AreasPage() {
  const regions = [
    {
      region: 'North-West Tasmania',
      suburbs: [
        'Devonport', 'Burnie', 'Ulverstone', 'Penguin', 'Wynyard',
        'Latrobe', 'Somerset', 'Port Sorell', 'Turners Beach', 'Spreyton'
      ]
    },
    {
      region: 'Northern Tasmania',
      suburbs: [
        'Launceston', 'Riverside', 'Kings Meadows', 'Prospect', 'Mowbray',
        'Newnham', 'Norwood', 'Legana', 'Trevallyn', 'Invermay'
      ]
    },
    {
      region: 'Southern Tasmania',
      suburbs: [
        'Hobart', 'Sandy Bay', 'Glenorchy', 'Moonah', 'Kingston',
        'Rosny', 'Bellerive', 'Taroona', 'Lenah Valley', 'Mount Nelson'
      ]
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#f6f6f6] pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                PROUDLY SUPPORTING THE TASMANIAN COMMUNITY
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Service <span className="text-[#0a9fe1]">Areas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-slide-up animation-delay-200">
              We are a proud local business. We don't operate from an interstate call centre; our team is right here in Tasmania, ready to support you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Local Coverage Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f370ae] mb-8 text-center">
              Tasmanian <span className="text-[#0a9fe1]">Local Coverage</span>
            </h2>
            <div className="bg-gradient-to-br from-[#0a9fe1]/10 via-[#f370ae]/5 to-[#0a9fe1]/10 rounded-3xl h-96 flex items-center justify-center mb-8 border-2 border-[#0a9fe1]/20">
              <div className="text-center animate-float">
                <MapPin className="mx-auto mb-4 text-[#0a9fe1]" size={64} />
                <p className="text-2xl font-bold text-[#f370ae] mb-2">Devonport | Burnie | Launceston | Hobart</p>
                <p className="text-gray-700 text-lg">Delivering reliable, familiar care to our communities.</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#f370ae] mb-4">
                Tasmanian <span className="text-[#0a9fe1]">Care Network</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Structured into 4 regional care hubs ensuring prompt response
                times, trusted local caregivers, and familiar faces across
                Tasmania.
              </p>
            </div>

            {/* Interactive Map & Photo Visual Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              {/* Left: Map Embed */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md border border-gray-200 h-[340px] md:h-[400px] relative">
                <iframe
                  title="Tasmania Service Coverage Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525049.805566373!2d145.41901306352033!3d-42.00227183652875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e205ab04c44f9%3A0x67399fcb6bb2fb8b!2sTasmania!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Right: Hubs Summary & Visual */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#0a9fe1]/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#0a9fe1]/10 flex items-center justify-center text-[#0a9fe1]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0a9fe1] text-lg">
                        North-West Coast
                      </h4>
                      <p className="text-xs text-gray-500">
                        Devonport, Burnie &amp; Mersey Valley
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#f370ae]/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#f370ae]/10 flex items-center justify-center text-[#f370ae]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#f370ae] text-lg">
                        Northern Region
                      </h4>
                      <p className="text-xs text-gray-500">
                        Launceston &amp; Tamar Valley
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#0a9fe1]/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#0a9fe1]/10 flex items-center justify-center text-[#0a9fe1]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0a9fe1] text-lg">
                        Southern Region
                      </h4>
                      <p className="text-xs text-gray-500">
                        Greater Hobart &amp; Surrounding Suburbs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a9fe1]/10 rounded-xl flex items-center justify-center text-[#0a9fe1] shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a9fe1] mb-1">Local Network</h3>
                  <p className="text-sm text-gray-600">Caregivers who live in your community</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f370ae]/10 rounded-xl flex items-center justify-center text-[#f370ae] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a9fe1] mb-1">Timely Support</h3>
                  <p className="text-sm text-gray-600">Prompt responses from a local team</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a9fe1]/10 rounded-xl flex items-center justify-center text-[#0a9fe1] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a9fe1] mb-1">Direct Contact</h3>
                  <p className="text-sm text-gray-600">Speak directly to our Tasmanian office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Overview */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f370ae] mb-4">
              Regional <span className="text-[#0a9fe1]">Focus</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our dedicated local teams provide compassionate support tailored to the unique communities across Tasmania.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#f6f6f6] rounded-3xl p-8 border-t-4 border-[#0a9fe1] shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[#0a9fe1] mb-4">North-West Tasmania</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Delivering reliable, familiar care to our coastal and hinterland communities. Whether you need transport to the Mersey Community Hospital or help maintaining your garden, our local caregivers in Devonport and Burnie are nearby.
              </p>
            </div>
            
            <div className="bg-[#f6f6f6] rounded-3xl p-8 border-t-4 border-[#f370ae] shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[#f370ae] mb-4">Northern Tasmania</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                From the Tamar Valley to the city centre, we provide compassionate support that keeps you connected to the vibrant Launceston community.
              </p>
            </div>
            
            <div className="bg-[#f6f6f6] rounded-3xl p-8 border-t-4 border-[#0a9fe1] shadow-md hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[#0a9fe1] mb-4">Southern Tasmania</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Supporting seniors across the capital and its beautiful surrounding suburbs with premium personal care, domestic assistance, and genuine companionship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-[#f6f6f6] rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all border border-[#0a9fe1]/10 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-[#0a9fe1] mb-6 flex items-center gap-2">
                  <MapPin className="text-[#f370ae]" size={24} />
                  {area.region}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {area.suburbs.map((suburb, subIndex) => (
                    <div key={subIndex} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] rounded-full"></span>
                      <span className="text-sm font-medium">{suburb}</span>
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                    <Link
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm py-3 px-4 rounded-xl border transition-all ${
                        isSky
                          ? "text-[#0a9fe1] border-[#0a9fe1]/30 hover:bg-[#0a9fe1] hover:text-white"
                          : "text-[#f370ae] border-[#f370ae]/30 hover:bg-[#f370ae] hover:text-white"
                      }`}
                    >
                      Enquire for this Region
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Don't See Your Suburb */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#f6f6f6] via-white to-[#f6f6f6]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 animate-scale-in">
            <Heart className="mx-auto mb-6 text-[#f370ae]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a9fe1] mb-4">
              Don't See Your Specific Town Listed?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We are continuously expanding our trusted network of caregivers across the state. Contact us—we may already have support available in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Enquire Now
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:1300762782"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0a9fe1] px-8 py-4 rounded-full font-bold text-lg border-2 border-[#0a9fe1] hover:bg-[#0a9fe1] hover:text-white transition-all"
              >
                <Phone size={20} />
                Call 1300 SMART
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
