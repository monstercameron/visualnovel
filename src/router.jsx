import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "../src/scene/start";
import Scene1 from "../src/scene/scene1";

export default function Index() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Start />
				</Route>
				<Route path="/scene1">
					<Scene1 />
				</Route>
			</Switch>
		</Router>
	);
}
