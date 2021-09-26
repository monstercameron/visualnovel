import { parent } from "./index.module.css";
import React, { useState, useContext } from "react";
import { Context } from "../../store/store";
import { useHistory } from "react-router-dom";
import SpeechLib from "react-speech";

import Timer from "../../components/timer";
import Hero from "../../components/character";
import Button from "../../components/buttons/play";
import Tree from "../../components/buttons/tree";
import Speech from "../../components/speech";
import Pet from "../../components/pet";

import heroImgAro from "../../assets/Arouramain.png";
import heroImgSky from "../../assets/Sky1.png";

export default function Index() {
	let history = useHistory();
	const test = useContext(Context);

	let decisionList = null;
	const [step, setStep] = useState(0);

	const [choice, setChoice] = useState("");
	const getChoice = (choice) => {
		setChoice(choice);
	};

	const next = () => {
		// console.log('NEXT!')
		// history.push("/test");
		if (step < decisionList.length - 1) {
			setStep(step + 1);
		}
	};

	const decision1 = () => {
		return (
			<>
				<Timer time={3} func={next} />
				<Hero pos={["275px", "30px"]} img={heroImgAro} />
				<Speech facing="left" pos={["300px", "300px"]}>
					<SpeechLib
						pitch="0.9"
						rate="0.9"
						volume="0.7"
						lang="en-GB"
						voice="Microsoft Zira - English (United States)"
						text="Now that we have decided to do an online store, we should decide on what platform to use. Should we build a customized website?
                    "
					/>
					Now that we have decided to do an online store, we should decide on
					what platform to use. Should we build a customized website?
				</Speech>
			</>
		);
	};
	const decision2 = () => {
		return (
			<>
				<Timer time={5} func={next} />
				<Hero pos={["275px", "30px"]} img={heroImgAro} />

				<Hero pos={["190px", "980px"]} img={heroImgSky} />
				<Speech facing="right" pos={["150px", "650px"]}>
					<SpeechLib
						pitch="0.9"
						rate="0.9"
						volume="0.7"
						lang="en-GB"
						voice="Microsoft Zira - English (United States)"
						text="That’s one option, but have you heard of Shopify? It’s a commerce platform that offers ways to either quickly launch a dream business solely on Shopify or utilizes its APIs to grant us creative freedom. 
                    "
					/>
					That’s one option, but have you heard of Shopify? It’s a commerce
					platform that offers ways to either quickly launch a dream business
					solely on Shopify or utilizes its APIs to grant us creative freedom.
				</Speech>
			</>
		);
	};

	decisionList = [
		//prompt1, // narrator promt
		decision1,
		decision2,
	];
	return (
		<div
			className={parent}
			style={{ backgroundImage: `url(${""})`, backgroundRepeat: "cover" }}
		>
			{decisionList[step]()}

			{/* <Hero pos={['100px','50px']} move={move} clickToMove={clickToMove} />
    <Speech pos={['75px','350px']} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis impedit aspernatur sit provident consequatur tempore, molestiae dolor quia hic numquam iste iure eligendi. Tenetur cumque veniam porro, atque exercitationem distinctio.
    </Speech> /}


    {/ <Button pos={['500px',${1280/2-215/2}px]} fn={next}/> /}

    {/ <Tree options={[
        'route a',
        'route b'
    ]} defaultOpt={1} func={getChoice}/> */}

			<Pet pos={["600px", "1175px"]} />
		</div>
	);
}
