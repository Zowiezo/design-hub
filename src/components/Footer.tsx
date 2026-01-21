'use client'

import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Upper Footer: Branding & Quick Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Pillar */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-light tracking-widest text-white uppercase">
              The Design Hub <span className="text-[#37b7ff]">Management</span>
            </h2>
            <p className="text-gray-400 font-light max-w-sm leading-relaxed">
              A creative tech studio redefining digital landscapes through
              UI/UX, branding, and engineering excellence.
            </p>
            <div className="flex gap-5">
              {[
                {
                  icon: <FaFacebook />,
                  url: 'https://www.facebook.com/TheDesignHubMgt',
                },
                {
                  icon: <FaInstagram />,
                  url: 'https://www.instagram.com/thedesignhubmgt/',
                },
                {
                  icon: <FaLinkedin />,
                  url: 'https://www.linkedin.com/company/thedesignhubmgt',
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.url}
                  target="_blank"
                  className="text-xl text-gray-500 hover:text-[#37b7ff] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              Studio
            </h3>
            <nav className="flex flex-col gap-4 text-gray-300 font-light">
              <Link
                href="/about"
                className="hover:text-[#37b7ff] transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/services"
                className="hover:text-[#37b7ff] transition-colors"
              >
                Our Services
              </Link>

              <Link
                href="/work"
                className="hover:text-[#37b7ff] transition-colors"
              >
                Our Work
              </Link>

              <Link
                href="/process"
                className="hover:text-[#37b7ff] transition-colors"
              >
                Our Process
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#37b7ff] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Peek */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
              Location
            </h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Based in Johannesbueg, South Africa
              <br />
              Serving Globally
            </p>
            <Link
              href="mailto:hello@thedesignhub.co.za"
              className="inline-block text-[#37b7ff] border-b border-[#37b7ff]/30 pb-1 hover:border-[#37b7ff] transition-all"
            >
              hello@thedesignhub.co.za
            </Link>
          </div>
        </div>

        {/* Bottom Footer: Legal & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-gray-600 tracking-wider">
            © {currentYear} THE DESIGN HUB MANAGEMENT. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[11px] uppercase tracking-[0.2em] text-gray-500">
            <Link
              href="/term"
              className="hover:text-[#37b7ff] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#37b7ff] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie"
              className="hover:text-[#37b7ff] transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
