import React, {useState} from 'react'
import BtnLine from '../components/buttons/BtnLine'
import { Icon } from '../components/Icon/Icon'
import { Input, InputsWrap, InputWrap, Selector } from '../components/inputs'
import ListPeople from '../components/ListPeople'



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

const listNtn = [
	{indify: 'countryFr', title: 'Сountry', placeholder: 'Сountry'},
	{indify: 'inst', title: 'Institution', placeholder: 'Institution'},
	{indify: 'instAddress', title: 'Institution Address', placeholder: 'Institution Address'},
	{indify: 'instEmail', title: 'Institution email:', placeholder: 'Institution email:', type: "email"},
	{indify: 'instNumber', title: 'Institution contact number:', placeholder: 'Institution contact number', type: "tel"},
	{indify: 'contPerson', title: 'Contact Person:', placeholder: 'Contact Person'},
	{indify: 'contEmail', title: 'Contact Person’s email:', placeholder: 'Contact Person’s email', type: "email"},
	{indify: 'contNumber', title: 'Contact Person’s number:', placeholder: 'Contact Person’s number', type: "tel"}
]

const listPeople = [
	{
		id: 1,
		img: 'https://www.tadviser.ru/images/thumb/c/c0/%D0%9F%D1%83%D1%87%D0%BA%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.png/250px-%D0%9F%D1%83%D1%87%D0%BA%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.png',
		name: 'Andrey Puchkov',
		assets: 23
	},
	{
		id: 2,
		img: 'https://static.themoscowtimes.com/image/article_1360/63/TASS_48266793.jpg',
		name: 'Andrey Puchkov',
		assets: 15
	},
	{
		id: 3,
		img: 'https://www.reuters.com/resizer/erMWyDHdBaLVnAfPz55t9SsFavE=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LLTMK4GWTVMVBMK3Q2LHTXXBLE.jpg',
		name: 'Andrey Puchkov',
		assets: 4
	},
	{
		id: 4,
		img: 'https://static.independent.co.uk/2022/02/26/13/Ukraine_Invasion_Russia_Reaction_33648.jpg?quality=75&width=990&auto=webp&crop=982:726,smart',
		name: 'Andrey Puchkov',
		assets: 12
	},
	{
		id: 5,
		img: 'https://www.tadviser.ru/images/thumb/c/c0/%D0%9F%D1%83%D1%87%D0%BA%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.png/250px-%D0%9F%D1%83%D1%87%D0%BA%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.png',
		name: 'Andrey Puchkov',
		assets: 23
	},
	{
		id: 6,
		img: 'https://static.themoscowtimes.com/image/article_1360/63/TASS_48266793.jpg',
		name: 'Andrey Puchkov',
		assets: 15
	},
	{
		id: 7,
		img: 'https://www.reuters.com/resizer/erMWyDHdBaLVnAfPz55t9SsFavE=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LLTMK4GWTVMVBMK3Q2LHTXXBLE.jpg',
		name: 'Andrey Puchkov',
		assets: 4
	},
	{
		id: 8,
		img: 'https://static.independent.co.uk/2022/02/26/13/Ukraine_Invasion_Russia_Reaction_33648.jpg?quality=75&width=990&auto=webp&crop=982:726,smart',
		name: 'Andrey Puchkov',
		assets: 12
	},
	{
		id: 9,
		img: 'https://www.tadviser.ru/images/thumb/c/c0/%D0%9F%D1%83%D1%87%D0%BA%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.png/250px-%D0%9F%D1%83%D1%87%D0%BA%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.png',
		name: 'Andrey Puchkov',
		assets: 23
	},
	{
		id: 10,
		img: 'https://static.themoscowtimes.com/image/article_1360/63/TASS_48266793.jpg',
		name: 'Andrey Puchkov',
		assets: 15
	},
	{
		id: 11,
		img: 'https://www.reuters.com/resizer/erMWyDHdBaLVnAfPz55t9SsFavE=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LLTMK4GWTVMVBMK3Q2LHTXXBLE.jpg',
		name: 'Andrey Puchkov',
		assets: 4
	},
	{
		id: 12,
		img: 'https://static.independent.co.uk/2022/02/26/13/Ukraine_Invasion_Russia_Reaction_33648.jpg?quality=75&width=990&auto=webp&crop=982:726,smart',
		name: 'Andrey Puchkov',
		assets: 12
	},
	{
		id: 13,
		img: 'https://www.tadviser.ru/images/thumb/c/c0/%D0%9F%D1%83%D1%87%D0%BA%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.png/250px-%D0%9F%D1%83%D1%87%D0%BA%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.png',
		name: 'Andrey Puchkov',
		assets: 23
	},
	{
		id: 14,
		img: 'https://static.themoscowtimes.com/image/article_1360/63/TASS_48266793.jpg',
		name: 'Andrey Puchkov',
		assets: 15
	},
	{
		id: 15,
		img: 'https://www.reuters.com/resizer/erMWyDHdBaLVnAfPz55t9SsFavE=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LLTMK4GWTVMVBMK3Q2LHTXXBLE.jpg',
		name: 'Andrey Puchkov',
		assets: 4
	},
	{
		id: 16,
		img: 'https://static.independent.co.uk/2022/02/26/13/Ukraine_Invasion_Russia_Reaction_33648.jpg?quality=75&width=990&auto=webp&crop=982:726,smart',
		name: 'Andrey Puchkov',
		assets: 12
	},
]


const Configuration = () => {
	const [filterListSend, setFilterListSend] = useState({
		country: 'be',
		countryFr: '',
		inst: '',
		instAddress: '',
		instEmail: '',
		instNumber: '',
		contPerson: '',
		contEmail: '',
		contNumber: '',
	})
	

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
				<Selector listSelect={listSelects} activeSelect={filterListSend.country} onChange={changeCountry} />
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
				<BtnLine 
					modificatorsClass={['big', 'icon']}
					icon={<Icon type="download" />}
				>
					Import
				</BtnLine>
			</div>
			<ListPeople items={listPeople} />
		</div>
	)
}

export default Configuration