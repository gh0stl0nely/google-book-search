import React, {useState, useEffect} from "react";
import BookList from "../component/BookList";
import {getSavedBooks, deleteBookFromDatabase} from "../util/API";

// Render Save Page
function SavePage(){

    const [savedBooks, setBooks] = useState([]);

    // Call the API to backend to retrieve books
    useEffect(() => {
        fetchBookData();
    }, []);

    async function fetchBookData(){
        const storedBooks =  await getSavedBooks();
        setBooks(storedBooks.data);
    }

    async function removeBook(e){
        const idToBeDelete = e.target.id;
        const response = await deleteBookFromDatabase(idToBeDelete); // NewData after deleting entry book
        setBooks(response.data.newData);
    }

    return (
        <div style={{textAlign: "center", marginTop: "40px"}}>
            <h1>Your favorite books</h1>
            {/* Remember that instead of save, we replace that with remove from database */}
            <BookList data={savedBooks} handleClick={removeBook} isSaved={true}/>
        </div>
    )
}

export default SavePage;