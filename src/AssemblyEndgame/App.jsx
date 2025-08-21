import React from "react"
import {languages} from "./languages.js"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = React.useState("react")
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const word = currentWord.split("").map((letter, index) => (
    <span key={index}>{letter.toUpperCase()}</span>
  ))

  const keyboardElements = alphabet.split("").map((letter) =>(
    <button key={letter}>{letter.toUpperCase()}</button>
  ))



  console.log(keyboardElements)

  const languageElements = languages.map(lang => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    }

    return (
      <span
        key={lang.name}
        className="chip"
        style={styles}
      >
        {lang.name}
      </span>
    )
  })

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done!</p>
      </section>
      <section className="language-chips">
        {languageElements}
      </section>
      <section className="word">
        {word}
      </section>
      <section className="keyboard">
        {keyboardElements}
      </section>
      <button className="">New Game</button>
    </main>
  )
}
