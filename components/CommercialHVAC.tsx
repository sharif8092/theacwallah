
import React, { useState } from 'react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, ICONS } from '../constants';

const industries = [
  { name: 'Offices', icon: '🏢' },
  { name: 'Hospitals', icon: '🏥' },
  { name: 'Malls', icon: '🛍️' },
  { name: 'Factories', icon: '🏭' },
  { name: 'Warehouses', icon: '📦' }
];

const commercialServices = [
  {
    title: "HVAC Installation",
    desc: "Complete central cooling setup for offices & large buildings.",
    icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    )
  },
  {
    title: "HVAC Maintenance",
    desc: "Preventive & breakdown support for massive cooling units.",
    icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    )
  },
  {
    title: "AMC Contracts",
    desc: "Annual Maintenance focus for 100% operational uptime.",
    icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    )
  },
  {
    title: "VRF / VRV Systems",
    desc: "Energy-efficient Variable Refrigerant Flow solutions.",
    icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    )
  },
  {
    title: "AHU & Chiller Services",
    desc: "Expert maintenance for industrial air handling & chillers.",
    icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
            <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        </svg>
    )
  },
  {
    title: "Central AC Plants",
    desc: "Repairing and managing massive centralized AC systems.",
    icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
  }
];

const b2bTestimonials = [
  {
    name: "Vikram Mehta",
    company: "Standard Chartered Bank",
    text: "The AC Wallah has been managing our central HVAC for 3 years. Their AMC service is highly reliable and technicians are very professional."
  },
  {
    name: "Sanjay Singhania",
    company: "Singhania Factories",
    text: "Exceptional response time. When our chiller unit went down, their team arriving within 2 hours saved our production cycle."
  },
  {
    name: "Anita Deshmukh",
    company: "Deshmukh Hospitals",
    text: "Reliable HVAC partner. High expertise in AHU systems and medical-grade ventilation. Highly recommended for commercial needs."
  }
];

