import React from "react"

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false)

  function togglePunchline() {
    setIsShown(prevIsShown => !prevIsShown)
  }

  console.log(isShown)

  return (
    <>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown ? <p>{props.punchline}</p> : null}
      <button onClick={togglePunchline}>
        {isShown === true ? "Hide" : "Show"} Punchline
      </button>
      <hr />
    </>
  )
}
