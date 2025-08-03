import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"


export default function MyJourney() {
  const entryData = data.map((d) => {
    return (
      <Entry
          key={d.id}
          entry={d}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {entryData}
      </main>
    </>
  )
}
