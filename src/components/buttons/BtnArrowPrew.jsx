import React from 'react'
import { Icon } from '../Icon/Icon'

const BtnArrowPrew = ({onClick}) => {
	return (
		<button onClick={onClick} className="imgIcoP"><Icon type="longPrewArrow" /></button>
	)
}

export default BtnArrowPrew