const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const recipeRouter = require('./routes/recipeRoutes.js')

app.use(express.json());

mongoose.connect(
    "mongodb+srv://mcp_chef:GNxLg0IoW59J9Ovd@cluster0.dtydl.mongodb.net/<dbname>?retryWrites=true&w=majority", 
    {useNewUrlParser: true}
)

app.use("/recipes", recipeRouter);

app.get('/', (req, res) => {
    res.status(200).json(
        {message: "Welcome to the GET route at /"}
    )
})

app.post('/', (req, res) => {
    res.status(200).json(
        {message: "Welcome to the POST route at /"}
    )
})

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});