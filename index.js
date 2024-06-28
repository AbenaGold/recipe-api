import express, { request } from "express";
import recipeRouter from "./routes/recipe.js";
import mongoose from "mongoose";
import categoryRouter from "./routes/category.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL);


// Create Express App
const app = express();

// Apply middlewares
app.use(express.json());



// use routes
app.use(recipeRouter);
app.use(categoryRouter);

// Listen for incoming request
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
});