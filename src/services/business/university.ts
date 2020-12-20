import { IUniversityList, IResponseSuccess, IUniversityService, UniversityService } from '../service/university-service';

export interface IUniversityServiceData {
	getUniversityList(handler:IResponseSuccess): void;
}

export class UniversityServiceData implements IUniversityServiceData {
	private _service: IUniversityService;

	constructor() {
		this._service = new UniversityService();
	}

	async getUniversityList(handler: IResponseSuccess) {
		try {
			const response = await this._service.getUniversityList();
			return await handler.Success(response.data);
		}
		catch (e) {
			return console.log(e);
		}
	}
}