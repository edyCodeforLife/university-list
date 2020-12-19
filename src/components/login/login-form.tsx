import React, { memo } from 'react';
import { Card, Row, Col, Input, Tooltip, Space, Button } from 'antd';
import { InfoCircleOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

export interface ICardProps {
	text: string;
	onChangeUserName(e:any):void;
	onChangePassword(e:any):void;
}

function _LoginComponent(props:any) {
	const { onChangeUserName, text, onChangePassword } = props;
	const { Grid } = Card;
    return(
		<Card style={{ width: 'auto', margin: 20 }} bordered>
			<Grid hoverable={true} style={{width: '100%'}}>
				<Space size="large" style={{width: '100%'}} direction="vertical">
					<Row>
						<Col md={24} xs={24}>
							<Input
								onChange={(e) => {onChangeUserName(e)}}
								placeholder="Enter your username"
								prefix={<UserOutlined className="site-form-item-icon" />}
								suffix={
									<Tooltip title="Extra information">
									<InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
									</Tooltip>
								}
							/>
						</Col>
					</Row>

					<Row>
						<Col md={24} xs={24}>
							<Input.Password
								onChange={(e) => {onChangePassword(e)}}
								placeholder="input password"
								iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
							/>

						</Col>
					</Row>
				</Space>


				<Button style={{visibility: 'visible'}} type="primary">{text}</Button>

			</Grid>
		</Card>
	)
}

export default memo(_LoginComponent);
export const LoginComponent = memo(_LoginComponent);
