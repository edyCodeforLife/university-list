import React, { useState } from "react";
import { SignUpScreen } from './screen';
import { message, Modal } from 'antd';
import { clone, find, uniq } from 'lodash';
import { CheckOutlined } from '@ant-design/icons';
import * as LS from 'local-storage';

function _SignUp(props) {

	const { confirm } = Modal;

	const { history } = props;
	const [ userSignUp, setUserSignUp ] = useState({userName: "", password: "", reConfirmPassword: "", userAge: 0, radioValue: ""});

	function showConfirm() {
		confirm({
		  title: 'Registration is Success',
		  icon: <CheckOutlined />,
		  content: 'Do you want to back to login Page?',
		  onOk() {
			redirectLogin();
		  },
		  onCancel() {
			console.log('Cancel');
		  },
		});
	}

	const redirectLogin = () => {
		history.push("/login")
	}

	const onChangeUserName = (e) => {
		setUserSignUp({...userSignUp,
			userName:e.target.value
		});
	}

	const onChangePassword = (e) => {
		setUserSignUp({...userSignUp,
			password:e.target.value
		});
	}

	const onReconfirmPassword = (e) => {
		setUserSignUp({...userSignUp,
			reConfirmPassword:e.target.value
		});
	}

	const onChangeUserAge = (e) => {
		setUserSignUp({...userSignUp,
			userAge: parseInt(e.target.value)
		});
	}

	const onChangeRadio = (e) => {
		setUserSignUp({...userSignUp,
			radioValue:e.target.value
		});
	}

	const onRegisterSubmit = () => {
		let warningText = "";

		let cloneUser = clone(LS.get("user"));
		let isSame = find(cloneUser, {userName: userSignUp.userName, password: userSignUp.password });
		
		if (userSignUp.userName !== "" && userSignUp.password !== "" && userSignUp.reConfirmPassword !== "" && userSignUp.userAge !== 0 && userSignUp.radioValue !== "") {
			if (userSignUp.password !== userSignUp.reConfirmPassword) {
				warningText = "Password Konfirmasi anda tidak sama dengan password yang anda masukkan!"
			} else {
				if (isSame !== undefined) {
					warningText = "Data User sudah ada!";
				} else {
					cloneUser.push(userSignUp);
					LS.set("user",cloneUser);
					showConfirm();
				}
			}
		} else {
			warningText = "Harap mengisi semua data yang diperlukan!";
		}
		warningText !== "" && message.warning(warningText,1);
	}

	return (
		<SignUpScreen
			redirectLogin={redirectLogin}
			onChangeUserName={onChangeUserName}
			onChangePassword={onChangePassword}
			onRegisterSubmit={onRegisterSubmit}
			onReconfirmPassword={onReconfirmPassword}
			onChangeRadio={onChangeRadio}
			onChangeUserAge={onChangeUserAge}
			radioValue={userSignUp.radioValue}
			{...props}
		/>
	)
}
export const SignUp = React.memo((_SignUp));
