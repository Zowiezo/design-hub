import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Particles } from '../../components/magicui/particles'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col font-poppins min-h-screen">
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

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
