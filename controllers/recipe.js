import { RecipeModel } from "../models/recipe.js";
// Get all recipes
export const getRecipes = async (req, res) => {
    try {
        // get all recipes from database
        const allRecipes = await RecipeModel.find();
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
      next (error);  
    }
}
// post Recipe
export const postRecipes = async (req, res, next) => {
    try {
      // Add recipe to database
      const newRecipe = await RecipeModel.create(req.body);
      // Return response
      res.json(newRecipe); 
    } catch (error) {
     next(error);
    }
 }

//  patch Recipe
export const patchRecipe = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} updated`);
}

// delete Recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        // Delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(deletedRecipe)

    } catch (error) {
        next(error);
    }
}

// get Recipes
export const getRecipe = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} received`);
}


