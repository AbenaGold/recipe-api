import express, { request } from "express";
import recipeRouter from "./routes/recipe.js";
import mongoose from "mongoose";

// connect to database
await mongoose.connect(process.env.MONGO_URL);


// Create Express App
const app = express();

// Apply middlewares
app.use(express.json());


// use routes
app.use(recipeRouter);

// Listen for incoming request
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
// k9pK7xxg2Xyg4QnG