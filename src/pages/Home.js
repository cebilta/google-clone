import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Appsicon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <Appsicon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
      </div>
      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
};

export default Home;
