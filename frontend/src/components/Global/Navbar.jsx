import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaTicketAlt, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setMenuOpen(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
  return (
    <>
      <div className={`fixed top-2 left-1/2 w-full transform -translate-x-1/2 px-9 py-4 flex items-center justify-between rounded-lg shadow-lg backdrop-blur-md transition-all duration-300 z-50 max-w-6xl min-h-[75.5px] ${isScrolled ? "bg-inherit" : "bg-gray-200 bg-opacity-100"}`}>
        <Link to="/" className="flex items-center active:scale-90 duration-400">
          <FaTicketAlt className="text-xl text-black" />
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/event" className="text-black font-medium text-sm hover:text-gray-600 transition cursor-pointer duration-300">
            Event
          </Link>
          <Link to="/bantuan" className="text-black font-medium text-sm hover:text-gray-600 transition cursor-pointer duration-300">
            Bantuan
          </Link>
 
          <div className="flex items-center bg-black rounded-full px-2 py-1.5 w-[440px]">
            <input
              type="text"
              placeholder="Cari event disini ..."
              className="bg-black text-white outline-none placeholder-gray-400 flex-1 px-3 py-1 rounded-full text-xs"
            />
            <button className="bg-gray-500 p-2 rounded-full text-white flex items-center justify-center border-[0.5px] border-white transition-all duration-300 hover:bg-black hover:opacity-80 active:scale-90">
              <FaSearch className="text-sm" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <button className="border border-black rounded-full px-5 py-2 font-medium text-black text-sm w-[95px] transition hover:bg-black hover:text-white active:scale-90 duration-300">
            Register
          </button>
          <button className="bg-black text-white rounded-full px-5 py-2 font-medium text-sm w-[95px] transition hover:bg-gray-200 hover:text-black hover:border hover:border-black active:scale-90 duration-300">
            Login
          </button>
        </div>

        <button className="lg:hidden text-xl text-black" onClick={() => setMenuOpen(true)}>
           {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setMenuOpen(false)}></div>

      <div className={`fixed bottom-0 left-0 w-full bg-gray-200 rounded-t-2xl shadow-lg p-6 transition-transform duration-300 ${menuOpen ? "translate-y-0" : "translate-y-full"}`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 transition">
          <FaTimes />
        </button>
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/event" className="flex justify-between items-center text-black hover:text-gray-600 transition cursor-pointer duration-300" onClick={() => setMenuOpen(false)}>
              Event <FaChevronRight />
            </Link>
          </li>
          <li>
            <Link to="/bantuan" className="flex justify-between items-center text-black hover:text-gray-600 transition cursor-pointer duration-300" onClick={() => setMenuOpen(false)}>
              Bantuan <FaChevronRight />
            </Link>
          </li>
        </ul>

        <div className="flex items-center bg-black rounded-full px-2 py-1.5 mt-5 transition-all duration-300">
          <input
            type="text"
            placeholder="Cari event disini ..."
            className="bg-black text-white outline-none placeholder-gray-400 flex-1 px-3 py-1 rounded-full text-xs"
          />
          <button className="bg-gray-500 p-2 rounded-full text-white flex items-center justify-center border-[0.5px] border-white transition-all duration-300 hover:bg-black hover:opacity-80 active:scale-90">
            <FaSearch className="text-sm" />
          </button>
        </div>

        <div className="mt-6 flex justify-between">
          <button className="w-1/2 border border-black text-black py-2 rounded-full font-medium transition hover:bg-black hover:text-white active:scale-90 duration-300">
            Register
          </button>
          <button className="w-1/2 bg-black text-white py-2 rounded-full font-medium transition hover:bg-gray-200 hover:text-black border border-black ml-2 active:scale-90 duration-300">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
