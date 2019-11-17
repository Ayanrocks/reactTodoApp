import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import todoEdit from "./components/todoEdit";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/todo/:id" component={todoEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
