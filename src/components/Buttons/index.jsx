import React from 'react'

import '../../css/Buttons.css'


function Buttons(props){
    return (
      <div className="button-wrapper">
        <div className="add-buttons">
          <button className="add add--three-ml" onClick={props.add3}>Add 3ml</button>
          <button className="add add--five-ml" onClick={props.add5}>Add 5ml</button>
        </div>
        <div className="subtract-buttons">
          <button className="sub subtract--three-ml" onClick={props.empty3}>Empty beaker</button>
          <button className="sub subtract--five-ml" onClick={props.empty5}>Empty beaker</button>
        </div>
        <div className="transfer-buttons">
          <button className="trans transfer--three-ml" onClick={props.transfer3ml5ml}>Transfer to 5ml beaker</button>
          <button className="trans transfer--five-ml" onClick={props.transfer5ml3ml}>Transfer to 3ml beaker</button>
        </div>
        <div className="reset-button" >
          <button className="reset" onClick={props.reset}>Reset</button>
          </div>
        </div>
    )
}

export default Buttons