import React from "react";
import {Container, Row} from "react-bootstrap";
import BookItem from "./BookItem";

function BookList(props){
    function renderBooks(){
        const data = props.data.map(book => {
            return (
                <BookItem id={book.id} title={book.title} author={book.author} imageURL={book.imageURL} 
                link={book.link} description={book.description} handleClick={props.handleClick} 
                isSaved={props.isSaved}/>
            )
        });
        
        return data;
    }

    return (
        <Container>
            <Row>
                {props.data.length > 0 ? renderBooks() : <h1 style={{margin: "0 auto", marginTop: "20px"}}>No books found!</h1>}
            </Row>
        </Container>
    )
}  

export default BookList;