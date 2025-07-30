import { createRoot } from "react-dom/client"
import MyApp from "./MyApp"

const root = createRoot(document.querySelector('#root'))

root.render(
  <MyApp />
)
