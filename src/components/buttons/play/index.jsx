import React from "react";
import { button } from "./index.module.css";

export default function Index(props) {
	return <div className={button}>{props.children || 'button'}</div>;
}
