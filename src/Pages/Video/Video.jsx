import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VideoCard from '../../Components/Cards/Video/VideoCard'
import { Link } from 'react-router-dom'
import { Grid } from '@chakra-ui/react';

const Video = () => {
    const [videos, setVideos] = useState([])

    const fetchVideos = async () => {
        const response = await fetch('http://localhost:8000/api/video')
        const result = await response.json()
        setVideos(result)
    };

    useEffect(() => {
        fetchVideos()
    }, [])
    console.log(videos);
    return (
        <div>
            <Navbar />
            <div>
                <Grid templateColumns='repeat(4, 1fr)' gap={6} ml={100} mt={100} >
                    {videos.map((video) => (
                        <Link to={String(video.id)} key={video.id}>
                            <VideoCard link={video.source_link} title={video.title} channel={video.channel} />
                        </Link>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Video