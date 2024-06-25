import express, { request } from "express";
import recipeRouter from "./routes/recipes.js";

// Create Express App
const app = express();

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