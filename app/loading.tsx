export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F5F7FA]">
      <div className="relative text-center max-w-4xl px-6 space-y-12">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1F2F5A] leading-[0.9] uppercase italic flex flex-col items-center">
            <span className="animate-reveal inline-block">Scale your</span>
            <span className="animate-reveal inline-block text-[#F57C00] [animation-delay:200ms]">Digital</span>
            <span className="animate-reveal inline-block [animation-delay:400ms]">Empire.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#1F2F5A]/60 font-medium animate-reveal [animation-delay:600ms] leading-relaxed max-w-2xl mx-auto">
            Solutions Nest deliver strategic technical expertise to transform your vision into global success.
          </p>
        </div>
        
        {/* Simple Progress Indicator */}
        <div className="flex flex-col items-center gap-4 animate-reveal [animation-delay:800ms]">
          <div className="w-48 h-1 bg-[#1F2F5A]/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#F57C00] w-1/4 rounded-full animate-progress" />
          </div>
          <div className="text-[#F57C00] font-bold uppercase tracking-[0.3em] text-[10px]">
            Building Your Nest
          </div>
        </div>
      </div>
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#F57C00]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#1F2F5A]/5 rounded-full blur-[100px]" />
    </div>
  );
}
