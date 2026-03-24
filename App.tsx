
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import About from './components/About.tsx';
import Reviews from './components/Reviews.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import FloatingActions from './components/FloatingActions.tsx';
import QuickBookingModal from './components/QuickBookingModal.tsx';

// Simple context-like state management for the modal
export const useBookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState('AC Repair');

  const openModal = (s?: string) => {
    if (s) setService(s);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return { isOpen, service, openModal, closeModal };
};

const App: React.FC = () => {
  const { isOpen, service, openModal, closeModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero onOpenBooking={() => openModal()} />
        <Services onOpenBooking={(s) => openModal(s)} />
        <WhyChooseUs />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingActions onOpenBooking={() => openModal()} />
      <QuickBookingModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        initialService={service} 
      />
    </div>
  );
};

export default App;
