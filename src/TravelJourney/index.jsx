import { createRoot } from "react-dom/client"
import MyJourney from "./MyJourney"

const root = createRoot(document.querySelector('#root'))


root.render(
  <>
    <MyJourney />
  </>
)
