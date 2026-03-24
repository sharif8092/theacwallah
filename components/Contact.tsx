
import React, { useState } from 'react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, ADDRESS, ICONS, COMPANY_NAME } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'AC Repair',
    urgency: 'Same Day Service'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Service Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Urgency:* ${formData.urgency}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 relative scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/5">
            
            {/* Left: Actions */}
            <div className="lg:w-2/5 p-8 md:p-16 bg-blue-900 relative">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tight">
                Emergency <br />
                <span className="text-blue-400">Hub</span>
              </h2>

              <p className="text-blue-100/60 mb-10 text-sm md:text-base">
                Real-time dispatch monitored across Delhi NCR. Guaranteed <span className="text-white font-bold">Same Day Service</span>.
              </p>

              <div className="space-y-6">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-all">
                    <ICONS.Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl md:text-2xl font-black text-white">{PHONE_NUMBER}</span>
                </a>

                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-green-500 transition-all">
                    <ICONS.WhatsApp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl md:text-2xl font-black text-white">WhatsApp Now</span>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-2">Headquarters</p>
                <p className="text-[11px] text-white/50 leading-relaxed">{ADDRESS}</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-3/5 p-8 md:p-16 bg-white">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-8">Service Dashboard</h3>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none font-bold transition-all text-sm"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2">Mobile Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="10 Digit Number"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none font-bold transition-all text-sm"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2">Service Required</label>
                  <select 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none font-bold transition-all text-sm appearance-none"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option>AC Repair & Service</option>
                    <option>AC on Rent</option>
                    <option>Old AC Buy & Sell</option>
                    <option>Washing Machine Repair</option>
                    <option>Fridge Fix & Gas Filling</option>
                    <option>AC Installation</option>
                    <option>AC AMC Service</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl text-lg shadow-xl transition-all transform active:scale-95"
                >
                  Book Specialist Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
