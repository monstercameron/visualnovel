import React, { useState, useContext } from "react";
import { Context } from "../../store/store";
import { useHistory } from "react-router-dom";
import SpeechLib from 'react-speech';
import Timer from "../../components/timer";
import Hero from "../../components/character";
import Tree from "../../components/buttons/tree";
import Speech from "../../components/speech";
import Pet from "../../components/pet";


import heroImgAur from '../../assets/Arouramain.png'
import bg from '../../assets/Step1.png'

export default function Index() {
	let history = useHistory();

    let decisionList = null
	const [step, setStep] = useState(0); 

	const [choice, setChoice] = useState("Online");
	const getChoice = (choice) => {
		setChoice(choice);
	};

	const next = () => {
		// history.push("/scene2");
        if(step === 1){
            switch(choice){
                case "Brick and Mortar":
					console.log("Brick and Mortar");
                    setStep(2);
                    break;
                case "Online":
					console.log("Online");
                    setStep(3);
                    break;
                default:
					console.log("def");
                    setStep(step + 1);
                    break;
                }
        }else if (step < decisionList.length -1) {
			setStep(step + 1);
		}else{
		 history.push("/scene2");
        }
	};

	const dialog1 = () => {
		return <>
        <Timer
            time={5}
            func={next}
        />
		<Hero pos={['315px','10px']} img={heroImgAur} />
		<Speech facing='left' pos={['280px','240px']} >
            <SpeechLib  pitch="0.9"
                rate="0.9"
                volume="0.7"
                lang="en-GB"
                voice="Microsoft Zira - English (United States)" text='Halloween is coming and I just might have the perfect idea to get the spooky season rolling. A Halloween pop-up store! Now, to decide, brick and mortar or online?' />Halloween is coming and I just might have the perfect idea to get the spooky season rolling. A Halloween pop-up store! Now, to decide, brick and mortar or online?
                </Speech>
            </>
		
	}

	const decision1 = () => {
		return <>
        <Timer
            time={5}
            func={next}
        />
			<Hero pos={['315px','10px']} img={heroImgAur} />
			<Speech facing='left' pos={['280px','240px']} >
				<SpeechLib  pitch="0.9"
					rate="0.9"
					volume="0.7"
					lang="en-GB"
					voice="Microsoft Zira - English (United States)" text='Halloween is coming and I just might have the perfect idea to get the spooky season rolling. A Halloween pop-up store! Now, to decide, brick and mortar or online?' />Halloween is coming and I just might have the perfect idea to get the spooky season rolling. A Halloween pop-up store! Now, to decide, brick and mortar or online?
					</Speech>        
				<Tree options={[
					'Brick and Mortar',
					'Online'
				]} defaultOpt={1} func={getChoice}/>
			</>
	}

	const dialog2a = () => {

		return <>
        <Timer
            time={5}
            func={next}
        />
			<Hero pos={['315px','10px']} img={heroImgAur} />
			<Speech facing='left' pos={['280px','240px']} >
				<SpeechLib  pitch="0.9"
					rate="0.9"
					volume="0.7"
					lang="en-GB"
					voice="Microsoft Zira - English (United States)" text='“With the amount of foot travel the Witchatopia Center gets, a physical presence of Chakra Zulu should increase the chances of success.' />“With the amount of foot travel the Witchatopia Center gets, a physical presence of Chakra Zulu should increase the chances of success.
					</Speech>
			</>
	}

	const dialog2b = () => {

		return <>
        <Timer
            time={5}
            func={next}
        />
			<Hero pos={['315px','10px']} img={heroImgAur} />
			<Speech facing='left' pos={['280px','240px']} >
				<SpeechLib  pitch="0.9"
					rate="0.9"
					volume="0.7"
					lang="en-GB"
					voice="Microsoft Zira - English (United States)" text='We’re in the age of technology so that’s a no-brainer, online!' />We’re in the age of technology so that’s a no-brainer, online!”
					If option 1 is chosen: things to consider
					
					</Speech>
			</>
	}


	decisionList = [
		dialog1,
		decision1,
		dialog2a,
		dialog2b,
	]

	return (
		<div>
			<div>
				<img src={bg} alt="" srcset="" />
			</div>
    		{decisionList[step]()}
			<Pet pos={['580px',`1135px`]}/>
		</div>
	);
}
