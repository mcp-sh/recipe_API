const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    title : {
        type: String, 
        required : true
    }, 
    content : { 
        type: String, 
        required: true
    }
})

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;