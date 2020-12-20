import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../container/login/index";
import { SignUp } from "../container/sign_up/index";
import { HomePage } from '../container/home/index';
import { NewsLetterPage } from '../container/news/index';

const Main = (props) => {
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/login" />
			</Route>

			<Route exact path="/login"
				render={() => {
					return(<Login {...props} />)
				}}
			/>

			<Route exact path="/sign_up"
				render={() => {
					return(<SignUp {...props} />)
				}}
			/>

			<Route exact path="/home"
				render={() => {
					return(<HomePage {...props} />)
				}}
			/>

			<Route exact path="/newsletter"
				render={() => {
					return(<NewsLetterPage {...props} />)
				}}
			/>
		</Switch>
	);
};

export default Main;
