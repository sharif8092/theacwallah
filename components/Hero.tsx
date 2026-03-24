
import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, ICONS, COMPANY_NAME } from '../constants';

const slides = [
  {
    title: "Best AC Repair Service in Delhi NCR – Fast & Affordable",
    subtitle: "Certified & authorized AC technicians in Delhi for Split and Window AC repair, gas refilling, cooling issues, installation & maintenance.",
    bgImage: "ac1.png",
    mainImage: "ac2.png",
    tag: "90 Days Warranty",
    highlight: "AC Service Expert",
    cta: "Book AC Repair",
    color: "blue"
  },
  // {
  //   title: "Washer Service Specialist",
  //   subtitle: "Expert fixing for LG, Samsung & IFB. Same-day doorstep service in Delhi NCR with original parts.",
  //   bgImage: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop",
  //   mainImage: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop",
  //   tag: "Genuine Spare Parts",
  //   highlight: "Washing Machine",
  //   cta: "Fix My Washer",
  //   color: "indigo"
  // },
  // {
  //   title: "Fridge Expert Repair",
  //   subtitle: "Double Door & Side-by-Side refrigerator expert. Fast gas refilling & compressor solutions.",
  //   bgImage: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?q=80&w=2070&auto=format&fit=crop",
  //   mainImage: "https://images.unsplash.com/photo-1571175439180-f132e82ce53e?q=80&w=2070&auto=format&fit=crop",
  //   tag: "Verified Technicians",
  //   highlight: "Refrigerator Fix",
  //   cta: "Repair Fridge",
  //   color: "cyan"
  // }
];

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIsChanging(true);
  //     setTimeout(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slides.length);
  //       setIsChanging(false);
  //     }, 600);
  //   }, 6000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
              index === currentSlide ? 'opacity-30 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img 
              src={slide.bgImage} 
              alt={slide.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-dots opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 py-16 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 ${isChanging ? 'opacity-0 -translate-y-5 lg:-translate-x-10' : 'opacity-100 translate-y-0 lg:translate-x-0'}`}>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 px-4 py-1.5 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-100 text-[10px] font-black uppercase tracking-[0.2em]">
                {slides[currentSlide].highlight}
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[0.95] mb-6 tracking-tight">
              {slides[currentSlide].title}
            </h1>

            <p className="text-base xs:text-lg md:text-2xl text-blue-100/70 mb-8 max-w-xl leading-relaxed font-medium">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col xs:flex-row gap-4 mb-12">
              <button 
                onClick={onOpenBooking}
                className="w-full xs:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] active:scale-95 animate-pulse-ring"
              >
                {slides[currentSlide].cta}
              </button>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/10 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 active:scale-95"
              >
                <ICONS.WhatsApp className="w-6 h-6 text-green-400" />
                WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-8 opacity-50">
              <div className="flex flex-col">
                <span className="text-white font-black text-xl">4.9/5</span>
                <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Google Rating</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl">50K+ AC Repairs</span>
                <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Completed</span>
              </div>
            </div>
          </div>

          {/* Featured Image Area */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className={`relative z-10 transition-all duration-1000 transform ${isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden border-4 border-white/5 shadow-2xl">
                <img 
                  src={slides[currentSlide].mainImage} 
                  alt={slides[currentSlide].title} 
                  className="w-full aspect-[4/3] md:aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                {/* Micro Badges */}
                <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
                  <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-3 rounded-2xl flex items-center gap-3 shadow-xl">
                    <img 
                      src="/logo.png" 
                      alt={COMPANY_NAME} 
                      className="w-8 h-8 object-contain rounded-lg"
                    />
                    <div>
                      <p className="text-white font-black text-[10px] uppercase tracking-widest leading-none">Authorized</p>
                      <p className="text-blue-400 font-bold text-[8px] uppercase tracking-widest">Delhi Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