const CommercialHVAC: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        businessType: 'Office',
        requirement: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `*Commercial HVAC Query*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Business:* ${formData.businessType}%0A*Requirement:* ${formData.requirement}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    const scrollToContact = () => {
        document.getElementById('commercial-contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleEnquiry = (serviceTitle?: string) => {
        const isMobile = window.innerWidth < 1024; // Standard tablet/desktop breakpoint
        
        if (isMobile) {
            const message = `*Commercial Inquiry*%0A%0AHello, I am interested in *${serviceTitle || 'Commercial HVAC Services'}*. Please provide more details.`;
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        } else {
            scrollToContact();
            // If serviceTitle is provided, we could pre-fill the form, but let's keep it simple for now
            if (serviceTitle) {
                setFormData(prev => ({ ...prev, requirement: `Enquiry for ${serviceTitle}` }));
            }
        }
    };

    return (
        <section id="commercial-hvac" className="py-20 md:py-32 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-8">
                
                {/* 1. HVAC Hero Sub-Section */}
                <div className="relative rounded-[4rem] overflow-hidden bg-brand-950 mb-20 md:mb-32 shadow-2xl border border-white/5">
                    <div className="absolute inset-0 z-0 opacity-40">
                         <img 
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                            alt="Commercial HVAC" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-mesh-blue opacity-60"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/60 to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10 p-10 md:p-24 lg:w-2/3">
                        <div className="inline-flex items-center gap-3 bg-brand-600/20 backdrop-blur-3xl border border-brand-500/30 px-5 py-2 rounded-full mb-8 text-blue-400 font-black font-display text-[10px] uppercase tracking-[0.3em]">
                            Commercial Only Services
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white mb-8 leading-[1] tracking-tighter">
                            Commercial HVAC <br />
                            <span className="text-blue-500">Experts in Delhi NCR</span>
                        </h2>
                        <h3 className="text-blue-100/60 text-lg md:text-2xl mb-12 max-w-xl font-medium leading-relaxed">
                            Specialists in VRF, VRV, AHU, Chillers & Central AC Systems
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${PHONE_NUMBER}`} className="bg-brand-600 hover:bg-brand-500 text-white px-12 py-6 rounded-[2rem] font-black font-display text-lg text-center transition-all shadow-[0_20px_50px_-15px_rgba(37,99,235,0.5)] active:scale-95">Call Now</a>
                            <button onClick={() => handleEnquiry('General Commercial HVAC')} className="bg-white/5 hover:bg-white/10 backdrop-blur-3xl text-white border border-white/10 px-12 py-6 rounded-[2rem] font-black font-display text-lg transition-all active:scale-95">Get Free Quote</button>
                        </div>
                    </div>
                </div>

                {/* 2. HVAC Services Grid */}
                <div className="mb-32">
                    <div className="text-center mb-20">
                        <h3 className="text-blue-600 font-black font-display text-[12px] uppercase tracking-[0.4em] mb-4">Core Solutions</h3>
                        <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 mb-6 tracking-tighter">Industrial HVAC Services</h2>
                        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Scalable cooling solutions for high-capacity environments across Delhi NCR.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {commercialServices.map((service, i) => (
                            <div key={i} className="group bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-blue-100 transition-all duration-700 hover:-translate-y-4">
                                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black font-display text-slate-900 mb-4 tracking-tight">{service.title}</h4>
                                <p className="text-slate-500 mb-10 leading-relaxed font-medium text-base">{service.desc}</p>
                                <button onClick={() => handleEnquiry(service.title)} className="text-blue-600 font-black font-display text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 group/btn">
                                    Enquire Now
                                    <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                       {/* 3. Why Choose & 4. Industries */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="bg-brand-950 p-10 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl border border-white/5">
                        <div className="absolute inset-0 bg-mesh-blue opacity-20"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black font-display mb-10 tracking-tighter leading-tight">Why Choose Our <br/><span className="text-blue-500">HVAC Service?</span></h2>
                            <ul className="space-y-8">
                                {[
                                    { t: "Experienced Commercial Technicians", d: "Certified experts for complex systems." },
                                    { t: "Fast Response Time", d: "Under 2-hour arrival for critical breakdowns." },
                                    { t: "Expertise in Large Systems", d: "Specialized tools for Central plants." },
                                    { t: "Transparent Pricing", d: "Corporate billing with detailed reporting." },
                                    { t: "24/7 Business Support", d: "Priority assistance for AMC partners." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-5 group/item">
                                        <div className="shrink-0 w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1 transition-all group-hover/item:bg-blue-500 group-hover/item:text-white group-hover/item:scale-110">
                                            <ICONS.Check className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h5 className="font-black font-display text-xl tracking-tight mb-2">{item.t}</h5>
                                            <p className="text-blue-100/40 text-sm font-medium">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black font-display text-slate-900 mb-12 tracking-tighter uppercase leading-[0.9]">Industries <br/> <span className="text-blue-600">We Serve</span></h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {industries.map((ind, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:border-blue-100">
                                    <span className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">{ind.icon}</span>
                                    <span className="font-black font-display text-slate-800 text-sm uppercase tracking-tighter">{ind.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. Testimonials */}
                <div className="mb-32">
                    <div className="text-center mb-20 text-balance">
                        <h2 className="text-4xl md:text-6xl font-black font-display text-slate-900 mb-6 tracking-tighter">Business Client Success</h2>
                        <p className="text-slate-500 font-medium text-lg">Trusted by leading enterprises across North India.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {b2bTestimonials.map((t, i) => (
                            <div key={i} className="bg-blue-50/50 p-10 rounded-[3.5rem] relative overflow-hidden group hover:bg-white hover:shadow-2xl hover:ring-1 hover:ring-blue-100 transition-all duration-700">
                                <div className="absolute -right-6 -top-6 text-blue-100/30 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <svg className="w-32 h-32 rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                </div>
                                <p className="text-slate-700 italic text-lg mb-10 relative z-10 leading-relaxed font-medium">"{t.text}"</p>
                                <div className="border-t border-blue-100/50 pt-8 relative z-10">
                                    <h5 className="font-black font-display text-slate-900 text-lg leading-none mb-2">{t.name}</h5>
                                    <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] leading-none opacity-70">{t.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. Strong CTA Section */}
                <div className="bg-brand-600 rounded-[4rem] p-12 md:p-24 text-center text-white mb-32 relative overflow-hidden group shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)]">
                    <div className="absolute inset-0 bg-dots opacity-10 group-hover:scale-125 transition-transform duration-[2000ms]"></div>
                    <div className="absolute inset-0 bg-mesh-blue opacity-20"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black font-display mb-12 tracking-tighter leading-[0.9]">
                            Looking for a reliable <br />
                            HVAC partner for your business?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href={`tel:${PHONE_NUMBER}`} className="bg-white text-brand-600 px-12 py-6 rounded-[2rem] font-black font-display text-xl shadow-2xl active:scale-95 transition-all hover:scale-105">Call Now</a>
                            <button onClick={scrollToContact} className="bg-brand-950/20 hover:bg-brand-950/40 backdrop-blur-xl text-white border border-white/20 px-12 py-6 rounded-[2rem] font-black font-display text-xl transition-all active:scale-95">Request Callback</button>
                        </div>
                    </div>
                </div>

                {/* 7. Contact Integration */}
                <div id="commercial-contact" className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-50 flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-6xl font-black font-display text-slate-900 mb-6 tracking-tighter leading-none">Business Inquiry</h2>
                            <p className="text-slate-500 mb-12 font-medium text-lg leading-relaxed">Tell us about your cooling requirement and our commercial head will contact you within 60 minutes.</p>
                            
                            <div className="space-y-6">
                                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-slate-50 hover:bg-brand-50 transition-all group">
                                    <div className="w-14 h-14 bg-white text-brand-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-6">
                                        <ICONS.Phone className="w-6 h-6" />
                                    </div>
                                    <span className="font-black font-display text-2xl text-slate-900">{PHONE_NUMBER}</span>
                                </a>
                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-slate-50 hover:bg-green-50 transition-all group">
                                    <div className="w-14 h-14 bg-white text-green-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-6">
                                        <ICONS.WhatsApp className="w-6 h-6" />
                                    </div>
                                    <span className="font-black font-display text-2xl text-slate-900">WhatsApp Team</span>
                                </a>
                            </div>
                        </div>
                        
                        <div className="lg:w-1/2">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                                <div className="space-y-6">
                                    <input 
                                        required
                                        type="text" 
                                        placeholder="Full Name" 
                                        className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 font-bold transition-all text-lg"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                    <input 
                                        required
                                        type="tel" 
                                        placeholder="Business Phone" 
                                        className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 font-bold transition-all text-lg"
                                        value={formData.phone}
                                        onChange={e => setFormData({...formData, phone: e.target.value})}
                                    />
                                    <div className="relative">
                                        <select 
                                            className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 font-bold transition-all appearance-none text-lg"
                                            value={formData.businessType}
                                            onChange={e => setFormData({...formData, businessType: e.target.value})}
                                        >
                                            <option>Office / Corporate</option>
                                            <option>Hospital / Medical</option>
                                            <option>Mall / Retail</option>
                                            <option>Factory / Industrial</option>
                                            <option>Warehouse / Logistics</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    <textarea 
                                        placeholder="Project Brief / Requirements" 
                                        className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 font-bold transition-all h-40 text-lg resize-none"
                                        value={formData.requirement}
                                        onChange={e => setFormData({...formData, requirement: e.target.value})}
                                    ></textarea>
                                </div>
                                <button className="w-full bg-brand-950 hover:bg-black text-white py-6 rounded-2xl font-black font-display text-xl transition-all shadow-2xl active:scale-95 group relative overflow-hidden">
                                     <span className="relative z-10 flex items-center justify-center gap-3">
                                         Send Project Inquiry
                                         <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                     </span>
                                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
          </div>
            
            {/* Sticky Mobile Call Button for this section */}
            <div className="fixed bottom-24 left-6 right-6 z-[90] md:hidden pointer-events-none">
                 <div className="flex justify-center transition-all animate-bounce pointer-events-auto">
                    <a href={`tel:${PHONE_NUMBER}`} className="bg-blue-600 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl flex items-center gap-3">
                        <ICONS.Phone className="w-5 h-5 animate-pulse" />
                        HVAC Specialist
                    </a>
                 </div>
            </div>
        </section>
    );
};

export default CommercialHVAC;
