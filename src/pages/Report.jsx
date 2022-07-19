import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BtnBase from '../components/buttons/BtnBase';
import BtnCircle from '../components/buttons/BtnCircle';
import Loader from '../components/decorateElemetn/Loader';
import { Icon } from '../components/Icon/Icon'
import { Input, Selector } from '../components/inputs';
import { requestItemReport, requestChangeState, requestSendReport, resultShow } from '../utils/scripts';

const colectionTexts = {
	country: 'Country: ',
	ownerName: 'Owner of Asset: ',
	comment: 'Comment: ',
	bankName: 'Bank Name: ',
	bankNumber: 'Account Number: ',
	carBrand: 'Car Brand: ',
	carModel: 'Car Brand: ',
	licensPlate: 'License Plate: ',
	artName: 'Name of art: ',
	hotelName: 'Hotel Name: ',
	reason: 'The reason the reporter thinks this belongs to an oligarch: ',
	additionInfo: 'Additional Information: ',
	address: 'Address: ',
}

const Report = () => {
	const params = useParams();
	const [reportInfo, setReportInfo] = useState(null);

	const [valueInput, setValueInput] = useState('')

	const sendReport = () => {
		requestSendReport(valueInput, item => resultShow(item, sendReport))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		sendReport()
	}

	useEffect(() => {
		requestItemReport(params.reportId, setReportInfo)
	}, [])

	useEffect(()=> {
		setValueInput(reportInfo?.reportEmail)
	}, [reportInfo?.reportEmail])

	const imgBlock = !!(reportInfo?.photo) ? 
		<Popup 
			trigger={<div className="reportPage__img">
					<img src={reportInfo.photo} alt="" />
					<BtnCircle 
						size="24px"
						style={{width: '24px', height: '24px', fontSize: '12px'}}
					>
						<Icon type="image" />
					</BtnCircle>
				</div>} 
			position="center center"
			modal
		>
			<div className='popup__modalImg'>
				<img src={reportInfo.photo} alt="" />
			</div>
		</Popup> : <></>;

	const sendReportBtn = (<Popup 
		trigger={<BtnBase theme="dark">Send the Report</BtnBase>}
		position="center center"
		modal
	>
		<div className="popup__modal">
			<form className="popup__cnt" onSubmit={handleSubmit}>
				<p className='txt20x22 w700 mb40'>Enter the mail to which you want to send the report</p>
				<Input 
					className='mb28' 
					type="email" 
					required={true} 
					placeholder="Enter the email" 
					valueGet={setValueInput}
					baseText={reportInfo?.reportEmail || ''}
				/>
				<BtnBase theme="dark" type="input">Send</BtnBase>
			</form>
		</div>
	</Popup>)

	const listText = reportInfo && Object.keys(reportInfo).map(key => {
		if(!!colectionTexts[key]){
			return (
				<p className="txt18x21 reportPage__text" key={key}>
					<span className='baseText'>{colectionTexts[key]} </span>
					{reportInfo[key]}
				</p>
			)
		} else {
			return
		}
	})

	const onChange = (status) => {
		requestChangeState(params.reportId, status, data => {console.log(data)})
	}

	const selector = () => <Selector 
		listSelect={{
			Pending: 'Pending', 
			Approved: 'Approved', 
			Declined: 'Declined'
		}}
		activeSelect={reportInfo.status}
		onChange={onChange}
	/>

	const page = reportInfo === null 
		? <div className='blockCenter'><Loader /></div>
		: (Object.keys(reportInfo).length >= 1) 
		? (<div className='reportPage' style={{minHeight: '70vh'}}>
				{imgBlock }
				{listText}
				{selector()}
				{sendReportBtn
			}</div>) 
		: (<p>Page not found</p>)

	return page 
}

export default Report