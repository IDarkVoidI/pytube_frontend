import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex space-between navbar">
      <div>
        <h2 className="h-1">PyTube</h2>
      </div>
      <div className="flex space-evenly navbar-links">
        <p>
          <Link to={"/"} className="link">
            Home
          </Link>
        </p>
        <p>
          <Link to={"/channels"} className="link">
            Channels
          </Link>
        </p>
        <p>
          <Link to={"/videos"} className="link">
            Videos
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
