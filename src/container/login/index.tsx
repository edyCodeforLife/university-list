import React, { useEffect, useState, useRef } from "react";
import { LoginScreen } from './screen';
import { filter, intersection, clone } from 'lodash';

function _Login(props) {

	return (
		<LoginScreen
			{...props}
		/>
	)
}
export const Login = React.memo((_Login));
