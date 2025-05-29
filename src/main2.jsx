// import { createRoot } from "react-dom/client"

// const root = createRoot(document.querySelector('#root'))

const element = document.createElement("h1")
element.textContent = "Hola React"
element.className = "header"

document.getElementById("root").appendChild(element)
