import React, { useEffect, useState, useRef } from "react";
import { HomeScreen } from './screen';
import { find } from 'lodash';
import { message } from 'antd';
import * as LS from 'local-storage';

function _HomePage(props) {

	const { history } = props;

	return (
		<HomeScreen
			{...props}
		/>
	)
}
export const HomePage = React.memo((_HomePage));
