import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const creators = [
  { id: 1, name: "Lorem Ipsum Lorem", image: "/images/profile.jpg", followers: "1,290", rating: "4.9" },
  { id: 2, name: "Lorem Ipsum Lorem", image: "/images/profile.jpg", followers: "1,290", rating: "4.9" },
  { id: 3, name: "Lorem Ipsum Lorem", image: "/images/profile.jpg", followers: "1,290", rating: "4.9" },
  { id: 4, name: "Lorem Ipsum Lorem", image: "/images/profile.jpg", followers: "1,290", rating: "4.9" },
];

const BestCreator = () => {
  return (
    <motion.div
      className="max-w-[90%] sm:max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-2xl mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-center mb-8">Best Creator</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {creators.map((creator, index) => (
          <motion.div
            key={creator.id}
            className="bg-gray-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={creator.image}
              alt={creator.name || "Creator Profile"}
              className="w-20 h-20 object-cover rounded-full mb-3"
              loading="lazy"
            />
            <h3 className="text-sm font-semibold">{creator.name}</h3>
            <div className="flex items-center justify-center gap-2 mt-1 text-xs sm:text-sm text-gray-600">
              <span>{creator.followers} followers</span>
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-500 text-xs sm:text-sm" />
                {creator.rating}
              </span>
            </div>
            <motion.button
              className="mt-3 bg-black text-white px-4 py-2 rounded-md text-xs font-medium transition duration-300 hover:bg-gray-800 active:scale-90"
              whileTap={{ scale: 0.8, transition: { duration: 0.0 } }}
              className="mt-3 bg-black text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-gray-800 transition duration-300 active:scale-90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Follow ${creator.name}`}
            >
              Follow
            </motion.button>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <motion.button
          className="border border-black px-6 py-3 rounded-md text-sm font-medium transition duration-300 hover:bg-black hover:text-white active:scale-90"
          whileTap={{ scale: 0.38, transition: { duration: 0.13 } }}
          className="border border-black px-6 py-3 rounded-md text-sm font-medium hover:bg-black hover:text-white transition duration-300 active:scale-90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Lihat selengkapnya"
        >
          Selengkapnya
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BestCreator;
