// src/components/CookieConsent.tsx
'use client'
import React, { useEffect, useState } from 'react'

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-10 md:right-10 bg-black border border-gray-700 shadow-lg rounded-lg p-4 z-[9999] flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-poppins">
      {/* Text */}
      <p className="text-sm text-gray-200 text-center md:text-left leading-relaxed">
        This website uses cookies to enhance your experience. By continuing to
        browse, you accept our cookie policy.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center">
        <button
          onClick={() => handleConsent(false)}
          className="px-6 py-2 text-sm md:text-base text-white border border-gray-500 rounded-md hover:bg-gray-800 transition"
        >
          Decline
        </button>
        <button
          onClick={() => handleConsent(true)}
          className="px-6 py-2 text-sm md:text-base bg-[#093876] text-white border border-[#093876] rounded-md hover:bg-[#00294d] transition"
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
