import React from 'react'
import { NavLink } from 'react-router-dom'
import '/src/css/components/Nav.css'

const Nav = () => {
  return (
    <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Nav