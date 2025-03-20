import React from "react";
import { motion } from "framer-motion";

const events = [
  { id: 1, title: "Lorem Ipsum Lorem", type: "Seminar", image: "/images/image4.jpg" },
  { id: 2, title: "Lorem Ipsum Lorem", type: "Konser", image: "/images/image4.jpg" },
  { id: 3, title: "Lorem Ipsum Lorem", type: "Workshop", image: "/images/image4.jpg" },
  { id: 4, title: "Lorem Ipsum Lorem", type: "Pameran", image: "/images/image4.jpg" },
];

const EventGratis = () => {
  return (
    <motion.div
      className="max-w-[90%] sm:max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 shadow-lg rounded-2xl mt-10"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-center mb-8">Event Gratis</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="bg-white p-4 sm:p-5 rounded-lg shadow flex flex-col h-auto cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileTap={{ scale: 0.98, transition: { duration: 0.0 } }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={event.image}
              alt={event.title || "Event Image"}
              className="w-full h-28 sm:h-36 object-cover rounded-md"
              loading="lazy"
            />
            <div className="text-center sm:text-left space-y-1 mt-3">
              <h3 className="text-sm sm:text-base font-semibold">{event.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Tipe event: <span className="text-blue-600 font-medium">{event.type}</span>
              </p>
            </div>
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

export default EventGratis;