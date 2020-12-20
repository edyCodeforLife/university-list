import React, { memo } from 'react';
import { Card, Row, Col, Input, Tooltip, Space, Button } from 'antd';
import { InfoCircleOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

export interface ILoginProps {
	text: string;
	onChangeUserName(e:any):void;
	onChangePassword(e:any):void;
	onLoginSubmit():void;
}

function _LoginComponent(props:ILoginProps) {
	const { onChangeUserName, text, onChangePassword, onLoginSubmit } = props;
	const { Grid } = Card;

	const onHandleKeyDown = (e) => {
		const key = e.keyCode || e.charCode;
		if (key === 13) {
			onLoginSubmit();
		}
	}

    return(
		<Card style={{ width: 'auto', margin: 20 }} bordered>
			<Grid hoverable={true} style={{width: '100%'}}>
				<Space size="large" style={{width: '100%'}} direction="vertical">
					<Row>
						<Col md={24} xs={24}>
							<Input
								onKeyPress={(e) => {onHandleKeyDown(e)}}
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
								onKeyPress={(e) => {onHandleKeyDown(e)}}
								onChange={(e) => {onChangePassword(e)}}
								placeholder="input password"
								iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
							/>

						</Col>
					</Row>
				</Space>

				<Row style={{marginTop: 20}}>
					<Col md={24} xs={24}>
						<Button onClick={onLoginSubmit} style={{visibility: 'visible', width: '50%'}} type="primary">{text}</Button>
					</Col>
				</Row>

			</Grid>
		</Card>
	)
}

export default memo(_LoginComponent);
export const LoginComponent = memo(_LoginComponent);
