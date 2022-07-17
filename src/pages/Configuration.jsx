import React, {useState} from 'react'
import { useEffect } from 'react'
import BtnLine from '../components/buttons/BtnLine'
import Loader from '../components/decorateElemetn/Loader'
import { Icon } from '../components/Icon/Icon'
import { Input, InputsWrap, InputWrap, Selector } from '../components/inputs'
import ListPeople from '../components/ListPeople'
import { requestGetByCountry, requestGetCountries, requestGetOligarchs } from '../utils/scripts'


const listNtn = [
	{indify: 'inst', title: 'Institution', placeholder: 'Institution'},
	{indify: 'instAddress', title: 'Institution Address', placeholder: 'Institution Address'},
	{indify: 'instEmail', title: 'Institution email:', placeholder: 'Institution email:', type: "email"},
	{indify: 'instNumber', title: 'Institution contact number:', placeholder: 'Institution contact number', type: "tel"},
	{indify: 'contPerson', title: 'Contact Person:', placeholder: 'Contact Person'},
	{indify: 'contEmail', title: 'Contact Person’s email:', placeholder: 'Contact Person’s email', type: "email"},
	{indify: 'contNumber', title: 'Contact Person’s number:', placeholder: 'Contact Person’s number', type: "tel"}
]

const Configuration = () => {
	const [listCountry, setListCountry] = useState({kets: 'word'});
	const [filterListSend, setFilterListSend] = useState({
		// country: '',
		// inst: '',
		// instAddress: '',
		// instEmail: '',
		// instNumber: '',
		// contPerson: '',
		// contEmail: '',
		// contNumber: '',
	})
	const [listForms, setListForms] = useState({});
	const [listOligarchs, setListOligarchs] = useState(false);
	const [activePage, setActivePage] = useState(0);

	useEffect(() => {
		requestGetCountries(setListCountry)
		return () => {}
	}, [])

	useEffect(() => {
		requestGetByCountry(filterListSend.country, setListForms)
		return () => {}
	}, [filterListSend.country])

	useEffect(() => {
		listOligarchs && setListOligarchs({...listOligarchs, items: 0})
		requestGetOligarchs(setListOligarchs, activePage)
		return () => {}
	}, [activePage])

	const changeCountry = (key) => {
		setFilterListSend({...filterListSend, country: key})
	}
	const changeInput = (key, indify) => {
		setFilterListSend({...filterListSend, [indify]: key})
	}
	
	const listArray = listNtn.map(item => {
		const getInputValue = (value) => {
			changeInput(value, item.indify)
		}

		return <InputWrap title={item.title} key={item.indify}>
			<Input type={item.type} placeholder={item.placeholder} valueGet={getInputValue} />
		</InputWrap>
	})

	return (
		<div>
			<InputWrap title="Choose the country">
				<Selector listSelect={listCountry} activeSelect={filterListSend.country} onChange={changeCountry} placeholder="Choose the county" />
				<p className="txt12x14 cWGry" style={{marginTop: '12px'}}>It displays all the information according to the selected country above and its email template</p>
			</InputWrap>
			<InputsWrap >
			{	listArray	}
			</InputsWrap>
			<div className="blockRow">
				<p className='titleM w800'>List of sanctioned people</p>
				<BtnLine 
					modificatorsClass={['big', 'icon']}
					icon={<Icon type="plus" />}
				>
					Add new person
				</BtnLine>
			</div>
			{listOligarchs ? <ListPeople 
				items={listOligarchs.items}
				totalPage={listOligarchs.pagesTotal.total}
				setActivePage={setActivePage}
				activePage={activePage}
			/> : <div className='blockCenter'><Loader /></div>}
		</div>
	)
}

export default Configuration