"use client";

import Link from "next/link";

export function HomeContent() {
  const services = [
    {
      slug: "web-development",
      title: "Web Design & Development",
      description: "Custom, responsive websites built with modern technologies for maximum performance.",
      icon: "🌐"
    },
    {
      slug: "app-development",
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage and delight users.",
      icon: "📱"
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      description: "Data-driven strategies to increase your online presence and conversion rates.",
      icon: "📈"
    },
    {
      slug: "graphic-design",
      title: "Graphic Designing",
      description: "Creative visual identities including logos, brochures, and brand guidelines.",
      icon: "🎨"
    },
    {
      slug: "company-incorporation",
      title: "Company Incorporation",
      description: "Hassle-free registration and incorporation services for your new business venture.",
      icon: "🏢"
    },
    {
      slug: "statutory-registrations",
      title: "Statutory Registrations",
      description: "Ensuring your business stays compliant with all legal and statutory requirements.",
      icon: "⚖️"
    },
    {
      slug: "finance-accounting",
      title: "Finance & Accounting",
      description: "Professional financial management, bookkeeping, and tax planning services.",
      icon: "💰"
    },
    {
      slug: "hr-recruitment",
      title: "HR Recruitment",
      description: "End-to-end recruitment solutions to find the best talent for your organization.",
      icon: "👥"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#F5F7FA] text-[#1F2F5A] selection:bg-[#F57C00]/30">

      {/* Clean Hero Section - WHITE */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#F5F7FA] pt-32 pb-20 px-6">
        {/* ========== Subtle Brand Texture ========== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden w-full h-full">
          <div className="hero-orb-1 absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#F57C00]/5 rounded-full blur-[120px]" />
          <div className="hero-orb-2 absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[#1F2F5A]/5 rounded-full blur-[120px]" />

          {/* Dot Grid */}
          <div className="absolute inset-0 opacity-[0.03] w-full h-full"
            style={{ backgroundImage: 'radial-gradient(#1F2F5A 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
        </div>

        {/* ========== Hero Content ========== */}
        <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center text-center px-2">
          {/* Premium Badge */}
          <div className="animate-reveal inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/70 backdrop-blur-xl text-[#F57C00] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-12 border border-[#1F2F5A]/10 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#F57C00] animate-pulse" />
            Strategic Business Nest
          </div>

          <div className="space-y-6 w-full max-w-full">
            <h1 className="text-3xl sm:text-4xl md:text-8xl font-black tracking-tighter text-[#1F2F5A] leading-[0.9] uppercase flex flex-col items-center w-full break-words">
              <span className="animate-reveal inline-block max-w-full italic pr-6 overflow-visible">Scale your</span>
              <span className="animate-reveal inline-block text-[#F57C00] [animation-delay:200ms] max-w-full italic pr-6 overflow-visible">Digital</span>
              <span className="animate-reveal inline-block [animation-delay:400ms] max-w-full italic pr-6 overflow-visible">Empire.</span>
            </h1>

            <p className="text-lg md:text-2xl text-[#1F2F5A]/60 font-medium animate-reveal [animation-delay:600ms] leading-relaxed max-w-2xl mx-auto px-4">
              Solutions Nest deliver strategic technical expertise to transform your vision into global success.
            </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center animate-reveal [animation-delay:400ms] mt-16">
            <a
              href="tel:+919845133461"
              className="btn-shimmer flex items-center justify-center w-full sm:w-auto px-14 py-6 bg-[#1F2F5A] text-white rounded-2xl font-black text-2xl shadow-2xl shadow-[#1F2F5A]/20 active:scale-95 transition-all"
            >
              Get Started →
            </a>
            <Link
              href="/#services"
              className="flex items-center justify-center w-full sm:w-auto px-14 py-6 bg-white/70 backdrop-blur-xl text-[#1F2F5A] rounded-2xl font-black text-2xl border border-[#1F2F5A]/10 hover:bg-white/40 active:scale-95 transition-all uppercase"
            >
              Our Expertise
            </Link>
          </div>

          {/* Trust Labels Bar - Fast Moving */}
          <div className="mt-16 w-full max-sm:px-4 overflow-hidden flex items-center justify-center animate-reveal [animation-delay:600ms] border-y border-[#1F2F5A]/5 py-3">
            <div className="flex animate-marquee-superfast gap-8 whitespace-nowrap items-center min-w-full">
              {/* First Set */}
              {[
                "Data-Driven", "ROI Focused", "Scale Bound", "Data-Driven", "ROI Focused", "Scale Bound",
                "Data-Driven", "ROI Focused", "Scale Bound", "Data-Driven", "ROI Focused", "Scale Bound"
              ].map((item, i) => (
                <div key={`set1-${i}`} className="flex items-center gap-4">
                  <span className="text-[10px] md:text-xs font-black text-[#1F2F5A]/40 uppercase tracking-[0.3em]">{item}</span>
                  <span className="w-1 h-1 rounded-full bg-[#F57C00]/30" />
                </div>
              ))}
              {/* Second Set (Identical for Seamless Loop) */}
              {[
                "Data-Driven", "ROI Focused", "Scale Bound", "Data-Driven", "ROI Focused", "Scale Bound",
                "Data-Driven", "ROI Focused", "Scale Bound", "Data-Driven", "ROI Focused", "Scale Bound"
              ].map((item, i) => (
                <div key={`set2-${i}`} className="flex items-center gap-4">
                  <span className="text-[10px] md:text-xs font-black text-[#1F2F5A]/40 uppercase tracking-[0.3em]">{item}</span>
                  <span className="w-1 h-1 rounded-full bg-[#F57C00]/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Marquee Section - BLUE */}
      <section className="py-14 bg-[#1F2F5A] border-y border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F57C00]/5 to-transparent pointer-events-none" />
        <div className="flex animate-marquee-fast gap-12 whitespace-nowrap items-center">
          {[
            "Web Development", "App Engineering", "Digital Marketing",
            "Legal & Compliance", "Financial Planning", "HR Solutions",
            "Brand Identity", "UI/UX Design", "Company Incorporation",
            "Statutory Registrations", "Tax Planning", "Recruitment"
          ].map((item, i) => (
            <div key={`exp1-${i}`} className="flex items-center gap-4 group">
              <span className="text-2xl md:text-3xl font-black text-white group-hover:text-[#F57C00] transition-colors tracking-tighter uppercase italic">{item}</span>
              <div className="w-3 h-3 rounded-full bg-[#F57C00] shadow-[0_0_10px_rgba(245,124,0,0.5)]" />
            </div>
          ))}
          {/* Duplicate for seamless loop (Second Set) */}
          {[
            "Web Development", "App Engineering", "Digital Marketing",
            "Legal & Compliance", "Financial Planning", "HR Solutions",
            "Brand Identity", "UI/UX Design", "Company Incorporation",
            "Statutory Registrations", "Tax Planning", "Recruitment"
          ].map((item, i) => (
            <div key={`exp2-${i}`} className="flex items-center gap-4 group">
              <span className="text-2xl md:text-3xl font-black text-white group-hover:text-[#F57C00] transition-colors tracking-tighter uppercase italic">{item}</span>
              <div className="w-3 h-3 rounded-full bg-[#F57C00] shadow-[0_0_10px_rgba(245,124,0,0.5)]" />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - WHITE */}
      <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#1F2F5A]/5 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-[#F57C00] font-bold tracking-[0.3em] uppercase text-xs">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#1F2F5A] tracking-tight">Services We Offer</h3>
            <p className="text-[#1F2F5A]/40 max-w-2xl mx-auto font-medium">
              We offer a comprehensive suite of services designed to support your business at every stage of its journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                href={`/services/${service.slug}`}
                key={index}
                className="group p-8 rounded-[2.5rem] bg-[#F5F7FA] border border-[#1F2F5A]/5 hover:border-[#F57C00]/30 hover:shadow-2xl hover:shadow-[#1F2F5A]/5 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white border border-[#1F2F5A]/5 rounded-[1.5rem] flex items-center justify-center text-3xl mb-8 group-hover:bg-[#F57C00]/10 group-hover:border-[#F57C00]/20 transition-all">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 text-[#1F2F5A] group-hover:text-[#F57C00] transition-colors tracking-tight">{service.title}</h4>
                <p className="text-[#1F2F5A]/40 leading-[1.6] font-medium text-sm">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#F57C00] font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Local Section */}
      <section id="about" className="py-20 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full bg-[#1F2F5A] rounded-[2.5rem] md:rounded-[4rem] px-6 py-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F57C00]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">Rooted in Bangalore,<br className="hidden md:block" /> Serving the World.</h3>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium">
                Located in the heart of Bangalore's innovation hub, Solutions Nest understands the pulse of modern business. We combine local expertise with global standards to deliver exceptional results for our clients.
              </p>
              <ul className="grid gap-4">
                {[
                  "10+ Years of Professional Experience",
                  "Expert Team of Developers & Designers",
                  "Comprehensive Legal & Statutory Support",
                  "Client-First Approach & Success Driven"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F57C00] flex items-center justify-center text-[10px] font-black shadow-lg shadow-[#F57C00]/20">✓</div>
                    <span className="text-sm md:text-base font-bold text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] space-y-8 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F57C00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="space-y-1">
                  <p className="text-[#F57C00] font-black uppercase text-[10px] tracking-[0.3em]">Our Presence</p>
                  <p className="text-2xl md:text-3xl font-black tracking-tight">Visit Our Nest</p>
                </div>
                <p className="text-white/50 leading-relaxed font-medium">
                  Feel free to drop by our office to discuss your project or business needs over a cup of coffee.
                </p>
                <div className="flex items-start gap-5 pt-8 border-t border-white/10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#F57C00]/20 flex items-center justify-center text-2xl shadow-inner italic font-black text-[#F57C00]">N</div>
                  <div className="space-y-1">
                    <p className="font-black text-lg tracking-tight">Govindarajnagar</p>
                    <p className="text-white/40 text-sm font-medium">Bangalore, Karnataka 570040</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
