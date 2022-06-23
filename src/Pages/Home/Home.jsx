import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Input from "../../Components/Input/Input";
import Lottie from "react-lottie";
import animation from "../../lib/animation.json";
import "./Home.css";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Home() {
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
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
