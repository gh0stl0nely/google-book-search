import React, {useState, useEffect} from "react";
import BookList from "../component/BookList";
import {getSavedBooks} from "../util/API";

// Render Save Page
function SavePage(){

    const [savedBooks, setBooks] = useState([{
        title: "Title new",
        author: ["Author", "Author"],
        imageURL: "213",
        description: "213",
        link: "https://google.com"
    },{
        title: "KHOI",
        author: ["Author", "Author"],
        "imageURL": "213",
        description: "213",
        link: "https://google.com"
    }]);

    // Call the API to backend
    // useEffect(() => {
    //     const bookData = getSavedBooks();
    //     setBooks(bookData);
    // }, [])

    function removeBook(){
        alert("Remove");
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Your favorite books</h1>
            {/* Remember that instead of save, we replace that with remove from database */}
            <BookList data={savedBooks} handleClick={removeBook} isSaved={true}/>
        </div>
    )
}

export default SavePage;