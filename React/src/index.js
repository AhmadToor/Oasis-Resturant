import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Menu from './Menus';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Nopage from './Nopage';
import PrivacyPolicy from './Privacy-policy';
import TermsCondition from './terms-and-condition';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Nopage/>} />
        <Route path="/" element={<Home/>} />
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/submit" element={<Contact/>} />
        <Route path="/testimonials" element={<Testimonial/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/term-and-conditions" element={<TermsCondition/>} />
      </Routes>
    </BrowserRouter>
    
    <Footer />
  </>
);


reportWebVitals();
