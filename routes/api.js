const express = require("express");
const router = express.Router();
const db = require("../model/Books");

// Get all books stored
router.get("/books", (req,res) => {
    const book = req.body;
    console.log(book);
});

// Save book
router.post("/books", async (req,res) => {
    const book = req.body;
    const savedBook = await db.Book.create({
        _id: book.id,
        title: book.title,
        author: book.author,
        imageURL: book.imageURL,
        description: book.description,
        link: book.link
    });
    return res.json({
        msg: "Saved successful!"
    })
});

// Delete selected book
router.delete("/books/:id", (req,res) => {
    const book = req.body;
    console.log(book);
});

module.exports = router;