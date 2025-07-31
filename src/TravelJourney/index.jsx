import { createRoot } from "react-dom/client"
import MyJourney from "./MyJourney"
import Entry from "./components/Entry"

const root = createRoot(document.querySelector('#root'))


root.render(
  <>
    <MyJourney />
  </>
)
