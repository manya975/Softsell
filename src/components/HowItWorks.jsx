import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const pictures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5-5m0 0l5 5m-5-5v12" />
        </svg>
      ),
      title: 'Upload License',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M8 16V8m4 8v-4m4 4V4M13 9h2.5a1.5 1.5 0 100-3H13V4h2.5a3 3 0 110 6H13v-1z" />
</svg>

      ),
      title: 'Get Valuation',
    },
    {
      icon: (
        <svg
  xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"
>
  <rect x="2" y="7" width="20" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 7v10M7 7v10" />
</svg>

      ),
      title: 'Get Paid',
    },
  ]
  

export default function HowItWorks() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="py-16 px-6 sm:px-12 md:px-24 bg-gray-50 dark:bg-gray-800 text-center"
    >
      <motion.h2 className="text-4xl font-bold mb-12" variants={item}>
        How It Works
      </motion.h2>
      <div className="flex flex-col sm:flex-row justify-center gap-12 max-w-5xl mx-auto">
        {pictures.map(({ icon, title }, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex flex-col items-center bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 flex-1"
            role="listitem"
          >
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
