// video, title, channel, views, created_date, link
import React from 'react'
import { AspectRatio, Heading } from '@chakra-ui/react'


const VideoCard = (props) => {
    return (
        <div>
            <AspectRatio maxW={'350px'} maxH={'200px'}><iframe src={props.link} allowFullScreen /></AspectRatio>
            <Heading as='h2'>{props.title}</Heading>
            <Heading as='h3'>{props.channel.title}</Heading>
        </div>
    )
}

export default VideoCard