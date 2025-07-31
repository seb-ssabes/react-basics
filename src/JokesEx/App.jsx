import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  return (
    <main>
      {jokeElements}
    </main>
  )
}


      // <main>
      //   <Joke
      //     punchline="It's hard to explain puns to kleptomaniacs because
      //     they always take things literally."
      //   />
      //   <Joke
      //     setup="How did the hacker escape the police? "
      //     punchline="He just ransomware!"
      //   />
      //   <Joke
      //     setup="Why don't pirates travel on mountain roads?"
      //     punchline="Scurvy"
      //   />
      //   <Joke
      //     setup="Why do bees stay in the hive in the winter?"
      //     punchline="Swarm"
      //   />
      //   <Joke
      //     setup="What's the best thing about Switzerland?"
      //     punchline="I don't know, but the flag is a big plus!"
      //   />
      // </main>
