import React from "react"

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
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
          <button onClick={substract} className="minus" aria-label="Decrease count">–</button>
          <h2 className="count">{stateCount}</h2>
          <button onClick={add} className="plus" aria-label="Increase count">+</button>
      </div>
    </main>
  )
}
