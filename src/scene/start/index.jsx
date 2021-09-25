import React, { useState, useContext } from "react";
import { Context } from "../../store/store";
import { mc, parent } from "./index.module.css";
import Timer from "../../components/timer";
import Button from "../../components/buttons/play";
import Tree from "../../components/buttons/tree";
import Hero from "../../components/character";
import { useHistory } from "react-router-dom";

export default function Index() {
	let history = useHistory();
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
	};

	const next = () => {
        console.log('NEXT!')
		history.push("/test");
	};

	console.log("start: choice-", choice);

	return (
		<div className={parent}>
			<Timer
				time={5}
				func={next}
			/>

			<Hero pos={['100px','900px']} move={move} clickToMove={clickToMove} />
			<Hero pos={['100px','50px']} move={move} clickToMove={clickToMove} />


			{/* <Button fn={next}/>
            <Tree options={[
                'route a',
                'route b'
            ]} defaultOpt={1} func={getChoice}/> */}
		</div>
	);
}
