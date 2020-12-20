import React, { memo } from 'react';
import { Select, Row, Col } from 'antd';
import { map } from 'lodash';

interface IDropdownProps {
	locationList: string[];
	handleChangeUniversityLocation():void
}

function _DropdownList(props: IDropdownProps) {
	const { locationList, handleChangeUniversityLocation } = props;
	const { Option } = Select;

	const renderOptionsDeliveryTime = () => {
		return map(locationList, (item, idx) => (
			<Option value={item} key={idx}>
				{item}
			</Option>
		))
	}

    return(
		<div className="containerDeliveryTime">
			<Select
				allowClear
				style={{ width: '100%' }}
				placeholder="Filter Location of University"
				onChange={handleChangeUniversityLocation}
			>
				{renderOptionsDeliveryTime()}
			</Select>
		</div>
	)
}

export default memo(_DropdownList);
export const DropdownList = memo(_DropdownList);
