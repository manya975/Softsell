import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const questions = {
  'how do i sell my license?':
    'Upload your license in the How It Works section and follow the steps.',
  'what types of licenses do you buy?':
    'We buy Windows, Microsoft Office, Adobe Suite licenses, and more.',
  'how long does payment take?':
    'Payments are processed within 48 hours of license approval.',
}

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about selling your licenses.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  function sendMessage(messageToSend) {
    const question = messageToSend?.toLowerCase() || input.toLowerCase()
    if (!question.trim()) return

    setMessages((msgs) => [...msgs, { from: 'user', text: messageToSend || input }])
    setInput('')
    setLoading(true)

    setTimeout(() => {
      const answer = questions[question] || "Sorry, I don't understand that. Please try another question."
      setMessages((msgs) => [...msgs, { from: 'bot', text: answer }])
      setLoading(false)
    }, 800)
  }

  return (
    <>
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg z-50 hover:bg-gray-700 transition transform hover:scale-110 active:scale-90"
        aria-label="Chat widget"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.653 0-3.19-.402-4.472-1.09L3 21l1.25-3.75C3.483 15.3 3 13.7 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 max-w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col"
          >
            <div className="p-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
              Chat With Me
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-3 max-h-64">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.from === 'user' ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: msg.from === 'user' ? 50 : -50 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg p-2 max-w-[75%] ${
                      msg.from === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Show options only immediately after first bot message */}
              {!loading && messages.length === 1 && (
                <div className="flex flex-col space-y-2 mt-2">
                  {Object.keys(questions).map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-left px-3 py-1 rounded hover:bg-blue-100 dark:hover:bg-blue-700 transition"
                      aria-label={`Ask: ${q}`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {loading && (
                <div className="text-gray-500 dark:text-gray-400 italic animate-pulse">
                  Typing...
                </div>
              )}
            </div>

            <div className="p-2 border-t border-gray-300 dark:border-gray-700 flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask a question..."
                className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none"
                aria-label="Chat input"
              />
              <button
                onClick={() => sendMessage()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded transition transform hover:scale-105 active:scale-95"
                aria-label="Send message"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
