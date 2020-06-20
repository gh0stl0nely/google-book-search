import axios from "axios";

// API call to return all saved books from our server
async function getSavedBooks(){
    const savedBooks = await axios.get("/api/books"); // Grab from backend
    return savedBooks;
}

// API call to search for books given title and author
async function searchNewBooks(title,author){
    const newBooks = await axios.post("/api/search", {title, author});
    return newBooks;
}

// API call to save book to database
async function saveBookToDatabase(book){
    return await axios.post("/api/books", book);
}

async function deleteBookFromDatabase(id){
    const newData = await axios({
        method: "DELETE",
        url: "/api/books",
        data: {
            id
        }
    });

    return newData;

}


export {
    getSavedBooks,
    searchNewBooks,
    saveBookToDatabase,
    deleteBookFromDatabase
}
