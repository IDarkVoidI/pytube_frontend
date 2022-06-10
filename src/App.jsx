import React, { useId, useState } from 'react'
import './App.css';
import ChannelCard from './Components/Cards/ChannelCard';
import Navbar from './Components/Navbar/Navbar';
import InputComponent from './Components/Input/Input';


const data = [
  {
    img: "https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Test1", id: "1", description: "description for test1"
  },
  {
    img: "https://images.unsplash.com/photo-1654616605705-2ef59f08ae66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Test2", id: "2", description: "description for test2"
  },
  {
    img: "https://images.unsplash.com/photo-1654712987939-2b49765a4ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Test3", id: "3", description: "description for test3"
  },
  {
    img: "https://images.unsplash.com/photo-1654586443280-8db3df4704df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Test4", id: "4", description: "description for test4"
  }
]

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const id = useId()

  const handleChangeInput = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value)

  }

  const filteredData = data.filter(channel => channel.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className='container'>
        <InputComponent id={id} type='text' name="Search" onchange={handleChangeInput} />
      </div>
      <div className={'container'}>
        {searchTerm.length === 0 ?
          data.map((channel) => <ChannelCard img={channel.img} title={channel.title} key={channel.id} description={channel.description} />)
          : filteredData.map((channel) => <ChannelCard img={channel.img} title={channel.title} key={channel.id} description={channel.description} />)}
      </div>
    </div>
  );
}

export default App;
