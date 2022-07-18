import React, {useState} from 'react'
import { useEffect } from 'react'
import BtnLine from '../components/buttons/BtnLine'
import Loader from '../components/decorateElemetn/Loader'
import { Icon } from '../components/Icon/Icon'
import { Input, InputsWrap, InputWrap, Selector } from '../components/inputs'
import ListPeople from '../components/ListPeople'
import { TYPE_FORM_COLECTION } from '../utils/consts'
import { requestGetByCountry, requestGetCountries, requestGetOligarchs, requestSaveInstitution } from '../utils/scripts'


const Configuration = () => {
	const [listCountry, setListCountry] = useState([]);
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
	const [listForms, setListForms] = useState(false);
	const [listOligarchs, setListOligarchs] = useState(false);
	const [activePage, setActivePage] = useState(0);

	const keysListForms = Object.keys(listForms);

	useEffect(() => {
		requestGetCountries(setListCountry)
		return () => {}
	}, [])

	useEffect(() => {
		if(filterListSend?.country_id){
			setListForms(true)
			requestGetByCountry(filterListSend.country_id, setListForms)
		}
		return () => {}
	}, [filterListSend.country_id])

	useEffect(() => {
		listOligarchs && setListOligarchs({...listOligarchs, items: 0})
		requestGetOligarchs(setListOligarchs, activePage)
		return () => {}
	}, [activePage])

	useEffect(() => {
		setFilterListSend({...filterListSend, ...listForms})
		return () => {}
	}, [listForms])

	const changeCountry = (key) => {
		setFilterListSend({ country_id: key})
	}
	const changeInput = (indify, text) => {
		setFilterListSend({...filterListSend, [indify]: text})
	}
	
	const listArray = keysListForms.map(item => {
		const itemer = TYPE_FORM_COLECTION[item];
		const autoText = !!(listForms[item]) ? listForms[item] : '';

		const getInputValue = (value) => {
			changeInput(item, value)
		}

		return <InputWrap title={itemer.title} key={item}>
			<Input type={itemer.type} placeholder={itemer.placeholder} valueGet={getInputValue} baseText={autoText} />
		</InputWrap>
	})

	const sendSave = () => {
		requestSaveInstitution(filterListSend, item => {console.log(item)})
	}

	return (
		<div>
			<div className='blockRow'>
				<InputWrap title="Choose the country">
					<Selector listSelect={listCountry} activeSelect={filterListSend.country} onChange={changeCountry} placeholder="Choose the county" />
					<p className="txt12x14 cWGry" style={{marginTop: '12px'}}>It displays all the information according to the selected country above and its email template</p>
				</InputWrap>
				{(keysListForms.length >= 1) && <BtnLine 
					style={{marginLeft: 'auto'}}
					modificatorsClass={['big']}
					onClick={sendSave}
				>
					Save
				</BtnLine>}
			</div>
			<InputsWrap >
			{ (keysListForms.length >= 1) ?	
				listArray : 
				(listForms === true) ? 
				<div className='blockCenter'><Loader /></div>:
				(listForms === false) ?
				<div className='blockCenter'><p>Select some country</p></div> :
				<div className='blockCenter'><p>The list is empty, please select another country</p></div>
			}
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