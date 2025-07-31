export default function Contact(props) {
  console.log(props)
  return (
    <article className="contact-card">
      <img
          src={props.img}
          alt="cat-photo"
          />
      <h3>{props.name}</h3>
      <div className="info-group">
          <img
              src="./phone-icon.png"
              alt="phone icon"
              />
          <p>{props.phone}</p>
      </div>
      <div className="info-group">
          <img
              src="./mail-icon.png"
              alt="mail icon"
              />
          <p>{props.email}</p>
      </div>
    </article>
  )
}

const person = {
  img: "./mr-whiskerson.png",
  name: "Mr. Whiskerson",
  phone: "(212) 555-1234",
  email: "mr.whiskaz@catnap.meow"
}

const {img, name} = person

console.log(img)
