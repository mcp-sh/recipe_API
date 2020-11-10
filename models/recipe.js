const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title : {
        type: String, 
        required : true
    }, 
    content : { 
        type: String, 
        required: true
    }
    tags : [{
        type: String
    }]

})

const Recipe = mongoose.Model("Recipe", RecipeSchema);
module.exports = Recipe;