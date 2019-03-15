import React from "react";
import { Link, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const About = () => (
  <div className="App">
  <h1>About:</h1>
  <h2>Rock Paper Scissors is a fun game between the user and the computer</h2>
  <Link to="/game">
      <Menu.Item>
        <h2>Play the Game!</h2>
      </Menu.Item>
    </Link>
  </div>
);

export default About;