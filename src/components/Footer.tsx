'use client'

import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-20 bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Pillar */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-montserrat font-thin tracking-widest text-white uppercase">
              The Design Hub <span className="text-[#37b7ff]">Management</span>
            </h2>
            <p className="text-gray-400 font-light max-w-sm leading-relaxed">
              A creative tech studio redefining digital landscapes through
              UI/UX, branding, and engineering excellence.
            </p>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/TheDesignHubMgt" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-[#37b7ff] transition-all"><FaFacebook /></a>
              <a href="https://www.instagram.com/thedesignhubmgt/" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-[#37b7ff] transition-all"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/thedesignhubmgt" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-[#37b7ff] transition-all"><FaLinkedin /></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Studio</h3>
            <nav className="flex flex-col gap-4 text-gray-300 font-light">
              <Link href="/about" className="hover:text-[#37b7ff] transition-colors">Our Story</Link>
              <Link href="/services" className="hover:text-[#37b7ff] transition-colors">Our Services</Link>
              <Link href="/work" className="hover:text-[#37b7ff] transition-colors">Our Work</Link>
              <Link href="/process" className="hover:text-[#37b7ff] transition-colors">Our Process</Link>
              <Link href="/contact" className="hover:text-[#37b7ff] transition-colors">Contact</Link>
            </nav>
          </div>

         {/* Contact Peek */}
<div className="relative z-20 pointer-events-auto space-y-6">
  <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
    Location
  </h3>

  <p className="text-gray-300 font-light leading-relaxed">
    Based in Johannesburg, South Africa<br />
    Serving Globally
  </p>

  <a
  href="mailto:hello@thedesignhub.co.za"
  onClick={(e) => {
    // This prevents the click from triggering parent animations/links
    e.stopPropagation(); 
  }}
  target="_blank" // Helps some browsers treat it as a new intent
  rel="noopener noreferrer"
  className="inline-block text-[#37b7ff] border-b border-[#37b7ff]/20 pb-1 hover:border-[#37b7ff] transition-all cursor-pointer font-medium"
>
  hello@thedesignhub.co.za
</a>
</div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-gray-600 font-montserrat font-thin tracking-wider uppercase">
            © {currentYear} THE DESIGN HUB MANAGEMENT. MODERN ERA.
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[11px] uppercase tracking-[0.2em] text-gray-500">
            <Link href="/term" className="hover:text-[#37b7ff] transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-[#37b7ff] transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-[#37b7ff] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer