import express, { request } from "express";
import cors from "cors";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import expressOasGenerator from "express-oas-generator";
import session from "express-session";
import MongoStore from "connect-mongo";
import categoryRouter from "./routes/category.js";
import userRouter from "./routes/user.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL);
console.log('Database connected')


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
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: {secure: true}
    store: MongoStore.create({
        mongoUrl:process.env.MONGO_URL
    })
}));



// use routes
app.use(userRouter);
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));


// Listen for incoming request

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
});