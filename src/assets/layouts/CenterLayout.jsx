import React from 'react'
import '/src/css/layouts/CenterLayout.css'

const CenterLayout = () => {
  return (
    <div className='center-wrapper'>
      <main className='card'>
        <Outlet />
      </main>
    </div>
  )
}

export default CenterLayout