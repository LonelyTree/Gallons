import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Beaker from './components/Beaker'
import Water from './components/Beaker/Water'
import Buttons from './components/Buttons'
import Numbers from './components/Numbers'
import Completion from './components/Completion'

import "./css/app.css"




class App extends Component {
  state = {
      count: 0,
      ml3: 0,
      ml5: 0,
      reset: false,
      celebrate: false
  }
  reset = () => {
    this.setState({
      count: 0,
      ml3: 0,
      ml5: 0,
      reset: false,
      celebrate:false
    })
  }
  transfer3ml5ml = ()=>{
    const transfered = this.state.ml3 + this.state.ml5
    const counter = this.state.count + 1;
    if (transfered > 5) {
      const fullCup = 5
      const ml3 = transfered - fullCup;
      this.setState({
        ml3: ml3,
        ml5: fullCup,
        count: counter
      })
    } else {
      this.setState({
        ml3: 0,
        ml5: transfered,
        count: counter
      })
    }
  }
  transfer5ml3ml = () => {
    const transfered = this.state.ml3 + this.state.ml5
    const counter = this.state.count + 1;
    if (transfered > 3) {
      const fullCup = 3
      const ml5 = transfered - fullCup
      this.setState({
        ml3: fullCup,
        ml5: ml5,
        count: counter
      })
    } else {
      this.setState({
        ml3: transfered,
        ml5: 0,
        count: counter
      })
    }
  }
  add3 = () => {
    const counter = this.state.count + 1;
    this.setState({
      ml3: 3,
      count: counter
    })
  }
  add5 = () => {
    const counter = this.state.count + 1;
    this.setState({
      ml5: 5,
      count: counter
    })
  }
  empty3 = () => {
    const counter = this.state.count + 1;
    this.setState({
      ml3: 0,
      count: counter
    })
  }
  empty5 = () => {
    const counter = this.state.count + 1;
    this.setState({
      ml5: 0,
      count: counter
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.ml5 !== this.state.ml5 && this.state.ml5 === 4 && this.state.celebrate === false) {
      setTimeout(() => {
        this.setState({celebrate: true})
      }, 750);
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Scientific <span className="blue">Switcheroo!</span></h1>
        <div className="desc"><span className="rules-heading">Name of the game:</span><span></span><p className="rules">You have two beakers that fill to 3ml and 5ml respectively. You may empty, refill, and transfer water to each beaker as many times as you'd like. Find a way to end up with 4ml.</p></div>
        <div className='desc--challenge'><span className="rules-challenge">Challenge:</span><span/><p className='rules'>Complete in less than 7 clicks!</p></div>
        <div className="game">
          <Beaker />
          <Water state={this.state} />
          <Buttons
            transfer3ml5ml={this.transfer3ml5ml}
            transfer5ml3ml={this.transfer5ml3ml}
            add3={this.add3}
            add5={this.add5}
            empty3={this.empty3}
            empty5={this.empty5}
            reset={this.reset}
            />
          <Numbers state={this.state} celebration={this.celebration}/>
        </div>
        <p className="devBy">Developed by Alex Hughes</p>
        <p className="shameless-plug">Portfolio: <a style={{textDecoration:"none", color:"#1ab2dd"}}href="https://www.cahworks.com">www.cahworks.com</a></p>
        {this.state.ml5 === 4
          ?
          <ReactCSSTransitionGroup
            transitionName="winner"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}
            style={{ gridArea: "2/2/3/4", zIndex: "20" }}>
            <Completion state={this.state} reset={this.reset} />
          </ReactCSSTransitionGroup>
          :
          null}
      </div>
    );
  }
}

export default App;
