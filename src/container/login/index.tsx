import React, { useEffect, useState, useRef } from "react";
import { LoginScreen } from './screen';
import { filter, intersection, clone } from 'lodash';

function _Login(props) {

	const { history } = props;

	const redirectSignUp = () => {
		history.push("/sign_up");
	}

	const onChangeUserName = (e) => {
		console.log(e.target.value)
	}

	const onChangePassword = (e) => {
		console.log(e.target.value)
	}
	return (
		<LoginScreen
			redirectSignUp={redirectSignUp}
			onChangeUserName={onChangeUserName}
			onChangePassword={onChangePassword}
			{...props}
		/>
	)
}
export const Login = React.memo((_Login));
