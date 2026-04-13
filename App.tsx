import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import ServiceDetail from './pages/ServiceDetail.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import Blog from './pages/Blog.tsx';
import BlogPost from './pages/BlogPost.tsx';
import QuickBookingModal from './components/QuickBookingModal.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
        <QuickBookingModal />
      </div>
    </BrowserRouter>
  );
};

export default App;
