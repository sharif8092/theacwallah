import React from 'react';
import { useDispatch } from 'react-redux';
import { openBooking } from '../store/slices/bookingSlice.ts';
import Hero from '../components/Hero.tsx';
import Services from '../components/Services.tsx';
import WhyChooseUs from '../components/WhyChooseUs.tsx';
import About from '../components/About.tsx';
import Reviews from '../components/Reviews.tsx';
import Contact from '../components/Contact.tsx';
import FloatingActions from '../components/FloatingActions.tsx';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenBooking = (service?: string) => {
    dispatch(openBooking(service));
  };

  return (
    <>
      <main className="pb-24 md:pb-0">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <Services onOpenBooking={(s) => handleOpenBooking(s)} />
        <WhyChooseUs />
        <About />
        <Reviews />
        <Contact />
      </main>
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />
    </>
  );
};

export default Home;
