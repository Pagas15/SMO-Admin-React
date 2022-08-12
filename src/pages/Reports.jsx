import React, { useEffect, useState } from 'react';
import BtnLine from '../components/buttons/BtnLine';
import Loader from '../components/decorateElemetn/Loader';
import { FilterWrap, Input, InputWrap, Selector } from '../components/inputs';
import RadioButtons from '../components/RadioButtons';
import TableInfo from '../components/table/TableInfo';
import { requestGetAssetsCountries, requestListItems, requestSendReports, resultShow } from '../utils/scripts';

const listCategory = {
	'All': 'All',
	'Bank Account': 'Bank Account',
	'Real Estate': 'Real Estate',
	'Company': 'Company',
	'Car': 'Car',
	'Art': 'Art',
	'Hotel': 'Hotel',
	'Other': 'Other'
}


const Reports = () => {
	const [filterListSend, setFilterListSend] = useState({
		country: '',
		category: 'All',
		filter: ''
	})
	const [selectItems, setSelectItems] = useState(null);
	const [listCountry, setListCountry] = useState({});

	const [pageTable, setPageTable] = useState(false);
	const [activePage, setActivePage] = useState(0);

	const sendListItems = () => {
		setPageTable({...pageTable, items: false})
		requestListItems({
			category: filterListSend.category,
			country: filterListSend.country,
			filter: filterListSend.filter,
			pageCount: activePage,
			callBack: setPageTable
		})
	}
	useEffect(sendListItems, [filterListSend, activePage]);

	useEffect(() => {
		requestGetAssetsCountries(setListCountry)
		return () => {}
	}, [])
	
	
	const changeCountry = (key) => {
		setFilterListSend({...filterListSend, country: key})
	}
	const changeCategory = (key) => {
		setFilterListSend({...filterListSend, category: key})
	}
	const changeFilter = (value) => { 
		setFilterListSend({...filterListSend, filter: value})
	}

	const keysCountry = Object.keys(listCountry);
	const tableBlock = pageTable?.pagesTotal >= 1 &&  <TableInfo 
		selectItems={selectItems} 
		setSelectItems={setSelectItems} 
		tableInfo={{headers: pageTable.headers, items: pageTable.items}}
		totalPages={pageTable.pagesTotal}
		reportEmail={pageTable?.reportEmail}
		setActivePage={setActivePage}
		activePage={activePage}
	/>

	const sendReport = () => {
		const data = {assetsId: selectItems === 'all' ? 'all' : selectItems.join('|'), country: filterListSend.country };
		requestSendReports(data,  item => resultShow(item, sendReport, () => {
			sendListItems();
			setSelectItems(null);
		}));
	}

	return (
		<div>
			<InputWrap title="Choose the country">
				{(keysCountry.length >= 1) ? (<>
					<Selector listSelect={listCountry} activeSelect={filterListSend.country} onChange={changeCountry} placeholder="Choose the county" />
					<p className="txt12x14 cWGry" style={{marginTop: '12px'}}>*When you select a country, you will see all the reported assets belonging to it.</p>
				</>) : <Loader />}
			</InputWrap>
			<RadioButtons listCategory={listCategory} activeCategory={filterListSend.category} onChange={changeCategory} />
			<FilterWrap title="Filter by">
				<Input 
					type="text" 
					placeholder="Type the name to filter" 
					valueGet={changeFilter}
					baseText={filterListSend.filter}
				/>
				<BtnLine 
					style={{display: selectItems === null ? "none" : 'block' }}
					modificatorsClass={['big']}
					onClick={sendReport}
				>
					Send Reports
				</BtnLine>
			</FilterWrap>
			{tableBlock}
		</div>
	)
}

export default Reports