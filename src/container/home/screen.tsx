import React, {memo} from "react";
import "../../components/app.scss";
import { map } from 'lodash';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { CardComponent } from '../../components/card-component/card';
import { SearchComponent } from '../../components/search-bar/search';
import { DropdownList } from '../../components/dropdown-menu/dropdown';
import { isMobile } from '../../global/function/global-function';
import * as LS from 'local-storage';
import { Card, Row, Col,Pagination, Button } from 'antd';

export interface IHomeScreenProps {
	universityListData: any;
	selectedIndex: number;
	universityListMasterData:any;
	onChangePagination(page:number):void;
	currentPage:number;
	onSearchChanged():void;
	querySearch: string;
	locationList: string[];
	handleChangeUniversityLocation():void;
	downloadAll(data, fileName):void;
	resetFilter():void;
	downloadFavourite():void;
}

function _HomeScreen(props:IHomeScreenProps) {

	const { Grid } = Card;

	const { universityListData,resetFilter, downloadFavourite, downloadAll, handleChangeUniversityLocation, locationList, querySearch, onSearchChanged, currentPage, onChangePagination, selectedIndex, universityListMasterData } = props;
	return (
		<div className="homeContainer">
			<Header
				userName={LS.get("currentLoggedIn")}
			/>
			<div className="containerScreen">
				<Row style={{padding: '0px 30px', marginTop: isMobile()? 170 : 0 }}>
					<Col md={6} xs={24} style={{textAlign: 'left', marginBottom: isMobile() ? 15 : 0}}>
						<SearchComponent
							onSearchChanged={onSearchChanged}
						/>
					</Col>
					<Col md={6} xs={24} style={{textAlign: 'right', marginBottom: isMobile() ? 15 : 0 }}>
						<DropdownList
							handleChangeUniversityLocation={handleChangeUniversityLocation}
							locationList={locationList}
						/>
					</Col>

					<Col md={6} xs={24} style={{textAlign: 'right', marginBottom: isMobile() ? 15 : 0 }}>
						<Button onClick={resetFilter} type="ghost" style={{width: '60%'}}>Reset Filter</Button>
					</Col>

					<Col md={6} xs={24} style={{textAlign: 'right'}}>
						<Button type="primary" onClick={() => downloadAll(universityListMasterData, "user")}>Download All University Data</Button>
					</Col>
				</Row>
				<Row style={{padding: 20, height: '100%'}}>
					{universityListData && universityListData[selectedIndex] && universityListData[selectedIndex].length > 0 ?
					map(universityListData[selectedIndex], (item,idx) => (
						<Col md={6} xs={24} key={idx}>
							<CardComponent
								item={item}
								downloadFavourite={downloadFavourite}
							/>
						</Col>
					)):
						<div className="noDataContainer">No Data</div>
					}

					{universityListData && universityListData[selectedIndex] && universityListData[selectedIndex].length > 0 && (
						<Col md={24} xs={24}>
							<Pagination
								simple
								defaultCurrent={1}
								onChange={onChangePagination}
								current={currentPage}
								total={querySearch === "" ? universityListMasterData.length : universityListData.length}
							/>
						</Col>
					)}
				</Row>
			</div>

			<Footer />
		</div>
	);
}
export default memo(_HomeScreen);
export const HomeScreen = memo(_HomeScreen);
