import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import todoEdit from "./components/todoEdit";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard" component={Home} />
          <Route path="/todo/:id" component={todoEdit} />
        </Switch>
        <Navbar />
      </Router>
    );
  }
}

export default App;
