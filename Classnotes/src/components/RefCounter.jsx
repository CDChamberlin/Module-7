import { useRef, useState } from "react";

export default function RefCounter(){
    const [countState, setCountState] = useState(0)
    let countRef = useRef(0)
    let count = 0

    function handleClick(){
        countRef.current++
        count++

        alert(`You clicked ${countRef.current} (${count}) times!`)
    }

    return(
        <div>
            <button onClick={handleClick}>REFCOUNTER: Click Me!</button>
            <br />
            Count: {count}
            <br />
            CountRef: {countRef.current}
            <br />
            <button onClick={() => setCountState(countState + 1)}>STATE COUNTER: Click me to update</button>
            <br />
            State: {countState}
        </div>
    )
}