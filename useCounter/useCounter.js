import {useState} from 'react'

export const useCounter = (initial = 0) => {
   
    const [counter, setCounter] = useState(initial);

    const increment = (factor = 1) =>{
        setCounter(state + factor);
    }

    const decrement = (factor = 1) => {
        setCounter(state - factor);
    }
    const reset = () => {
        setCounter(initial)
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}
