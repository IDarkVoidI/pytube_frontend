import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Lottie from 'react-lottie'
import animation from '../../lib/animation.json'
import './Home.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useId } from 'react'
import { Heading, InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { BASE_URL } from '../../utils/api'
import { SearchIcon } from '@chakra-ui/icons'

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
    const [searchWord, setSearchWord] = useState("")
    const [searchResults, setSearchResults] = useState({ channel: [], video: [] })
    const [isOpen, setOpen] = useState(false)
    const id = useId()

    const handlePlaceholder = () => {
        const rand = Math.floor(Math.random() * tags.length)
        setPlaceholder(tags[rand])
    }

    useEffect(() => {
        handlePlaceholder()
    }, [])

    const fetchSearchResults = async () => {
        const res = await axios.get(`${BASE_URL}/api/content/search?query=${searchWord}`)
        setSearchResults(res.data)
    }

    useEffect(() => {
        if (searchWord) {
            setOpen(true)
            fetchSearchResults()
        } else {
            setOpen(false)
        }
    }, [searchWord])

    const handleChange = (event) => setSearchWord(event.target.value)


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
                            {/* <h1 className='h-1' style={{ margin: 0, fontSize: '3rem' }}>Skill Repository</h1> */}
                            <Heading>Skill Repository</Heading>
                            <h3 className='h-2' style={{ margin: '0 0 10px 0', padding: '5px 0' }}>Search for tutorials</h3>
                            <form>
                                <InputGroup>
                                    <InputLeftElement children={<SearchIcon />} />
                                    <Input type="search" onChange={handleChange} placeholder={placeholder + '...'} />
                                </InputGroup>
                            </form>
                            {isOpen ? (<div style={{ backgroundColor: "blue", padding: "10px 10px", marginTop: "10px" }}>
                                <ul>
                                    {searchResults.video.map((i) => (
                                        <li key={id}>
                                            <a href={`/videos/${i.id}`}>{i.title}</a>
                                        </li>
                                    ))}
                                    {searchResults.channel.map((i) => (
                                        <li key={id}>
                                            <a href={`/channels/${i.id}`}>{i.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>) : ("")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home