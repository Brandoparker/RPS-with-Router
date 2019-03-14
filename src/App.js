import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props){
  super(props);

  this.state={
    gameresults:[],
    currentgameresult:""
  };

  this.handleClick = this.handleClick.bind(this);
}

handleClick(event) {
  const userchoiceSelected = event.target.id;
  var options = ['ROCK','PAPER','SCISSORS'];
  var computerchoice = options[Math.floor(Math.random()*options.length)];

  

  const gameresult = "You chose  " + userchoiceSelected + " Computer chose  " + computerchoice + "";
  const nextgameresults = this.state.gameresults.concat(this.state.currentgameresult);
  
  this.setState({
    currentgameresult: gameresult,
    gameresults: nextgameresults

  });

}
  render() {
    return (

      <div className="App">
        <header>
          <h1> Welcome to Rock Paper Scissors</h1>
          <h2>Click an Icon below</h2>
        </header>
        <div>
          <br />
          <section className="pics">
            <img src="https://visualpharm.com/assets/4/Rock-595b40b75ba036ed117d8450.svg" onClick={this.handleClick}id='ROCK'></img>
            <img src="https://visualpharm.com/assets/195/Toilet%20Paper-595b40b85ba036ed117dbc6d.svg" onClick={this.handleClick}id='PAPER'></img>
            <img src="https://visualpharm.com/assets/823/Surgical%20Scissors-595b40b75ba036ed117d723c.svg" onClick={this.handleClick}id='SCISSORS'></img>
          </section>
        </div>
            <br />
            <h2> Current Results:
            <br />
            <br />
            {this.state.currentgameresult} </h2>
            <br />
            <h2> Past Results: 
            {this.state.gameresults.map((todo,index) => <p key={index}>{todo}</p>)}</h2>
      </div>
    );
  }
}
export default App;