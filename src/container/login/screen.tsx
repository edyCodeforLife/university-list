import React, {memo} from "react";
import "../../components/app.scss";
import { LoginComponent } from '../../components/login/login-form';

export interface IScreenLogin {
	redirectSignUp():void;
	onChangeUserName():void;
	onChangePassword():void;
	onLoginSubmit():void;
}

function _LoginScreen(props:IScreenLogin) {

	const { redirectSignUp, onChangeUserName, onChangePassword, onLoginSubmit } = props;
	return (
		<div className="pageContainer">
			<div className="loginScreen">
				<h2 className="loginTitle">Login</h2>
				<LoginComponent
					text={"Login"}
					onChangeUserName={onChangeUserName}
					onChangePassword={onChangePassword}
					onLoginSubmit={onLoginSubmit}
					{...props}
				/>

				<h4>
					Haven't got an account? Register
					<span onClick={() => {redirectSignUp()}} style={{color: "#218DD7", marginLeft: 5, cursor: 'pointer' }}>Here</span>
				</h4>
			</div>
		</div>
	);
}
export default memo(_LoginScreen);
export const LoginScreen = memo(_LoginScreen);
