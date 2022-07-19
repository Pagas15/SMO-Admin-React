import { ACCESS_TOKEN, URL_GET_ASSETS_BY_CATEGORY, URL_GET_ASSETS_COUNTRIES, URL_GET_ASSET_BY_ID, URL_GET_COUNTRIES, URL_GET_INSTITUTION_BY_COUNTRY, URL_GET_OLIGARCHS, URL_POST_ADD_PERSON, URL_POST_CHANGE_ASSET_STATUS, URL_POST_SAVE_INSTITUTION, URL_POST_SENT_REPORT, URL_POST_SENT_REPORTS } from "./consts";


export async function request({url, method = 'GET', data = null, callBack}) {
  try {
    const headers = {
      'Access-Token' : ACCESS_TOKEN
    };
    let body;

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data)
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    })
    
    const result = await response.json();
		if(callBack) {
			callBack(result)
      // console.log(result);
		} else {
			return result
		}
  } catch (e) {
    console.warn('Error: ', e.message)
  }
}

export const requestSaveInstitution = (data, callBack) => {
	request({
		url: URL_POST_SAVE_INSTITUTION,
		method: 'POST',
		data,
		callBack
	})
}
export const requestSendReport = (data, callBack) => {
	request({
		url: URL_POST_SENT_REPORT,
		method: 'POST',
		data,
		callBack
	})
}
export const requestSendReports = (data, callBack) => {
	request({
		url: URL_POST_SENT_REPORTS,
		method: 'POST',
		data,
		callBack
	})
}
export const requestAddPerson = (data, callBack) => {
	request({
		url: URL_POST_ADD_PERSON,
		method: 'POST',
		data,
		callBack
	})
}
export const requestChangeState = (id, status, callBack) => {
	request({
		url: URL_POST_CHANGE_ASSET_STATUS,
		method: 'POST',
		data: {
			id,
			status
		},
		callBack
	})
}


export const requestItemReport = (id, callBack) => {
	request({
		url: URL_GET_ASSET_BY_ID + `?id=${id}`,
		callBack
	})
}

export const requestListItems = ({category, country, pageCount, callBack}) => {
  request({
    url: URL_GET_ASSETS_BY_CATEGORY + `?type=${category}&country=${country}&page=${(!!pageCount ) ? pageCount : 1 }`, 
    callBack
  })
}

export const requestGetAssetsCountries = (callBack) => {
  request({
    url: URL_GET_ASSETS_COUNTRIES, 
    callBack: result => {
      callBack(result.reduce((object, item) => ({...object, [item]: item}), {}));
    }
  })
}

export const requestGetCountries = (callBack) => {
  request({
    url: URL_GET_COUNTRIES, 
    callBack: result => {
      callBack(result.reduce((object, item) => ({...object, [item.id]: item.name}), {}));
    }
  })
}

export const requestGetByCountry = (id,callBack) => {
  request({
    url: URL_GET_INSTITUTION_BY_COUNTRY+ `?country_id=${id}`, 
    callBack
  })
}

export const requestGetOligarchs = (callBack, page) => {
  request({
    url: URL_GET_OLIGARCHS + `?page=${(!!page ) ? page : 1 }`,
    callBack
  })
}

export const resultShow = (item, callBack) => {
  console.log(item);
  (item?.success) ?
    alert('Changes saved') :
    (window.confirm('Failed, try again?')) && callBack();
}