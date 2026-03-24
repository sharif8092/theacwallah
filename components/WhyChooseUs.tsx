
import React, { useEffect, useState, useRef } from 'react';

const features = [
  {
    title: "Express Arrival",
    desc: "Technicians stationed across NCR to reach your doorstep on the same day of booking.",
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Verified Experts",
    desc: "Background-verified mechanics factory-trained for all major brands.",
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  },
  {
    title: "90-Day Warranty",
    desc: "If the issue persists within 90 days, we fix it for FREE. Guaranteed.",
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Genuine Parts",
    desc: "Company-authorized spare parts with valid bills for long appliance life.",
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

const WhyChooseUs: React.FC = () => {
  const [animateStats, setAnimateStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateStats(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statsData = [
    { label: "Repairs", value: "50K+", width: "95%" },
    { label: "Satisfaction", value: "99%", width: "99%" },
    { label: "Centers", value: "24+", width: "85%" }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative scroll-mt-20">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-black uppercase text-[10px] tracking-widest mb-4">Why Delhi Trusts Us</h2>
          <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">The CoolCare Hub Advantage</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:bg-blue-500 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-white text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{f.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-xs md:text-sm group-hover:text-slate-300 transition-colors">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div 
            ref={statsRef}
            className="group/stats bg-blue-600 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-blue-500/20"
          >
            {/* Animated background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover/stats:scale-110 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <h4 className="text-2xl font-black mb-8 text-white">Trust Statistics</h4>
              
              <div className="space-y-6">
                {statsData.map((stat, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-blue-100 text-sm">{stat.label}</span>
                      <span className="text-2xl font-black text-white">{stat.value}</span>
                    </div>
                    <div className="h-3 bg-blue-950/40 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-1000"
                        style={{ width: animateStats ? stat.width : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-white/20 flex items-center gap-4">
                 <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <img key={i} className="w-10 h-10 rounded-full border-2 border-blue-600 bg-slate-800 hover:z-20 hover:scale-110 transition-transform" src={`https://i.pravatar.cc/100?u=user${i+10}`} alt="user" />
                   ))}
                 </div>
                 <p className="text-xs font-bold text-blue-50 group-hover/stats:translate-x-1 transition-transform">50K+ Happy Families Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
