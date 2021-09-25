import React, { useState, useContext } from "react";
import { Context } from "../../store/store";
import { mc } from "./index.module.css";
import goku from "../../assets/Goku.png";
import Timer from "../../components/timer";
import Button from "../../components/buttons/play";
import Tree from "../../components/buttons/tree";

export default function Index() {
    const test = useContext(Context);
    console.log(test);
	const [move, setMove] = useState("");
	const clickToMove = (e) => {
		//print(e)
		if (e.target.classList.contains("move")) {
			setMove("");
		} else {
			setMove("move");
		}
	};

	const [choice, setChoice] = useState("");
    const getChoice = (choice) => {
        setChoice(choice);
    }

    const next = () => {
        return -1
    }

    console.log('start: choice-',choice);

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
				func={next}
			/>
			<Button />
            <Tree options={[
                'route a',
                'route b'
            ]} defaultOpt={1} func={getChoice}/>
		</>
	);
}
