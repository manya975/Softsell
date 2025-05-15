import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const reasons = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 14v2" />
      </svg>
      
      ),
      title: 'Secure & Reliable',
      desc: 'We guarantee safe transactions with top-level encryption.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      
      ),
      title: 'Fast Valuation',
      desc: 'Get an instant and fair price estimate for your licenses.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M20 4l-6 6M4 20l6-6" />
</svg>

      ),
      title: 'Easy Process',
      desc: 'Simple upload, quick approval, and fast payment.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 8.5a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H6l-4 3V8.5z" />
        </svg>
      ),
      title: '24/7 Support',
      desc: 'Our expert team is available round the clock to assist you.',
    },  
]
export default function WhyChooseUs() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="py-16 px-6 sm:px-12 md:px-24 bg-white dark:bg-gray-900 text-center"
    >
      <motion.h2 className="text-4xl font-bold mb-12" variants={item}>
        Why Choose Us
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {reasons.map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            variants={item}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center"
            role="listitem"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
