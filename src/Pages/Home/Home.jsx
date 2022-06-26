import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Input from '../../Components/Input/Input'
import Lottie from 'react-lottie'
import animation from '../../lib/animation.json'
import './Home.css'
import { BsSearch as SearchIcon } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import axios from 'axios'


const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    renderSettings:
        { preserveAspectRatio: "xMidYMid slice" }
}

const tags = ['React', 'Django', 'Python', 'Java', 'JavaScript']

function Home() {
    const [placeholder, setPlaceholder] = useState("")

    const handlePlaceholder = () => {
        const rand = Math.floor(Math.random() * tags.length)
        setPlaceholder(tags[rand])
    }

    useEffect(() => {
        handlePlaceholder()
    }, [])


    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = filteredData.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.get(`http://localhost:8000/api/video?query=${wordEntered}`)
        return res.data
    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='hero'>
                    <div className='hero-container flex center-items'>
                        <div style={{ width: '45%' }}>
                            <Lottie width={'100%'} options={animationOptions} />
                        </div>
                        <div>
                            <h1 className='h-1' style={{ margin: 0, fontSize: '3rem' }}>Skill Repository</h1>
                            <h3 className='h-2' style={{ margin: '0 0 10px 0', padding: '5px 0' }}>Search for tutorials</h3>
                            <form onSubmit={handleSubmit} className='hero-section-input--container flex center-items'>
                                <SearchIcon />
                                <Input type="search" onChange={handleFilter} placeholder={placeholder + '...'} className={"hero-search-input"} />
                                {filteredData.length != 0 && (
                                    <div className="dataResult">
                                        {filteredData.slice(0, 15).map((value, key) => {
                                            return (
                                                <a className="dataItem" target="_blank">
                                                    <p>{value.title} </p>
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home