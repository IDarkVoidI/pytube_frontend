import './App.css';
import ChannelCard from './Components/Cards/ChannelCard';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div>
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
      </div>
    </div>
  );
}

export default App;
