import React, { useEffect, useState, useRef } from "react";
import { SignUpScreen } from './screen';
import { filter, intersection, clone } from 'lodash';

function _SignUp(props) {

	const { history } = props;

	const redirectLogin = () => {
		history.push("/login")
	}

	return (
		<SignUpScreen
			redirectLogin={redirectLogin}
			{...props}
		/>
	)
}
export const SignUp = React.memo((_SignUp));
