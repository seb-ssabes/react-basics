import Die from "./Die"
import React from "react"

export default function App() {
  const [dice, setdice] = React.useState(generateAllNewDice())

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6))
  }

  const diceElements = dice.map(dice => <Die value={dice}/>)

  return (
    <main>
      <div className="dice-container">

        {diceElements}

      </div>
    </main>
  )
}
