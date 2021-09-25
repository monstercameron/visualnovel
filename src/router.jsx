import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "../src/scene/start";

export default function Index() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Start />
				</Route>
				<Route path="/test">
					<Start />
				</Route>
			</Switch>
		</Router>
	);
}
