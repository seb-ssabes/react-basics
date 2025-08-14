import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {
  const [ingredients, setIngredients] = React.useState(["Pasta", "Prawn", "Garlic", "Lemon"])
  const [recipeShown, setRecipeShown] = React.useState(false)

  function addItem(formData) {
    const newIngredient = formData.get("ingredient")

    setIngredients(
      prevIngredients => [
        ...prevIngredients,
        newIngredient
      ]
    )
  }

  function toggleRecipeShown() {
    setRecipeShown(prevRecipeShown => !prevRecipeShown)
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
          toggle={toggleRecipeShown}
          ingredients={ingredients}
        />
      }

      {recipeShown && <ClaudeRecipe />}
    </main>
  )
}
