'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieConsent from './CookieConsent'
import { Particles } from './magicui/particles'

const GA_MEASUREMENT_ID = 'G-4JWFVCZMGC'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, unknown>,
    ) => void
  }
}

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname()

  // Google Analytics Route Tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen bg-black font-poppins selection:bg-[#37b7ff]/30 selection:text-[#37b7ff]">
      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />

      {/* Persistent Navbar */}
      <Navbar />

      <main className="relative flex-grow flex flex-col pt-20 md:pt-24">
        {/* Global Particle Background - Stays behind content */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <Particles
            className="w-full h-full opacity-40"
            color="#37b7ff"
            quantity={120}
            ease={80}
            size={0.05}
            staticity={50}
          />
        </div>

        {/* Dynamic Content Wrapper */}
        <div className="relative z-10 w-full">{children}</div>

        <CookieConsent />
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  )
}

export default ClientLayout
