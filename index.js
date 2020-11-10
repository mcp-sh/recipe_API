const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5000;
const db = require('./db')
const recipeRouter = require('./routes/recipeRoutes')

// MIDDLEWARE
app.use(express.json());


// ROUTERS 
app.use("/recipes", recipeRouter);


// HEALTH CHECK ROUTE
app.get('/', (req, res) => {
    res.status(200).json(
        {message: "Welcome to the GET route at /"}
    )
})


app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});