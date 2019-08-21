import React, { Component } from 'react';
import Beaker from './components/Beaker'
import "./css/app.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Scientific Switcheroo</h1>
        <div className="desc"><span className="rules-heading">Name of the game:</span><span></span><p className="rules">You have two beakers that fill to 3ml and 5ml respectively. You may empty and refill each beaker as many times as you'd like. Find a way to end up with 4ml.</p></div>
        <div className='desc--challenge'><span className="rules-challenge">Challenge:</span><span/><p className='rules'>Complete in less than 7 clicks!</p></div>
        <div className="game">
            <Beaker/>
          <div className="buttons">
            <div className='beaker1Add'></div>
            <div className='beaker1Reduce'></div>
            <div className='beaker2Add'></div>
            <div className='beaker2Reduce'></div>
            <div className=''></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
