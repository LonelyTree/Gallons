import React from 'react'
import Confetti from 'react-dom-confetti';
import Config from './confetti'

import '../../css/completion.css'

function Completion(props){
    return (
      <div className="congrats-Wrapper">
        <div className="huzzah"><h1 className="huzzah-h1"><span className="callBack_Style">CONGRATULATIONS!!!</span> YOU WON!!</h1></div>
        <div className="replay-Wrapper">
          <button className="replay" onClick={props.reset}>Play Again?</button>
        </div>
        <div className='iHeartU'>
          <svg  viewBox="0, 0, 400,400">
              <path d="M106.667 37.026 C 58.486 40.331,23.032 77.623,21.445 126.667 C 20.445 157.559,27.198 187.135,40.245 209.000 C 53.824 231.757,68.606 247.005,122.000 293.334 C 157.506 324.142,176.303 340.966,194.917 358.600 L 200.000 363.416 205.083 358.600 C 223.659 341.002,242.700 323.958,278.000 293.331 C 331.451 246.957,346.213 231.737,359.702 209.095 C 372.832 187.055,379.582 157.480,378.552 126.500 C 377.018 80.349,345.657 44.597,300.771 37.830 C 262.800 32.105,225.698 49.631,203.261 83.891 C 201.559 86.490,200.092 88.616,200.000 88.616 C 199.908 88.616,198.441 86.490,196.739 83.891 C 175.797 51.915,142.463 34.571,106.667 37.026 " stroke="black" fill="#5adbff"></path>
          </svg>
        </div>
        <div className="score">
          <h1 className="total">{props.state.count} clicks!</h1></div>
        <div className="confettiCannon"><Confetti active={ props.state.celebrate } config={ Config }/></div>
      </div>
    )
  }


export default Completion