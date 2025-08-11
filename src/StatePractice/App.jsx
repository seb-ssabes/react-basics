import React from "react"
import Count from "./Count"

export default function App() {

  const [stateCount, setStateCount] = React.useState(0)

  function add() {
    setStateCount(prevStateCount => prevStateCount + 1)
  }

  function substract() {
    setStateCount(prevStateCount => prevStateCount - 1)
  }

  return (
    <main className="container">
      <div className="counter">
          <button onClick={substract} className="minus" aria-label="Decrease count">–</button>
          <Count number={stateCount} />
          <button onClick={add} className="plus" aria-label="Increase count">+</button>
      </div>
    </main>
  )
}
