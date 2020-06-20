import React from "react";
import {Form, Button} from "react-bootstrap";

function SearchForm(props){
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group style={{width: "70%", margin: "0 auto"}}>
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={props.handleInputChange} value={props.userInput.title} name="title" placeholder="Enter book title to search" required/>
            </Form.Group>
            <Form.Group style={{width: "70%", margin: "0 auto"}}>
                <Form.Label>Author</Form.Label>
                <Form.Control onChange={props.handleInputChange} value={props.userInput.author} name="author" placeholder="Enter Author's Name" required/>
            </Form.Group>
            <Button style={{marginTop: "10px"}} variant="danger" type="submit">
                Search <i class="fa fa-search" aria-hidden="true"></i>
            </Button>
        </Form>
    )
}

export default SearchForm;