import { injectContext } from "../src/store/store";
import "./main.css";
import "./animations.css";
import Router from "./router";

function App() {
	return (
		<div className="app">
			<Router />
		</div>
	);
}

export default injectContext(App);
