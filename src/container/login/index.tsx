import React, { useEffect, useState } from "react";
import { LoginScreen } from './screen';
import { find } from 'lodash';
import { message } from 'antd';
import * as LS from 'local-storage';

function _Login(props) {

	const { history } = props;
	const [ userLogin, setUserLogin ] = useState({userName: "", password: ""});

	const redirectSignUp = () => {
		history.push("/sign_up");
	}

	const onChangeUserName = (e) => {
		setUserLogin({...userLogin,
			userName:e.target.value
		});
	}

	const onChangePassword = (e) => {
		setUserLogin({...userLogin,
			password:e.target.value
		});
	}

	const onLoginSubmit = () => {
		const getUser = LS.get("user");
		let messageText = ""
		if (userLogin.userName !== "" && userLogin.password !== "") {
			let data = find(getUser, {userName: userLogin.userName.toLowerCase(), password: userLogin.password});
			if (data !== undefined) {
				history.push('/home')
			} else {
				messageText = "Username atau password anda salah!";
			}
		} else {
			messageText = "Username atau Password tidak boleh Kosong";
		}
		messageText !== "" && message.warning(messageText,1);

		LS.set("currentLoggedIn", userLogin.userName)
	}

	return (
		<LoginScreen
			redirectSignUp={redirectSignUp}
			onChangeUserName={onChangeUserName}
			onChangePassword={onChangePassword}
			onLoginSubmit={onLoginSubmit}
			{...props}
		/>
	)
}
export const Login = React.memo((_Login));
