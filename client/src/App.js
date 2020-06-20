import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import SavePage from "./pages/Save";
import SearchPage from "./pages/Search";
import NoMatch from "./pages/NoMatch";
  

function App(){
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/books">My Books</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Router>
              <Switch>
                <Route exact path="/">
                    <SearchPage />
                </Route>
                <Route path="/books">
                    <SavePage />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
              </Switch> 
            </Router>
        </>
        
    )
}

export default App;