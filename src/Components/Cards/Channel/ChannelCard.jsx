import React from 'react'
import './ChannelCard.css'
import { Avatar, Heading, Box } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const ChannelCard = (props) => {
    return (
        <div>
            <Box display={'flex'}>
                <Avatar width={'150px'} height={'150px'} src={'http://localhost:8000/static' + props.img} />
                <Heading as='h2' ml={10}>{props.title}</Heading>
                <CheckCircleIcon ml={2} mt={4} w={5} h={5} />
            </Box>
        </div>
    )
}

export default ChannelCard