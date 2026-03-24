
import React from 'react';
import { COMPANY_NAME, PHONE_NUMBER, EMAIL, ADDRESS, AREAS, ICONS, GST_NUMBER, UDYAM_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt={COMPANY_NAME} 
                className="w-10 h-10 object-contain rounded-lg shadow-md"
              />
              <span className="text-xl font-black text-white tracking-tighter uppercase">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed">
              Legally registered enterprise providing premium appliance maintenance. MSME Verified service across Delhi NCR.
            </p>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 space-y-1">
               <p>GST: {GST_NUMBER}</p>
               <p>Udyam: {UDYAM_NUMBER}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">AC Repair</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Washer Repair</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Fridge Repair</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">AMC Contracts</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <ICONS.Phone className="w-4 h-4 text-blue-500" />
                <span className="text-white font-bold">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white font-bold">{EMAIL}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 mt-1">
                   <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                </div>
                <p className="text-xs">{ADDRESS}</p>
              </li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Coverage</h4>
            <div className="flex flex-wrap gap-2">
              {AREAS.slice(0, 8).map(area => (
                <span key={area} className="text-[10px] border border-white/10 px-2 py-1 rounded-md uppercase">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Licensed Hub.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
