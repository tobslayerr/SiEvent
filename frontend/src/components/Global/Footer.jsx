import React from "react";
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10">

      <div className="bg-gray-300 text-black text-center py-8">
        <div className="flex flex-col items-center space-y-4">
            <FaTicketAlt className="text-3xl text-black" />
          <h2 className="font-bold text-base">SI EVENT</h2>
          <div className="flex space-x-3 text-lg">
            <FaFacebook className="cursor-pointer hover:text-gray-600 transition" />
            <FaXTwitter className="cursor-pointer hover:text-gray-600 transition" />
            <FaLinkedin className="cursor-pointer hover:text-gray-600 transition" />
            <FaInstagram className="cursor-pointer hover:text-gray-600 transition" />
          </div>
          <div className="text-sm text-gray-700 flex space-x-3 flex-wrap justify-center">
            <span className="cursor-pointer hover:underline">Syarat dan Ketentuan</span>
            <span>•</span>
            <span className="cursor-pointer hover:underline">Apa itu Sievent?</span>
            <span>•</span>
            <span className="cursor-pointer hover:underline">Kebijakan Privasi</span>
          </div>
        </div>
      </div>

      <div className="bg-black text-white text-center py-4 text-sm font-semibold">
        ©2024. SiEvent. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
