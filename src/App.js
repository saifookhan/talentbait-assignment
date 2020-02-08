import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Create from "./components/create";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </nav>

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
