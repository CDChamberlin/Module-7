import { useState } from "react";
import Clock from "./Clock";

function ClockDisplay(){
    const [showClock, setShowClock] = useState(false)

    const toggleClock = () => {
        setShowClock(!showClock)
        //setTickCount(0)
    }
    return(
        <div>
            {showClock && <Clock />}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    )
}
export default ClockDisplay