import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store.ts';
import { closeBooking } from '../store/slices/bookingSlice.ts';
import { WHATSAPP_NUMBER, ICONS, COMPANY_NAME } from '../constants';

const QuickBookingModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, selectedService } = useSelector((state: RootState) => state.booking);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService,
    message: ''
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeBooking());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMsg = `*New Request from ${COMPANY_NAME}*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Message:* ${formData.message || 'N/A'}%0A%0A` +
      `_I am waiting for your callback for my appliance service._`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;
    window.open(url, '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in-up">
        <div className="bg-blue-600 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <button 
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <ICONS.X className="w-6 h-6" />
          </button>
          
          <h3 className="text-3xl font-black tracking-tight mb-2">Quick Booking</h3>
          <p className="text-blue-100 font-medium opacity-80 uppercase text-[10px] tracking-widest">Authorized {COMPANY_NAME} Dispatch</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
          <div>
            <label className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-3">Your Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Enter name"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none font-bold transition-all"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-3">Mobile Number</label>
            <input 
              required
              type="tel" 
              placeholder="10 digit mobile"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none font-bold transition-all"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-3">Select Service</label>
            <select 
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none font-bold transition-all appearance-none"
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl text-xl shadow-xl shadow-blue-200 transition-all transform active:scale-95 flex items-center justify-center gap-3"
          >
            Confirm via WhatsApp
            <ICONS.WhatsApp className="w-6 h-6" />
          </button>
          
          <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Same Day Support Guaranteed
          </p>
        </form>
      </div>
    </div>
  );
};

export default QuickBookingModal;
