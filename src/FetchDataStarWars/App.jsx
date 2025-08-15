import React from "react"

export default function App(props) {
  const [starWarsData, setStarWarsData] = React.useState(null)

  React.useEffect(function() {
    fetch("https://swapi.py4e.com/api/people/1")
        .then(res => res.json())
        // .then(data => setStarWarsData(data))
  })




  return (
      <div>
          <pre>{JSON.stringify({starWarsData}, null, 2)}</pre>
      </div>
  )
}
