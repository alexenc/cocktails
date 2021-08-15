import axios from "axios"
import { createContext, useState, useEffect } from "react"

export const RecipesContext = createContext()


function RecipesProvider(props) {

    const [recipes, setrecipes] = useState([])
    const [search, searchRecipes] = useState({
        name: '',
        category: ''
    })   
    const [call, setCall] = useState(false)

    useEffect(() => {
        if(call){
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`

                const result = await axios(url)
                setrecipes(result.data.drinks)
            }
            getRecipes()
        } else {

        }
        
        
    }, [search])


    return (
        <RecipesContext.Provider
            value={{
                recipes,
                searchRecipes,
                setCall
               
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider
