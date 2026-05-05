"use client";

const data = {
  title: "HR Recruitment",
  icon: "👥",
  tagline: "Build Your Dream Team",
  description: "Your business is only as good as your people. We find the top 1% talent that fits your culture and fuels your growth.",
  features: [
    { title: "Executive Search", desc: "Finding leadership that transforms organizations." },
    { title: "Tech Hiring", desc: "Pre-vetted developers and engineers ready to scale." },
    { title: "HR Advisory", desc: "Building payroll and culture systems from scratch." }
  ],
  process: ["Role Profiling", "Global Sourcing", "Screening & Interviews", "Reference Checks", "Onboarding Support"],
  benefits: ["Reduced Time-to-Hire", "Cultural Alignment", "High Retention Rates"]
};

export default function HRPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FA] text-[#1F2F5A] selection:bg-[#F57C00]/30">
      <section className="pt-48 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto relative z-10 space-y-10 flex flex-col items-center">
          <div className="animate-reveal inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-[#F57C00] font-bold text-xs tracking-[0.2em] uppercase border border-[#1F2F5A]/5 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#F57C00] animate-pulse" />
            {data.tagline}
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#1F2F5A] tracking-tighter leading-[0.9] animate-reveal">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#1F2F5A]/60 font-medium leading-relaxed max-w-2xl animate-reveal [animation-delay:200ms]">
            {data.description}
          </p>
          <div className="flex gap-4 animate-reveal [animation-delay:400ms] pt-6">
            <a href="https://wa.me/919845133461" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-[#1F2F5A] text-white rounded-2xl font-black text-xl shadow-2xl shadow-[#1F2F5A]/20 hover:-translate-y-1 transition-all">Hire Top Talent on WhatsApp →</a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white border-y border-[#1F2F5A]/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-black text-3xl md:text-5xl mb-16 tracking-tight animate-reveal">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.features.map((feature, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-[#F5F7FA] border border-[#1F2F5A]/5 hover:border-[#F57C00]/20 transition-all hover:-translate-y-2 group animate-reveal" style={{ animationDelay: `${(i + 1) * 200}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-[#F57C00] flex items-center justify-center text-white font-black text-xl mb-6 shadow-lg shadow-[#F57C00]/20">{i + 1}</div>
                <h4 className="text-2xl font-black mb-4 group-hover:text-[#F57C00] transition-colors">{feature.title}</h4>
                <p className="text-[#1F2F5A]/50 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1F2F5A] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden px-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F57C00]/20 blur-[100px] rounded-full" />
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Our Methodical Process</h2>
                <p className="text-white/60 text-lg font-medium leading-relaxed mb-12">
                  We don't believe in guesswork. Every project follows a rigorous, data-backed lifecycle to ensure 100% success.
                </p>
                <div className="space-y-6">
                  {data.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <span className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-[#F57C00] transition-colors">0{i + 1}</span>
                      <span className="text-xl md:text-2xl font-bold">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-full aspect-square border border-white/10 rounded-full flex items-center justify-center relative">
                  <div className="w-[80%] aspect-square border border-white/10 rounded-full flex items-center justify-center">
                    <div className="w-[60%] aspect-square bg-[#F57C00] rounded-full shadow-2xl shadow-[#F57C00]/40 flex items-center justify-center text-5xl">⚡</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Business Value Delivered</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {data.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#F5F7FA] px-8 py-4 rounded-2xl border border-[#1F2F5A]/5">
                <span className="text-2xl">🏆</span>
                <span className="text-xl font-black tracking-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
