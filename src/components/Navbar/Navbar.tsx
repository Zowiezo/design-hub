// @ts-ignore
import React from 'react'
import {
  Navbar as HeroNavbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarBrand,
} from '@heroui/react'
import Logo from '../../assets/images/DH.png'

const Navbar = () => {
  return (
    <HeroNavbar
      className="fixed top-0 w-full z-50 bg-[#000] py-6 justify-center"
      isBordered
    >
      <NavbarBrand>
        <Link href="/">
          <img
            src={Logo}
            alt="The Design Hub Logo"
            className="h-[5rem] w-[5rem] sm:h-[20rem] sm:w-[20rem] md:h-[20rem] md:w-[20rem] object-contain ml-[5rem] mt-[1.5rem]"
          />{' '}
        </Link>{' '}
      </NavbarBrand>
      {/* Centered Nav Links */}
      <NavbarContent
        className="flex justify-center items-center gap-[7rem] mr-[13rem] uppercase text-[calc(1.5rem*1)] tracking-widest relative z-10"
        justify="center"
      >
        <NavbarItem>
          <Link
            href="/about"
            className="hover:text-[#37b7ff] text-[#fff] transition-colors duration-200"
          >
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/process"
            className="hover:text-[#37b7ff] text-[#fff]  transition-colors duration-200"
          >
            Our Process
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/services"
            className="hover:text-[#37b7ff] text-[#fff] transition-colors duration-200"
          >
            Our Services
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/contact"
            className="hover:text-[#37b7ff] text-[#fff]  transition-colors duration-200"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  )
}

export default Navbar
