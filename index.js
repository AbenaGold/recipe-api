import express, { request } from "express";
import recipeRouter from "./routes/recipe.js";
import mongoose from "mongoose";

// connect to database
await mongoose.connect(process.env.MONGO_URL);


// Create Express App
const app = express();

// Apply middlewares
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.json('welcome home');
});

app.post('/login', (req, res) => {
    res.json('login successful');
});
app.get('/products', (req, res) => {
    res.json('shoes')
});
app.patch('/buy', (req, res) => {
    res.json('socks')
});

// use routes
app.use(recipeRouter);

// Listen for incoming request
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
// k9pK7xxg2Xyg4QnG