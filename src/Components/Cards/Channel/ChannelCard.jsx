import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './ChannelCard.css'
import { Avatar, Heading, WrapItem } from '@chakra-ui/react'

const ChannelCard = (props) => {
    return (
        <div>
            <Avatar width={'250px'} height={'250px'} src={'http://localhost:8000/static' + props.img} />
            <Heading>{props.title}</Heading>
            {props.loading ? <Skeleton count={3} /> : <p>{props.description}</p>}
        </div>
    )
}

export default ChannelCard