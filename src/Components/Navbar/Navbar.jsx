import React from 'react'
import './Navbar.css'
import { Link } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'


const Navbar = () => {
    return (
        <nav className='flex space-between navbar center-items'>
            <div>
                <Heading as='h2' size='lg'>CyberX</Heading>
            </div>
            <div className='flex space-evenly navbar-links'>
                <Link to={'/'} as={ReachLink}>Home</Link>
                <Link to={'/channels'} as={ReachLink}>Channels</Link>
                <Link to={'/videos'} as={ReachLink}>Videos</Link>
            </div>
        </nav>
    )
}

export default Navbar