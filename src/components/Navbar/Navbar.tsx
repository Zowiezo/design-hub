import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@heroui/react'

import Image from 'next/image'

import Logo from '../../assets/images/DH.png'

const Navbar = () => {
  return (
    <HeroNavbar
      className="fixed top-[0rem] w-full z-50 bg-[#000] py-[5px] text-sm justify-center"
      isBordered
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image
              src={Logo}
              alt="The Design Hub Logo"
              width={55}
              height={55}
              className="md:h-[20rem] md:w-[20rem] object-contain"
            />{' '}
          </Link>{' '}
        </NavbarBrand>
      </NavbarContent>

      {/* Centered Nav Links */}
      <NavbarContent
        className="hidden sm:flex flex justify-center items-center gap-[4rem] mr-[27rem] uppercase text-[calc(1.5rem*1)] tracking-widest relative z-10 text-sm"
        justify="center"
      >
        <NavbarItem className="list-none">
          <Link
            href="/about"
            className="hover:text-[#37b7ff] text-[#fff] transition-colors duration-200"
          >
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem className="list-none">
          <Link
            href="/process"
            className="hover:text-[#37b7ff] text-[#fff]  transition-colors duration-200"
          >
            Our Process
          </Link>
        </NavbarItem>

        <NavbarItem className="list-none">
          <Link
            href="/services"
            className="hover:text-[#37b7ff] text-[#fff] transition-colors duration-200"
          >
            Our Services
          </Link>
        </NavbarItem>

        <NavbarItem className="list-none">
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
