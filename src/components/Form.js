import {useContext, useState} from 'react'
import { CategoriesContext } from '../context/CategoriesContext'
import { RecipesContext } from '../context/RecipesContext'


export default function Form() {


    const {categories} = useContext(CategoriesContext)

    const [search, setSearch] = useState({
        name: '',
        category: ''
    })

    const { searchRecipes, setCall } = useContext(RecipesContext)

    const handleForm = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form 
            className="col-12"
            onSubmit={e => {
                e.preventDefault()
                searchRecipes(search)
                setCall(true)
            }}
        >
            <fieldset className="text-center">
                <legend>Search drinks by category or ingredients</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="search by ingredient"
                        onChange={handleForm}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="category"
                        onChange={handleForm}
                    >
                        <option value="">-- Select category</option>
                        {categories.map(categorie => 
                        <option 
                            key={categorie.strCategory} 
                            value={categorie.strCategory}
                        >
                            {categorie.strCategory}
                        </option>
                        )}
                    </select>
                </div>

                    <div className="col-md-4">
                        <input 
                            type="submit" 
                            className="btn btn-block btn-primary"
                            value="Search"
                        />                            
                    </div>
                
            </div>
        </form>
    )
}
