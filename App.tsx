import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import ServiceDetail from './pages/ServiceDetail.tsx';
import QuickBookingModal from './components/QuickBookingModal.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
        </Routes>
        <Footer />
        <QuickBookingModal />
      </div>
    </BrowserRouter>
  );
};

export default App;
