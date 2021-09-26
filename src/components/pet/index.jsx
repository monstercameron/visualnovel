import React from 'react'
import {parent} from './index.module.css'
import petmed from "../../assets/petmed.png";
import petlow from "../../assets/petlow.png";
import pethigh from "../../assets/pethigh.png";

export default function Index({ pos, fn}) {
	return <div className={`${parent} idle`} onClick={fn} style={{top:pos[0], left:pos[1]}}>
            <img src={petmed} alt="" srcset="" />
        </div>;
}
