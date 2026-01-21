'use client'

import { useState, useEffect } from 'react'
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Logo from '../assets/images/DH.png'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Behind The Build', href: '/process' },
    { name: 'Crafted Solutions', href: '/services' },
    { name: 'The Hub Log', href: '/work' },
    { name: 'Say Hello', href: '/contact' },
  ]

  return (
    <HeroNavbar
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-light ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Left: Logo */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/" className="transition-transform hover:scale-105">
            <Image
              src={Logo}
              alt="The Design Hub Logo"
              width={60}
              height={60}
              className="h-10 w-10 md:h-14 md:w-14 object-contain bg-transparent"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Nav: Centered & Spacious */}
      <NavbarContent
        className="hidden lg:flex justify-center items-center gap-12 uppercase text-[0.75rem] tracking-[0.3em]"
        justify="center"
      >
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              href={link.href}
              className="relative group text-white/70 hover:text-[#37b7ff] transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#37b7ff] transition-all duration-300 group-hover:w-full" />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Toggle */}
      <div className="lg:hidden flex items-center pr-2">
        <button
          className="text-white p-2 bg-white/5 rounded-full border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center gap-8 uppercase text-xl tracking-[0.2em] lg:hidden"
          >
            {/* Logo in overlay */}
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="mb-8 opacity-50"
            />

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-white hover:text-[#37b7ff]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Close trigger on background click */}
            <div
              className="absolute top-6 right-6 p-4"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} className="text-white/50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </HeroNavbar>
  )
}

export default Navbar
