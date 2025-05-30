import React from 'react'
import { NavLink } from 'react-router-dom'
import '/src/css/components/Header.css'

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <h1 className='title'>LERRIUM SOLUTIONS</h1>
      </NavLink>  
    </header>
  )
}

export default Header