import React,{useState, useEffect} from 'react'
import Button from '../blank'

export default function Index({options, defaultOpt, func}) {

    const [choice, setChoice] = useState(options[defaultOpt || 0])

    const makeChoice = (choice) => () => {
        console.log('choice made:',choice);
        setChoice(choice)
    }
    const buildOptions = (options) => {
        return options.map((option, index) => {
            return <Button  pos={[`${400 + 100*index}px`,`${1280/2-215/2}px`]} fn={makeChoice(option)} key={index} >{option}</Button>
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
