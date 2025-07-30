import { createRoot } from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

const root = createRoot(document.querySelector('#root'))

root.render(
  <Page />
)

function Page() {
  return (
    <div className="page-wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
