import React, {useState, useEffect} from "react";
import BookList from "../component/BookList";
import SearchForm from "../component/SearchForm";
import {searchNewBooks, saveBookToDatabase} from "../util/API";

// Render Search Page
function SearchPage(){

    // [{
    //     title: "Title new",
    //     author: "Author",
    //     imageURL: "213",
    //     description: "213",
    //     link: "https://google.com"
    // },{
    //     title: "KHOI",
    //     author: "123",
    //     "imageURL": "213",
    //     description: "213",
    //     link: "https://google.com"
    // }]
    const [searchBook, setSearch] = useState([]);
    const [userInput, setUserInput] = useState({
        title: "",
        author: ""
    });

    function handleInputChange(e){
        const value = e.target.value.trim();
        const name = e.target.name;
        setUserInput({
                ...userInput,
                [name] : value
        });
    }

    async function handleSubmit(e){
        e.preventDefault();
        const response = await searchNewBooks(userInput.title, userInput.author);
        // console.log(response);
        if(response.data.totalItems > 0){
            const searchResult = processSearchResult(response.data.items);
            setSearch(searchResult);
        } else {
            setSearch([]);
        }
    
        setUserInput({
            title: "",
            author: ""
        });
    }

    function saveBook(e){
        const id = e.target.id;
        const bookToSave = searchBook.filter(book => book.id == id);
        setSavedButton(e);

        // save to database. The first item is the only item with the unique ID. 
        saveBookToDatabase(bookToSave[0]);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Google Book Searcher</h1>
            <SearchForm userInput={userInput} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <h1 style={{marginTop: "5px"}}>Search results: {searchBook.length} books</h1>
            <BookList data={searchBook} handleClick={saveBook} isSaved={false} />
        </div>
    )
}

//Helpers
function processSearchResult(books){
    return books.map(book => {
        const info = book.volumeInfo;
        const url = !info.imageLinks ? "https://via.placeholder.com/150" : info.imageLinks.thumbnail;
        const description = info.description ? info.description : "No description provided";
        return {
            id: Math.random() * 1000,
            title: info.title,
            author: info.authors,
            imageURL: url,
            description: description,
            link: info.infoLink
        }  
    });
}

function setSavedButton(e){
    e.target.style.backgroundColor = "grey";
    e.target.innerHTML = "Saved";
    e.target.disabled = "disabled";
    e.target.style.cursor = "not-allowed";
}

export default SearchPage;