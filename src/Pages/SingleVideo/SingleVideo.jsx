import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom';
import VideoCard from '../../Components/Cards/Video/VideoCard';


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
            <p>{video.title}</p>
        </div>
    )
}

export default SingleVideo