import classNames from 'classnames';
import React, {useState} from 'react'

const Input = ({placeholder, type, required = false, className, valueGet, baseText}) => {
	const [value, setValue] = useState(baseText || '');

	const onChange = (e) => {
		setValue(e.target.value)
		valueGet && valueGet(e.target.value)
	}

	let inputParam = {
		type: 'text'
	}

	let accept;

	switch (type) {
		case 'tel':
			inputParam.type = 'tel' 
			break;
		case 'email':
			inputParam.type = 'email' 
			break;
		case 'image':
			inputParam.type = 'file' 
			accept = 'image/*' 
			break;
		default:
			inputParam.type = 'text' 
			break;
	}

	return (
		<label className={classNames('inputBox', className)}>
			<input 
				className='txt12x14' 
				type={inputParam.type} 
				placeholder={placeholder} 
				required={required}
				value={value} 
				onChange={onChange}
				multiple={type=== 'image' ? true : false}
				accept={accept}
			/>
		</label>
	)
}

export default Input