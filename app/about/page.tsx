"use client";

import {
  Shield,
  Users,
  Award,
  Clock,
  Heart,
  Sparkles,
  HandHeart,
  CheckCircle,
  MapPin,
  BadgeCheck,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#f6f6f6] pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6 animate-fade-in">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                ABOUT US
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Our Story: Bringing Compassionate Care to{" "}
              <span className="text-[#0a9fe1]">Tasmanian Homes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-slide-up animation-delay-200">
              At Smart Home Care Services Pty Ltd, we believe that growing older
              should never mean giving up independence, dignity, or the comfort
              of home.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction & Mission */}
      <section className="py-10 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative animate-fade-in order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <Image
                  src="/Home/Image02.png"
                  alt="Compassionate Care Team"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8 animate-slide-up order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#0a9fe1]/10 rounded-full">
                <span className="text-sm font-semibold text-[#0a9fe1]">
                  OUR MISSION
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-[#0a9fe1]">
                  Empowering older Australians to live safely and confidently.
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Based right here in Tasmania, our mission is to provide
                compassionate, reliable, and personalised home care that
                empowers older Australians to continue living safely and
                confidently in the place they know and love.
              </p>

              <p className="text-lg text-[#f370ae] leading-relaxed font-semibold italic">
                "To enrich the lives of older Australians by delivering
                compassionate, personalised, and professional home care that
                promotes independence, dignity, wellbeing, and meaningful
                connections."
              </p>

              {/* Our Commitment */}
              <div className="bg-[#0a9fe1]/5 p-6 rounded-2xl border-l-4 border-[#0a9fe1]">
                <h3 className="text-xl font-bold text-[#0a9fe1] mb-2">
                  Our Commitment
                </h3>
                <p className="text-gray-700">
                  Every visit is delivered with compassion, professionalism, and
                  respect. We don't just provide care—we build meaningful
                  relationships that promote independence, improve wellbeing,
                  and give families complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-4 bg-[#f6f6f6] relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0a9fe1]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#f370ae]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
              <Heart size={14} className="text-[#f370ae]" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                What We Stand For
              </span>
            </div>
            <h2 className="text-5xl font-bold text-[#0a9fe1] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-[#f370ae]">
              The principles that guide every visit.
            </p>
          </div>

          {/* Zigzag "path of care" layout */}
          <div className="max-w-6xl mx-auto relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                {
                  icon: Heart,
                  title: "Dignity & Respect",
                  description:
                    "We honour the life experiences of every client, ensuring care is always delivered with the utmost respect.",
                },
                {
                  icon: HandHeart,
                  title: "Empowerment",
                  description:
                    "We focus on what you can do, enabling you to maintain your independence and lifestyle choices.",
                },
                {
                  icon: MapPin,
                  title: "Local Community",
                  description:
                    "As a Tasmanian business, we treat our clients like neighbours, offering warm, familiar, and locally-focused support.",
                },
                {
                  icon: Clock,
                  title: "Reliability",
                  description:
                    "You can count on our vetted, professional caregivers to be there when you need them most.",
                },
              ].map((value, index) => {
                const Icon = value.icon;
                const isBlue = index % 2 === 0;
                const accent = isBlue ? "#0a9fe1" : "#f370ae";
                const offset =
                  index % 2 === 0 ? "lg:-translate-y-6" : "lg:translate-y-6";

                return (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 animate-slide-up ${offset}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Node on the connecting line */}
                    <div
                      className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white shadow"
                      style={{
                        backgroundColor: accent,
                        top: index % 2 === 0 ? "calc(100% - 2px)" : "-8px",
                      }}
                    />

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${accent}15` }}
                    >
                      <Icon
                        style={{ color: accent }}
                        size={26}
                        strokeWidth={1.75}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    <div
                      className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ backgroundColor: accent }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0a9fe1] mb-4">
              Why Choose Smart Home Care?
            </h2>
            <p className="text-xl text-[#f370ae] max-w-2xl mx-auto">
              Unlike large national corporate providers where you might feel
              like just a number, we offer a boutique, highly personalised
              approach.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f6f6f6] rounded-3xl p-8 shadow-md border-l-4 border-[#0a9fe1] hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#0a9fe1]/10 rounded-full flex items-center justify-center text-[#0a9fe1]">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a9fe1]">
                  A Personalised Match
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We take the time to match you with caregivers who understand
                your personality, respect your home, and are genuinely invested
                in your wellbeing. You will see familiar faces who know your
                routine.
              </p>
            </div>

            <div className="bg-[#f6f6f6] rounded-3xl p-8 shadow-md border-l-4 border-[#f370ae] hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#f370ae]/10 rounded-full flex items-center justify-center text-[#f370ae]">
                  <BadgeCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#f370ae]">
                  Trilogy Care Partnership
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Partnered with Trilogy Care, we ensure your Home Care Package is
                managed efficiently. Enjoy low management fees that put your
                funds directly into your care, not excessive administrative
                overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a9fe1] via-[#0a9fe1] to-[#f370ae] text-white shadow-2xl">
            {/* Decorative pattern */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center px-8 py-16 md:px-16 md:py-20">
              {/* Left: Message */}
              <div className="text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 bg-white/15 rounded-full mb-5 text-xs font-bold uppercase tracking-widest">
                  Free, No-Obligation Chat
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Join Our Care Family
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-md mx-auto lg:mx-0">
                  Reach out today and let's talk about the right support for you
                  or your loved one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-[#0a9fe1] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl text-center"
                  >
                    Contact Our Team
                  </Link>

                  {/* Added the missing "<a" right here */}
                  <a
                    href="tel:1300762782"
                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/40 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                  >
                    <Phone size={20} />
                    Call 1300 SMART
                  </a>
                </div>
              </div>

              {/* Right: Signature — pulsing call rings */}
              <div className="hidden lg:flex flex-col items-center justify-center gap-6">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-white/30 animate-ping [animation-duration:2.5s]" />
                  <span className="absolute inset-4 rounded-full border border-white/40" />
                  <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Phone className="text-[#0a9fe1]" size={30} />
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1.5 bg-white/15 rounded-full text-xs font-semibold">
                    Local Tasmanian Team
                  </span>
                  <span className="px-3 py-1.5 bg-white/15 rounded-full text-xs font-semibold">
                    Confidential
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
