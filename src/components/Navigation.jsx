import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation({listNav}) {

	if(!listNav){
		return <></>
	}


	const listLinks = listNav.map(item => {
		return (
			<li className="navbar__item" key={item[0]}>
				<NavLink to={item[1]} className="navbar__link">
					{item[0]}
				</NavLink>
			</li>
		)
	})
		

	return (
		<nav className="navbar">
			<ul className="navbar__list">
				{listLinks}
			</ul>
		</nav>
	)
}

export default Navigation