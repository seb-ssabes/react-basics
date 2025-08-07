import React from 'react';
import ReactDOM from 'react-dom/client';



function App() {

  function signUp(formData) {
    const data = Object.fromEntries(formData)
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")

    const allData = {
      ...data,
      dietaryRestrictions
    }

    console.log(allData)
  }

  return (
    <section>
      <h1>Signup form</h1>
        <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="123456" type="password" name="password"/>

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="Part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="Full-time" />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="Gluten-free" />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
          <option value="Yellow">Yellow</option>
        </select>




        <button>Submit</button>



      </form>

    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
