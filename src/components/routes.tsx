import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../container/login/index";
import App from "./app";

const Main = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/login" />
			</Route>
			<Route exact path="/login"
				render={() => {
					return(<Login />)
				}}
			/>
		</Switch>
	);
};

export default Main;
