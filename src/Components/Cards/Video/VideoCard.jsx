// video, title, channel, views, created_date, link
import React from 'react'
import { AspectRatio, Heading, Box } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const VideoCard = (props) => {
    return (
        <div>
            <Box>
                <AspectRatio maxW={'350px'} maxH={'200px'}><iframe src={props.link} allowFullScreen title='video' /></AspectRatio>
                <Heading maxW={'350px'} size={'md'} mt={2}>{props.title}</Heading>
            </Box>
            <Box display={'flex'}>
                <Heading as='h6' size='xs' mt={2}>{props.channel.title}</Heading>
                <CheckCircleIcon ml={1} mt={3} w={3} h={3} />
            </Box>
        </div>
    )
}

export default VideoCard