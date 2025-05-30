import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import '/src/css/layouts/MainLayout.css'

const MainLayout = () => {
  return (
    <div className='main-wrapper'>
      <Nav />
      <Header />
      <main className='main-content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout