import React, { useState, useEffect, useId, } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import InputComponent from '../../Components/Input/Input'
import ChannelCard from '../../Components/Cards/Channel/ChannelCard'
import { Link } from 'react-router-dom'
import { HStack } from '@chakra-ui/react'


function Channel() {
    const [searchTerm, setSearchTerm] = useState("");

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false)

    const id = useId()

    const handleChangeInput = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value)
    }

    const filteredData = data.filter(channel => channel.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

    const fetchChannels = async () => {
        setLoading(true)
        const response = await fetch("http://localhost:8000/api/channel");
        const result = await response.json();
        setData(result);
        setLoading(false)
    };

    useEffect(() => {
        fetchChannels()
    }, []);

    return (
        <div className="App">
            <Navbar />
            <div>
                <HStack justifyContent={"space-evenly"} mt={16}>
                    {data.map((channel) => (
                        <Link to={String(channel.id)} key={channel.id}>
                            <ChannelCard loading={loading} img={channel.avatar} title={channel.title} description={channel.description} />
                        </Link>
                    ))}
                </HStack>
            </div>
        </div >
    )
}

export default Channel