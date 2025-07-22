import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-[calc(1rem*1)">
        {/* Social Icons */}
        <div className="flex gap-[3rem] mt-[10px]">
          <a
            href="https://www.facebook.com/TheDesignHubMgt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-[calc(1.2rem*1)] hover:text-[#37b7ff] text-[#fff] transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/thedesignhubmgt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-[calc(1.2rem*1)] hover:text-[#37b7ff] text-[#fff] transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/company/thedesignhubmgt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-[calc(1.2rem*1)] hover:text-[#37b7ff] text-[#fff] transition-colors" />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-[3rem] text-sm mt-[5px] mb-[15px]">
          {/* Copyright */}
          <div className="text-center md:text-left text-sm text-[#37b7ff]">
            © {new Date().getFullYear()} The Design Hub Management. All rights
            reserved.
          </div>
          <a
            href="/terms-of-service"
            className="hover:text-[#fff] text-[#37b7ff] transition text-[calc(1rem*1)]"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="hover:text-[#fff] text-[#37b7ff] transition text-[calc(1rem*1)]"
          >
            Privacy Policy
          </a>
          <a
            href="/cookies"
            className="hover:text-[#fff] text-[#37b7ff] transition text-[calc(1.rem*1)]"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
