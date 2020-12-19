import React, {memo} from "react";
import "../../components/app.scss";
import { map } from 'lodash';
import { LoginComponent } from '../../components/login/login-form';

export interface IScreenSignUp {
	redirectLogin():void
}

function _SignUpScreen(props:IScreenSignUp) {

	const { redirectLogin } = props;
	return (
		<div className="pageContainer">
			<div className="loginScreen">
				<h2 className="loginTitle">Sign Up</h2>
				<LoginComponent
					{...props}
				/>

				<h4>
					Back to Login Page
					<span onClick={() => {redirectLogin()}} style={{color: "#218DD7", marginLeft: 5, cursor: 'pointer' }}>Here</span>
				</h4>
			</div>
		</div>
	);
}
export default memo(_SignUpScreen);
export const SignUpScreen = memo(_SignUpScreen);
