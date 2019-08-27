import React, {useState}from 'react';
import { motion } from "framer-motion"

import '../../css/buttons.css'



const variants = {
  start: {translateX:67, translateY: 5.5, translateZ:0, transition:{duration:.5}},
  finish: { translateX: 120, translateY: 5.5, translateZ:0, transition:{duration:.5} }
}
const Switch = (props) => {

	const [isOpen, setOpen] = useState(false)
	const handleClick = () => {
		setOpen(!isOpen);
		props.changeTheme()
	}
	return(
		<div className="slider-Wrapper">
			<div className="slider--Info-Wrapper">
				<h1 className="slider--Info">Day/Night Slider!</h1>
			</div>
			<div className="motion-Wrapper">
				<motion.div
					initial={"start"}
					variants={variants}
					animate={isOpen ? "finish" : "start"}
					transition={{ ease: [0.49, 0.04, 0.58, 1] }}>
						<div className="slider" onClick={handleClick} />
				</motion.div>
			</div>
			<div className="bar-Wrapper">
				<div className="slider--Bar" />
			</div>
	</div>)
}

export default Switch

					// transformTemplate={
					// 	({ x, y, z }) => `translateX(${x}vw) translateY(${y}vw) translateZ(${z}vw)`}