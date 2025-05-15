import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 text-center"
    >
      <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
    </motion.footer>
  )
}
