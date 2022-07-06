import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { ADMIN_CONFIGURATION, ADMIN_REPORTS } from '../utils/consts';
import BtnArrowPrew from './buttons/BtnArrowPrew';

const Breadcrumbs = () => {
	
	return (
		<div className='wrapper pathPage'>
			<Routes >
				<Route path={ADMIN_REPORTS + '/'} >
					<Route path='' element={<p className='titleM w800'>Report</p>} />
					<Route path=':reportId' element={
						<div className='pathPage__long'>
							<Link to={ADMIN_REPORTS}><BtnArrowPrew /></Link>
							<Link to={ADMIN_REPORTS} className='titleM w800'>Report </Link> <span className='txt16x20'> / more</span>
						</div>
					} />
				</Route>
				<Route path={ADMIN_CONFIGURATION + '/'} >
					<Route path='' element={<p className='titleM w800'>Configuration</p>} />
				</Route>
			</Routes>
		</div>
	)
}

export default Breadcrumbs