import React, { useState, useEffect, useId, } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import Navbar from '../../Components/Navbar/Navbar'
import InputComponent from '../../Components/Input/Input'
import ChannelCard from '../../Components/Cards/Channel/ChannelCard'
import { Link } from 'react-router-dom'


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
        <SkeletonTheme
            baseColor="#5294e0"
            highlightColor="#96c7ff"
            borderRadius="0.5rem"
            duration={4}>
            < div className="App" >
                <Navbar />
                <hr />
                <div className='container'>
                    <InputComponent id={id} type='text' name="Search" onchange={handleChangeInput} />
                </div>
                <div className={'container'}>
                    {searchTerm.length === 0 ?
                        data.map((channel) => <Link to={String(channel.id)}><ChannelCard loading={loading} img={channel.avatar} title={channel.title} key={channel.id} description={channel.description} /></Link>)
                        : filteredData.map((channel) => <Link to={String(channel.id)}><ChannelCard loading={loading} img={channel.avatar} title={channel.title} key={channel.id} description={channel.description} /></Link>)}
                </div>
            </div ></SkeletonTheme>
    )
}

export default Channel