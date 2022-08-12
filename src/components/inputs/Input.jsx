import classNames from 'classnames';
import React, {useState} from 'react'

const Input = ({placeholder, type, required = false, className, valueGet, baseText}) => {
	const [value, setValue] = useState(baseText || '');


	let inputParam = {
		type: 'text'
	}


	switch (type) {
		case 'tel':
			inputParam.type = 'tel' 
			break;
		case 'email':
			inputParam.type = 'text' 
			break;
		case 'image':
			inputParam.type = 'file' 
			inputParam.accept = 'image/*' 
			break;
		default:
			inputParam.type = 'text' 
			break;
	}

	const classicInput = () => {
		const onChange = (e) => {
			setValue(e.target.value)
			valueGet && valueGet(e.target.value)
		}

		return <input 
			className='txt12x14' 
			type={inputParam.type} 
			placeholder={placeholder} 
			required={required}
			value={value} 
			onChange={onChange}
		/>
	} 
	const imageInput = () => {
		const onChangeImage = (e) => {
			const [file] = e.target.files;
			
			setValue(URL.createObjectURL(file))
			valueGet && valueGet(URL.createObjectURL(file))
		}
		return <input 
			className='txt12x14' 
			type={inputParam.type} 
			placeholder={placeholder} 
			onChange={onChangeImage}
			multiple
			accept={inputParam.accept}
		/>
	}
	return (
		<label className={classNames('inputBox', className)}>
			{inputParam.type !== 'file' ? classicInput() : imageInput() }
		</label>
	)
}

export default Input