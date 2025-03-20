import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Navbar from "./components/Global/Navbar";
import Home from "./pages/Home";
import Bantuan from "./pages/Bantuan";
import Event from "./pages/Event";
import Footer from "./components/Global/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <PulseLoader size={10} color="gray" />
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="pt-17">
      <Navbar />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/bantuan" element={<Bantuan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
};

export default App;
