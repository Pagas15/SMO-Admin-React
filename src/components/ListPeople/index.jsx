import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import BtnBase from '../buttons/BtnBase';

const ListPeople = ({items}) => {
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0)
	
	const ITEMS_PER_PAGE = 9;

	useEffect(()=>{
		const endOffset = itemOffset + ITEMS_PER_PAGE;
		setCurrentItems(items.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(items.length / ITEMS_PER_PAGE));
	}, [itemOffset, ITEMS_PER_PAGE])

	const handlePageClick = (event) => {
		const newOffset = (event.selected * ITEMS_PER_PAGE);
		setItemOffset(newOffset)
	}


	const listItems = currentItems && currentItems.map(item => {
		return <li className="cartInt" key={item.id}>
			<div className="cartInt__img">
				<img src={item.img} alt="" />
			</div>
			<div className="cartInt__cnt">
				<h4 className="cartInt__title txt14x18 cDr">{item.name}</h4>
				<div className="cartInt__assets txt12x14"><span className='cWGry'>Assets:</span> <span className='w700 cDr'>{item.assets}</span></div>
				<BtnBase theme="lite" >Visit Profile</BtnBase>
			</div>
		</li>
	})

	return (
		<div className='block'>
			<ul className="listPeople">
				{listItems}
			</ul>
			<ReactPaginate
				breakLabel="..."
				previousLabel="Previous"
				nextLabel="Next"
				pageRangeDisplayed={4}
				renderOnZeroPageCount={null}
				onPageChange={handlePageClick}
				pageCount={pageCount}
				className="pagination"
			/>
		</div>
	)
}

export default ListPeople