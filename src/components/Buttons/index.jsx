import React, { Component } from 'react'

import '../../css/Buttons.css'


class Buttons extends Component{
  render() {
    return (
      <div className="button-wrapper">
        <div className="add-buttons">
          <button className="add add--three-ml">Add 3ml</button>
          <button className="add add--five-ml">Add 5ml</button>
        </div>
        <div className="subtract-buttons">
          <button className="sub subtract--three-ml">Empty beaker</button>
          <button className="sub subtract--five-ml">Empty beaker</button>
        </div>
        <div className="transfer-buttons">
          <button className="trans transfer--three-ml">Transfer to 5ml beaker</button>
          <button className="trans transfer--five-ml">Transfer to 3ml beaker</button>
        </div>
        <div className="reset-button">
          <button className="reset">Reset</button>
          </div>
        </div>
    )
  }
}

export default Buttons