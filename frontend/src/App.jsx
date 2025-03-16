import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Global/Navbar';
import Home from './pages/Home'
import Bantuan from './pages/Bantuan'
import Event from './pages/Event'
import Footer from './components/Global/Footer';

const App = () => {
  return (
    <div className="pt-17">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/bantuan" element={<Bantuan />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
