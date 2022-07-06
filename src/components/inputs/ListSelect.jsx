import React from 'react'
import { Icon } from '../Icon/Icon'

const ListSelect = ({listFilter, remuveItem}) => {

	const onRemuve = (key) => {
		remuveItem(key)
	}

	const listSelect = Object.keys(listFilter).map(key => {
		const btnRemuve = () => {
			onRemuve(listFilter[key])
		}
		return <li key={key} className="listSelect__item">
			<button className='listSelect__btn' onClick={btnRemuve}><Icon type="close" /></button>
			<p className="txt14x17 cDr w600">{listFilter[key]}</p>
		</li>
	})
	
	return (
		<ul className='listSelect'>{listSelect}</ul>
	)
}

export default ListSelect