import {useState} from 'react'

export const useCounter = (initial = 0) => {
   
    const [state, setState] = useState(initial);

    const increment = (factor = 1) =>{
        setState(state + factor);
    }

    const decrement = (factor = 1) => {
        setState(state - factor);
    }
    const reset = () => {
        setState(initial)
    }

    return{
        state,
        increment,
        decrement,
        reset
    }
}
