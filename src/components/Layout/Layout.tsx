import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CookieConsent from '../CookieConsent'
import { Particles } from '../../components/magicui/particles'
import Head from 'next/head'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
        <html lang="en" />
      </Head>

      <Navbar />

      <main className="relative flex-grow z-10 overflow-hidden">
        {/* Scoped Particles */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Particles
            className="w-full h-full"
            color={'#37b7ff'}
            quantity={300}
            ease={80}
            size={0.05}
          />
        </div>
        {/* Cookie Consent */}
        <CookieConsent />

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
