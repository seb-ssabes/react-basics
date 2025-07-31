import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"


export default function MyJourney() {
  const entryData = data.map((d) => {
    return <Entry
      img={d.img}
      title={d.title}
      country={d.country}
      googleMapsLink={d.googleMapsLink}
      dates={d.dates}
      text={d.text}
    />
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
