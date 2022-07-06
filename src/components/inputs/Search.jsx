import React, { useState } from 'react'
import reactStringReplace from 'react-string-replace';


const search = (s, arr) => {
	return arr.filter((el) => el.toLowerCase().indexOf(s.toLowerCase()) > -1)
}

const Search = ({placeholder, objectSearch, selectVar, value}) => {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState(value || '');

	const items = Object.keys(objectSearch);

	const clear = () => {
		setText('');
	}

	const onChange = e => {
		setText(e.target.value);
	}

	const openSearch = () => {
		setOpen(true);
	}

	const onSelect = id => {
		selectVar && selectVar(id)
	}

	const listVariants = search(text, items).map(item => {
		const onClick = () => {
			onSelect(item)
		}
		return (<li className="inputSearch__item" key={objectSearch[item]}>
				<button className="inputSearch__btn" onClick={onClick}>
					<span>
						{ reactStringReplace(item, text, (match, i) => (
							<span className="w800" key={i}>{match}</span>
						)) }
					</span>
				</button>
			</li>)
	})

	return (
		<div className="inputSearch">
			<label className="inputSearch__input" onClick={openSearch}>
				<input
					type="text"
					placeholder={placeholder} 
					onChange={onChange}
					value={text}
				/>
			</label>
			{open && (text.length >= 1) && <ul className="inputSearch__list">
				<p className="inputSearch__nav">
					<span className="inputSearch__text">
						{text}
					</span>
					<button className="clear" onClick={clear}>Clear</button>
				</p>
				{ (text.length >= 2) && listVariants }
			</ul>}
		</div>
	)
}

export default Search