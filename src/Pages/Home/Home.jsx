import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Input from "../../Components/Input/Input";
import Lottie from "react-lottie";
import animation from "../../lib/animation.json";
import "./Home.css";
import { BsSearch as SearchIcon } from "react-icons/bs";
import axios from "axios";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

//TODO: randomize placeholder with random technology name
function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevents page refresh on submiting data
    const res = await axios.get(`http://localhost:8000/api/video?query=${searchTerm}`);
    console.log(res.data);
    return res.data;
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="hero">
          <div className="hero-container flex center-items">
            <div style={{ width: "45%" }}>
              <Lottie width={"90%"} options={animationOptions} />
            </div>
            <div>
              <h1 className="h-1" style={{ margin: 0, fontSize: "3.5em" }}>
                Skill Repository
              </h1>
              <h3 className="h-2" style={{ margin: "0 0 10px 0", padding: "5px 0", fontSize: "2em" }}>
                Search for tutorials
              </h3>
              <form onSubmit={handleSubmit} className="hero-section-input--container flex center-items">
                <SearchIcon />
                <Input
                  type="search"
                  onChange={handleSearchChange}
                  placeholder={"Django..."}
                  className={"hero-search-input"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
