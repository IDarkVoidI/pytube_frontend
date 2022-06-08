import React from 'react'
import './Navbar.css'



const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <h2>PyTube</h2>
            </div>
            <div className='flex nav-links'>
                <p><a href="#">Home</a></p>
                <p><a href="#">Channels</a></p>
                <p><a href="#">Videos</a></p>
            </div>
        </nav>
    )
}

export default Navbar