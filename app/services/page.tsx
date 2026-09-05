import {
  Shield,
  UserCheck,
  Car,
  Leaf,
  Sparkles,
  Heart,
  Shirt,
  Utensils,
  ShoppingBag,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Phone,
} from "lucide-react";

interface Service {
  id: string;
  image: string;
  title: string;
  tagline: string;
  description: string;
  empowerment: string;
  accent: "sky" | "rose";
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: "home-safety",
      image:
        "https://images.pexels.com/photos/4981798/pexels-photo-4981798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Home Safety, Minor Repairs & Comfort Maintenance",
      tagline: "Keep your home a safe haven.",
      description:
        "We understand the importance of a secure living environment. Our team assists with minor maintenance tasks that ensure your home remains safe, accessible, and comfortable year-round.",
      empowerment:
        "You can move freely and safely around your home without worrying about maintenance risks.",
      accent: "sky",
    },
    {
      id: "personal-care",
      image:
        "https://images.pexels.com/photos/7551675/pexels-photo-7551675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Dignified Personal Care & Morning Routine Support",
      tagline: "Start every day with confidence and grace.",
      description:
        "Personal care is deeply private. Our compassionate caregivers provide discrete, respectful assistance tailored to your exact preferences, ensuring you look and feel your best.",
      empowerment:
        "Maintains your personal dignity and wellbeing, helping you face the day with confidence.",
      accent: "rose",
    },
    {
      id: "transport",
      image:
        "https://images.pexels.com/photos/6647024/pexels-photo-6647024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Independent Mobility & Assisted Transport Services",
      tagline: "Stay connected to the people and places you love.",
      description:
        "Giving up driving shouldn't mean giving up your active life. Our safe, reliable transport services ensure you never miss an appointment or a social gathering.",
      empowerment:
        "Eliminates the stress of travel and keeps you actively engaged in your local community.",
      accent: "sky",
    },
    {
      id: "garden",
      image:
        "https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Garden Sanctuary & Outdoor Living Care",
      tagline: "Enjoy the beauty of your garden without the strain.",
      description:
        "A well-kept garden is a source of joy. We provide gentle upkeep so you can continue to enjoy your outdoor spaces safely.",
      empowerment:
        "Allows you to relax in a beautiful, hazard-free outdoor environment that brings you peace.",
      accent: "rose",
    },
    {
      id: "cleaning",
      image:
        "https://the-clean-home.com/wp-content/uploads/2025/08/male-housekeeper.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Gentle Home Cleaning & Domestic Housekeeping",
      tagline: "A fresh, clean home for your comfort and health.",
      description:
        "Let us take the burden of household chores off your shoulders. We provide meticulous, gentle cleaning services that respect your space and belongings.",
      empowerment:
        "Frees up your time and energy, providing a hygienic and uplifting environment to live in.",
      accent: "sky",
    },
    {
      id: "companionship",
      image:
        "https://plus.unsplash.com/premium_photo-1663100660770-ee436c2e033a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "Meaningful Social Connection & Heartfelt Companionship",
      tagline: "Because a good chat can brighten the whole day.",
      description:
        "Emotional wellbeing is just as important as physical health. Our caregivers provide genuine companionship, sharing stories, hobbies, and a warm cup of tea.",
      empowerment:
        "Fosters joy, reduces isolation, and keeps your mind active and engaged.",
      accent: "rose",
    },
    {
      id: "laundry",
      image:
        "https://thelaundrydoctor.com.au/wp-content/uploads/2024/09/Home-Care-Laundry-Service-Melbourne-1024x683.jpeg",
      title: "Fresh Linen, Laundry & Wardrobe Care",
      tagline: "The comfort of fresh clothes and crisp sheets.",
      description:
        "Managing laundry can be physically demanding. We handle your washing and wardrobe organisation with care, ensuring you always have what you need ready to wear.",
      empowerment:
        "Removes the physical strain of heavy lifting and ensures you always feel fresh and comfortable.",
      accent: "sky",
    },
    {
      id: "meals",
      image:
        "https://rtmedhealth.com/wp-content/uploads/2023/11/4720613364-feeding-home-care-3.jpg",
      title: "Nourishing Meal Preparation & Daily Culinary Support",
      tagline: "Delicious, home-cooked meals tailored just for you.",
      description:
        "Good nutrition is the foundation of health. We assist with meal planning and preparation, catering to your dietary requirements and personal tastes.",
      empowerment:
        "Ensures you maintain a healthy diet with meals you genuinely enjoy, without the exhaustion of cooking.",
      accent: "rose",
    },
    {
      id: "shopping",
      image:
        "https://cdn.sanity.io/images/5r2m9wkf/production/611f6ed27b8355a19456d9653bbcdd20786a22a8-1200x800.png?auto=format&fit=max&w=1920&q=75",
      title: "Guided Shopping & Essential Daily Errands",
      tagline: "Hassle-free management of your daily essentials.",
      description:
        "Whether you want to browse the aisles together or prefer us to handle the list, we make sure your pantry is stocked and your errands are complete.",
      empowerment:
        "Keeps your household running smoothly while giving you the choice to participate as much or as little as you like.",
      accent: "sky",
    },
  ];

  const accentMap = {
    sky: {
      iconBg: "bg-sky-50",
      iconText: "text-[#0a9fe1]",
      ring: "group-hover:ring-[#0a9fe1]/30",
      glow: "from-[#0a9fe1]/8 to-[#0a9fe1]/0",
      chip: "bg-[#0a9fe1]/10 text-[#0a9fe1]",
      number: "group-hover:text-[#0a9fe1]/15",
      titleHover: "group-hover:text-[#0a9fe1]",
      link: "text-[#0a9fe1]",
      bar: "from-[#0a9fe1] via-sky-400 to-[#f370ae]",
    },
    rose: {
      iconBg: "bg-rose-50",
      iconText: "text-[#f370ae]",
      ring: "group-hover:ring-[#f370ae]/30",
      glow: "from-[#f370ae]/8 to-[#f370ae]/0",
      chip: "bg-[#f370ae]/10 text-[#f370ae]",
      number: "group-hover:text-[#f370ae]/15",
      titleHover: "group-hover:text-[#f370ae]",
      link: "text-[#f370ae]",
      bar: "from-[#f370ae] via-rose-400 to-[#0a9fe1]",
    },
  } as const;

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50/60">
      {/* Hero Section */}
      <section className="relative bg-[#f6f6f6] pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0a9fe1]/10 to-[#f370ae]/10 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0a9fe1] to-[#f370ae] bg-clip-text text-transparent">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-[#f370ae] text-5xl md:text-7xl font-bold mb-6">
              Tailored, High-Quality{" "}
              <span className="text-[#0a9fe1]">In-Home Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Your home, your routine, your choices. We offer a comprehensive
              suite of flexible services designed to support your independence
              and enhance your quality of life. Explore how we can help you
              thrive at home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (Overview) */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-block px-4 py-1.5 bg-[#0a9fe1]/10 rounded-full mb-2">
              <span className="text-xs font-bold tracking-wider text-[#0a9fe1] uppercase">
                Quick Overview
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Services Tailored to{" "}
              <span className="text-[#0a9fe1]">Your Lifestyle</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Click any service below to explore included tasks and how we
              empower your daily independence.
            </p>
          </div>

          {/* Responsive Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => {
              const a = accentMap[service.accent];
              return (
                <a
                  key={service.id}
                  href={`#${service.id}-details`}
                  className={`group relative flex flex-col bg-white rounded-[28px] shadow-sm ring-1 ring-gray-100 ${a.ring} hover:ring-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Image Header */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Gradient overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Top gradient accent bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${a.bar} opacity-90 z-10`}
                    />

                    {/* Service number top-right */}
                    <span
                      className={`absolute top-4 right-4 text-3xl font-black text-white/70 drop-shadow-sm select-none z-10`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="relative pt-9 p-6">
                    {/* Title & Tagline */}
                    <h3
                      className={`text-xl font-bold text-gray-900 ${a.titleHover} transition-colors mb-2 line-clamp-2`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-[11px] font-bold uppercase tracking-[0.08em] ${a.chip} inline-block px-2.5 py-1 rounded-full mb-4`}
                    >
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Bottom Action Area */}
                    <div className="relative pt-4 border-t border-gray-100 mt-auto">
                      <span
                        className={`inline-flex items-center gap-2 text-sm font-bold ${a.link}`}
                      >
                        <span>View Full Details</span>
                        <ArrowUpRight
                          size={16}
                          className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 px-4 bg-[#f6f6f6]">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-24">
            {services.map((service, index) => {
              const a = accentMap[service.accent];
              const isEven = index % 2 === 0;
              return (
                <article
                  key={service.id}
                  id={`${service.id}-details`}
                  className="scroll-mt-24"
                >
                  {/* Row wrapper */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                  >
                    {/* Image Panel */}
                    <div
                      className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <div className="relative group/img rounded-[28px] overflow-hidden shadow-xl ring-1 ring-gray-200">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                          />
                        </div>
                        {/* Gradient accent frame */}
                        <div
                          className={`absolute inset-0 ring-2 ring-inset ${isEven ? "ring-[#0a9fe1]/15" : "ring-[#f370ae]/15"} rounded-[28px] pointer-events-none`}
                        />
                        {/* Big number watermark */}
                        <span className="absolute bottom-4 right-5 text-7xl font-black text-white/80 drop-shadow-md select-none">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div
                      className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}
                    >
                      {/* Eyebrow */}
                      {/* <div className="flex items-center gap-3">
                        <span
                          className={`h-px w-12 ${a.accent === "sky" ? "bg-[#0a9fe1]" : "bg-[#f370ae]"}`}
                        />
                        <span
                          className={`text-xs font-bold uppercase tracking-[0.18em] ${a.iconText}`}
                        >
                          Service {String(index + 1).padStart(2, "0")}
                        </span>
                      </div> */}

                      {/* Title */}
                      <h2 className="text-3xl md:text-[2.5rem] leading-[1.1] font-bold text-gray-900">
                        {service.title}
                      </h2>

                      {/* Tagline */}
                      <p className={`text-lg font-semibold ${a.iconText}`}>
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 text-base leading-relaxed">
                        {service.description}
                      </p>

                      {/* Empowerment callout */}
                      <div
                        className={`relative rounded-2xl p-5 pl-6 ${service.accent === "sky" ? "bg-[#0a9fe1]/5" : "bg-[#f370ae]/5"}`}
                      >
                        <span
                          className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl ${service.accent === "sky" ? "bg-[#0a9fe1]" : "bg-[#f370ae]"}`}
                        />
                        <p
                          className={`text-sm font-bold uppercase tracking-wide ${a.iconText} mb-1`}
                        >
                          How this empowers you
                        </p>
                        <p className="text-gray-700 italic leading-relaxed">
                          “{service.empowerment}”
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="pt-2">
                        {/* <a
                          href="/contact"
                          className={`inline-flex items-center gap-2 ${a.accent === "sky" ? "bg-[#0a9fe1]" : "bg-[#f370ae]"} text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-[1.03]`}
                        >
                          Enquire About This Service
                          <ArrowRight size={18} />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-4 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7328485/pexels-photo-7328485.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Happy senior couple enjoying life"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a9fe1]/85 via-[#0a9fe1]/70 to-[#f370ae]/75" />
        </div>

        {/* Decorative floating blobs */}
        <div className="pointer-events-none absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#f370ae]/20 blur-3xl" />

        {/* Content card */}
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center text-white">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/15 backdrop-blur-md rounded-full mb-8 border border-white/20">
              <Heart className="text-rose-200" size={18} fill="currentColor" />
              <span className="text-sm font-semibold tracking-wide">
                Personalised Care Plans
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-[1.1] drop-shadow-sm">
              Ready to Design
              <br />
              Your Care Plan?
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 max-w-xl mx-auto leading-relaxed">
              Reach out to our local Tasmanian team today for a confidential,
              no-obligation conversation about how we can support you.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a9fe1] rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
              >
                Book a Free Consultation
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:0403103555"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/20 transition-all"
              >
                <Phone size={20} />
                Call 0403 103 555
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <CheckCircle size={16} className="text-white" />
                No obligation
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle size={16} className="text-white" />
                Local Tasmanian team
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle size={16} className="text-white" />
                Confidential &amp; caring
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
