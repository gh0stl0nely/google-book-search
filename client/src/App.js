import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import SavePage from "./pages/Save";
import SearchPage from "./pages/Search";
  

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SearchPage />
                </Route>
                <Route path="/books">
                    <SavePage />
                </Route>
                {/* <Route>
                    <NoMatch />
                </Route> */}
            </Switch> 
        </Router>
    )
}

export default App;