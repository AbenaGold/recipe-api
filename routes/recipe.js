import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe1, postRecipes } from "../controllers/recipe.js";
import { remoteUpload } from "../Middlewares/upload.js";

// create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes );

recipeRouter.post('/recipes', remoteUpload.single('image'), postRecipes );

recipeRouter.patch('/recipes/:id', patchRecipe1 );

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);
// Export Router
export default recipeRouter;