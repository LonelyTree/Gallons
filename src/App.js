import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import Beaker from './components/Beaker'
import Water from './components/Beaker/Water'
import Buttons from './components/Buttons'
import Numbers from './components/Numbers'
import Completion from './components/Completion'

import "./css/app.css"

const variants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
  hidden: {
    opacity: 0,
    transition: { duration: 2 }
  }
}
const App = () => {

  const [initialCount, setCount] = useState(0)
  const [initialMl3, setMl3 ] = useState(0)
  const [initialMl5, setMl5 ] = useState(0)
  const [initialCelebrate, setCelebrate] = useState(false)
  const [isOpen, toggle] = useState('')



  const reset = () => {
    setCount(0)
    setMl3(0);
    setMl5(0);
    setCelebrate(false);
    toggle(false)
  }
  const counter = () => {
    setCount(initialCount + 1)
  }
  const transfer3ml5ml = () => {
    counter()
    const transfered = initialMl3 + initialMl5
    if (transfered > 5) {
      const fullCup = 5
      const ml3 = transfered - fullCup;
      setMl3(ml3);
      setMl5(fullCup);
    } else {
      setMl3(0);
      setMl5(transfered);
    }
  }
  const transfer5ml3ml = () => {
    counter()
    const transfered = initialMl3 + initialMl5
    if (transfered > 3) {
      const fullCup = 3
      const ml5 = transfered - fullCup
      setMl3(fullCup);
      setMl5(ml5);
    } else {
      setMl3(transfered);
      setMl5(0);
    }
  }
  const add3 = () => {
    counter()
    setMl3(3);
  }
  const add5 = () => {
    counter()
    setMl5(5);
  }
  const empty3 = () => {
    counter()
    setMl3(0);
  }
  const empty5 = () => {
    counter()
    setMl5(0);
  }
  useEffect(() => {
    if (initialMl5 === 4 && initialCelebrate === false) {
      setTimeout(() => {
        toggle(true)
      }, 300);
      setTimeout(() => {
        setCelebrate(true)
      }, 1000);
    }
  },[initialMl5, initialCelebrate, isOpen])

    return (
      <div className="App">
        <h1 className="title">Scientific <span className="blue">Switcheroo!</span></h1>
        <div className="desc"><span className="rules-Heading">Name of the game:</span><span></span><p className="rules">You have two beakers that fill to 3ml and 5ml respectively. You may empty, refill, and transfer water to each beaker as many times as you'd like. Find a way to end up with 4ml.</p></div>
        <div className='desc--Challenge'><span className="rules-Challenge">Challenge:</span><span/><p className='rules'>Complete in less than 7 clicks!</p></div>
        <div className="game">
          <Beaker />
          <Water ml3={initialMl3} ml5={initialMl5}/>
          <Buttons
            transfer3ml5ml={transfer3ml5ml}
            transfer5ml3ml={transfer5ml3ml}
            add3={add3}
            add5={add5}
            empty3={empty3}
            empty5={empty5}
            reset={reset}
            />
          <Numbers ml3={initialMl3} ml5={initialMl5} count={initialCount}/>
        </div>
        <div className="devBy"><p className="credits">Developed by Alex Hughes</p>
          <p className="shameless-Plug">Portfolio: <a style={{ textDecoration: "none", color: "#1ab2dd" }} href="https://www.cahworks.com">www.cahworks.com</a></p>
        </div>
        {initialMl5 === 4
          ?
          <motion.div
            initial="hidden"
            variants={variants}
            animate={isOpen ? "visible" : "hidden"}
            style={{ gridArea: "2/2/3/4", zIndex: "20" }}
            >
            <Completion celebrate={initialCelebrate} count={initialCount} reset={reset} />
          </motion.div>
          :
          null}
      </div>
    );
}

export default App;

