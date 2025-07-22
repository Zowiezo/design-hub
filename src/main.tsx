//main.tsx
// import Head from 'next/head'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Home from './sections/Home/Home'
import About from './sections/About/About'
import Process from './sections/our-process/OurProcess'
import Services from './pages/Services'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/Privacy'
import TermsOfService from './pages/Term'
import CookiesPolicy from './pages/Cookie'

import './style/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Head> */}
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    {/* </Head> */}
  </React.StrictMode>,
)
