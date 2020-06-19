const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title : {
        type: String,
    },
    author : {
        type: String
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