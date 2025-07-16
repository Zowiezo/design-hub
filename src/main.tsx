//main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
// import Hero from './sections/Home/Hero'

import Home from './sections/Home/Home'
import About from './sections/About/About'

import './style/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Hero />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add other routes here when needed */}
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
