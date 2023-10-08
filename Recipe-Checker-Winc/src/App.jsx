import { RecipeListPage } from './pages/RecipeListPage';
import { RecipesPage } from "./pages/RecipesPage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      

      {selectedRecipe ? (
        <RecipesPage recipe={selectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </>
  );
};
