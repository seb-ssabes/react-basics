import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
  const [ingredients, setIngredients] = React.useState(["Pasta", "Ricotta", "Dried tomatoes", "Olives"])
  const [recipe, setRecipe] = React.useState("")
  const recipeSection = React.useRef(null)
  console.log(recipeSection)

  React.useEffect(() => {
    if(recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({behavior: "smooth"})
    }
  }, [recipe])

  function addItem(formData) {
    const newIngredient = formData.get("ingredient")

    setIngredients(
      prevIngredients => [
        ...prevIngredients,
        newIngredient
      ]
    )
  }

  async function getRecipe() {
      const recipeMarkdown = await getRecipeFromMistral(ingredients)
      setRecipe(recipeMarkdown)
    }

  return (
    <main>
      <form action={addItem} className="add-ingredient-form">
        <input
            type="text"
            placeholder="e.g oregano"
            aria-label="Add ingredient"
            name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 &&
        <IngredientsList
          getRecipe={getRecipe}
          ingredients={ingredients}
          ref={recipeSection}
        />
      }

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}
