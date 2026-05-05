"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full max-w-full overflow-hidden bg-[#1F2F5A] pt-24 pb-12 px-6 border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F57C00]/5 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20 relative z-10">
        <div className="col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F57C00] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#F57C00]/20">S</div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Solutions <span className="text-[#F57C00]">Nest</span></span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed font-medium">
            Empowering individuals and organizations to build, grow, and sustain their digital and business dreams through strategic solutions.
          </p>
        </div>
        <div>
          <h5 className="font-black text-white uppercase tracking-[0.2em] text-xs mb-8">Navigation</h5>
          <ul className="space-y-4 text-white/40 font-medium">
            <li><Link href="/#services" className="hover:text-[#F57C00] transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-[#F57C00] transition-colors">About Us</Link></li>
            <li><Link href="/case-studies" className="hover:text-[#F57C00] transition-colors">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-[#F57C00] transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-black text-white uppercase tracking-[0.2em] text-xs mb-8">Reach Us</h5>
          <ul className="space-y-4 text-white/40 font-medium">
            <li className="flex items-center gap-3 font-bold text-white/60 text-sm">
              <span className="text-[#F57C00] text-lg">📧</span> info@solutionsnest.com
            </li>
            <li className="flex items-center gap-3 font-bold text-white/60 text-sm">
              <span className="text-[#F57C00] text-lg">📞</span> +91 9845133461
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/20 relative z-10">
        <p>© 2026 Solutions Nest. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
