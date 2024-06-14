import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage onSelectRecipe={handleSelectRecipe} />
      )}
    </div>
  );
};
