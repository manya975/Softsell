import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [showPopup, setShowPopup] = useState(false)

  const licenseOptions = [
    'Windows',
    'Apache',
    'Microsoft Office',
    'Adobe Suite',
    'Other',
  ]
  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email'
    if (!form.licenseType) newErrors.licenseType = 'Please select a license'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setShowPopup(true)
    setForm({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: '',
    })
    setTimeout(() => setShowPopup(false), 3000)
  }
  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="py-16 px-6 sm:px-12 md:px-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg mx-auto w-full sm:w-3/4 md:w-1/2">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center" variants={item}>
          Contact Form
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6" variants={container}>
          <motion.div variants={item}>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              required/>
            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
            )}
          </motion.div>

          <motion.div variants={item}>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email *
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              required/>
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={item}>
            <label htmlFor="company" className="block font-semibold mb-1">
              Company
            </label>
            <input
              placeholder="Enter name of the company"
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>
          <motion.div variants={item}>
            <label htmlFor="licenseType" className="block font-semibold mb-1">
              License Type *
            </label>
            <select
              id="licenseType"
              name="licenseType"
              value={form.licenseType}
              onChange={handleChange}
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.licenseType ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            >
              <option value="">Select License Type</option>
              {licenseOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.licenseType && (
              <p className="text-red-500 mt-1 text-sm">{errors.licenseType}</p>
            )}
          </motion.div>

          <motion.div variants={item}>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message *
            </label>
            <textarea
              placeholder="Enter message"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.message && (
              <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
            )}
          </motion.div>
          <motion.button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded w-full transition transform hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.section>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-8 left-[650px] transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 select-none font-semibold"
          >
            Form submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
