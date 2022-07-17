import React from 'react';
import ReactPaginate from 'react-paginate';
import BtnBase from '../buttons/BtnBase';
import Loader from '../decorateElemetn/Loader';
import { Link } from "react-router-dom";

const ListPeople = ({items, activePage, setActivePage, totalPage}) => {
	
	const handlePageClick = (event) => {
		setActivePage(event.selected + 1);
	}

	const listItems = items && items.map(item => {
		return <li className="cartInt" key={item.id}>
			{(item?.image) && <div className="cartInt__img">
				<img src={item.image} alt="" />
			</div>}
			<div className="cartInt__cnt">
				<h4 className="cartInt__title txt14x18 cDr">{item.name}</h4>
				<div className="cartInt__assets txt12x14"><span className='cWGry'>Assets:</span> <span className='w700 cDr'>{item.assets}</span></div>
				<BtnBase type='link' href={item.href} theme="lite">Visit Profile</BtnBase>
			</div>
		</li>
	})

	return (
		<div className='block'>
			<ul className="listPeople">
				{items.length >= 1 ? listItems : <div className='blockCenter'><Loader /></div>}
			</ul>
			<ReactPaginate
				breakLabel="..."
				previousLabel="Previous"
				nextLabel="Next"
				pageRangeDisplayed={4}
				renderOnZeroPageCount={activePage}
				onPageChange={handlePageClick}
				pageCount={totalPage}
				className="pagination"
			/>
		</div>
	)
}

export default ListPeople