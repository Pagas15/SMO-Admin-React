import React from 'react'

const FilterWrap = ({children, title}) => {
	return (
		<div className='filterWrap inputWrap'>
			<p className="title txt16x20 cDr w700">{title}</p>
			<div className="filterWrap__row">
				{children}
			</div>
		</div>
	)
}

export default FilterWrap