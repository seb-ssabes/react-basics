import React from "react"

export default function Pad(props) {
  const [padStatus, setPadStatus] = React.useState(props.on)

  function padToggle() {
    console.log(padStatus)
    setPadStatus(prevPad => (!prevPad))
  }

  return (
    <button
      style={{backgroundColor: props.color}}
      className={padStatus ? "on" : undefined}
      onClick={padToggle}
    >
    </button>
  )
}
