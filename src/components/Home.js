import React from "react";
import { Link, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const Home = () => (
  <div className="App"> 
    <h1>Homepage for Rock Paper Scissors</h1>
    <Link to="/game">
      <Menu.Item>
        <h2>Play the Game!</h2>
      </Menu.Item>
    </Link>
  </div>
);

export default Home;