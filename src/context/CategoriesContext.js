import axios from "axios"
import { createContext, useState, useEffect } from "react"



export const CategoriesContext = createContext()

//provider
const  CategoriesProvider = (props) => {
    //context state
    const [categories, setCategories] = useState([])

    //api call
    useEffect(() => {
        const fetchCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const categories = await axios.get(url)

            setCategories(categories.data.drinks)
        }
        fetchCategories()
    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider