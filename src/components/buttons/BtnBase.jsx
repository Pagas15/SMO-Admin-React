import React from 'react';
import classNames from 'classnames';

const BtnBase = React.forwardRef(({children, onClick, theme, type = 'btn', href, ...props}, ref) => {
	const classBtn = (typeBtn) => {
		switch (typeBtn) {
			case 'dark':
				return ' btn--dark';
			case 'gray':
				return ' btn--gray';
			case 'lite':
				return ' btn--lite';
			case 'border':
				return ' btn--border';
			default:
				return '';
		}
	}
	
	const btn = type === 'btn' ?
		<button 
			className={classNames("btn", classBtn(theme))} 
			onClick={onClick} 
			ref={ref} 
			{...props}
		>{children}</button> : 
		type === 'link' ? 
		<a href={href}
			className={classNames("btn", classBtn(theme))} 
			onClick={onClick} 
			ref={ref} 
			{...props}
		>{children}</a>
		: <input 
			type="submit" 
			className={classNames("btn", classBtn(theme))} 
			value={children} 
		/>
	
	return btn
})

export default BtnBase