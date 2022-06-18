import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VideoCard from '../../Components/Cards/Video/VideoCard'

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

    return (
        <div>
            <Navbar />
            <div>
                {videos.map((video) => <VideoCard link={video.source_link} title={video.title} channel={video.channel} />)}
            </div>
        </div>
    )
}

export default Video