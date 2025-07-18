// src/components/CookieConsent.tsx
import React, { useEffect, useState } from 'react'

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true)

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
    <div className="fixed bottom-4 left-4 right-4 md:left-10 md:right-10 bg-[#fff] border border-gray-300 shadow-lg rounded-md p-4 z-[9999] flex flex-col md:flex-row items-center justify-between gap-4 font-poppins">
      <p className="text-sm text-gray-700">
        This website uses cookies to enhance your experience. By continuing to
        browse, you accept our cookie policy.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsent(false)}
          className="px-3 py-1 text-sm text-gray-700 border border-gray-400 rounded hover:bg-gray-100"
        >
          Decline
        </button>
        <button
          onClick={() => handleConsent(true)}
          className="px-3 py-1 text-sm bg-[#003d6e] text-white rounded hover:bg-[#00294d]"
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
