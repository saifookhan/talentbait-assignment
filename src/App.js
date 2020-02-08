import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/_commons/header";
import Home from "./components/home";
import Create from "./components/create/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <div className="body-container">
            <Switch>
              <Route path="/create">
                <Create string="create" />
              </Route>
              <Route path="/">
                <Home string="hi" />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
