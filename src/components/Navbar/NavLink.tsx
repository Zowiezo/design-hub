import React from 'react'
import { NavLink as RouterLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

interface CustomNavLinkProps {
  to: string
  label: string
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, label }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <RouterLink
      to={to}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
    >
      {label}
    </RouterLink>
  )
}

export default CustomNavLink
