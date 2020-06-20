const express = require("express");
const router = express.Router();
const db = require("../model/Books");
const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

// POST endpoint to get data from GOOGLE API
router.post("/search", async (req,res) => {
    const title = req.body.title;
    const author = req.body.author;
    const newBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${API_KEY}`);
    return res.json(newBooks.data);
})

// Get all books stored
router.get("/books", async (req,res) => {
    const allBooks= await db.Book.find({});
    return res.json(allBooks);
});

// Save book
router.post("/books", async (req,res) => {
    const book = req.body;
    console.log(book);
    const savedBook = await db.Book.create({
        id: book.id,
        title: book.title,
        author: book.author,
        imageURL: book.imageURL,
        description: book.description,
        link: book.link
    });

    return res.status(200).json({
        msg: "Saved successful!",
        data: savedBook
    });
});

// Delete selected book
router.delete("/books/", async (req,res) => {
    const id = req.body.id;
    await db.Book.findOneAndDelete({id: id});
    const newData = await db.Book.find({});
    return res.json({
        msg: "Deleted successful",
        newData
    })
});

module.exports = router;