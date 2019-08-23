import React, { Component } from 'react'

import "../../../css/water.css"


class Water extends Component{
  state = {
    ml3: "hide_ml3",
    ml5: "hide_ml5",
    percent3ml: 100,
    percent5ml: 100
  }
  waterLevel_3ml = () => {
    switch (this.props.state.ml3) {
      case 0:
        this.setState({percent3ml:110, ml3:"hide_ml3"})
        break;
      case 1:
        this.setState({percent3ml:90,ml3: null})
        break;
      case 2:
        this.setState({percent3ml:45,ml3: null})
        break;
      case 3:
        this.setState({percent3ml:10,ml3: null})
        break;
      default:
        this.setState({percent3ml:110, ml3:"hide_ml3"})
    }
  }
  waterLevel_5ml = () => {
        switch (this.props.state.ml5) {
      case 0:
        this.setState({percent5ml:110, ml5:"hide_ml5"})
          break;
      case 1:
            this.setState({percent5ml: 85, ml5:null})
          break;
      case 2:
        this.setState({percent5ml:65, ml5:null})
          break;
      case 3:
        this.setState({percent5ml:45, ml5:null})
          break;
      case 4:
        this.setState({percent5ml:25, ml5:null})
          break;
      case 5:
        this.setState({percent5ml:10, ml5:null})
          break;
      default:
        this.setState({percent5ml:110, ml5:"hide_ml5"})
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.state.ml3 !== prevProps.state.ml3 || this.props.state.ml5 !== prevProps.state.ml5) {
      this.waterLevel_3ml()
      this.waterLevel_5ml()
    }
    }
  render() {
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
        <div className={`beaker3ml ${this.state.ml3}`}>
          <div id="water" className={`${this.state.ml3} water`} style={{transform:'translate(0'+','+(`${this.state.percent3ml}`)+'%)'}}>
            <svg viewBox="0 0 560 20" className={`water_wave water_wave_back ${this.state.ml3}`}>
              <use xlinkHref="#wave"></use>
            </svg>
            <svg viewBox="0 0 560 20" className={`water_wave water_wave_front ${this.state.ml3}`}>
              <use xlinkHref="#wave"></use>
            </svg>
          </div>
        </div>
        <div className="beaker5ml">
          <div id="water" className={`${this.state.ml5} water`} style={{transform:'translate(0'+','+(`${this.state.percent5ml}`)+'%)'}}>
            <svg viewBox="0 0 560 20" className={`water_wave water_wave_back ${this.state.ml5}`}>
              <use xlinkHref="#wave"></use>
            </svg>
            <svg viewBox="0 0 560 20" className={`water_wave water_wave_front ${this.state.ml5}`}>
              <use xlinkHref="#wave"></use>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default Water

// {console.log(this.props.state)}
//         <div className={`water-3ml ${this.state.ml3}`}></div>
//         <div className={`water-5ml ${this.state.ml5}`}></div>