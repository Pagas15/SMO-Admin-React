import classNames from 'classnames'
import React from 'react'

const BtnLine = ({children, onClick, className, modificatorsClass = [], icon, ...props}) => {

	const modeList = [...modificatorsClass].map(key => 'btnLine--' + key)
	const content = !icon ? children : (icon && <><div className='icon'>{icon}</div><span className='text'>{children}</span></>)
	
	return (
		<>
			<button className={classNames("btnLine", className, modeList)} onClick={onClick} {...props}>
				{content}
			</button>
		</>
	)
}

export default BtnLine