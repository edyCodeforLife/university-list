import React, {memo} from "react";
import "../../components/app.scss";
import { SignUp } from "../../components/sign_up/sign_up";

export interface IScreenSignUp {
	redirectLogin():void;
	onChangeUserName():void;
	onChangePassword():void;
	onRegisterSubmit():void;
	onReconfirmPassword():void;
	onChangeRadio():void;
	onChangeUserAge():void;
	radioValue: string;
}

function _SignUpScreen(props:IScreenSignUp) {

	const { radioValue, redirectLogin, onChangeUserAge, onChangeUserName,onChangePassword, onRegisterSubmit, onReconfirmPassword, onChangeRadio } = props;
	return (
		<div className="pageContainer">
			<div className="loginScreen">
				<h2 className="loginTitle">Sign Up</h2>
				<SignUp
					text={"Register"}
					onChangeUserName={onChangeUserName}
					onChangePassword={onChangePassword}
					onRegisterSubmit={onRegisterSubmit}
					onReconfirmPassword={onReconfirmPassword}
					onChangeRadio={onChangeRadio}
					onChangeUserAge={onChangeUserAge}
					radioValue={radioValue}

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
