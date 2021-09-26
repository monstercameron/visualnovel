import React, { useState, useContext, useEffect } from "react";
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

// import bgm
import bgm from '../../assets/bgm.wav'

export default function Index() {
    let audio = new Audio(bgm)
    audio.volume = 0.05
    audio.autoplay = true
    audio.muted = true
    audio.loop = true
    const [playing, setPlaying] = useState(true);

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
		 history.push("/scene4");
        }
	};

	const dialog1 = () => {
		return <>
			<Timer
				time={5}
				func={next}
			/>
			<Hero pos={['315px','10px']} img={heroImgAur} />
            
			<Hero pos={['220px','940px']} img={heroImgSky} />
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
				time={5}
				func={next}
			/>
			<Hero pos={['315px','10px']} img={heroImgAur} />
            
			<Hero pos={['220px','940px']} img={heroImgSky} />
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
				time={5}
				func={next}
			/>
			<Hero pos={['315px','10px']} img={heroImgAur} />
			<Speech facing='right' pos={['150px','650px']} >
				<SpeechLib  pitch="0.9"
					rate="0.9"
					volume="0.7"
					lang="en-GB"
					voice="Microsoft Zira - English (United States)" text='To keep it simple, we can purchase items from a third-party supplier and have them shipped directly to the customer. It’s a fulfillment method called Dropshipping! So either we fulfill our own orders or we can start dropshipping, let’s choose!' />To keep it simple, we can purchase items from a third-party supplier and have them shipped directly to the customer. It’s a fulfillment method called Dropshipping! So either we fulfill our own orders or we can start dropshipping, let’s choose!</Speech>
            
			<Hero pos={['220px','940px']} img={heroImgSky} />
		</>
	}

    const decision1 = () => {
        return <>
        <Timer
            time={5}
            func={next}
        />
        <Hero pos={['315px','10px']} img={heroImgAur} />
        <Speech facing='right' pos={['150px','650px']} >
            <SpeechLib  pitch="0.9"
                rate="0.9"
                volume="0.7"
                lang="en-GB"
                voice="Microsoft Zira - English (United States)" text='To keep it simple, we can purchase items from a third-party supplier and have them shipped directly to the customer. It’s a fulfillment method called Dropshipping! So either we fulfill our own orders or we can start dropshipping, let’s choose!' />To keep it simple, we can purchase items from a third-party supplier and have them shipped directly to the customer. It’s a fulfillment method called Dropshipping! So either we fulfill our own orders or we can start dropshipping, let’s choose!</Speech>
        
        <Hero pos={['220px','940px']} img={heroImgSky} />
        
    <Tree options={[
        'In-House Fulfillment',
        'Dropshipping'
    ]} defaultOpt={1} func={getChoice}/>
        </>
    }
    
    const stepAdialog1 = () => {
        return <>
        <Timer
            time={6}
            func={next}
        />
        <Hero pos={['315px','10px']} img={heroImgAur} />
        
        <Hero pos={['220px','940px']} img={heroImgSky} />
        
        <Speech facing='right' pos={['150px','650px']} >
            <SpeechLib  pitch="0.9"
                rate="0.9"
                volume="0.7"
                lang="en-GB"
                voice="Microsoft Zira - English (United States)" text='To quote the elder witches, ‘if you want something done well, do it yourself!' />To quote the elder witches, ‘if you want something done well, do it yourself!
                </Speech>
        </>
    }
    
    const stepAdialog2 = () => {
        return <>
        <Timer
            time={6}
            func={next}
        />
        <Hero pos={['315px','10px']} img={heroImgAur} />
        
        <Hero pos={['220px','940px']} img={heroImgSky} />
        
        <Speech facing='left' pos={['280px','240px']} >
            <SpeechLib  pitch="0.9"
                rate="0.9"
                volume="0.7"
                lang="en-GB"
                voice="Microsoft Zira - English (United States)" text='And by “do it yourself,” I assume you are referring to ME? Since clearly, you’re not up for the task.' />And by “do it yourself,” I assume you are referring to ME? Since clearly, you’re not up for the task.
                </Speech>
        </>
    }
    
    const stepAdialog3 = () => {
        return <>
        <Timer
            time={6}
            func={next}
        />
        <Hero pos={['315px','10px']} img={heroImgAur} />
        
        <Hero pos={['220px','940px']} img={heroImgSky} />
        
        <Speech facing='right' pos={['150px','650px']} >
            <SpeechLib  pitch="0.9"
                rate="0.9"
                volume="0.7"
                lang="en-GB"
                voice="Microsoft Zira - English (United States)" text='I never said that you witch! But since my work is not up to your standards, YOU can do it by yourself… I quit!' />I never said that you witch! But since my work is not up to your standards, YOU can do it by yourself… I quit!
                </Speech>
        </>
    }

    const stepAdialog4 = () => {
        return <>
        <Timer
            time={6}
            func={next}
        />
        <Hero pos={['315px','10px']} img={heroImgAur} />
        
        <Hero pos={['220px','940px']} img={heroImgSky} />
        
        <Speech facing='narrator' pos={['150px','650px']} >
            <SpeechLib  pitch="0.9"
                rate="0.9"
                volume="0.7"
                lang="en-GB"
                voice="Microsoft Zira - English (United States)" text='Sky immediately throws the box she was handling down and storms out of Aurora’s garage so fast, Aurora didn’t have a chance to protest her resignation. All alone, Aurora continues to work on her Halloween pop-up store but with too many tasks and not enough time/help, Aurora’s plan falls apart, causing her metaphysical boutique, Chakra Zulu to be permanently shut down.' />Sky immediately throws the box she was handling down and storms out of Aurora’s garage so fast, Aurora didn’t have a chance to protest her resignation. All alone, Aurora continues to work on her Halloween pop-up store but with too many tasks and not enough time/help, Aurora’s plan falls apart, causing her metaphysical boutique, Chakra Zulu to be permanently shut down.
                </Speech>
        </>
    }

	decisionList = [
		dialog1,
		dialog2,
		dialog3,
		decision1,
		stepAdialog1,
		stepAdialog2,
        stepAdialog3,
        stepAdialog4
	]

    useEffect(() => {
        audio.muted = false
        if(playing){
            if ((audio.currentTime > 0 && !audio.ended) || audio.paused) {
                // audio.play();
            } else {
                audio.pause();
            }
        }
      },
      [playing]
    )

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
      }, []);

    return <div className={parent}>
        <div>
            <img src={bg} alt="" className='rounded' />
        </div>
    {decisionList[step]()}
    <Pet pos={['580px',`1135px`]}/>
</div>
}

//style={{backgroundImage:`url(${bg})`, backgroundRepeat:'cover'}}