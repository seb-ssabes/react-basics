import Die from "./Die"
import React from "react"
import {nanoid} from "nanoid"

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }))
  }

  const diceElements = dice.map(dieObj => (
    <Die isHeld={dieObj.isHeld}
         key={dieObj.id}
         value={dieObj.value}/>
  ))

  function rollDice() {
    setDice(generateAllNewDice())
  }

  return (
    <main>
      <div className="dice-container">

        {diceElements}

      </div>

      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}
