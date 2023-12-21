import { useReducer, useState } from "react";
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
    const values = Array.from({length: 10}, (_, i) => i + 1)
    const [counter, dispatch] = useReducer(reducer, 0)
    const [count, setCount] = useState(1)

    const handleIncrement = () =>{
        dispatch({type: 'increment', payload: count})
    }

    const handleDecrement = () =>{
        dispatch({type: 'decrement', payload: count})
    }

    return(
        <div>
            <label>
        Choose number to increment or decrement by:
        <select
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        >
           {values.map(val => <option value={val}>{val}</option>)}
        </select>
      </label>
            <h2>Count: {counter}</h2>
            <button onClick={() => handleIncrement(count)}>Reducer Increment</button>
            <button onClick={() => handleDecrement(count)}>Reducer Decrement</button>
            {/* <button onClick={() => handleIncrement(5)}>Reducer Increment +5</button>
            <button onClick={() => handleDecrement(5)}>Reducer Increment -5</button> */}
        </div>
    )
}

