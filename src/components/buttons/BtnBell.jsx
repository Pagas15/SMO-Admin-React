import React from 'react'

function BtnBell({active, onClick}) {
	return (
		<button onClick={onClick} data-header-btn-open="notifications" className={"btnBell" + (active ? ' active' : '')}>
			<i className="icon-bell" />
		</button>
	)
}

export default BtnBell