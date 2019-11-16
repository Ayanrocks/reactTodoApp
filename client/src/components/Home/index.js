import React, { Component } from "react";
import { Container, Button, Link } from "react-floating-action-button";
import TodoCard from "../todoCard";
import { connect } from "react-redux";
import { fetchTodo } from "../../actions";
import TodoModal from "../todoModal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoModal: false,
      bucketModal: false
    };
  }
  async componentDidMount() {
    await this.props.fetchTodo();
    console.log(this.props);
    this.setState({ todos: this.props.todos });
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
            {this.state.todoModal || (this.state.bucketModal && <TodoModal />)}
          </div>
        </div>
        <Container>
          <Button onClick={() => this.setState({ todoModal: true })} tooltip="Create Todo" icon="fa fa-sticky-note" />
          <Button onClick={() => this.setState({ bucketModal: true })} tooltip="Create Bucket" icon="fa fa-bucket-fill" />
          <Button tooltip="Add" icon="fa fa-plus" rotate={true} />
        </Container>
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
