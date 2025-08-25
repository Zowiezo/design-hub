import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-white">
        {/* Social Icons */}
        <div className="flex gap-6 justify-center md:justify-start">
          <Link
            href="https://www.facebook.com/TheDesignHubMgt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-xl hover:text-[#37b7ff] transition-colors" />
          </Link>
          <Link
            href="https://www.instagram.com/thedesignhubmgt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl hover:text-[#37b7ff] transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/thedesignhubmgt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl hover:text-[#37b7ff] transition-colors" />
          </Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-end items-center gap-4 text-sm text-center">
          <div className="text-[#37b7ff] order-last md:order-first">
            © {new Date().getFullYear()} The Design Hub Management. All rights
            reserved.
          </div>
          <Link
            href="/term"
            className="hover:text-white text-[#37b7ff] transition"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="hover:text-white text-[#37b7ff] transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookie"
            className="hover:text-white text-[#37b7ff] transition"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
