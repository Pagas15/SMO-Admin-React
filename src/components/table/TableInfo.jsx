import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Icon } from '../Icon/Icon';

import Items from './Items'

const TableInfo = ({selectItems, setSelectItems, items}) => {
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0)

	const ITEMS_PER_PAGE = 10;

	const fullListKeys = items.map(item => item.id);
	
	useEffect(()=>{
		const endOffset = itemOffset + ITEMS_PER_PAGE;
		setCurrentItems(items.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(items.length / ITEMS_PER_PAGE));
		// console.log('wtf');
	}, [itemOffset, ITEMS_PER_PAGE])

	console.log(itemOffset);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * ITEMS_PER_PAGE);
		setItemOffset(newOffset)
	}

	const onSelectOll = () => {
		selectItems === 'oll' ? setSelectItems(null) : setSelectItems('oll');
	}

	return (
		<>
			<table className="tableInfo">
				<thead className="tableInfo__header">
          <tr className="tableInfo__item">
            <td>
							<label className='inputCheckBox'>
								<input type="checkbox" checked={selectItems === 'oll' ? true : false} onChange={onSelectOll} />
								<div><Icon type="check" /></div>
							</label>
						</td>
						<td className="txt12x14 w700 cWGry">Country</td>
						<td className="txt12x14 w700 cWGry">Owner Name</td>
						<td className="txt12x14 w700 cWGry">Bank Name</td>
						<td className="txt12x14 w700 cWGry">Account Number</td>
						<td></td>
          </tr>
				</thead>
				<tbody className="tableInfo__content">
					<Items 
						currentItems={currentItems} 
						listActive={selectItems} 
						setListActive={setSelectItems}
						fullListKeys={fullListKeys} 
					/>
				</tbody>
			</table>
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
		</>
	)
}

export default TableInfo