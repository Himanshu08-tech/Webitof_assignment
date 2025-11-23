// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Nav.jsx";        // your header file
import Footer from "./Components/Footer.jsx";

// “Pages” (for now using Components folder)
import Home from "./Components/Hero.jsx";
import Services from "./Components/Services.jsx";
import Pricing from "./Components/Pricing.jsx";
import Resorts from "./Components/Filter.jsx";    // filter/slider = resorts page
import About from "./Components/About.jsx";
import Blog from "./Components/Blog.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;