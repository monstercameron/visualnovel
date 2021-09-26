import React from 'react'
import { mc } from './index.module.css'
import goku from "../../assets/Goku.png";

export default function index({pos, move, clickToMove, img}) {
    return (
        <div className={`${mc} ${move} idle`} onClick={clickToMove} style={{top:pos[0], left:pos[1]}}>
				<img src={img || goku} alt="" srcset="" className="img-fluid" />
			</div>
    )
}
