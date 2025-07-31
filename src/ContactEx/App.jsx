import Contact from "./Contact"

function App() {
    return (
      <div className="contacts">
          <Contact
            img="./mr-whiskerson.png"
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
          />
          <Contact
            img="./fluffykins.png"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
          />
          <Contact
            img="./felix.png"
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
          />
          <Contact
            img="./pumpkin.png"
            name="Pumpkin"
            phone="(212) 555-1339"
            email="pumpkin@cat.me"
          />
      </div>
    )
}

export default App
