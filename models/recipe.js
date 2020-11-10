const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    title : {
        type: String, 
        required : true
    }, 
    content : { 
        type: String, 
        required: true
    },
    tags: []
})

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;