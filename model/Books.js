const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    
});

const Book = mongoose.model("Book", BookSchema);

module.exports = {
    Book
}