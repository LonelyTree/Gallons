import React, { Component } from 'react'

import '../../css/numbers.css'

class Numbers extends Component{
  render() {
    return (
      <div className="number-wrapper">
        <div className='count-wrapper'>
          <h1>total clicks = </h1>
          <div className="count">0</div>
        </div>
        <div className="three">0</div>
        <div className="five">0</div>
      </div>
    )
  }
}

export default Numbers