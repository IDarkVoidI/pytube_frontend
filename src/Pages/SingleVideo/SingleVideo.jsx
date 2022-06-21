import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom';



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
            <h1>{video.title}</h1>
        </div>
    )
}

export default SingleVideo