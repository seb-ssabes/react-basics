import React from "react"
import {languages} from "./languages.js"
import clsx from "clsx"
import {getFarewellText} from "./utils.js"

export default function AssemblyEndgame() {
  // state values
  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessedLetters, setGuessedLetters] = React.useState([])

  // static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  // derived values
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon =
    currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    )
  }

  const word = currentWord.split("").map((letter, index) => (
    <span key={index}>
      {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ))

  const keyboardElements = alphabet.split("").map(letter => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    })

    return (
      <button
        className={className}
        key={letter}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    )
  })

  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    const className = clsx("chip", isLanguageLost && "lost")

    return (
      <span
        key={lang.name}
        className={className}
        style={styles}
      >
        {lang.name}
      </span>
    )
  })

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lose: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect
  })

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      )
    }
    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done!</p>
        </>
      )
    }
    if (isGameLost){
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly</p>
        </>
      )
    }
    return null
  }

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className={gameStatusClass}>
        {renderGameStatus()}
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
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  )
}
