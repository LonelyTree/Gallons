import React, { Component } from 'react'

import '../../css/numbers.css'

class Numbers extends Component{
  render() {
    return (
      <div className="number-wrapper">
        <div className='count-wrapper'>
          <h1>total clicks = </h1>
          <div className="count">{this.props.state.count}</div>
        </div>
        <div className="three">{this.props.state.ml3}</div>
        <div className="five">{this.props.state.ml5}</div>
      </div>
    )
  }
}

export default Numbers