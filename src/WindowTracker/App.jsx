import WindowTracker from "./WindowTracker"
import React from "react"

export default function App() {
  const [show, setShow] = React.useState(true)

  function toggleShow() {
    setShow(prevShow => !prevShow)
  }


  return (
      <main className="container">
          <button onClick={toggleShow}>
              Toggle WindowTracker
          </button>
          {show ? <WindowTracker /> : null}
      </main>
  )
}
