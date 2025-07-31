import { createRoot } from "react-dom/client"
import MyJourney from "./MyJourney"
import Entry from "./components/Entry"

const root = createRoot(document.querySelector('#root'))


root.render(
  <>
    <MyJourney />
  </>
)



const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]

const pokemonHTML = pokemons.map(pokemon => `<p>${pokemon}</p>`)


console.log(pokemonHTML)
