const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookId:{
        type: String,
        require: true,
        unique: true
    },
    title:{
        type: String,
        require: true,
        max:50,
        unique: true
    },
    author:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    publishedData:{
        type: String,
        require: true

    }
},
{timestamps:true}
)

module.exports = mongoose.model("Books",BookSchema);