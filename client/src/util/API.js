import axios from "axios";

// API call to return all saved books from our server
async function getSavedBooks(){
    const savedBooks = await axios.get("/api/books"); // Grab from backend
    return savedBooks;
}

// API call to search for books given title and author
async function searchNewBooks(title,author){
    const newBooks = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=AIzaSyAPLFNPE-vYn4HZjnkqy0Jnzvc4luy3x9Y`);
    return newBooks;
}

// API call to save book to database
async function saveBookToDatabase(book){
    return await axios.post("/api/books", book);
}


export {
    getSavedBooks,
    searchNewBooks,
    saveBookToDatabase
}
