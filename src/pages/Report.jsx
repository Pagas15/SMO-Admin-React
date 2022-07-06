import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BtnBase from '../components/buttons/BtnBase';
import BtnCircle from '../components/buttons/BtnCircle';
import { Icon } from '../components/Icon/Icon'
import { Input } from '../components/inputs';

const Report = ({getReport}) => {
	const params = useParams();

	const reportInfo = getReport(params.reportId - 0)

	const [valueInput, setValueInput] = useState('')

	const categoryType = (key) => {
		switch (key) {
			
			case 'bank': 
					return (<>
						<p className="txt18x21 reportPage__text">
							<span className='baseText'>Bank Name: </span>
							{reportInfo.bankName}
						</p>
						<p className="txt18x21 reportPage__text">
							<span className='baseText'>Account Number: </span>
							{reportInfo.bankNumber}
						</p>
					</>);
			case 'realEstate': 
					return (<>
						<p className="txt18x21 reportPage__text">
							<span className='baseText'>Category: </span>
							{reportInfo.realCategory}
						</p>
					</>);
			case 'company': 
					return (<>
						<p className="txt18x21 reportPage__text">
							<span className='baseText'>Category: </span>
							{reportInfo.companyCategory}
						</p>
					</>);
			case 'car':
				return (<>
					<p className="txt18x21 reportPage__text">
						<span className='baseText'>Car Brand: </span>
						{reportInfo.carBrand}
					</p>
					<p className="txt18x21 reportPage__text">
						<span className='baseText'>Car Model: </span>
						{reportInfo.carModel}
					</p>
					<p className="txt18x21 reportPage__text">
						<span className='baseText'>License Plate: </span>
						{reportInfo.licensPlate}
					</p>
				</>);
			case 'art': 
					return (<>
						<p className="txt18x21 reportPage__text">
							<span className='baseText'>Category: </span>
							{reportInfo.artCategory}
						</p>
						<p className="txt18x21 reportPage__text">
							<span className='baseText'>Name of art: </span>
							{reportInfo.artName}
						</p>
					</>);
			case 'hotel': 
					return (<>
						<p className="txt18x21 reportPage__text">
							<span className='baseText'>Hotel Name: </span>
							{reportInfo.hotelName}
						</p>
					</>);
			default:
				return (<></>);
		}
	}

	const sendReport = () => {
		console.log('Send function does not exist')
		console.log(`Emeil for send: ${valueInput}`);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		sendReport()
	}


	const imgBlock = !!(reportInfo.imgLink) ? 
		<Popup 
			trigger={<div className="reportPage__img">
					<img src={reportInfo.imgLink} alt="" />
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
				<img src={reportInfo.imgLink} alt="" />
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
				/>
				<BtnBase theme="dark" type="input">Send</BtnBase>
			</form>
		</div>
	</Popup>)

	return (
		<div className='reportPage' style={{minHeight: '70vh'}}>
			{imgBlock }
			<p className="txt18x21 reportPage__text">
				<span className='baseText'>Country: </span>
				{reportInfo.country}
			</p>
			<p className="txt18x21 reportPage__text">
				<span className='baseText'>Owner of Asset: </span>
				{reportInfo.owner}
			</p>
			{categoryType(reportInfo.category)}
			<p className="txt18x21 reportPage__text">
				<span className='baseText'>The reason the reporter thinks this belongs to an oligarch: </span>
				{reportInfo.reason}
			</p>
			<p className="txt18x21 reportPage__text">
				<span className='baseText'>Additional Information: </span>
				{reportInfo.additionInfo}
			</p>
			{sendReportBtn}
			
		</div>
	)
}

export default Report