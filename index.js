import express, { request } from "express";
import cors from "cors";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import expressOasGenerator from "express-oas-generator";
import categoryRouter from "./routes/category.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL);


// Create Express App
const app = express();
expressOasGenerator.handleResponses(app, {
    tag:['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// Apply middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));



// use routes
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));


// Listen for incoming request

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
});