// import { createRoot } from "react-dom/client"
// import MyJourney from "./MyJourney"
// import Entry from "./components/Entry"

import ReactDOM from "react-dom/client"

// const root = createRoot(document.querySelector('#root')).render(<Name />)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


// root.render(
//   <>
//     <MyJourney />
//   </>
// )


function App() {
  const hours = new Date().getHours() % 12
  const minutes = new Date().getMinutes()


  return (
    <h1>It is currently around {hours} and {minutes}</h1>
  )
}
