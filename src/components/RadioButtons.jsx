import React, { useState } from 'react'

const RadioButtons = ({listCategory, activeCategory, onChange}) => {
	const [actCateg, setActCateg] = useState(activeCategory || Object.keys(listCategory)[0])

	const selectAct = key => {
		setActCateg(key);
		onChange && onChange(key);
	}

	const listItems = Object.keys(listCategory).map(key => {
		const clickBtn = () => {
			selectAct(key)
		}

		return (<li className="radioButtons__item" key={key}>
				<button onClick={clickBtn} className={"radioButtons__btn txt14x17 w600" + (actCateg === key ? ' active' : '')}>
					{listCategory[key]}
				</button>
			</li>)
	})

	return (
		<div className='radioButtons m24'>
			<p className="txt16x20 cDr w500">Choose category:</p>
			<ul className="radioButtons__list">{listItems}</ul>
		</div>
	)
}

export default RadioButtons