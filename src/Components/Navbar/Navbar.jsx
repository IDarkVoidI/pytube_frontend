import React from 'react'
import './Navbar.css'
import { Button, HStack, Link } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'
import SignUpModal from '../Modals/SignUpModal'
import LoginModal from '../Modals/LoginModal'


const Navbar = () => {
    return (
        <nav className='flex space-between navbar center-items'>
            <div>
                <Heading as='h2' size='lg'>CyberX</Heading>
            </div>
            <HStack>
                <Link to={'/'} as={ReachLink}>Home</Link>
                <Link to={'/channels'} as={ReachLink}>Channels</Link>
                <Link to={'/videos'} as={ReachLink}>Videos</Link>
                <HStack>
                    <LoginModal />
                    <SignUpModal />

                </HStack>
            </HStack>
        </nav>
    )
}

export default Navbar