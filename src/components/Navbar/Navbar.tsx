'use client'

import { useState } from 'react'
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@heroui/react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Logo from '../../assets/images/DH.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeroNavbar
      className="fixed top-0 w-full z-50 bg-black py-[5px] text-sm justify-between px-6"
      isBordered
    >
      {/* Left: Logo */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src={Logo}
              alt="The Design Hub Logo"
              width={50}
              height={50}
              className="h-[3rem] w-[3rem] md:h-[5rem] md:w-[5rem] object-contain"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Nav */}
      <NavbarContent
        className="hidden md:flex justify-center items-center gap-[3rem] uppercase text-[1.1rem] tracking-widest"
        justify="center"
      >
        <NavbarItem>
          <Link
            href="/about"
            className="hover:text-[#37b7ff] text-white transition-colors"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/process"
            className="hover:text-[#37b7ff] text-white transition-colors"
          >
            Our Process
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/services"
            className="hover:text-[#37b7ff] text-white transition-colors"
          >
            Our Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/contact"
            className="hover:text-[#37b7ff] text-white transition-colors"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 uppercase text-[1rem] tracking-wider border-t border-gray-800 md:hidden">
          <Link
            href="/about"
            className="hover:text-[#37b7ff] text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/process"
            className="hover:text-[#37b7ff] text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Our Process
          </Link>
          <Link
            href="/services"
            className="hover:text-[#37b7ff] text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#37b7ff] text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </HeroNavbar>
  )
}

export default Navbar
