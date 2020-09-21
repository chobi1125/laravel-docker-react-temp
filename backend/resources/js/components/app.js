import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import About from "./About";
import Top from "./Top";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Top} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));