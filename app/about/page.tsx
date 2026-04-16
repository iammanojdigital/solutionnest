"use client";

import { useState } from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FA] text-[#1F2F5A] selection:bg-[#F57C00]/30">
      <section className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Architecting <span className="text-[#F57C00]">Digital</span> Resiliency.</h1>
          <p className="text-xl md:text-2xl text-[#1F2F5A]/60 font-medium leading-relaxed">
            At Solutions Nest, we don't just solve problems; we build foundational infrastructures that allow businesses to thrive in a chaotic digital landscape.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white border-y border-[#1F2F5A]/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Our Philosophy</h2>
            <p className="text-lg text-[#1F2F5A]/70 leading-relaxed font-medium">
              Founded on the principles of technical excellence and strategic foresight, Solutions Nest serves as the "Nest" where innovation is incubated and business growth is accelerated.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#F57C00]/10 flex items-center justify-center text-xl md:text-2xl group-hover:bg-[#F57C00] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#F57C00]/5">
                  👥
                </div>
                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-black text-[#F57C00]">150+</p>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40">Clients Served</p>
                </div>
              </div>
              <div className="space-y-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#1F2F5A]/5 flex items-center justify-center text-xl md:text-2xl group-hover:bg-[#1F2F5A] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#1F2F5A]/5">
                  ⏳
                </div>
                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-black text-[#1F2F5A]">10+</p>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-[#1F2F5A] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 md:aspect-video flex flex-col justify-center gap-6 shadow-2xl shadow-[#1F2F5A]/10 overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#F57C00]/10 blur-[80px] md:blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />
            <div className="space-y-3 relative z-10">
              <p className="text-[#F57C00] font-black uppercase text-[10px] tracking-[0.3em] mb-2 opacity-80">Our Center of Excellence</p>
              <h3 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight">Solutions Nest<br />Bangalore Headquarters</h3>
            </div>
            <div className="pt-6 md:pt-8 border-t border-white/10 relative z-10">
              <p className="text-white/40 font-medium leading-relaxed italic text-sm md:text-base">
                Situated in the Silicon Valley of India, driving global transformation from our strategic headquarters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
