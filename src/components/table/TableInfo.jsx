import React from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../decorateElemetn/Loader';
import { Icon } from '../Icon/Icon';

import Items from './Items'

const TableInfo = ({reportEmail, selectItems, setSelectItems, tableInfo, totalPages, setActivePage, activePage}) => {

	const fullListKeys = () => tableInfo.items?.map(item => item.id);
	
	const handlePageClick = (event) => {
		setActivePage(event.selected + 1);
	}

	const onSelectOll = () => {
		!!(reportEmail) ? (selectItems === 'oll' ? setSelectItems(null) : setSelectItems('oll')) : setSelectItems(null);
	}


	const keysTableInfoHeaders = Object.keys(tableInfo.headers);
	
	const listHeader = keysTableInfoHeaders.map(key => {
		return <td className='txt12z14 w700 cWGry' key={key}>{tableInfo.headers[key]}</td>
	})

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
						{listHeader}
						<td></td>
          </tr>
				</thead>
				<tbody className="tableInfo__content">
					{tableInfo.items ? <Items 
						typeColum={keysTableInfoHeaders}
						currentItems={tableInfo.items} 
						listActive={selectItems} 
						setListActive={setSelectItems}
						fullListKeys={fullListKeys} 
						reportEmail={reportEmail}
					/> : <tr><td><Loader /></td></tr>}
				</tbody>
			</table>
			<ReactPaginate
				breakLabel="..."
				previousLabel="Previous"
				nextLabel="Next"
				pageRangeDisplayed={4}
				renderOnZeroPageCount={activePage}
				onPageChange={handlePageClick}
				pageCount={totalPages}
				className="pagination"
			/>
		</>
	)
}

export default TableInfo