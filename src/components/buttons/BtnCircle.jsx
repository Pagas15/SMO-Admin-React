import React from 'react'

const BtnCircle = ({children, onClick, style}) => {
	
	return (
		<button 
			className="btnCircle" 
			onClick={onClick}
			style={style}
		>{children}</button>
	)
}

export default BtnCircle