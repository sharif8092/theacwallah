
import React from 'react';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../constants';

const serviceIcons = {
  ac: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8v4l3 3" />
      <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
    </svg>
  ),
  washer: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth={1.5} />
      <circle cx="12" cy="13" r="4" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M8 6h1m3 0h4" />
    </svg>
  ),
  fridge: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10h14M9 5v2m0 8v3" />
    </svg>
  ),
  installation: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  amc: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  rental: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  sell: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  gas: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 10-7.038 0l-2.387.477a2 2 0 00-1.022.547l-1.397 1.397a2 2 0 00-.57 1.414V20a2 2 0 002 2h12a2 2 0 002-2v-1.186a2 2 0 00-.57-1.414l-1.397-1.397z" />
    </svg>
  ),
  maintenance: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
};

const services = [
  {
    num: "01",
    title: "AC Repair & Service",
    h3: "Reliable AC Repair in Delhi",
    desc: "Expert diagnosis and fixing of all types of Split and Window ACs. We fix cooling issues, gas leakage, and noise problems.",
    img: "ac3.png",
    icon: serviceIcons.ac,
    badge: "Popular"
  },
  {
    num: "02",
    title: "AC Gas Filling",
    h3: "Professional AC Gas Filling",
    desc: "Ensuring optimal cooling with precise gas pressure checks and refilling. We use high-quality R32, R410A, and R22 gases.",
    img: "ac4.png",
    icon: serviceIcons.gas,
    badge: "Essential"
  },
  {
    num: "03",
    title: "AC Maintenance",
    h3: "Express AC Service & Clean",
    desc: "Deep jet cleaning of indoor and outdoor units to improve efficiency and air quality. Regular maintenance to prevent breakdowns.",
    img: "technicians_work.png",
    icon: serviceIcons.maintenance,
    badge: "Bestseller"
  },
  {
    num: "04",
    title: "AC on Rent",
    h3: "Window & Split AC Renting",
    desc: "Affordable AC rental services for homes and offices in Delhi NCR. Low maintenance cost and quick installation.",
    img: "ac2.png",
    icon: serviceIcons.rental,
    badge: "Seasonal Deal"
  },
  {
    num: "05",
    title: "Old AC Buy & Sell",
    h3: "Best Price for Used ACs",
    desc: "Looking to sell your old AC? We buy scrap or working ACs at the best market rates in Delhi. Instant cash payout.",
    img: "ac5.png",
    icon: serviceIcons.sell,
    badge: "Instant Cash"
  },
  {
    num: "06",
    title: "Washing Machine Repair",
    h3: "Washing Machine Repair in Delhi NCR",
    desc: "Complete repair solutions for Top Load, Front Load, and Semi-Automatic washing machines by experienced technicians.",
    img: "washer.png",
    icon: serviceIcons.washer,
    badge: "24/7 Service"
  },
  {
    num: "07",
    title: "Fridge Repair",
    h3: "Fridge Repair Service Near Me",
    desc: "Double door, single door, and side-by-side refrigerator repair. Expert gas refilling and compressor replacement.",
    img: "fridge.png",
    icon: serviceIcons.fridge,
    badge: "Best Value"
  },
  {
    num: "08",
    title: "AC Installation",
    h3: "Professional AC Installation",
    desc: "Secure mounting and gas pressure testing. We provide copper piping and expert bracket fitting services.",
    img: "ac6.png",
    icon: serviceIcons.installation,
    badge: "Expert Team"
  },
  {
    num: "09",
    title: "AC AMC Service",
    h3: "AC AMC Service in Delhi",
    desc: "Affordable Annual Maintenance Contracts (AMC). Unlimited service visits and preventive maintenance included.",
    img: "amc.png",
    icon: serviceIcons.amc,
    badge: "Most Saved"
  },
  {
    num: "10",
    title: "Appliance Rentals",
    h3: "Fridge & Washer on Rent",
    desc: "Don't want to buy? Rent high-quality washing machines and fridges at the lowest monthly prices in Rohini & Dwarka.",
    img: "acrental.png",
    icon: serviceIcons.rental,
    badge: "Affordable"
  }
];

interface ServicesProps {
  onOpenBooking: (service: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="relative py-16 md:py-32 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
          alt="Technical Background" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-900/90 to-slate-900/95"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-500/20 backdrop-blur-md rounded-full mb-6 border border-blue-400/30">
            <span className="text-blue-100 font-black text-[10px] uppercase tracking-[0.3em]">Authorized Center</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Professional <br />
            <span className="text-blue-400">Services</span>
          </h2>
          
          <p className="text-lg md:text-2xl text-blue-100/70 leading-relaxed max-w-2xl mx-auto">
            Authorized repair and rental solutions designed for Delhi. Factory-grade expertise with local speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-4 transition-all duration-500 hover:bg-white/15 hover:border-blue-400/40 hover:-translate-y-3"
            >
              <div className="relative h-60 rounded-[2rem] overflow-hidden mb-6 shadow-2xl">
                <img 
                  src={service.img} 
                  alt={service.h3} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-lg border border-white/20 shadow-xl">
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-black text-xl tracking-tighter drop-shadow-lg">{service.title}</h4>
                  <div className="bg-blue-600 text-white p-2.5 rounded-2xl shadow-xl group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 ring-4 ring-blue-600/20">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="px-3 pb-4">
                <h3 className="text-lg font-black text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">{service.h3}</h3>
                <p className="text-blue-100/60 mb-6 leading-relaxed text-xs group-hover:text-blue-100/80 transition-colors h-16 line-clamp-3">{service.desc}</p>

                <button 
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/20 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest transition-all duration-300 relative overflow-hidden active:scale-95"
                >
                  <span className="relative z-10">Select Plan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 group/banner hover:border-blue-400/30 transition-all duration-500">
             <div className="text-center lg:text-left">
               <h4 className="text-2xl md:text-4xl font-black text-white mb-2 group-hover/banner:translate-x-1 transition-transform">Need a Rental AC?</h4>
               <p className="text-blue-100/70 text-base md:text-lg">Special prices for <span className="text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">Delhi NCR </span>. Units starting at ₹12000/session</p>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-center flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 active:scale-95">
                  Check Availability
                </a>
                <button 
                  onClick={() => onOpenBooking('AC Rental Query')}
                  className="w-full sm:w-auto bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-black transition-all hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 active:scale-95"
                >
                  Get A Quote
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
