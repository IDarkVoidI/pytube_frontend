import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <h2>PyTube</h2>
            </div>
            <div className='flex nav-links'>
                <p><Link to={'/'}>Home</Link></p>
                <p><Link to={'/channels'}>Channels</Link></p>
                <p><Link to={'/videos'}>Videos</Link></p>
            </div>
        </nav>
    )
}

export default Navbar