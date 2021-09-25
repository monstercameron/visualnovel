import React,{useState, useEffect} from 'react'
import Button from '../play'

export default function Index({options, func}) {

    const [choice, setChoice] = useState('')

    const makeChoice = (choice) => () => {
        console.log(choice);
        setChoice(choice)
    }
    const buildOptions = (options) => {
        return options.map((option, index) => {
            return <Button key={index} onClick={()=>console.log('test')}>{option}</Button>
        })
    }

    useEffect(() => {
        if (choice) {
            func(choice)
        }
    },[choice])

    return (
        <div>
            {buildOptions(options)}
        </div>
    )
}
