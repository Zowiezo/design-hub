import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-xl">Design Hub</h3>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Design Hub. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white text-2xl hover:text-pink-500 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-2xl hover:text-pink-500 transition-colors" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-2xl hover:text-pink-500 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-2xl hover:text-pink-500 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
