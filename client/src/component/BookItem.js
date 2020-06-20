import React from "react";
import {Card, Col, Button} from "react-bootstrap";
import "./book.css";

function BookItem(props){
    const authors = props.author.join(", ");
    
    return (
        <Col xs={12} sm={12} md={6} lg={4} className="d-flex justify-content-xs-center justify-content-sm-center">
            <Card style={{ width: '18rem', boxShadow: "3px 3px 3px #9E9E9E", marginTop: "30px" }}>
                <Card.Img variant="top" src={props.imageURL} style={{height: "300px"}}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>By: {authors}</Card.Text>
                    <Card.Text style={{fontSize: "12px"}}>
                    {props.description}
                    </Card.Text>
                    <Button variant="success" onClick={() => window.open(props.link)}>Link</Button>
                    <Button id={props.id} style={{marginLeft: "5px"}} variant={props.isSaved ? "dark" : "info"} onClick={props.handleClick}>{props.isSaved ? "Remove Book" : "Save Book"}</Button>
                </Card.Body>
            </Card>
        </Col>   
    )
}

export default BookItem;