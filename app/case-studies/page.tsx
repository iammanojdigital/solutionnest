"use client";

import Image from "next/image";

export default function CaseStudiesPage() {
  const cases = [
    { title: "Project Phoenix", category: "App Development", result: "+240% Engagement", desc: "A total overhaul of a fintech platform resulting in massive user growth." },
    { title: "Empire Scale", category: "Digital Marketing", result: "$2.4M Revenue", desc: "Aggressive SEO and Paid Media strategy for a global e-commerce giant." },
    { title: "Nest Foundation", category: "Incorporation", result: "30-Day Launch", desc: "Setting up the Indian subsidiary for a Fortune 500 company." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FA] text-[#1F2F5A] selection:bg-[#F57C00]/30">
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Cinematic Background Image for Case Studies */}
        <div className="absolute top-0 right-0 w-full h-[600px] opacity-10 pointer-events-none">
           <Image 
             src="/growth_data_cinematic_1776277504628.png" 
             alt="Growth Visualization" 
             fill 
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F7FA]" />
        </div>

        <div className="max-w-5xl mx-auto space-y-20 relative z-10">
           <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter">Growth <span className="text-[#F57C00]">Stories</span>.</h1>
              <p className="text-xl text-[#1F2F5A]/60 font-medium max-w-2xl mx-auto">
                Real results for real businesses. Explore how we transform strategic vision into measurable market dominance.
              </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {cases.map((cs, i) => (
                <div key={i} className="group bg-white rounded-[2.5rem] p-10 border border-[#1F2F5A]/5 hover:border-[#F57C00]/30 transition-all hover:-translate-y-2 shadow-xl shadow-[#1F2F5A]/5">
                   <p className="text-[#F57C00] font-black uppercase text-[10px] tracking-widest mb-4">{cs.category}</p>
                   <h3 className="text-3xl font-black mb-4 tracking-tight">{cs.title}</h3>
                   <p className="text-[#1F2F5A]/50 font-medium mb-8 leading-relaxed italic">{cs.desc}</p>
                   <div className="pt-6 border-t border-[#1F2F5A]/5">
                      <p className="text-2xl font-black text-[#1F2F5A]">{cs.result}</p>
                      <p className="text-[10px] uppercase font-black tracking-widest opacity-30 mt-1">Growth Index</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
