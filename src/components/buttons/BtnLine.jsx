import classNames from 'classnames'
import React from 'react'

const BtnLine = React.forwardRef(({children, onClick, className, modificatorsClass = [], icon, ...props}, ref) => {

	const modeList = [...modificatorsClass].map(key => 'btnLine--' + key)
	const content = !icon ? children : (icon && <><div className='icon'>{icon}</div><span className='text'>{children}</span></>)
	
	return (
		<>
			<button ref={ref} className={classNames("btnLine", className, modeList)} onClick={onClick} {...props}>
				{content}
			</button>
		</>
	)
})

export default BtnLine