import React, { useState, useContext } from "react";
import { Context } from "../../store/store";
import { useHistory } from "react-router-dom";
import SpeechLib from 'react-speech';
import {parent} from './index.module.css'

//import components
import Timer from "../../components/timer";
import Hero from "../../components/character";
import Button from "../../components/buttons/play";
import Tree from "../../components/buttons/tree";
import Speech from "../../components/speech";
import Pet from "../../components/pet";

// import imgs
import heroImgAur from '../../assets/Arouramain.png'
import heroImgSky from '../../assets/Sky1.png'
import bg from '../../assets/Step1.png'

export default function Index() {
	let history = useHistory();
	const test = useContext(Context);

    let decisionList = null
	const [step, setStep] = useState(3);

    const [choice, setChoice] = useState("");
	const getChoice = (choice) => {
		setChoice(choice);
	};

	const next = () => {
        // console.log('NEXT!')
		// history.push("/test");
        if(step === 3){
            switch(choice){
                case "In-House Fulfillment":
                    setStep(step + 1);
                    break;
                case "Dropshipping":
                    //history.push("/scene4");
                    break;
                default:
                    setStep(step + 1);
                    break;
                }
        }else if (step < decisionList.length -1) {
			setStep(step + 1);
		}else{
		// history.push("/scene5");
        }
	};
    

	const dialog1 = () => {
		return <>
			<Timer
				time={3}
				func={next}
			/>
			<Hero pos={['275px','30px']} img={heroImgAur} />
            
			<Hero pos={['190px','980px']} img={heroImgSky} />
			<Speech facing='right' pos={['150px','650px']} >
				<SpeechLib  pitch="0.9"
					rate="0.9"
					volume="0.7"
					lang="en-GB"
					voice="Microsoft Zira - English (United States)" text='Holy Witch! These boxes are getting so out of hand! Do you have a plan to be able to handle the fulfillment process with an increase of orders when the pop-up store launches?”
                    Aurora: “That was actually a good question, insubordinate, but a good question. Of course, I have a plan. Why do you think trees have so many friends?.... Because they branch out!' />
					Holy Witch! These boxes are getting so out of hand! Do you have a plan to be able to handle the fulfillment process with an increase of orders when the pop-up store launches?”
Aurora: “That was actually a good question, insubordinate, but a good question. Of course, I have a plan. Why do you think trees have so many friends?.... Because they branch out!

			</Speech>
		</>
	}
    
	const dialog2 = () => {
		return <>
			<Timer
				time={30}
				func={next}
			/>
			<Hero pos={['275px','30px']} img={heroImgAur} />
            
			<Hero pos={['190px','980px']} img={heroImgSky} />
			<Speech facing='right' pos={['150px','650px']} >
				<SpeechLib  pitch="0.9"
					rate="0.9"
					volume="0.7"
					lang="en-GB"
					voice="Microsoft Zira - English (United States)" text='Branch out???' />Branch out???</Speech>
		</>
	}
    
	const dialog3 = () => {
		return <>
			<Timer
				time={30}
				func={next}
			/>
			<Hero pos={['275px','30px']} img={heroImgAur} />
			<Speech facing='right' pos={['150px','650px']} >
				<SpeechLib  pitch="0.9"
					rate="0.9"
					volume="0.7"
					lang="en-GB"
					voice="Microsoft Zira - English (United States)" text='To keep it simple, we can purchase items from a third-party supplier and have them shipped directly to the customer. It’s a fulfillment method called Dropshipping! So either we fulfill our own orders or we can start dropshipping, let’s choose!' />To keep it simple, we can purchase items from a third-party supplier and have them shipped directly to the customer. It’s a fulfillment method called Dropshipping! So either we fulfill our own orders or we can start dropshipping, let’s choose!</Speech>
            
			<Hero pos={['190px','980px']} img={heroImgSky} />
		</>
	}

    const decision1 = () => {
        return <>
        <Timer
            time={5}
            func={next}
        />
        <Hero pos={['275px','30px']} img={heroImgAur} />
        <Speech facing='right' pos={['150px','650px']} >
            <SpeechLib  pitch="0.9"
                rate="0.9"
                volume="0.7"
                lang="en-GB"
                voice="Microsoft Zira - English (United States)" text='To keep it simple, we can purchase items from a third-party supplier and have them shipped directly to the customer. It’s a fulfillment method called Dropshipping! So either we fulfill our own orders or we can start dropshipping, let’s choose!' />To keep it simple, we can purchase items from a third-party supplier and have them shipped directly to the customer. It’s a fulfillment method called Dropshipping! So either we fulfill our own orders or we can start dropshipping, let’s choose!</Speech>
        
        <Hero pos={['190px','980px']} img={heroImgSky} />
        
    <Tree options={[
        'In-House Fulfillment',
        'Dropshipping'
    ]} defaultOpt={1} func={getChoice}/>
        </>
    }

    
    const stepAdialog1 = () => {
        return <>
        <Timer
            time={5}
            func={next}
        />
        <Hero pos={['275px','30px']} img={heroImgAur} />
        <Speech facing='right' pos={['150px','650px']} >
        
        <Hero pos={['190px','980px']} img={heroImgSky} />
            <SpeechLib  pitch="0.9"
                rate="0.9"
                volume="0.7"
                lang="en-GB"
                voice="Microsoft Zira - English (United States)" text='To quote the elder witches, ‘if you want something done well, do it yourself!' />To quote the elder witches, ‘if you want something done well, do it yourself!
                </Speech>
        </>
    }

	decisionList = [
		//prompt1, // narrator promt
		dialog1,
		dialog2,
		dialog3,
		decision1,
		stepAdialog1,
		// stepAdialog2,
        // stepAdialog3,
        // stepAdialog4
	]

    console.log(choice);
    return <div className={parent} 
    style={{backgroundImage:`url(${bg})`, backgroundRepeat:'cover'}}>

    {decisionList[step]()}

    {/* <Button pos={['500px',`${1280/2-215/2}px`]} fn={next}/> */}

    {/* <Tree options={[
        'route a',
        'route b'
    ]} defaultOpt={1} func={getChoice}/> */}

    <Pet pos={['600px',`1175px`]}/>

</div>
}