import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import Industries from './pages/Industries';
import ServiceDetails from './components/ServiceDetails';
import Footer from './components/Footer';
import Popup from './components/Popup';
import IndustryDetails from './components/IndustryDetails';
import ScrollToTop from './utils/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactBanner from './components/ContactBanner';

function App() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    timer = setTimeout(() => {
      setShowPopup(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <div className="flex items-center justify-center gap-3 h-screen bg-white">
        <img src="/logo.png" alt="" className='h-12 w-12' />
        <h1 className="text-3xl font-bold animate-pulse bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <NavBar />

      {showPopup && (
       <Popup setShowPopup={setShowPopup}/>
      )}



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/industry/:title" element={<IndustryDetails />} />
      </Routes>

      <ContactBanner />
      <Footer />
    </Router>
  );
}

export default App;
