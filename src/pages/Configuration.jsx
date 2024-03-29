import React, { useState } from 'react'
import { useEffect } from 'react'
import BtnLine from '../components/buttons/BtnLine'
import Loader from '../components/decorateElemetn/Loader'
import { Icon } from '../components/Icon/Icon'
import Popup from 'reactjs-popup';
import { Input, InputsWrap, InputWrap, Selector } from '../components/inputs'
import ListPeople from '../components/ListPeople'
import { TYPE_FORM_COLECTION } from '../utils/consts'
import { requestAddPerson, requestGetByCountry, requestGetCountries, requestGetOligarchs, requestSaveInstitution, resultShow } from '../utils/scripts'
import BtnBase from '../components/buttons/BtnBase'

const FORM_KEY = 'form1';

const Configuration = () => {
	const [listCountry, setListCountry] = useState([]);
	const [filterListSend, setFilterListSend] = useState({})
	const [listForms, setListForms] = useState(false);
	const [listOligarchs, setListOligarchs] = useState(false);
	const [activePage, setActivePage] = useState(0);

	const [addNewPerson, setAddNewPerson] = useState({ name: '', desctiption: '', image: '' });

	const keysListForms = Object.keys(TYPE_FORM_COLECTION);

	const requersListOligarch = () => {
		listOligarchs && setListOligarchs({ ...listOligarchs, items: 0 })
		requestGetOligarchs(setListOligarchs, activePage)
	}

	useEffect(() => {
		requestGetCountries(setListCountry)
		return () => { }
	}, [])

	useEffect(() => {
		if (filterListSend?.country_id) {
			setListForms(false)
			requestGetByCountry(filterListSend.country_id, setListForms)
		}
		return () => { }
	}, [filterListSend.country_id])

	useEffect(requersListOligarch, [activePage])

	useEffect(() => {
		setFilterListSend({ ...filterListSend, ...listForms })
		return () => { }
	}, [listForms])

	const changeCountry = (key) => {
		setFilterListSend({ country_id: key, ...keysListForms.reduce((obj, i) => ({ ...obj, [i]: '' }), {}) })
	}
	const changeInput = (key, text) => {
		setFilterListSend({ ...filterListSend, [key]: text })
	}
	const changeAddNewPerson = (key, value) => {
		setAddNewPerson({ ...addNewPerson, [key]: value })
	}

	const listArray = () => {
		return keysListForms.map(item => {
			const itemer = TYPE_FORM_COLECTION[item];
			const autoText = !!(listForms[item]) ? listForms[item] : '';
			// console.log(autoText);

			const getInputValue = (value) => {
				changeInput(item, value)
			}

			return <InputWrap title={itemer.title} key={item}>
				<Input type={itemer.type} placeholder={itemer.placeholder} valueGet={getInputValue} baseText={autoText} />
			</InputWrap>
		})
	}

	const handleSubmitForm = (event) => {
		event.preventDefault();
		requestSaveInstitution(filterListSend, item => resultShow({item, callBack: handleSubmitForm}))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		requestAddPerson(addNewPerson, item => resultShow({item, callBack: handleSubmit, addCallBack: () => {
			setPopupOpen(!popupOpen);
			setListOligarchs(false);
			requersListOligarch();
		}}))
	}

	const [popupOpen, setPopupOpen] = useState(false);

	const popupAddPersone = <Popup
		trigger={<BtnLine modificatorsClass={['big', 'icon']} icon={<Icon type="plus" />} > Add new person </BtnLine>}
		position="center center"
		modal
		open={popupOpen}
		onOpen={() => setPopupOpen(!popupOpen)}
	>
		<div className="popup__modal">
			<form className="popup__cnt" onSubmit={handleSubmit}>
				<p className='txt20x22 w700 mb40'>Enter the oligarch's details</p>
				<InputWrap title={'Name'}>
					<Input type={'text'} required placeholder={'Name'} valueGet={value => { changeAddNewPerson('name', value) }} />
				</InputWrap>
				<InputWrap title={'Description'}>
					<Input type={'text'} required placeholder={'Description'} valueGet={value => { changeAddNewPerson('description', value) }} />
				</InputWrap>
				<InputWrap title={'Image'}>
					<Input type={'text'} required placeholder={'Image'} valueGet={value => { changeAddNewPerson('image', value) }} />
				</InputWrap>
				<BtnBase theme="dark" type="input" >Add new person</BtnBase>
			</form>
		</div>
	</Popup>

	return (
		<div>
			<div className='blockRow'>
				<InputWrap title="Choose the country">
					<Selector listSelect={listCountry} activeSelect={filterListSend.country} onChange={changeCountry} placeholder="Choose the county" />
					<p className="txt12x14 cWGry" style={{ marginTop: '12px' }}>It displays all the information according to the selected country above and its email template</p>
				</InputWrap>
				{(listForms) && <BtnLine
					style={{ marginLeft: 'auto' }}
					modificatorsClass={['big']}
					form={FORM_KEY}
				>
					Save
				</BtnLine>}
			</div>
			<InputsWrap id={FORM_KEY} onSubmit={handleSubmitForm} >
				{(listForms) ?
					listArray() :
					filterListSend?.country_id ?
						<div className='blockCenter'><Loader /></div> :
						<div className='blockCenter'><p>Select some country</p></div>
				}
			</InputsWrap>
			<div className="blockRow">
				<p className='titleM w800'>List of sanctioned people</p>
				{popupAddPersone}
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