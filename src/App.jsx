import { useState } from 'react'
import ChatApp from './components/ChatApp'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans min-h-screen flex flex-col">
        <header className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white dark:bg-gray-900 z-10">
        <div className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  <span className="text-gray-900 dark:text-white">SoftSell</span>
</div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <Footer />
        <ChatApp />
      </main>
    </div>
  )
}
