import React, { Component } from "react";
import TodoCard from "../todoCard";
import { connect } from "react-redux";
import { fetchTodo } from "../../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  async componentDidMount() {
    await this.props.fetchTodo();
    console.log(this.props);
    this.setState({ todos: this.props.todos[0] });
  }
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            {this.state.todos &&
              this.state.todos.map((todo, i) => {
                return <TodoCard key={i} todo={todo} />;
              })}
          </div>
        </div>
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

export default connect(mapStateToProps, { fetchTodo })(Home);
