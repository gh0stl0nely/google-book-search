const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    _id: Number,

    title : {
        type: String,
    },
    author : {
        type: Array
    },
    imageURL: {
        type: String
    },
    description : {
        type: String
    },
    link : {
        type: String
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = {
    Book
}