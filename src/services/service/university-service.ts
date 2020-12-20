import axios, { AxiosPromise } from 'axios';
import { url_list_university } from '../url-list';

export interface IUniversityList {
	web_pages:string[];
	name: string;
	alpha_two_code: string;
	"state-province": any,
	domains: string[];
	country: string;
}

export interface IResponseError {
	ServiceError: () => void;
}

export interface IResponseSuccess {
	Success?: (res: any) => void;
}

const headers = {
	'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}

export interface IUniversityService {
	getUniversityList(): AxiosPromise<IUniversityList[]>;
}

export class UniversityService implements IUniversityService {

	getUniversityList():AxiosPromise<IUniversityList[]> {
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Content-Type'] = 'application/json'
		return axios.get(url_list_university,{headers});
	}
}