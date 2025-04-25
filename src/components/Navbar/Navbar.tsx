// @ts-ignore
import React from 'react'
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@heroui/react'
import Logo from '../../assets/images/Design.svg'

const Navbar = () => {
  return (
    <HeroNavbar className="py-4">
      <NavbarBrand className="flex items-center gap-3">
        <img
          src={Logo}
          alt="The Design Hub Logo"
          className="h-[8rem] w-[8rem] object-contain"
        />
        <p className="font-light tracking-widest text-sm text-inherit">
          THE DESIGN HUB
        </p>
      </NavbarBrand>

      <NavbarContent className="flex gap-8  sm:flex !m-0" justify="center">
        <NavbarItem className="list-none">
          <Link
            className="text-xs  text-gray-800 hover:text-primary transition"
            href="#"
          >
            ABOUT
          </Link>
        </NavbarItem>

        <NavbarItem className="list-none" isActive>
          <Link
            className="text-xs tracking-wide text-gray-900 font-semibold border-b-2 border-primary"
            href="#"
            aria-current="page"
          >
            PROCESS
          </Link>
        </NavbarItem>

        <NavbarItem className="list-none">
          <Link
            className="text-xs tracking-wide text-gray-800 hover:text-primary transition"
            href="#"
          >
            SERVICES
          </Link>
        </NavbarItem>

        <NavbarItem className="list-none">
          <Link
            className="text-xs tracking-wide text-gray-800 hover:text-primary transition"
            href="#"
          >
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  )
}

export default Navbar
