import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "../src/scene/start";
import Scene1 from "../src/scene/scene1";
import Scene2 from "../src/scene/scene2";

export default function Index() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Start />
				</Route>
				<Route exact path="/scene1">
					<Scene1 />
				</Route>
				<Route exact path="/scene2">
					<Scene2 />
				</Route>
			</Switch>
		</Router>
	);
}
