import classNames from 'classnames';
import React, {useState} from 'react'

const Input = ({placeholder, type, required = false, className, valueGet}) => {
	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value)
		valueGet && valueGet(e.target.value)
	}

	let inputParam = {
		type: 'text'
	}

	switch (type) {
		case 'tel':
			inputParam.type = 'tel' 
			break;
		case 'email':
			inputParam.type = 'email' 
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
				value={text} 
				onChange={onChange}
			/>
		</label>
	)
}

export default Input