import React, { memo } from 'react';
import { Select, Row, Col } from 'antd';
import { map } from 'lodash';

interface ISearchProps {
	onSearchChanged(e:any):void;
}

function _Search(props: ISearchProps) {
	const { onSearchChanged } = props;
	const onSearch = (e) => {
		e.persist();
		onSearchChanged(e.target.value);
	}

    return(
		<div className="containerInputSearch">
			<input
				onChange={(e) => onSearch(e)}
				placeholder="Search University"
				className="inputSearch"
				type="text"
			/>
		</div>
	)
}

export default memo(_Search);
export const SearchComponent = memo(_Search);
