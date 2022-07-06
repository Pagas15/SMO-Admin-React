import React from 'react'
import { Icon } from './Icon/Icon'

function UserBoard({userName, userAvatar}) {

	const avatar = userAvatar ? <img src={userAvatar} alt="" /> : <Icon type="user" />

	return (
		<div className='userBlock'>
			<div className="userBlock__avatar">
				{avatar}
			</div>
			<div className='userBlock__info'>
				<p className='txt14x17'>Welcome</p>
				<p className='txt14x17 w700 cDr'>{userName ? userName : "userName"}</p>
			</div>
		</div>
	)
}

export default UserBoard