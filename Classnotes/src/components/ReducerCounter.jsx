import { useReducer } from "react";
const reducer = (state, action) =>{
    switch (action.type) {
        case 'increment':
            return state + action.payload;
        case 'decrement':
            return state - action.payload;
        default:
            return state;
    }
}
export default function ReducerCounter(){
    const [counter, dispatch] = useReducer(reducer, 0)

    const handleIncrement = (amt = 1) =>{
        dispatch({type: 'increment', payload: amt})
    }

    const handleDecrement = (amt = 1) =>{
        dispatch({type: 'decrement', payload: amt})
    }

    return(
        <div>
            <h2>Count: {counter}</h2>
            <button onClick={() => handleIncrement()}>Reducer Increment</button>
            <button onClick={() => handleDecrement()}>Reducer Decrement</button>
            <button onClick={() => handleIncrement(5)}>Reducer Increment +5</button>
            <button onClick={() => handleDecrement(5)}>Reducer Increment -5</button>
        </div>
    )
}

