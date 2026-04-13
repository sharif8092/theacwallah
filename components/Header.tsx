import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { COMPANY_NAME, PHONE_NUMBER, ICONS, WHATSAPP_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/', icon: (props: any) => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { name: 'Services', href: '/#services', icon: (props: any) => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { name: 'Blog', href: '/blog', icon: (props: any) => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" /><path d="M14 4v4h4" /></svg> },
    { name: 'About', href: '/#about', icon: (props: any) => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { name: 'Contact', href: '/#contact', icon: (props: any) => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
        // If we are on the home page, scroll to element
        if (window.location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(href.replace('/#', ''));
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-[100] bg-white/70 backdrop-blur-2xl border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt={`${COMPANY_NAME} - Best AC Repair & Service in Delhi NCR`} 
                className="w-12 h-12 object-contain rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-blue-200 brightness-0 invert mix-blend-screen"
              />
              <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <span className="block text-xl font-black font-display text-slate-900 uppercase tracking-tighter leading-none">
                {COMPANY_NAME}
              </span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1 block opacity-80">
                Delhi NCR Experts
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4">

               {/* Auth */}
               {user ? (
                 <div className="relative group">
                    <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold text-sm tracking-widest uppercase">
                       <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          {user.user_nicename?.charAt(0).toUpperCase()}
                       </div>
                    </button>
                    <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[110]">
                       <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-48">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-2">Account</p>
                         <button onClick={() => dispatch(logout())} className="w-full text-left p-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors">Sign Out</button>
                       </div>
                    </div>
                 </div>
               ) : (
                 <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest">Login</Link>
               )}
            </div>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
            >
              Call Now
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-3 bg-slate-50 text-slate-900 rounded-2xl border border-gray-100 active:scale-95 transition-transform"
          >
            <ICONS.Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed inset-0 z-[1000] lg:hidden ${isOpen ? 'visible' : 'invisible'}`}>
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-slate-950/20 backdrop-blur-md transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute right-4 w-[85%] max-w-[340px] bg-white/70 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[110%] opacity-0 scale-95'}
          shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col ring-1 ring-white/50`}
          style={{
            top: '5vh',
            bottom: '5vh',
            borderRadius: '2.5rem'
          }}
        >
          <div className="bg-gradient-to-br from-slate-900/95 to-black/90 backdrop-blur-xl p-6 flex justify-between items-center rounded-t-[2.5rem] border-b border-white/10 shadow-sm">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group" aria-label={`${COMPANY_NAME} Home`}>
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt={`${COMPANY_NAME} - Professional AC Repair & Service Delhi`}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-110 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white text-[13px] uppercase tracking-widest leading-none">Main Menu</span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1 opacity-80">Authorized Hub</span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white active:scale-90 transition hover:bg-white/20"
            >
              <ICONS.X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-8 space-y-2 scrollbar-hide">
             <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5">Quick Access</p>
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-4 px-4 py-4 rounded-[1.5rem] text-slate-800 font-bold hover:bg-white/40 transition-all group active:scale-[0.98] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className="w-10 h-10 bg-slate-100/50 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-slate-950 group-hover:text-white group-hover:shadow-lg group-hover:shadow-slate-300 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-base tracking-tight group-hover:text-black transition-colors">{link.name}</span>
                </a>
              );
            })}

            <div className="mt-8 pt-8 border-t border-black/5 space-y-4">
              <p className="px-4 text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4">Support Line</p>
              
              <div className="px-1 space-y-3">
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-4 p-4 rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-400/20 active:scale-95 transition-all relative overflow-hidden group border border-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <ICONS.Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-black tracking-tight leading-none mb-1">Call AC Specialist</span>
                    <span className="text-[10px] font-bold uppercase opacity-80">Same Day Arrival</span>
                  </div>
                </a>

                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-4 p-4 rounded-[2rem] bg-green-500 text-white shadow-2xl shadow-green-400/30 active:scale-95 transition-all group relative overflow-hidden border border-green-400/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
                    <ICONS.WhatsApp className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-black tracking-tight leading-none mb-1">WhatsApp Chat</span>
                    <span className="text-[10px] font-bold uppercase opacity-80">Instant Response</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white/20 backdrop-blur-xl border-t border-black/5 text-center rounded-b-[2.5rem]">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1 leading-none">{COMPANY_NAME} Delhi</p>
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest opacity-60">Authorized Service Hub • NCR</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
