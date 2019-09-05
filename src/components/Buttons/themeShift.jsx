import React, {useState}from 'react';


import '../../css/buttons.css'

const Switch = (props) => {

	const [isOpen, setOpen] = useState(false)
	const handleClick = () => {
		setOpen(!isOpen);
		props.changeTheme()
	}
	return(
		<div className="slider-Wrapper">
			<div className="slider--Info-Wrapper">
				<h1 className="slider--Info">Day/Night Button!</h1>
			</div>
			<div className="bar-Wrapper">
				<div className="slider--Bar" onClick={handleClick}>
				</div>
			</div>
	</div>)
}

export default Switch
