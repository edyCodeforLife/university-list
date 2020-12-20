import React, { useEffect, useState } from "react";
import { NewsLetterScreen } from './screen';
import { find } from 'lodash';
import { message } from 'antd';
import * as LS from 'local-storage';

function _NewsLetterPage(props) {

	const { history } = props;

	return (
		<NewsLetterScreen

			{...props}
		/>
	)
}
export const NewsLetterPage = React.memo((_NewsLetterPage));
