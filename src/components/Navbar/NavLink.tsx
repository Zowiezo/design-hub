'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

interface CustomNavLinkProps {
  to: string
  label: string
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, label }) => {
  const pathname = usePathname()
  const isActive = pathname === to

  return (
    <Link
      href={to}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
    >
      {label}
    </Link>
  )
}

export default CustomNavLink
