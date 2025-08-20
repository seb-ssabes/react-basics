import Die from "./Die"
import React from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {
  const [dice, setDice] = React.useState(() => generateAllNewDice())

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

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
    if (!gameWon) {

      setDice(prevDice => prevDice.map(die =>
        die.isHeld
        ? die
        : {
          ...die,
          value: Math.ceil(Math.random() * 6),
        }
      ))
    } else {
      setDice(generateAllNewDice())
    }
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <div className="dice-container">

        {diceElements}

      </div>

      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New game" : "Roll"}
      </button>

      {gameWon ? <Confetti/> : null}
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
    </main>
  )
}
