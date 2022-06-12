import React, { useEffect, useId, useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'


function App() {
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
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;


