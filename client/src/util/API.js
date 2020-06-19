import axios from "axios";

// API call to return all saved books from our server
async function getSavedBooks(){
    const savedBooks = await axios.get("/api/books"); // Grab from backend
    return savedBooks;
}

// API call to retrieve books

export {
    getSavedBooks
}
