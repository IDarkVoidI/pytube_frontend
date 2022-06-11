import React, { useEffect, useId, useState } from 'react'
import './App.css';
import ChannelCard from './Components/Cards/ChannelCard';
import Navbar from './Components/Navbar/Navbar';
import InputComponent from './Components/Input/Input';



function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([]);

  const id = useId()

  const handleChangeInput = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value)

  }

  const filteredData = data.filter(channel => channel.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  const fetchChannels = async () => {
    const response = await fetch("http://localhost:8000/api/channel");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchChannels()
  }, []);

  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className='container'>
        <InputComponent id={id} type='text' name="Search" onchange={handleChangeInput} />
      </div>
      <div className={'container'}>
        {searchTerm.length === 0 ?
          data.map((channel) => <ChannelCard img={channel.avatar} title={channel.title} key={channel.id} description={channel.description} />)
          : filteredData.map((channel) => <ChannelCard img={channel.avatar} title={channel.title} key={channel.id} description={channel.description} />)}
      </div>
    </div>
  );
}

export default App;
