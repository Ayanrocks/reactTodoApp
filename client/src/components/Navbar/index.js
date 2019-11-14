import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-danger">
        <div className="navbar-brand text-light" href="#">
          React Todo App
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div className="nav-link text-light" href="#">
                Create
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
