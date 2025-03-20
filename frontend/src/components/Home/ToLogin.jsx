import { motion } from "framer-motion";

const ToLogin = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        Log in untuk memudahkan booking
      </h2>
      <p className="text-sm sm:text-base text-gray-600 text-center mt-2">
        Log in untuk membuat akun
      </p>

      <motion.button
        className="mt-5 bg-black text-white px-6 py-2 rounded-full text-sm sm:text-base font-medium transition duration-300 hover:bg-gray-800 active:scale-90"
        whileTap={{ scale: 0.8, transition: { duration: 0.0 } }}
        className="mt-5 bg-black text-white px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition duration-300 active:scale-90"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Login
      </motion.button>
    </motion.div>
  );
};

export default ToLogin;
