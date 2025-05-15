import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const reviews = [
  {
    name: 'Rajiv Singh',
    role: 'IT Manager',
    company: 'SoftByte',
    review: 'Super easy and fast process! Highly recommend SoftSell.',
  },
  {
    name: 'Karan Luthra',
    role: 'CEO',
    company: 'Luthra Industries',
    review: 'Great service with fair valuations and prompt payments.',
  },
]
export default function Testimonials() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="py-16 px-6 sm:px-12 md:px-24 bg-gray-50 dark:bg-gray-800 text-center"
    >
      <motion.h2 className="text-4xl font-bold mb-12" variants={item}>
        Customer Testimonials
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {reviews.map(({ name, role, company, review }, i) => (
          <motion.blockquote
            key={i}
            variants={item}
            className="bg-white dark:bg-gray-700 rounded-xl shadow p-8 text-left"
          >
            <p className="text-xl italic mb-6">"{review}"</p>
            <footer className="font-semibold">
              {name}, {role} at {company}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </motion.section>
  )
}
