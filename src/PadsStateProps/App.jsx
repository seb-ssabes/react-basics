import padsData from "./pads"
import React from "react"
import Pad from "./Pad"


export default function App() {
  const [pads, setPads] = React.useState(padsData)

  function toggle(id) {
    setPads(prevPads => prevPads.map(item => {
      return item.id === id ? {...item, on: !item.on} : item
    }))
  }

  const buttonElements = pads.map(pad => (
    <Pad color={pad.color} on={pad.on} id={pad.id} key={pad.id} toggle={toggle}/>
  ))

  return (
      <main>
          <div className="pad-container">
              {buttonElements}
          </div>
      </main>
  )
}
