import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import Home from './Pages/Home/Home';
import Channel from './Pages/Channel/Channel';
import SingleChannel from './Pages/SingleChannel/SingleChannel';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/channels' element={<Channel />} />
      <Route path='/channels' ><Route path=':id' element={<SingleChannel />} /></Route>
    </Routes>
  );
}

export default App;


