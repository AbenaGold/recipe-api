import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe.js";

// create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes );

recipeRouter.post('/recipes', postRecipes );

recipeRouter.patch('/recipes/:id', patchRecipe );

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

// Export Router
export default recipeRouter;