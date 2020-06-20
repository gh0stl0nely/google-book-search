import React from "react";
import {Container, Row, Button} from "react-bootstrap";
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

    function renderReturnToHomePageButton(){
        return (
            <div>
                <span style={{paddingRight: "20px"}}><i className="fa fa-hand-o-right"></i></span>
                <Button onClick={() => window.location.href = "/"} variant="outline-danger">Search books</Button>
                <span style={{paddingLeft: "20px"}}><i className="fa fa-hand-o-left"></i></span>
            </div>
           
        )
    }

    return (
        <Container>
            <Row>
                {props.data.length > 0 ? renderBooks() : <h1 style={{margin: "0 auto", marginTop: "20px"}}>{props.isSaved ? renderReturnToHomePageButton() : "No books found!"}</h1>}
            </Row>
        </Container>
    )
}  

export default BookList;