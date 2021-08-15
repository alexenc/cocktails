import { useContext, useState } from "react"
import  { ModalContext } from "../context/ModalContext"
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));



function Recipe({recipe}) {

    //modal config
    const [modalStyle] = useState(getModalStyle)
    const [ open, setOpen] = useState(false)

    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const {setIdrecipe, data, setData} = useContext(ModalContext)

    const {strDrink, strCategory, strInstructions, strDrinkThumb} = data

    const renderIngredients = (data) => {
        let ingredients = []
        for(let i = 1; i < 16; i++){
            if(data[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{data[`strIngredient${i}`]} {data[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {recipe.strDrink}
                </h2>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`picture of ${recipe.strDrink}`} />
                <div className="card-body">
                    <button 
                        type="button" 
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdrecipe(recipe.idDrink)
                            handleOpen()
                        }}
                    >
                        View recipe
                    </button>
                    <Modal open={open} onClose={() => {handleClose(); setIdrecipe(null); setData({})}}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2 className="card-title d-flex justify-content-center">{strDrink}</h2>
                            <h3 className="mt-4">Instructions: </h3>                            
                            <p>{strInstructions}</p>
                            <img className="img-fluid mb-3" src={strDrinkThumb} />
                            <h3>Ingredients:</h3>
                            <ul>
                                { renderIngredients(data) }
                            </ul>
                            <button onClick={() => {handleClose(); setIdrecipe(null); setData({})}} className="btn btn-block btn-primary" > close </button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipe
