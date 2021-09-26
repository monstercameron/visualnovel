import React from 'react'
import {parent} from  './index.module.css'
import Speech from '../../assets/Speech.png'

export default function index({pos, facing='left', children}) {
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
    return (
        <div className={parent} style={{top:pos[0], left:pos[1]}}>
            <img src={Speech} alt="" srcset="" style={{transform:`rotatey(${facingDeg(facing)})`}} />
            <span>
                {children || 'speech goes here'}
            </span>
        </div>
    )
}
