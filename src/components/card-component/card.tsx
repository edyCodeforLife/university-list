import React, { memo } from 'react';
import { Card, Row, Col, Input, Tooltip, Space, Button } from 'antd';
import { InfoCircleOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { IUniversityList } from '../../services/service/university-service';
import { map } from 'lodash';

export interface ICardProps {
	item: IUniversityList;
	downloadFavourite(item:any):void;
}

function _CardComponent(props:ICardProps) {
	const { item, downloadFavourite } = props;
	const { Meta } = Card;

    return(
		<Card
			// onClick={() => setNavigation(data.id)}
			size="small"
			style={{margin: 10}}
			hoverable={true}
			bodyStyle={{backgroundColor: 'rgba(255,255,255,.6)'}}
		>
			<Meta
				className="cardListStyle"
				style={{textAlign: 'center', display: 'flex', flexWrap: 'wrap' }}
				title={item.name}
			/>
			<Row style={{margin: '5px 0px'}}>
				<Col style={{textAlign: 'left', marginLeft: 12}} md={24} xs={24}>
					<span className="contentSubtitile">Country Code:</span>
					{item.alpha_two_code}
				</Col>

				<Col style={{textAlign: 'left', marginLeft: 12}} md={24} xs={24}>
					<span className="contentSubtitile">Location:</span>
					{item.country}
				</Col>

				<Col style={{textAlign: 'left', marginLeft: 12}} md={24} xs={24}>
					<span className="contentSubtitile"> University Website:</span>
				</Col>

				{item && map(item.web_pages, (data,idx) => (
					<Col style={{textAlign: 'left', marginLeft: 12}} md={24} xs={24} key={idx}>
						 {data}
					</Col>
				))}

				<Col style={{textAlign: 'left', marginTop: 10, marginLeft: 12}} md={24} xs={24}>
					<div className="contentSubtitile">
						<Button type="primary" onClick={() => downloadFavourite(item)}>Download Favourite Univ</Button>
					</div>
				</Col>
			</Row>
		</Card>
	)
}

export default memo(_CardComponent);
export const CardComponent = memo(_CardComponent);
