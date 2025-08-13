import padsData from "./pads"
import React from "react"
import Pad from "./Pad"


export default function App(props) {
  const [pads, setPads] = React.useState(padsData)

  // const styles = {
  //   backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  // }

  const buttonElements = pads.map(pad => (
    <Pad color={pad.color} on={pad.on} key={pad.id}/>
  ))


  return (
      <main>
          <div className="pad-container">
              {buttonElements}
          </div>
      </main>
  )
}
