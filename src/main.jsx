import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector('#root'))

root.render(
  <TemporaryName />

)

function TemporaryName() {
  return (
    <main>
      <img src="/src/assets/react.svg" alt="" />
      <h1>My list</h1>
      <ul>
        <li>Become a competent dev</li>
        <li>Build out of the ordinary web apps</li>
        <li>Get paid while at it</li>
      </ul>
    </main>
  )
}
