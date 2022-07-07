import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import { Box, Heading, Avatar, Grid, Text, Stack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'
import { BASE_URL } from '../../utils/api'
import VideoCard from '../../Components/Cards/Video/VideoCard'

function SingleChannel() {
    const [channel, setChannel] = useState({})

    const params = useParams();

    const fetchChannelId = async () => {
        const response = await fetch(`${BASE_URL}/api/channel/${params.id}`)
        const result = await response.json()
        setChannel(result)
    }

    useEffect(() => {
        fetchChannelId()
    })

    console.log(channel);

    return (
        <div><Navbar />
            <Box as='main' mt={50} padding={'10px 10%'}>
                <Box display={'flex'}>
                    <Avatar width={'150px'} height={'150px'} src={channel.avatar} />
                    <Heading as='h2' ml={10}>{channel.title}</Heading>
                    <CheckCircleIcon ml={2} mt={4} w={5} h={5} />
                </Box>
                <Stack display={'flex'} spacing={3} ml={190} mt={-20}>
                    <Text maxW={'350px'} fontSize={17}>{channel.description}</Text>
                    <Text fontSize={15}>{channel.followers} followers</Text>
                </Stack>
            </Box>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} ml={100} mt={150} >
                {channel.videos?.map((video) => <VideoCard link={video.source_link} title={video.title} channel={video.channel} />)}
            </Grid>
        </div>
    )
}

export default SingleChannel