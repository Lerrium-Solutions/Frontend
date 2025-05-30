import React from 'react'
import { NavLink } from 'react-router-dom'
import '/src/css/components/Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
    </nav>
  )
}

export default Nav