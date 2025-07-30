import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector('#root'))

root.render(
  <Page />
)

function Page() {
  return (
    <div className="page-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <img src="/src/assets/react.svg" className="react-logo" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Main() {
  return (
    <main>
      <h1>My list</h1>
      <ol>
        <li>Become a dev</li>
        <li>Build out of the ordinary web apps</li>
        <li>Get paid while at it</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2025 Olivares development. All rights reserved.</small>
    </footer>
  )
}
