import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Hero from '../../sections/Home/Hero'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col font-poppins">
      <Navbar />
      <Hero />

      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
