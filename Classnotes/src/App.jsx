import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock'
import ClockDisplay from './components/ClockDisplay'
import ActivityFinder from './components/ActivityFinder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Clock /> */}
      <ClockDisplay />
      <ActivityFinder />
    </>
  )
}

export default App
