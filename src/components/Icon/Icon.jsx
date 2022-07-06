import React from 'react'

export const Icon = ({type}) => {

	const icon = {
		longArrowLeft : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19 9.54199L3 9.54199" stroke="#252B5C" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M5.74402 6L2.20235 9.54167L5.74402 13.0833" stroke="#252B5C" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>,
		longPrewArrow : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
			<path d="M19 9.542H3M5.744 6L2.202 9.542l3.542 3.541" stroke="#252B5C" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>,
		download: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
			<path d="M20 14C20 19.5 19 20 12 20C5 20 4 19.5 4 14" stroke="#0A0C10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
			<path d="M12 4L12 15" stroke="#0A0C10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
			<path d="M8 11L12 15L16 11" stroke="#0A0C10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>,
		fullScreen: <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> 
			<path d="M2 4.5C2 4.5 1.9982 3.1228 2.41517 2.61829C2.83214 2.11377 4.5 2 4.5 2" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
			<path d="M10 4.5C10 4.5 10.0018 3.1228 9.58483 2.61829C9.16786 2.11377 7.5 2 7.5 2" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
			<path d="M10 7.5C10 7.5 10.0018 8.8772 9.58483 9.38171C9.16786 9.88623 7.5 10 7.5 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> 
			<path d="M2 7.5C2 7.5 1.9982 8.8772 2.41517 9.38171C2.83214 9.88623 4.5 10 4.5 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>, 
		arrowDown: <i className="icon-chevron-down"></i>,
		arrowRight: <i className="icon-chevron-right"></i>,
		user: <i className="icon-Group-2542"></i>,
		close: <i className="icon-crsmall"></i>,
		check: <i className="icon-check"></i>,
		image: <i className="icon-image-line"></i>,
		plus: <i className="icon-plus"></i>
	}

	return icon[type]
}
