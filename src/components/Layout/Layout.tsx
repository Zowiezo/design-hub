// src/components/Layout/Layout.tsx

import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import Hero from '../../sections/Home/Hero'
// import Home from '../../sections/Home/Home'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col font-poppins">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
