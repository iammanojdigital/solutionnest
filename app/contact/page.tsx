"use client";

export default function ContactPage() {
   return (
      <div className="flex flex-col min-h-screen bg-[#F5F7FA] text-[#1F2F5A] selection:bg-[#F57C00]/30">
         <section className="pt-48 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <div className="space-y-6">
                     <h1 className="text-5xl md:text-8xl font-black tracking-tighter">Ready to <span className="text-[#F57C00]">Nest</span>?</h1>
                     <p className="text-xl text-[#1F2F5A]/60 font-medium leading-relaxed max-w-lg">
                        Connect with our strategic engineers to start building, scaling, and protecting your digital business today.
                     </p>
                  </div>

                  <div className="space-y-8">
                     <div className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-xl shadow-[#1F2F5A]/5 border border-[#1F2F5A]/5 group-hover:bg-[#F57C00] group-hover:text-white transition-all">📍</div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Headquarters</p>
                           <p className="text-xl font-black">Bangalore, Govindarajnagar</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-xl shadow-[#1F2F5A]/5 border border-[#1F2F5A]/5 group-hover:bg-[#F57C00] group-hover:text-white transition-all">📱</div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Direct Line</p>
                           <p className="text-xl font-black">+91 9845133461</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-xl shadow-[#1F2F5A]/5 border border-[#1F2F5A]/5 group-hover:bg-[#F57C00] group-hover:text-white transition-all">📧</div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Email Domain</p>
                           <p className="text-xl font-black">info@solutionsnest.com</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-[#1F2F5A]/5 shadow-2xl shadow-[#1F2F5A]/5 space-y-8">
                  <div className="space-y-2">
                     <h3 className="text-3xl font-black tracking-tight">Project Inquiry</h3>
                     <p className="text-[#1F2F5A]/40 font-medium tracking-tight">Submit your details for a 24-hour turnaround.</p>
                  </div>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                     <input type="text" placeholder="Your Name" className="w-full px-8 py-5 rounded-2xl bg-[#F5F7FA] border border-transparent focus:border-[#F57C00]/30 transition-all font-bold outline-none" />
                     <input type="email" placeholder="Business Email" className="w-full px-8 py-5 rounded-2xl bg-[#F5F7FA] border border-transparent focus:border-[#F57C00]/30 transition-all font-bold outline-none" />
                     <textarea placeholder="Tell us about your digital empire..." rows={4} className="w-full px-8 py-5 rounded-2xl bg-[#F5F7FA] border border-transparent focus:border-[#F57C00]/30 transition-all font-bold outline-none resize-none" />
                     <button className="w-full py-6 bg-[#1F2F5A] text-white rounded-2xl font-black text-xl shadow-2xl shadow-[#1F2F5A]/20 hover:bg-[#F57C00] transition-all">Send Strategy Request →</button>
                  </form>
               </div>
            </div>
         </section>
      </div>
   );
}
