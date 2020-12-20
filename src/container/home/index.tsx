import React, { useEffect, useState, useRef } from "react";
import { HomeScreen } from './screen';
import { chunk, uniq, filter, clone, map, intersection } from 'lodash';
import {  IUniversityServiceData, UniversityServiceData  } from "../../services/business/university";
import { IUniversityList } from "../../services/service/university-service"

function _HomePage(props) {
	const _service: IUniversityServiceData = new UniversityServiceData();
	const [ universityListData, setUniversityListData ] = useState([]);
	const userInteraction = useRef(false);
	const [ universityListMasterData, setUniversityListMasterData ] = useState([]);
	const [ selectedIndex, setSelectedIndex ] = useState(0);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ querySearch, setQuerySearch ] = useState("");
	const [ locationList, setLocationList ] = useState([]);
	const [ locationChange, setLocationChange ] = useState("");
	const { history } = props;

	const getData = () => {
		_service.getUniversityList({
			Success: (data:IUniversityList[]) => {
				setUniversityListData(chunk(data,8));
				setUniversityListMasterData(data);
				let locationUniversity = map(data, item => {
					return item.country;
				});
				setLocationList(uniq(locationUniversity));
			}
		})
	}

	const downloadFile = (exportObj,exportName) => {
		var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
		var downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute("href",     dataStr);
		downloadAnchorNode.setAttribute("download", exportName + ".json");
		document.body.appendChild(downloadAnchorNode); // required for firefox
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	}

	const downloadFavourite = (item) => {
		downloadFile(item,item.name)
	}

	const onChangePagination = (page) => {
		setSelectedIndex(currentPage < page ? selectedIndex + 1 : selectedIndex - 1);
		setCurrentPage(page);
	}

	const filteredData = () => {
		if (universityListMasterData && universityListMasterData.length > 0) {
			let selectedFilter = filter(clone(universityListMasterData), (item) => {
				let filteredCountry = locationChange !== undefined && locationChange !== "" && item.country ?
					item.country === locationChange : true;
				let searchQuery = item.name && querySearch !== ""?
					item.name.toLowerCase().includes(querySearch.toLowerCase()) : true;
				return searchQuery && filteredCountry;
			});

			setUniversityListData(chunk(selectedFilter,8));
		}
	}

	const onSearchChanged = (value) => {
		userInteraction.current = true;
		setQuerySearch(value);
	}

	const handleChangeUniversityLocation = (value) => {
		userInteraction.current = true;
		setLocationChange(value);
	}

	const resetFilter = () => {
		setUniversityListData(chunk(universityListMasterData,8));
		setQuerySearch("");
		setLocationChange("");
	}

	useEffect(() => {
		userInteraction.current && filteredData();
	}, [querySearch, locationChange]);

	useEffect(() => {
		getData();
	}, []);

	console.log(universityListData)

	return (
		<HomeScreen
			universityListData={universityListData}
			universityListMasterData={universityListMasterData}
			selectedIndex={selectedIndex}
			onChangePagination={onChangePagination}
			currentPage={currentPage}
			onSearchChanged={onSearchChanged}
			querySearch={querySearch}
			locationList={locationList}
			handleChangeUniversityLocation={handleChangeUniversityLocation}
			downloadAll={downloadFile}
			resetFilter={resetFilter}
			downloadFavourite={downloadFavourite}
			{...props}
		/>
	)
}
export const HomePage = React.memo((_HomePage));
