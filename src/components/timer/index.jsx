import React,{useState, useEffect} from 'react'
import {loader, outerLoader, loaderPost} from './index.module.css'

export default function Index({time, func, reset=true}) {
    const MAX_WIDTH = 407
    const STEPS = MAX_WIDTH / time
    const [count, setCount] = useState(time)
    const [width, setWidth] = useState(MAX_WIDTH)
    let countInterval = null

    const counter = () => {
        reset = !reset
        if(countInterval === null) {
            countInterval = setTimeout(() => {
                setCount(count => count - 1)
                setWidth(width => (STEPS*count))
                }, 1000)
        }
    }
    useEffect(() => {
        // console.log('useEffect', countInterval)
        counter()
       if (count < 0) {
        clearTimeout(countInterval)
        setCount(time)
        func()
       }
    },[count])


    // console.log(`width:${width}, count:${count}`)
    return (
        <>
            <div className={outerLoader}>
                <div className={loaderPost}>
                </div>
                <div className={loader} style={{width:`${width}px`}}>
                </div>
            </div>
        </>
    )
}
