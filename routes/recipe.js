import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe1, postRecipes } from "../controllers/recipe.js";
import { remoteUpload } from "../Middlewares/upload.js";
import { checkUsersession } from "../Middlewares/auth.js";

// create router
const recipeRouter = Router();

// Apply middlewares
recipeRouter.unsubscribe(checkUsersession);

// Define routes
recipeRouter.get('/recipes', getRecipes );

recipeRouter.post('/recipes', checkUsersession, remoteUpload.single('image'), postRecipes );

recipeRouter.patch('/recipes/:id', checkUsersession, patchRecipe1 );

recipeRouter.delete('/recipes/:id', checkUsersession, deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);
// Export Router
export default recipeRouter;