import { useContext } from "react"
import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.production.min"
import { RecipesContext } from "../context/RecipesContext"
import Recipe from "./Recipe"



function RecipesList() {

    const { recipes } = useContext(RecipesContext)

    return (
        <div>
            <div className="row mt-5">
                {recipes.map(recipe => <Recipe  key={recipe.idDrink} recipe={recipe}/>)}
            </div>            
        </div>
    )
}

export default RecipesList
