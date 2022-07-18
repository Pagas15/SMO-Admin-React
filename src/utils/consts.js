export const ADMIN_REPORTS = '/admin-reports';
export const ADMIN_CONFIGURATION = '/admin-configuration';

export const listLinks = [
	['Reports', './admin-reports'],
	['Configuration', './admin-configuration']
]

export const URL_MAIN = 'https://signalmyoligarch.com';
export const URL_MAIN_LOGIN = URL_MAIN + '/login'
export const URL_GET_API = URL_MAIN + '/api';
export const URL_GET_ADMIN = URL_GET_API + '/getAdmin';
export const URL_GET_ASSETS_COUNTRIES = URL_GET_API + '/getAssetsCountries';
export const URL_GET_ASSETS_BY_CATEGORY = URL_GET_API + '/getAssetsByCategory';
export const URL_GET_ASSET_BY_ID = URL_GET_API + '/getAssetById';
export const URL_POST_CHANGE_ASSET_STATUS = URL_GET_API + '/changeAssetStatus';

export const URL_GET_COUNTRIES = URL_GET_API + '/getCountries';
export const URL_GET_INSTITUTION_BY_COUNTRY = URL_GET_API + '/getInstitutionByCountry';
export const URL_GET_OLIGARCHS = URL_GET_API + '/getOligarchs';

export const ACCESS_TOKEN = 'c5b8d8a89bba4c5ad36217999f0419a2ba4d26f5066f9644d5923b23782f75ec';