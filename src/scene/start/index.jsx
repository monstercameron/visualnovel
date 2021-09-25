import React, { useState } from "react";
import { mc } from "./index.module.css";
import goku from "../../assets/Goku.png";
import Timer from "../../components/timer";
import Button from "../../components/buttons/play";

export default function Index() {
	const [move, setMove] = useState("");
	const clickToMove = (e) => {
		//print(e)
		if (e.target.classList.contains("move")) {
			setMove("");
		} else {
			setMove("move");
		}
	};
	return (
		<>
			<div className={`${mc} ${move} idle`} onClick={clickToMove}>
				<img src={goku} alt="" srcset="" className="img-fluid" />
			</div>
			<div className={`${mc} ${move} idle`} onClick={clickToMove}>
				<img src={goku} alt="" srcset="" className="img-fluid" />
			</div>
			<Timer
				time={5}
				func={() => {
					console.log("hello world");
				}}
			/>
			<Button />
		</>
	);
}
