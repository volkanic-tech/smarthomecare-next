"use client";

import {
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  CheckCircle2,
  Heart,
  ArrowRight,
  Sparkles,
  Mail,
  ShieldCheck,
  Compass,
} from "lucide-react";
import Link from "next/link";

export default function AreasPage() {
  const regions = [
    {
      region: "North-West Tasmania",
      image:
        "https://www.travelsewhere.net/wp-content/uploads/2020/03/DSC_0783-15-1024x683.jpg",
      description:
        "Delivering reliable, familiar care to our coastal and hinterland communities. Whether you need transport to the Mersey Community Hospital or help maintaining your home and garden, our local caregivers in Devonport and Burnie are nearby.",
      accent: "sky",
      suburbs: [
        "Devonport",
        "Burnie",
        "Ulverstone",
        "Penguin",
        "Wynyard",
        "Latrobe",
        "Somerset",
        "Port Sorell",
        "Turners Beach",
        "Spreyton",
      ],
    },
    {
      region: "Northern Tasmania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Pty0IUK6bz2ySebE2osHjuLmLjaiKqwChTM8g4NJp2bWtTP4QBbWhBc&s=10",
      description:
        "From the Tamar Valley to the city centre, we provide compassionate support that keeps you connected to the vibrant Launceston community, social clubs, and routine medical visits.",
      accent: "rose",
      suburbs: [
        "Launceston",
        "Riverside",
        "Kings Meadows",
        "Prospect",
        "Mowbray",
        "Newnham",
        "Norwood",
        "Legana",
        "Trevallyn",
        "Invermay",
      ],
    },
    {
      region: "Southern Tasmania",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZm6Mb--G9OECTV4ELHXg7gKW3WZh3Ki_vIiLGIWZQUWXZazuvDpYguro&s=10",
      description:
        "Supporting seniors across the capital and its beautiful surrounding suburbs with premium personal care, domestic assistance, transportation, and genuine companionship.",
      accent: "sky",
      suburbs: [
        "Hobart",
        "Sandy Bay",
        "Glenorchy",
        "Moonah",
        "Kingston",
        "Rosny",
        "Bellerive",
        "Taroona",
        "Lenah Valley",
        "Mount Nelson",
      ],
    },
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
              We are a proud local Tasmanian provider. We don&apos;t operate
              from an interstate call centre; our dedicated support workers and
              care coordinators live right in your community.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Local Coverage Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-[#f8fbff] via-white to-[#fff9fb] rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0a9fe1]/10 rounded-full mb-4">
                <Compass className="text-[#0a9fe1]" size={16} />
                <span className="text-sm font-bold text-[#0a9fe1] tracking-wide uppercase">
                  Statewide Local Coverage
                </span>
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
                  <h3 className="font-bold text-[#0a9fe1] mb-1">
                    Local Network
                  </h3>
                  <p className="text-sm text-gray-600">
                    Caregivers who live in your local community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f370ae]/10 rounded-xl flex items-center justify-center text-[#f370ae] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#f370ae] mb-1">
                    Timely Support
                  </h3>
                  <p className="text-sm text-gray-600">
                    Prompt scheduling and rapid roster coordination.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a9fe1]/10 rounded-xl flex items-center justify-center text-[#0a9fe1] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a9fe1] mb-1">
                    Direct Contact
                  </h3>
                  <p className="text-sm text-gray-600">
                    Speak directly to our Tasmanian office on 0403 103 555.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Detail & Images Section */}
      <section className="py-20 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f370ae] mb-4">
              Regional{" "}
              <span className="text-[#0a9fe1]">Focus &amp; Suburbs</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our dedicated local teams provide compassionate support tailored
              to the unique communities across Tasmania.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regions.map((reg, idx) => {
              const isSky = reg.accent === "sky";
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Region Header Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={reg.image}
                        alt={reg.region}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                          <MapPin
                            size={20}
                            className={
                              isSky ? "text-[#0a9fe1]" : "text-[#f370ae]"
                            }
                          />
                          {reg.region}
                        </h3>
                      </div>
                    </div>

                    {/* Region Body */}
                    <div className="p-6 md:p-8">
                      <p className="text-gray-700 leading-relaxed text-sm mb-6">
                        {reg.description}
                      </p>

                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Suburbs &amp; Surrounding Areas:
                      </h4>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {reg.suburbs.map((suburb, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 ${
                                isSky ? "bg-[#0a9fe1]" : "bg-[#f370ae]"
                              }`}
                            />
                            <span className="text-xs font-semibold">
                              {suburb}
                            </span>
                          </div>
                        ))}
                      </div>
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

      {/* Don't See Your Suburb Section with Visual Support Image */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-[#f8fbff] via-white to-[#fff9fb] rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[300px]">
                <img
                  src="https://images.pexels.com/photos/7551675/pexels-photo-7551675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Friendly Tasmanian Care Support"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
              </div>

              <div className="lg:col-span-7 p-8 lg:p-12 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f370ae]/10 rounded-full mb-4">
                  <Heart className="text-[#f370ae]" size={16} />
                  <span className="text-xs font-bold text-[#f370ae] uppercase tracking-wider">
                    Always Expanding
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a9fe1] mb-4">
                  Don&apos;t See Your Specific Town Listed?
                </h2>
                <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                  We are continuously expanding our trusted network of
                  caregivers across Tasmania. Contact our local team—we may
                  already have support workers available in your area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-xl transition-all hover:scale-105"
                  >
                    Check Your Suburb
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="tel:0403103555"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0a9fe1] px-8 py-4 rounded-full font-bold text-base border-2 border-[#0a9fe1] hover:bg-[#0a9fe1] hover:text-white transition-all shadow-sm"
                  >
                    <Phone size={18} />
                    Call 0403 103 555
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0a9fe1] via-[#0883bb] to-[#0a9fe1] text-white relative overflow-hidden">
        {/* Ambient Depth Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f370ae]/20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <Sparkles size={16} className="text-white" />
            <span className="text-sm font-semibold tracking-wide">
              Local Tasmanian Care Team
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-xs">
            Ready to Connect with Local Caregivers?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Speak with our friendly Tasmanian care coordinators today to arrange
            tailored, compassionate support in your area.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a9fe1] rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              Book a Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:0403103555"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              <Phone size={20} />
              Call 0403 103 555
            </a>
            <a
              href="mailto:info@smartcareservices.com.au"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              100% Tasmanian Owned &amp; Operated
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              Direct Local Coordinators
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              No Interstate Call Centres
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
