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
    <div className="fixed bottom-[4rem] left-[4rem] right-[4rem] md:left-[10rem] md:right-[10rem] bg-[#000] border border-gray-300 shadow-lg rounded-md p-[4px] z-[9999] flex flex-col md:flex-row items-center justify-between gap-[4px] font-poppins">
      <p className="text-sm text-gray-700">
        This website uses cookies to enhance your experience. By continuing to
        browse, you accept our cookie policy.
      </p>
      <div className="flex gap-[2rem] pb-[1rem]">
        <button
          onClick={() => handleConsent(false)}
          className="px-[3rem] py-[1rem] text-[16px] text-gray-700 border border-[#fff]] rounded hover:bg-[#b7e3fe]"
        >
          Decline
        </button>
        <button
          onClick={() => handleConsent(true)}
          className="px-[3rem] py-[1rem] text-[16px] bg-[#093876] text-[#fff] border border-[#093876] rounded hover:bg-[#00294d] space-[4rem]"
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
