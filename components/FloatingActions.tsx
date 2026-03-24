
import React from 'react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, ICONS } from '../constants';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Desktop Floating WhatsApp Bubble */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed hidden md:flex bottom-10 right-10 z-50 bg-green-500 text-white w-16 h-16 rounded-full items-center justify-center shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 group"
        aria-label="Contact on WhatsApp"
      >
        <ICONS.WhatsApp className="w-8 h-8" />
        <span className="absolute right-full mr-3 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 whitespace-nowrap border border-gray-100">
          Chat with an Expert!
        </span>
      </a>

      {/* Mobile Sticky Dual-Action Bar (Always visible at bottom on mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] p-4 bg-white/90 backdrop-blur-xl border-t border-gray-100 flex gap-3 shadow-[0_-15px_30px_rgba(0,0,0,0.15)]">
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="flex-[1.5] relative overflow-hidden bg-blue-600 text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-3 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] active:bg-blue-700 active:scale-95 transition-all text-sm uppercase tracking-wider animate-pulse-ring"
        >
          {/* Subtle scanning light effect */}
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[scan_3s_infinite]"></span>
          <div className="relative">
            <ICONS.Phone className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </div>
          Call Now
        </a>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-3 shadow-[0_10px_20px_-5px_rgba(34,197,94,0.4)] active:bg-green-600 active:scale-95 transition-all text-sm uppercase tracking-wider"
        >
          <ICONS.WhatsApp className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
