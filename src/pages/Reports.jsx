import React, { useEffect, useState } from 'react';
import BtnLine from '../components/buttons/BtnLine';
import Loader from '../components/decorateElemetn/Loader';
import { FilterWrap, InputWrap, Search, Selector } from '../components/inputs';
import ListSelect from '../components/inputs/ListSelect';
import RadioButtons from '../components/RadioButtons';
import TableInfo from '../components/table/TableInfo';
import { requestGetAssetsCountries, requestListItems, requestSendReports, resultShow } from '../utils/scripts';

const listCategory = {
	'Bank Account': 'Bank Account',
	'Real Estate': 'Real Estate',
	'Company': 'Company',
	'Car': 'Car',
	'Art': 'Art',
	'Hotel': 'Hotel',
	'Other': 'Other'
}

const lister = {
	'Andrey Puchkov' : 1,
	'Andrey Patrushev' : 2
}

const Reports = () => {
	const [filterListSend, setFilterListSend] = useState({
		country: '',
		category: 'Bank Account',
		filterBy: []
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
	const changeRemuveItem = (key) => {
		setFilterListSend({...filterListSend, filterBy: [...filterListSend.filterBy.filter(item => item !== key)]})
	}
	const changeAddItem = (key) => { 
		if(!filterListSend.filterBy.includes(key)){
			setFilterListSend({...filterListSend, filterBy: [...filterListSend.filterBy, key]})
		}
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
		const data = {assetsId: selectItems === 'oll' ? 'oll' : selectItems.join('|'), country: filterListSend.country };
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
				<Search placeholder="Type the name to filter" objectSearch={lister} selectVar={changeAddItem} />
				<ListSelect listFilter={filterListSend.filterBy} remuveItem={changeRemuveItem} />
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