"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-6 md:py-6">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between bg-white/70 backdrop-blur-xl px-4 py-4 md:px-8 md:py-5 rounded-2xl md:rounded-3xl relative z-20 border border-white shadow-xl shadow-[#1F2F5A]/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1F2F5A] rounded-lg md:rounded-xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg shadow-[#1F2F5A]/20">S</div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-[#1F2F5A] uppercase italic">Solutions <span className="text-[#F57C00]">Nest</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[#1F2F5A]/60 font-bold uppercase text-xs tracking-widest">
          <Link href="/#services" className="hover:text-[#F57C00] transition-colors">Services</Link>
          <Link href="/about" className="hover:text-[#F57C00] transition-colors">About Us</Link>
          <Link href="/case-studies" className="hover:text-[#F57C00] transition-colors">Case Studies</Link>
          <Link href="/contact" className="hover:text-[#F57C00] transition-colors">Contact</Link>
          
            <div className="flex items-center gap-4">
              <a href="https://wa.me/919008011333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-[10px] font-black tracking-tight">WHATSAPP</span>
              </a>
              <a href="tel:+919008011333" className="px-6 py-2.5 bg-[#1F2F5A] text-white rounded-xl hover:bg-[#F57C00] transition-all shadow-lg shadow-[#1F2F5A]/20 font-bold">Start Nesting</a>
            </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#1F2F5A] p-2 flex items-center gap-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <a href="https://wa.me/919008011333" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-[#25D366]">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <span className="font-bold">{isMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu Tray */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] flex flex-col gap-8 text-center animate-reveal relative z-10 shadow-2xl border border-[#1F2F5A]/5">
          <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="text-[#1F2F5A] font-black uppercase text-sm tracking-widest hover:text-[#F57C00]">Services</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-[#1F2F5A] font-black uppercase text-sm tracking-widest hover:text-[#F57C00]">About Us</Link>
          <Link href="/case-studies" onClick={() => setIsMenuOpen(false)} className="text-[#1F2F5A] font-black uppercase text-sm tracking-widest hover:text-[#F57C00]">Case Studies</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-[#1F2F5A] font-black uppercase text-sm tracking-widest hover:text-[#F57C00]">Contact</Link>
          <a href="tel:+919008011333" className="flex items-center justify-center gap-4 px-6 py-5 bg-[#1F2F5A] text-white rounded-2xl font-black uppercase text-sm tracking-[0.2em] shadow-xl shadow-[#1F2F5A]/20">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            CALL US NOW
          </a>
        </div>
      )}
    </nav>
  );
}
