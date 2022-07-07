import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom';
import { AspectRatio, Heading, Box } from '@chakra-ui/react'


function SingleVideo() {
    const [video, setVideo] = useState({})

    const params = useParams();

    const fetchVideoId = async () => {
        const response = await fetch(`http://localhost:8000/api/video/${params.id}`)
        const result = await response.json()
        setVideo(result)
    }

    useEffect(() => {
        fetchVideoId()
    }, [])

    return (
        <div>
            <Navbar />
            <Box ml={150} mt={100}>
                <AspectRatio maxW={'1720px'} maxH={'920px'}><iframe src={video.source_link} allowFullScreen title='video' /></AspectRatio>
                <Heading maxW={'1720px'} size={'lg'} mt={5}>{video.title}</Heading>
            </Box>
        </div >
    )
}

export default SingleVideo