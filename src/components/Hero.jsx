import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} 
      className="min-h-screen flex flex-col justify-center items-center bg-blue-600 text-white text-center px-6 sm:px-12 md:px-24"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl sm:text-6xl font-extrabold mb-6 max-w-4xl"
      >
        Sell Your Software Quickly & Securely
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl sm:text-2xl mb-8 max-w-2xl"
      >
        Get fast and instant payments for your software with us.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100 transition"
      >
        Get a Quote
      </motion.button>
    </motion.section>
  )
}
