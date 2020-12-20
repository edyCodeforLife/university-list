import React, { memo } from 'react';
import { Card, Row, Col, Input, Radio, Space, Button } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

export interface ISignUpProps {
	text: string;
	onChangeUserName(e:any):void;
	onChangePassword(e:any):void;
	onReconfirmPassword(e:any):void;
	onRegisterSubmit():void;
	radioValue:string;
	onChangeRadio(e):void;
	onChangeUserAge(e):void
}

function _SignUp(props:ISignUpProps) {
	const { onChangeUserName, text, onChangeRadio, onChangePassword, onReconfirmPassword, onRegisterSubmit, onChangeUserAge, radioValue } = props;
	const { Grid } = Card;

	const onHandleKeyDown = (e) => {
		const key = e.keyCode || e.charCode;
		if (key === 13) {
			onRegisterSubmit();
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
								placeholder="Choose your username"
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

					<Row>
						<Col md={24} xs={24}>
							<Input.Password
								onKeyPress={(e) => {onHandleKeyDown(e)}}
								onChange={(e) => {onReconfirmPassword(e)}}
								placeholder="Re-confirm password"
								iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
							/>

						</Col>
					</Row>

					<Row>
						<Col md={24} xs={24}>
							<Input
								type="number"
								min="0"
								max="200"
								onKeyPress={(e) => {onHandleKeyDown(e)}}
								onChange={(e) => {onChangeUserAge(e)}}
								placeholder="How Old Are You?"
							/>
						</Col>
					</Row>

					<Row style={{marginBottom: -20}}>
						<Col style={{textAlign: 'left'}} md={24} xs={24}>
							Select Your Gender:
						</Col>
					</Row>

					<Row>
						<Col style={{textAlign: 'left'}} md={24} xs={24}>
							<Radio.Group style={{width: '100%', display: 'flex', justifyContent: 'space-between'}} onChange={(e) => {onChangeRadio(e)}} value={radioValue}>
								<Radio value={"Male"}>Male</Radio>
								<Radio value={"Female"}>Female</Radio>
							</Radio.Group>
						</Col>
					</Row>

				</Space>

				<Row style={{marginTop: 20}}>
					<Col md={24} xs={24}>
						<Button onClick={onRegisterSubmit} style={{visibility: 'visible', width: '50%'}} type="primary">{text}</Button>
					</Col>
				</Row>

			</Grid>
		</Card>
	)
}

export default memo(_SignUp);
export const SignUp = memo(_SignUp);
