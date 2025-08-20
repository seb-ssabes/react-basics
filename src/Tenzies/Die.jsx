export default function Die(props) {
  return (
    <button
      style={props.isHeld ? {backgroundColor: "#59E391"} : {}}
      onClick={() => props.hold(props.id)}
    >{props.value}</button>
  )
}
