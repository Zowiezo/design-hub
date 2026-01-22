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
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-montserrat font-thin tracking-widest text-white uppercase">
                The Design Hub <span className="text-[#37b7ff]">Management</span>
              </h2>
              <p className="text-gray-400 font-poppins font-light max-w-sm leading-relaxed text-sm">
                A creative tech studio redefining digital landscapes through
                UI/UX, branding, and engineering excellence.
              </p>
            </div>
            
            <div className="flex gap-5">
              <a href="https://www.facebook.com/TheDesignHubMgt" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-[#37b7ff] transition-all duration-300"><FaFacebook /></a>
              <a href="https://www.instagram.com/thedesignhubmgt/" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-[#37b7ff] transition-all duration-300"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/thedesignhubmgt" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-500 hover:text-[#37b7ff] transition-all duration-300"><FaLinkedin /></a>
            </div>

            {/* STRATEGIC PARTNER BADGE */}
            <div className="pt-8 border-t border-white/5 max-w-sm">
              <p className="font-poppins text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold mb-4">
                Strategic Growth Partner
              </p>
              <Link 
                href="https://www.mediacnr.co.za" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 transition-all duration-500"
              >
                <div className="px-3 py-1.5 border border-white/10 rounded bg-white/[0.02] group-hover:border-[#37b7ff]/50 group-hover:bg-[#37b7ff]/5 transition-all">
                   <span className="font-montserrat text-[10px] font-bold tracking-tighter text-white uppercase">
                      Media<span className="text-[#37b7ff]">.cnr</span>
                   </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins text-[9px] text-gray-500 group-hover:text-white transition-colors uppercase tracking-[0.2em] font-medium">
                    Growth & SEO
                  </span>
                  <span className="font-poppins text-[8px] text-gray-700 uppercase tracking-widest">
                    www.mediacnr.co.za
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Studio</h3>
            <nav className="flex flex-col gap-4 text-gray-300 font-light text-sm">
              <Link href="/about" className="hover:text-[#37b7ff] transition-colors w-fit">Our Story</Link>
              <Link href="/services" className="hover:text-[#37b7ff] transition-colors w-fit">Our Services</Link>
              <Link href="/work" className="hover:text-[#37b7ff] transition-colors w-fit">Our Work</Link>
              <Link href="/process" className="hover:text-[#37b7ff] transition-colors w-fit">Our Process</Link>
              <Link href="/contact" className="hover:text-[#37b7ff] transition-colors w-fit">Contact</Link>
            </nav>
          </div>

          {/* Contact Peek */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              Location
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 font-light leading-relaxed text-sm">
                Based in Johannesburg, <br />
                South Africa • Serving Globally
              </p>
              <a
                href="mailto:hello@thedesignhub.co.za"
                onClick={(e) => e.stopPropagation()}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[#37b7ff] border-b border-[#37b7ff]/20 pb-1 hover:border-[#37b7ff] transition-all cursor-pointer font-medium text-sm tracking-wide"
              >
                hello@thedesignhub.co.za
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-gray-600 font-montserrat font-thin tracking-[0.2em] uppercase text-center md:text-left">
            © {currentYear} THE DESIGN HUB MANAGEMENT. ENGINEERED FOR THE MODERN ERA.
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
            <Link href="/term" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookie" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer