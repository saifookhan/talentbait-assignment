import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/_commons/header";
import Home from "./components/home";
import Create from "./components/create";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />

          <Switch>
            <Route path="/create">
              <Create string="create" />
            </Route>
            <Route path="/">
              <Home string="hi" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
