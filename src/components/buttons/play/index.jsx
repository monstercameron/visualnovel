import React from "react";
import { button } from "./index.module.css";
import play from "../../../assets/Play.png";

export default function Index({ fn }) {
	return <div className={button} onClick={fn}><img src={play} alt="" srcset="" /></div>;
}
