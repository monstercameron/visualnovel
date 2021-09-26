import React,{useEffect, useRef} from 'react'
import {parent} from  './index.module.css'
import Speech from '../../assets/Speech.png'

export default function Index({pos, facing='left', reset=true, children}) {
    const facingDeg = (facing) => {
        switch(facing) {
            case 'left':
                return '0'
            case 'right':
                return '180deg'
            default:
                return '0'
        }
    }

    const animreset = useRef(null)

    useEffect(() => {
        // console.log(animreset.current)
        if(reset){
            if(animreset.current.classList.contains('spawn')){
                reset = !reset
                animreset.current.classList.remove('spawn')
                animreset.current.classList.add('spawn')
            }
        }
    }, [])

    return (
        <div ref={animreset} className={`${parent} spawn`} style={{top:pos[0], left:pos[1]}}>
            <img src={Speech} alt="" srcset="" style={{transform:`rotatey(${facingDeg(facing)})`}} />
            <span>
                {children || 'speech goes here'}
            </span>
        </div>
    )
}
