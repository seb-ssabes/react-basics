export default function Joke(props) {
  return (
    <>
      {props.setup && <p>Setup: {props.setup}</p>}
      <p>Punchline {props.punchline}</p>
      <hr />
    </>
  )
}
