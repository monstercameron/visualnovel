import React,{useRef, useEffect} from 'react'
import {parent} from './index.module.css'
import blank from "../../../assets/blank.png";
import blank2 from "../../../assets/blank2.png";

export default function Index({ pos, selected=false, fn , children}) {
    const ref = useRef(null);

    const imageClicked = ({target}) => fn()
    
    useEffect(() => {
        if(selected){
            ref.current.src = blank2
        }else{
            ref.current.src = blank
        }
    } , [selected])

	return <div 
            className={`${parent} spawn btnIdle`} 
            onClick={fn} 
            style={{top:pos[0], left:pos[1]}}
            
            >
        <img ref={ref} src={blank} alt="" srcset="" />
        <span >{children || 'test'}</span>

        </div>;
}
