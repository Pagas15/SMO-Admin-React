import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon/Icon';
import { ADMIN_REPORTS, URL_POST_CHANGE_ASSET_STATUS } from '../../utils/consts';
import { Link } from "react-router-dom";
import BtnLine from '../buttons/BtnLine';
import BtnCircle from '../buttons/BtnCircle';
import { Selector } from '../inputs';
import { requestChangeState} from '../../utils/scripts';


const sliceTxt = (text, num) => {
	return text.substr(0, num) + ((text.length >= num) && '...')
}
				

function Items({ reportEmail, currentItems, setListActive, listActive, fullListKeys, typeColum }) {

	const [mobileSize, setMobileSize] = useState(false);

	const funkResize = () => {
		(window.innerWidth >= 992) ?
			setMobileSize(false) :
			setMobileSize(true) ;
	}

	useEffect(() => {
		window.addEventListener('resize', funkResize)
		return () => {
			window.removeEventListener('resize', funkResize)
		}
	}, [])
	

	const onChange = (key) => {
		listActive === null ? setListActive([key]) :
		listActive === 'all' ? setListActive([...fullListKeys.filter(id => id !== key)]) : 
		listActive.includes(key) ? listActive.length <= 1 ? setListActive(null) :
		setListActive([...listActive.filter(id => id !== key)]) :
		setListActive([...listActive, key])
	}

  return (
    <>
      {currentItems && currentItems.map((item) => {
				const activeStatus = 
					listActive === null ? false :
					listActive === 'all' ? true : 
					listActive.includes(item.id)

				const localOnChange = () => {
					onChange(item.id)
				}


				const listTd = typeColum.map(key => {
					if(key !== 'status'){
						return <td key={key} className="txt12x14 w700 cWGry">{mobileSize ? (item[key].split(' ').map(letter => sliceTxt(letter, 3)).join(' ')) : item[key]}</td>
					} else if (key === 'status') {
						const onChange = (status) => {
							requestChangeState(item.id, status, data => {console.log(data)})
						}
						return <td key={key} className="tableInfo__selector"><Selector 
								listSelect={{
									Pending: 'Pending', 
									Approved: 'Approved', 
									Declined: 'Declined'
								}}
								activeSelect={item[key]}
								onChange={onChange}
							/></td>
					}
				})

				return <tr key={item.id} className="tableInfo__item" >
            <td className=''>
							<label className='inputCheckBox'>
								<input type="checkbox" checked={!!reportEmail ? activeStatus : false} onChange={localOnChange} />
								<div><Icon type="check" /></div>
							</label>
						</td>
						{listTd}
						<td>
							<Link to={ADMIN_REPORTS + '/' + item.id} className="tableInfo__more">
								{!mobileSize && <BtnLine>More</BtnLine>}
								<BtnCircle><Icon type="arrowRight" /></BtnCircle>
							</Link>
						</td>
          </tr>
			})}
    </>
  );
}

export default Items