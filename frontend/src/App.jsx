import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import Industries from './pages/Industries';
import ServiceDetails from './components/ServiceDetails';
import Footer from './components/Footer';
import IndustryDetails from './components/IndustryDetails';
import ScrollToTop from './utils/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactBanner from './components/ContactBanner';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <NavBar />
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
      <ContactBanner/>
      <Footer/>
    </Router>
  )
}

export default App
