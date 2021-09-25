import React,{useState, useEffect} from 'react'
import Button from '../play'

export default function Index({options, defaultOpt, func}) {

    const [choice, setChoice] = useState(options[defaultOpt || 0])

    const makeChoice = (choice) => () => {
        console.log('choice made:',choice);
        setChoice(choice)
    }
    const buildOptions = (options) => {
        return options.map((option, index) => {
            return <Button onClick={makeChoice(option)} key={index} >{option}</Button>
        })
    }

    useEffect(() => {
        if (choice) {
            func(choice)
        }
    },[choice])

    return (
        <>
            {buildOptions(options)}
        </>
    )
}
