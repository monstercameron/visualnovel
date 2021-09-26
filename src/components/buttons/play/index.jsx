import React from "react";
import { button } from "./index.module.css";
import play from "../../../assets/Play.png";

export default function Index({ pos, fn }) {
	return <div className={button} onClick={fn} style={{top:pos[0], left:pos[1]}}><img src={play} alt="" srcset="" /></div>;
}
