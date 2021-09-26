import React,{useRef, useEffect, useState} from 'react'
import {parent} from './index.module.css'
import blank from "../../../assets/blank.png";
import blank2 from "../../../assets/blank2.png";

export default function Index({ pos, fn , children}) {
    const ref = useRef(null);
    const [img, setImg] = useState(blank);

    const imageClicked = ({target}) => {
        fn()
        if(ref.current) {
            ref.current.parentNode.classList.remove('btnIdle')
            ref.current.parentNode.classList.add('btnSelect')
            setImg(blank2)

            const timer = setTimeout(() => {
                ref.current.parentNode.classList.remove('btnSelect')
                ref.current.parentNode.classList.add('btnIdle')
            } , 500)
        }
    }

	return <div 
            className={`${parent} spawn btnIdle`} 
            onClick={imageClicked} 
            style={{top:pos[0], left:pos[1]}}
            
            >
        <img ref={ref} src={img} alt="" srcset="" />
        <span >{children || 'test'}</span>

        </div>;
}
