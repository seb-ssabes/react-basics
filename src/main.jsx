import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector('#root'))

function MyFirstList () {
  return (
    <ul>
      <li>Become a competent dev</li>
      <li>Build out of the ordinary web apps</li>
      <li>Get paid while at it</li>
    </ul>
  )
}

root.render(
  <div>
    <MyFirstList />
  </div>
)
