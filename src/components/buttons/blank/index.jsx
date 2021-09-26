import React from 'react'
import {parent} from './index.module.css'
import blank from "../../../assets/blank.png";
import blank2 from "../../../assets/blank2.png";

export default function Index({ pos, fn , children}) {

    const imageClicked = ({target}) => {
        if( target.src = blank){
            target.src = blank2
        }else if ( target.src = blank2){
            target.src = blank
        }
    }

	return <div className={parent} onClick={fn} style={{top:pos[0], left:pos[1]}}>

        <img src={blank} alt="" srcset="" 
        onClick={imageClicked} onMouseUp={imageClicked}
        />

        <span>{children || 'test'}</span>

        </div>;
}
