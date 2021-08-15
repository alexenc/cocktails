import Form from "./components/Form";
import Header from "./components/Header";
import RecipesList from "./components/RecipesList";
import CategoriesProvider from './context/CategoriesContext'
import ModalProvider from "./context/ModalContext";
import RecipesProvider from "./context/RecipesContext";






function App() {
  return (
      <CategoriesProvider>
        <RecipesProvider>
          <ModalProvider>
            <Header />
              <div className="container mt-5">
                <div className="row">
                  <Form />
                </div>
                <RecipesList />
              </div>
          </ModalProvider>
        </RecipesProvider>
      </CategoriesProvider>
      
  );
}

export default App;
