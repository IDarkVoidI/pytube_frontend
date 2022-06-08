import './App.css';
import ChannelCard from './Components/Cards/ChannelCard';
import Navbar from './Components/Navbar/Navbar';

const data = [
  {
    img: "https://images.unsplash.com/photo-1654665462149-427b4cbc94ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Test1", id: "1", description: "description for test1"
  },
  {
    img: "https://images.unsplash.com/photo-1654616605705-2ef59f08ae66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Test2", id: "2", description: "description for test2"
  },
  {
    img: "https://images.unsplash.com/photo-1654616340351-9653c80c5f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Test3", id: "3", description: "description for test3"
  },
  {
    img: "https://images.unsplash.com/photo-1654586443280-8db3df4704df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    title: "Test4", id: "4", description: "description for test4"
  }
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className='flex'>
        {data.map((channel) => <ChannelCard img={channel.img} title={channel.title} key={channel.id} description={channel.description} />)}
      </div>
    </div>
  );
}

export default App;
