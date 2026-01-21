'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Small delay to ensure the page is loaded and ready
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent')
      if (!consent) setShowBanner(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2rem] p-6 z-[9999] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Content */}
          <div className="flex-1 space-y-1">
            <h4 className="text-white text-sm font-medium tracking-wide">
              Cookie Preferences
            </h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              We use cookies to optimize your experience at The Hub. See our{' '}
              <Link
                href="/privacy"
                className="text-[#37b7ff] underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => handleConsent(false)}
              className="flex-1 md:flex-none px-5 py-2.5 text-xs text-gray-400 border border-white/10 rounded-full hover:bg-white/5 transition-all"
            >
              Decline
            </button>
            <button
              onClick={() => handleConsent(true)}
              className="flex-1 md:flex-none px-6 py-2.5 text-xs bg-[#37b7ff] text-black font-semibold rounded-full hover:bg-[#b7e3fe] transition-all shadow-[0_0_20px_rgba(55,183,255,0.3)]"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
