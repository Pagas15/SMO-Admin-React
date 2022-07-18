import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { listLinks, URL_MAIN } from '../utils/consts';
import Logo from './Logo';
import Navigation from './Navigation';
import UserBoard from './UserBoard';


function Header({infoLogin}) {
	const [popup, setPopup] = useState(false);

	const [mobileSize, setMobileSize] = useState(false);

	const funkResize = () => {
		(window.innerWidth >= 992) ?
			setMobileSize(false) :
			setMobileSize(true) ;
	}

	useEffect(() => {
		window.addEventListener('resize', funkResize)
		return () => {
			window.removeEventListener('resize', funkResize)
		}
	}, [])

	const openMobileMenu = () => {
		setPopup('mobile')
	}

	const closePopup = () => {
		setPopup(false)
	}

	const backPopup = (e) => {
		(e.currentTarget === e.target) && closePopup()
	}

	const userName = infoLogin?.userName || "Anonym";
	const userAvatar = infoLogin ? URL_MAIN + infoLogin?.avatar : null;


	return (
		<header className="header">
			<div className="header__wrapper wrapper">
				<button className="btnMenu" onClick={openMobileMenu}><i className="icon-menu-line" /></button>
				<Logo />
				<Navigation listNav={listLinks} />
				{!mobileSize && <UserBoard userName={userName} userAvatar={userAvatar} />}
			</div>
			<div className={classNames('header__mobile' ,popup && 'active')} onClick={backPopup}>
				<div className={classNames("header__mobileBlock" ,(popup === 'mobile') && 'active')}>
					<div className="header__mobileTop">
						<button className="btnClose" onClick={closePopup} ><i className="icon-plus" /></button>
						<Logo />
					</div>
					<Navigation listNav={listLinks} />
					<div className="header__mobileBottom">
						<UserBoard userName={userName} userAvatar={userAvatar} />
						<button className="navbar__link">	Log out </button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header