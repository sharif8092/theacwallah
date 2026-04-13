import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER, ADDRESS, ICONS, GST_NUMBER, UDYAM_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-mesh-blue opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt={COMPANY_NAME} 
                  className="w-14 h-14 object-contain brightness-0 invert mix-blend-screen opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <span className="block text-2xl font-black font-display uppercase tracking-tighter leading-none">
                  {COMPANY_NAME}
                </span>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mt-2 block opacity-80">
                  Authorized Hub
                </span>
              </div>
            </Link>
            <p className="text-blue-100/40 text-sm leading-relaxed font-medium">
              Delhi's most trusted HVAC and appliance service hub. We deliver factory-grade precision with the speed of a local specialist. 
            </p>
            <div className="flex gap-4">
               <a href={`https://wa.me/${PHONE_NUMBER}`} className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand-600 hover:border-brand-500 transition-all group">
                  <ICONS.WhatsApp className="w-5 h-5 text-blue-200 group-hover:text-white" />
               </a>
               <a href={`tel:${PHONE_NUMBER}`} className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand-600 hover:border-brand-500 transition-all group">
                  <ICONS.Phone className="w-5 h-5 text-blue-200 group-hover:text-white" />
               </a>
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h4 className="text-lg font-black font-display uppercase tracking-widest mb-10 text-white/90">Our Services</h4>
            <ul className="space-y-4">
              {['AC Repair & Service', 'Central HVAC Systems', 'VRF / VRV Solutions', 'AMC Contracts', 'Washing Machine Repair', 'Fridge Maintenance'].map((item) => (
                <li key={item}>
                  <Link to="/#services" className="text-blue-100/40 hover:text-blue-400 transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-lg font-black font-display uppercase tracking-widest mb-10 text-white/90">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Commercial Division', 'Blog', 'About Us', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-blue-100/40 hover:text-blue-400 transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-lg font-black font-display uppercase tracking-widest mb-10 text-white/90">HQ Office</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                  <ICONS.Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Emergency Line</p>
                  <p className="text-lg font-black font-display">{PHONE_NUMBER}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                   <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Address</p>
                  <p className="text-sm font-medium leading-relaxed text-blue-100/60 max-w-[200px]">{ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            © {new Date().getFullYear()} {COMPANY_NAME} • ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-8">
             <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">GST: {GST_NUMBER}</div>
             <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">UDYAM: {UDYAM_NUMBER}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
