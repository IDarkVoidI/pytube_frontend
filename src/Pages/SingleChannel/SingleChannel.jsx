import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'

function SingleChannel() {
    const [channel, setChannel] = useState({})

    const params = useParams();

    const fetchChannelId = async () => {
        const response = await fetch(`http://localhost:8000/api/channel/${params.id}`)
        const result = await response.json()
        setChannel(result)
    }

    useEffect(() => {
        fetchChannelId()
    }, [])

    console.log(channel);

    return (
        <Navbar />
    )
}

export default SingleChannel