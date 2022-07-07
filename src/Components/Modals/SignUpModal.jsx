import React, { useState } from 'react'
import { Button, Modal, useDisclosure, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter, ModalCloseButton, Box, Text, Input } from '@chakra-ui/react'
import axios from 'axios'


const SignUpModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [data, setData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:8000/api/user/create/", {
            name, email, password
        })
        setData(res.data)
        onClose()
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <>
        <Button onClick={onOpen}>Sign Up</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent as={'form'} onSubmit={handleSubmit}>
                <ModalHeader>Sign Up!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box mb={3}>
                        <Text>Name</Text>
                        <Input type='text' onChange={(event) => setName(event.target.value)} />
                    </Box>
                    <Box mb={3}>
                        <Text>Email</Text>
                        <Input type='email' onChange={(event) => setEmail(event.target.value)} />
                    </Box>
                    <Box mb={3}>
                        <Text>Password</Text>
                        <Input type='password' onChange={(event) => setPassword(event.target.value)} />
                    </Box>
                </ModalBody>
                <ModalFooter>
                    <Button mr={3} onClick={onClose}>Close</Button>
                    <Button colorScheme={'blue'} type='submit'>Submit!</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default SignUpModal