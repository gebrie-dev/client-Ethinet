// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import NavSidebar from './components/NavSidebar';
import HeroSection from './components/HeroSection';
import AboutVisionSection from './components/AboutVisionSection';
import FeaturedServicesSection from './components/FeaturedServicesSection';
import TrustSection from './components/TrustSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalState, setModalState] = useState({ order: false, contact: false });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = (type) => {
    setModalState({ ...modalState, [type]: true });
  };

  const closeModal = (type) => {
    setModalState({ ...modalState, [type]: false });
  };

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <NavSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} openModal={openModal} />
      <Modal
        id="orderModal"
        title="Start Your Order"
        isOpen={modalState.order}
        onClose={() => closeModal('order')}
        type="order"
      />
      <Modal
        id="contactModal"
        title="Contact Us"
        isOpen={modalState.contact}
        onClose={() => closeModal('contact')}
        type="contact"
      />
      <Routes>
        <Route
          path="/"
          element={
            <main className="container mx-auto mt-8 p-4">
              <HeroSection openModal={openModal} />
              <AboutVisionSection />
              <FeaturedServicesSection />
              <TrustSection />
              <FinalCtaSection openModal={openModal} />
            </main>
          }
        />
        <Route path="/about" element={<div className="container mx-auto p-4"><h1 className="text-3xl">About Us</h1></div>} />
        <Route path="/services" element={<div className="container mx-auto p-4"><h1 className="text-3xl">Services</h1></div>} />
        <Route path="/products" element={<div className="container mx-auto p-4"><h1 className="text-3xl">Products</h1></div>} />
        <Route path="/academy" element={<div className="container mx-auto p-4"><h1 className="text-3xl">Academy</h1></div>} />
        <Route path="/career" element={<div className="container mx-auto p-4"><h1 className="text-3xl">Career</h1></div>} />
        <Route path="/institutional-services" element={<div className="container mx-auto p-4"><h1 className="text-3xl">Institutional Services</h1></div>} />
        <Route path="/booking-payment" element={<div className="container mx-auto p-4"><h1 className="text-3xl">Booking & Payments</h1></div>} />
        <Route path="/contact" element={<div className="container mx-auto p-4"><h1 className="text-3xl">Contact Us</h1></div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;