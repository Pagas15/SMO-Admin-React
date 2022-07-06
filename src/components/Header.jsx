import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { listLinks } from '../utils/consts';
import Logo from './Logo';
import Navigation from './Navigation';
import UserBoard from './UserBoard';


function Header() {
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

	return (
		<header className="header">
			<div className="header__wrapper wrapper">
				<button className="btnMenu" onClick={openMobileMenu}><i className="icon-menu-line" /></button>
				<Logo />
				<Navigation listNav={listLinks} />
				{!mobileSize && <UserBoard userName={"Anonym"} />}
			</div>
			<div className={classNames('header__mobile' ,popup && 'active')} onClick={backPopup}>
				<div className={classNames("header__mobileBlock" ,(popup === 'mobile') && 'active')}>
					<div className="header__mobileTop">
						<button className="btnClose" onClick={closePopup} ><i className="icon-plus" /></button>
						<Logo />
					</div>
					<Navigation listNav={listLinks} />
					<div className="header__mobileBottom">
						<UserBoard userName={"Anonym"} />
						<button className="navbar__link">	Log out </button>
					</div>
				</div>
				{/* <div className="header__welcome report__ope" data-header-window="welcome">
					<button className="btnClose" data-header-btn-close><i className="icon-plus" /></button>
					<h3 className="blocks__bigTitle">Welcome to SMO</h3>
					<h3 className="blocks__bigDesc">(signalmyoligarch.com)</h3>
					<div className="blocks__video">
						<iframe width={560} height={315} src="https://www.youtube.com/embed/hgXbyF1Iopc" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
					</div>
					<div className="blocks__bigText">
						Thank you for joining our community and help in the fight for Ukraine.<br />
						With this website you will be able to easily report what you think are assets owned by<br /> Oligarch’s so that the local authorities can do the necessary and freeze it.
						<br /><br />
						Please share the word to your friends and family it’s very important to help the effort !<br />
						The more we are the more we can have an impact !
						<br /><br />
						You can also download our <a href="#" className="link">IOS</a> and <a href="#" className="link">Android</a> apps here !
					</div>
					<div className="loaded__btns">
						<a href="#" className="btnInstall"><img src="./img/btn/appleStore.png" alt="Apple tore" /></a>
						<a href="#" className="btnInstall"><img src="./img/btn/googlePlay.png" alt="Google play" /></a>
					</div>
				</div> */}
			</div>
		</header>
	)
}

export default Header