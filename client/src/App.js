import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import todoEdit from "./components/todoEdit";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Home} />
          <Route path="/todo/:id/edit" component={todoEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
