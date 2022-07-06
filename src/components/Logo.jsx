import React from 'react';
import LogoImg from '../assets/images/logo.png';

function Logo() {
	return (
		<a href="./" className="logo">
			<img src={LogoImg} alt="Signal my oligarch" />
		</a>
	)
}

export default Logo