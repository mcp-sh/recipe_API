const mongoose = require('mongoose');

const db = mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@cluster0.dtydl.mongodb.net/recipeDB?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, 
)
.then(() => {console.log("Connected to MongoDB")})
.catch((err) => console.log(err));

module.exports = db