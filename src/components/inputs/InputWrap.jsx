import React from 'react'

const InputWrap = ({children, title}) => {
	return (
		<div className='inputWrap'>
			<p className="title txt16x20 cDr w700">{title}</p>
			{children}
		</div>
	)
}

export default InputWrap