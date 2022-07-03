import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import Home from './Pages/Home/Home';
import Channel from './Pages/Channel/Channel';
import SingleChannel from './Pages/SingleChannel/SingleChannel';
import Video from './Pages/Video/Video'
import SingleVideo from './Pages/SingleVideo/SingleVideo';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './lib/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/channels' element={<Channel />} />
        <Route path='/videos' element={<Video />} />
        <Route path='/channels'>
          <Route path=':id' element={<SingleChannel />} />
        </Route>
        <Route path='/videos' >
          <Route path=':id' element={<SingleVideo />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;