import React, {useState, useEffect} from "react";
import {getSavedBooks} from "../util/API";

// Render Save Page
function SavePage(){

    const [books, setBooks] = useState([]);

    // Call the API to backend
    // useEffect(() => {
    //     const bookData = getSavedBooks();
    //     setBooks(bookData);
    // }, [])

    return (
        <div>
            
        </div>
    )
}

export default SavePage;