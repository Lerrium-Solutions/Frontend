import React from 'react'
import '/src/css/pages/NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <NavLink to="/">Go to Home</NavLink>
        </div>
    )
}

export default NotFound