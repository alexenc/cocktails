import axios from "axios"
import { createContext, useState, useEffect } from "react"



export const ModalContext = createContext()

//provider
const  ModalProvider = (props) => {
    
    //provider state
    const [ idrecipe, setIdrecipe] = useState(null)
    const [ data, setData ] = useState({})

    //once idrecipe is set call api
    useEffect(() => {
        

        const apiCall = async () => {
            if(!idrecipe) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`
            const response = await axios(url)
            setData(response.data.drinks[0])
            
        }
        apiCall()
        


    }, [idrecipe])

    return (
        <ModalContext.Provider
            value={{
                setIdrecipe,
                data, setData
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider