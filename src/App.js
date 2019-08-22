import React, { Component } from 'react';
import Beaker from './components/Beaker'
import "./css/app.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Scientific <span className="blue">Switcheroo!</span></h1>
        <div className="desc"><span className="rules-heading">Name of the game:</span><span></span><p className="rules">You have two beakers that fill to 3ml and 5ml respectively. You may empty, refill, and transfer water to each beaker as many times as you'd like. Find a way to end up with 4ml.</p></div>
        <div className='desc--challenge'><span className="rules-challenge">Challenge:</span><span/><p className='rules'>Complete in less than 7 clicks!</p></div>
        <div className="game">
            <Beaker/>
          </div>
        </div>
    );
  }
}

export default App;
