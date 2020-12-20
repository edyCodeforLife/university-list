import React, {memo} from "react";
import "../../components/app.scss";
import { map } from 'lodash';
import { message } from 'antd';
import { LoginComponent } from '../../components/login/login-form';

export interface IScreenLogin {
	redirectSignUp():void;
	onChangeUserName():void;
	onChangePassword():void;
	onLoginSubmit():void;
}

function _HomeScreen(props:any) {

	const { redirectSignUp, onChangeUserName, onChangePassword, onLoginSubmit } = props;
	return (
		<div className="pageContainer">
			dsadsd
		</div>
	);
}
export default memo(_HomeScreen);
export const HomeScreen = memo(_HomeScreen);
