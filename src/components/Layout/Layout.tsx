'use client'

import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CookieConsent from '../CookieConsent'
import { Particles } from '../../components/magicui/particles'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-4JWFVCZMGC'

// Type-safe gtag declaration
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, unknown>,
    ) => void
  }
}

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname()

  // Track client-side route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, { page_path: pathname })
    }
  }, [pathname])

  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <Head>
        <title>The Design Hub Mgt</title>
        <meta
          name="description"
          content="Design meets innovation at The Design Hub."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="The Design Hub Management" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#000000" />

        {/* Google Analytics 4 */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>

      <Navbar />

      <main className="relative flex-grow z-10 overflow-hidden font-light">
        {/* Particles background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Particles
            className="w-full h-full"
            color="#37b7ff"
            quantity={300}
            ease={80}
            size={0.05}
          />
        </div>

        {/* Cookie Consent */}
        <CookieConsent />

        {/* Page content */}
        <div className="relative z-10">{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
