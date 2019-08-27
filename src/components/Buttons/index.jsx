import React from 'react'

import '../../css/buttons.css'


function Buttons(props){
    return (
      <div className="button-Wrapper">
        <div className="add-Buttons">
          <button className="add add--Three-ml" onClick={props.add3}>Add 3ml</button>
          <button className="add add--Five-ml" onClick={props.add5}>Add 5ml</button>
        </div>
        <div className="subtract-Buttons">
          <button className="sub subtract--Three-ml" onClick={props.empty3}>Empty beaker</button>
          <button className="sub subtract--Five-ml" onClick={props.empty5}>Empty beaker</button>
        </div>
        <div className="transfer-Buttons">
          <button className="trans1 transfer--Three-ml" onClick={props.transfer3ml5ml}>Transfer to 5ml beaker</button>
          <button className="trans2 transfer--Five-ml" onClick={props.transfer5ml3ml}>Transfer to 3ml beaker</button>
        </div>
        <div className="reset-Button" >
          <button className="reset" onClick={props.reset}>Reset</button>
          </div>
        </div>
    )
}

export default Buttons