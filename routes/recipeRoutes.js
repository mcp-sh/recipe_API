const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

router.get("/", async (req, res) => {
    try {
        foundRecipes = await Recipe.find();
        res.json(foundRecipes);
    } catch(err) {
        res.json({message: err});
    }
    
}) 

router.post("/", async (req, res) => {
    const recipe = new Recipe({
        title: req.body.title, 
        content: req.body.content,
        tags: req.body.tags
    })
    try {
        const savedRecipe = await recipe.save();
        res.json(savedRecipe);
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router