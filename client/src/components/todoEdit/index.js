import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodo } from "../../actions";

class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  async componentDidMount() {}

  componentDidUpdate() {}
  render() {
    return (
      <div>
        <h1>EDIT Component</h1>
      </div>
    );
  }
}

function mapStateToProps({ todoReducer }) {
  const { todos } = todoReducer;
  return {
    todos
  };
}

export default connect(mapStateToProps, { fetchTodo })(TodoEdit);
