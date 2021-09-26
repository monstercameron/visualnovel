import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {parent} from './index.module.css';

//import components
import Button from "../../components/buttons/play";

// import imgs
import bg from '../../assets/start.png'

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

	const next = () => {
		audio.play();
		history.push("/scene1");
	};

	useEffect(() => {
        audio.muted = false
        if(playing){
            if ((audio.currentTime > 0 && !audio.ended) || audio.paused) {
                audio.play();
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

	return (
		<div className={parent} >
			<div>
				<img src={bg} alt="" srcset="" />
			</div>
			<Button pos={['-180px',`1000px`]} fn={next}/>
		</div>
	);
}
