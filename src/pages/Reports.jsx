import React, { useEffect, useState } from 'react';
import BtnLine from '../components/buttons/BtnLine';
import { FilterWrap, InputWrap, Search, Selector } from '../components/inputs';
import ListSelect from '../components/inputs/ListSelect';
import RadioButtons from '../components/RadioButtons';
import TableInfo from '../components/table/TableInfo';

const listSelects = {
	be: 'Belgium',
	ua: 'Ukraine',
	ru: 'Russia',
	uk: 'United Kingdom'
}

const listCategory = {
	bnk: 'Bank Account',
	rle: 'Real Estate',
	com: 'Company',
	car: 'Car',
	art: 'Art',
	htl: 'Hotel',
	oth: 'Other',
}

const lister = {
	'Andrey Puchkov' : 1,
	'Andrey Patrushev' : 2
}


const items = [
	{
		id: 1,
		name: 'Andrey Guryev',
		country: 'Belgium',
		bank: 'AXA Bank',
		number: '662356533459696923456'
	},
	{
		id: 2,
		name: 'Andrey Guryev',
		country: 'Belgium',
		bank: 'Consorsbank',
		number: '662356533459696923456'
	},
	{
		id: 3,
		name: 'Andrey Guryev',
		country: 'Belgium',
		bank: 'ABC International Bank',
		number: '662356533459696923456'
	},
	{
		id: 4,
		name: 'Andrey Guryev',
		country: 'Belgium',
		bank: 'Blom Bank',
		number: '662356533459696923456'
	},
	{
		id: 5,
		name: 'Andrey Guryev',
		country: 'Belgium',
		bank: 'Financial Intelligence',
		number: '662356533459696923456'
	},
	{
		id: 6,
		name: 'Andrey Guryev',
		country: 'Belgium',
		bank: 'Bankia',
		number: '662356533459696923456'
	},
	{
		id: 7,
		name: 'Andrey Guryev',
		country: 'Belgium',
		bank: 'Monobank',
		number: '662356533459696923456'
	},
	{
		id: 8,
		name: 'Andrey Guryev',
		country: 'Belgium',
		bank: 'MUFG Bank',
		number: '662356533459696923456'
	},
	{
		id: 9,
		name: 'Andrey Guryev',
		country: 'Belgium',
		bank: 'Idea Bank',
		number: '662356533459696923456'
	},
	{
		id: 10,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'ING',
		number: '662356533459696923456'
	},
	{
		id: 11,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'AXA Bank',
		number: '662356533459696923456'
	},
	{
		id: 12,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'Consorsbank',
		number: '662356533459696923456'
	},
	{
		id: 13,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'ABC International Bank',
		number: '662356533459696923456'
	},
	{
		id: 14,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'Blom Bank',
		number: '662356533459696923456'
	},
	{
		id: 15,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'Financial Intelligence',
		number: '662356533459696923456'
	},
	{
		id: 16,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'Bankia',
		number: '662356533459696923456'
	},
	{
		id: 17,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'Monobank',
		number: '662356533459696923456'
	},
	{
		id: 18,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'MUFG Bank',
		number: '662356533459696923456'
	},
	{
		id: 19,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'Idea Bank',
		number: '662356533459696923456'
	},
	{
		id: 20,
		name: 'Sasha Wor',
		country: 'Belgium',
		bank: 'ING',
		number: '662356533459696923456'
	},
];


const Reports = () => {
	const [filterListSend, setFilterListSend] = useState({
		country: 'be',
		category: 'bnk',
		filterBy: []
	})
	const [suitable, setSuitable] = useState(items)
	const [selectItems, setSelectItems] = useState(null);

	useEffect(()=> {
		console.log('Fliter changend');
		
		return () => {

		}
	}, [filterListSend])
	

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


	const sendReport = () => {
		console.log(selectItems);
	}

	return (
		<div>
			<InputWrap title="Choose the country">
				<Selector listSelect={listSelects} activeSelect={filterListSend.country} onChange={changeCountry} />
				<p className="txt12x14 cWGry" style={{marginTop: '12px'}}>*When you select a country, you will see all the reported assets belonging to it.</p>
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
			<TableInfo selectItems={selectItems} setSelectItems={setSelectItems} items={suitable} />
		</div>
	)
}

export default Reports