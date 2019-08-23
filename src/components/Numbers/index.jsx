import React from 'react'

import '../../css/numbers.css'

function Numbers(props){
    return (
      <div className="number-Wrapper">
        <div className='count-Wrapper'>
          <h1>total clicks = </h1>
          <div className="count">{props.state.count}</div>
        </div>
        <div className="three">{props.state.ml3}</div>
        <div className="five">{props.state.ml5}</div>
      </div>
    )
  }


export default Numbers