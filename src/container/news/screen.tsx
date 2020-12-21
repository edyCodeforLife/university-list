import React, {memo} from "react";
import "../../components/app.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import * as LS from 'local-storage';
import { Button } from "antd";
import { downloadFile } from "../../global/function/global-function";

interface INewsLetterProps {
	dataNews: string;
}

function _NewsLetter(props: INewsLetterProps) {
	const { dataNews } = props;

	return (
		<div className="homeContainer adjustHomeContainer">
			<Header
				userName={LS.get("currentLoggedIn")}
				{...props}
			/>

			<div className="buttonDownloadNews">
				<Button onClick={() => downloadFile(dataNews,"users")} type="primary">Download NewsLetter</Button>
			</div>

			<div
				className="containerScreen adjustContainer"
				dangerouslySetInnerHTML={{__html: dataNews}}
			/>

			<Footer />
		</div>
	);
}
export default memo(_NewsLetter);
export const NewsLetterScreen = memo(_NewsLetter);
