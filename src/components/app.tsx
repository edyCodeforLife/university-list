import React, {useState, useEffect} from "react";
import { isEmpty } from 'lodash';
import "./app.scss";
import Main from "./routes";
import * as LS from 'local-storage';

const App = (props) => {
	const initialUser = [{
		userName: 'admin',
		password: 'admin123',
		gender: 'male',
		age: 25
	}];

	useEffect(() => {
		if (!isEmpty(LS.get("user"))) {
			LS.get("user")
		} else {
			LS.set("user", initialUser);
		}
	}, [])

  return (
    <div className="full-screen">
        <Main {...props} />
    </div>
  );
};

export default App;
