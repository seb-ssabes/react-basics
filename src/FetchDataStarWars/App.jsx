import React from "react"

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  console.log("Rendered")

  React.useEffect(function() {
    console.log("Effect ran!")
    fetch(`https://swapi.py4e.com/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  return (
      <div>
          <h2>The count is {count}</h2>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
  )
}
