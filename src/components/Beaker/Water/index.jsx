import React, { useState, useEffect } from 'react'

import "../../../css/water.css"


const Water = (props) => {
  
  const [initialMl3, setMl3] = useState('hide_ml3')
  const [initialMl5, setMl5] = useState('hide_ml5')
  const [initialPercent3ml, setPercent3ml] = useState(100)
  const [initialPercent5ml, setPercent5ml] = useState(100)
  
  const waterLevel_3ml = () => {
    switch (props.ml3) {
      case 0:
        setPercent3ml(110)
        setMl3("hide_ml3")
        break;
      case 1:
        setPercent3ml(90)
        setMl3('')
        break;
      case 2:
        setPercent3ml(45)
        setMl3('')
        break;
      case 3:
        setPercent3ml(10)
        setMl3('')
        break;
      default:
        setPercent3ml(110)
        setMl3("hide_ml3")
    }
  }
  const waterLevel_5ml = () => {
        switch (props.ml5) {
      case 0:
            setPercent5ml(110)
            setMl5("hide_ml5")
          break;
      case 1:
            setPercent5ml(85)
            setMl5('')
          break;
      case 2:
            setPercent5ml(65)
            setMl5('')
          break;
      case 3:
            setPercent5ml(45)
            setMl5('')
          break;
      case 4:
            setPercent5ml(25)
            setMl5('')
          break;
      case 5:
            setPercent5ml(10)
            setMl5('')
          break;
      default:
            setPercent5ml(110)
            setMl5("hide_ml5")
    }
  }
  useEffect(()=>{
      waterLevel_3ml()
      waterLevel_5ml()
  })
    return (
      <div className="water-Wrapper">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style={{display: "none"}}>
          <symbol id="wave">
            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
          </symbol>
        </svg>
        <div className={`beaker3ml ${initialMl3}`}>
          <div id="water" className={`${initialMl3} water`} style={{transform:`translate(0,${initialPercent3ml}%)`}}>
            <svg viewBox="0 0 560 20" className={`water_wave water_wave_back ${initialMl3}`}>
              <use xlinkHref="#wave"></use>
            </svg>
            <svg viewBox="0 0 560 20" className={`water_wave water_wave_front ${initialMl3}`}>
              <use xlinkHref="#wave"></use>
            </svg>
          </div>
        </div>
        <div className="beaker5ml">
          <div id="water" className={`${initialMl5} water`} style={{transform:`translate(0,${initialPercent5ml}%)`}}>
            <svg viewBox="0 0 560 20" className={`water_wave water_wave_back ${initialMl5}`}>
              <use xlinkHref="#wave"></use>
            </svg>
            <svg viewBox="0 0 560 20" className={`water_wave water_wave_front ${initialMl5}`}>
              <use xlinkHref="#wave"></use>
            </svg>
          </div>
        </div>
      </div>
    )
  }

export default Water
