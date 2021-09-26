import React, { useState, useContext } from "react";
import { Context } from "../../store/store";
import { useHistory } from "react-router-dom";
import Timer from "../../components/timer";
import Hero from "../../components/character";
import Button from "../../components/buttons/play";
import Tree from "../../components/buttons/tree";
import Speech from "../../components/speech";
import Pet from "../../components/pet";

export default function Index() {
	let history = useHistory();
	const test = useContext(Context);
	console.log(test);
	const [move, setMove] = useState("");
	const clickToMove = (e) => {
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
		<div>
			<Timer
				time={5}
				func={next}
			/>

			<Hero pos={['100px','900px']} move={move} clickToMove={clickToMove} />
			<Speech facing='right' pos={['100px','700px']} >
				test speech
			</Speech>


			<Hero pos={['100px','50px']} move={move} clickToMove={clickToMove} />
			<Speech pos={['75px','350px']} >
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis impedit aspernatur sit provident consequatur tempore, molestiae dolor quia hic numquam iste iure eligendi. Tenetur cumque veniam porro, atque exercitationem distinctio.
			</Speech>
		

			{/* <Button pos={['500px',`${1280/2-215/2}px`]} fn={next}/> */}

            <Tree options={[
                'route a',
                'route b'
            ]} defaultOpt={1} func={getChoice}/>

			<Pet pos={['600px',`1175px`]}/>

		</div>
	);
}
