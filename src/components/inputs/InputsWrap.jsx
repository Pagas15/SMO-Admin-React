import React from 'react'

const InputsWrap = ({children, ...props}) => {
	return (
		<form {...props} className="inputsWrap">{children}</form>
	)
}

export default InputsWrap