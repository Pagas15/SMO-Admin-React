import React, { useState } from 'react'
import { Icon } from '../Icon/Icon';

const Selector = ({listSelect, activeSelect, onChange}) => {
	const [open, setOpen] = useState(false);
	const [selectActive, setSelectActive] = useState(activeSelect);
	
	const onSelect = key => {
		setSelectActive(key);
		setOpen(false);
		onChange && onChange(key);
	}
 
	const listItems = Object.keys(listSelect).map(key => {
		const onClick = () => {
			onSelect(key);
		}
		return (
			<li className='inputSelect__item' key={key}>
				<button className='inputSelect__button' onClick={onClick}>{listSelect[key]}</button>
			</li>
		)
	})

	const toggleOpen = () => {
		setOpen(!open)
	}


	return (
		<div className='inputSelect'>
			<div className="inputSelect__input" onClick={toggleOpen}>
				<input className='txt12x14' type="text" onChange={() => {}} value={listSelect[selectActive]}/>
				<div className="inputSelect__arrow">{<Icon type="arrowDown" />}</div>
			</div>
			{open && <ul className="inputSelect__list" >{listItems}</ul>}
		</div>
	)
}

export default Selector