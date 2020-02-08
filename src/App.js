import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reflux from "reflux";
import { RStore } from "./utils/store";

import Nav from "./components/_commons/header";
import Home from "./components/home";
import Create from "./components/create/Create";
import Edit from "./components/edit";

export default class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RStore;
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <div className="body-container">
              <Switch>
                <Route path="/create">
                  <Create />
                </Route>
                <Route path="/edit/:id">
                  <Edit />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
