import Die from "./Die"
import React from "react"
import {nanoid} from "nanoid"

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice())

  if (
      dice.every(die => die.isHeld) &&
      dice.every(die => die.value === dice[0].value)
    ) {
    console.log("WIN")
  }




  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }))
  }

  const diceElements = dice.map(dieObj => (
    <Die
      isHeld={dieObj.isHeld}
      key={dieObj.id}
      value={dieObj.value}
      hold={flipHold}
      id={dieObj.id}
    />
  ))

  function flipHold(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  function rollDice() {
    // setDice(generateAllNewDice())
    setDice(prevDice => prevDice.map(die =>
        die.isHeld
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6),
        }
    ))
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <div className="dice-container">

        {diceElements}

      </div>

      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}
