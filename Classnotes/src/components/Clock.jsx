import { useState, useEffect } from "react";
// Renders a digital time that updates every second
function Clock() {
  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0)

//   useEffect(() => {
//     // first arg is usually an arrow function
//     setInterval(() => tick(), 1000);
//     console.log("Clock component mounted");
//   }, []); // second arg is an array of dependencies

  const tick = () => {
    setDate(new Date());
    console.log("tick"); // track the effect frequency
    let currentCount = tickCount + 1
    setTickCount(currentCount)
    console.log('tickCount: ', tickCount)
  }

  useEffect(() => {
    // first arg is usually an arrow function
    let clockInterval = setInterval(() => tick(), 1000);
    
    console.log("Clock component mounted");
    return () => {
        
        console.log('Clock component unmounted')
        clearInterval() //stops the interval from running on "unmounting of Clock component"
        clearTimeout(clockInterval) // stops the timeout when component is unmounted.
    }
  }, [tickCount]); // second arg is an array of dependencies

  
  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Clock

// ++ Try removing the dependency array from useEffect
// and notice the difference in 'tick' log messages
// ++ Why do the console messages appear double?
