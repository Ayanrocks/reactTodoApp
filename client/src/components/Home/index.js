import React, { Component } from "react";
import { Container, Button } from "react-floating-action-button";
import TodoCard from "../todoCard";
import { connect } from "react-redux";
import { fetchTodo, fetchBuckets } from "../../actions";
import axios from "axios";
import Modal from "react-modal";
import "./home.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem"
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      buckets: [],
      todoModal: false,
      bucketModal: false,
      todoName: "",
      todoStatus: "",
      todoBucket: "default",
      bucketName: ""
    };
  }
  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.fetchContent();
    }
  }

  async fetchContent() {
    await this.props.fetchTodo();
    await this.props.fetchBuckets();
    this.setState({ todos: this.props.todos, buckets: this.props.buckets });
  }

  closeTodoModal = () => {
    this.setState({ todoModal: false, todoName: "", todoStatus: "", todoBucket: "" });
  };

  closeBucketModal = () => {
    this.setState({ bucketModal: false, bucketName: "" });
  };
  handleTodoSubmit = e => {
    e.preventDefault();
    const { todoName, todoStatus, todoBucket } = this.state;

    axios.post("/todos/create", {
      name: todoName,
      status: todoStatus,
      bucket: todoBucket
    });
    this.closeTodoModal();
    this.fetchContent();
  };

  handleDelete = async id => {
    await axios.delete(`/todos/${id}/delete/`);
    this.fetchContent();
  };

  handleBucketSubmit = e => {
    const { bucketName } = this.state;
    e.preventDefault();
    axios.post("/buckets/create", {
      name: bucketName
    });

    this.closeBucketModal();
    this.fetchContent();
  };

  render() {
    const { todoName, todoStatus, todoBucket, buckets, bucketName } = this.state;
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            {this.state.todos &&
              this.state.todos.map((todo, i) => {
                return <TodoCard key={i} todo={todo} handleDelete={this.handleDelete} />;
              })}
            {this.state.todoModal && (
              <Modal isOpen={this.state.todoModal} onRequestClose={this.closeTodoModal} style={customStyles} contentLabel="Example Modal">
                <div className="col-md todoView">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Todo</label>
                      <input type="text" id="name" value={todoName} placeholder="Enter Todo Name" onChange={e => this.setState({ todoName: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="status">Status</label>
                      <select name="status" id="status" value={todoStatus} onChange={e => this.setState({ todoStatus: e.target.value })}>
                        <option defaultValue disabled>
                          Select Status
                        </option>
                        <option value="completed">completed</option>
                        <option value="pending">pending</option>
                      </select>{" "}
                    </div>
                    <div className="form-group">
                      <label htmlFor="Bucket">Bucket</label>
                      <select name="status" id="status" value={todoBucket} onChange={e => this.setState({ todoBucket: e.target.value })}>
                        <option defaultValue disabled>
                          Select Bucket
                        </option>
                        {buckets.map(e => (
                          <option key={e.id} value={e.name}>
                            {e.name}
                          </option>
                        ))}
                      </select>{" "}
                    </div>
                    <button type="submit" onClick={this.handleTodoSubmit}>
                      Send
                    </button>
                  </form>
                </div>
              </Modal>
            )}
            {this.state.bucketModal && (
              <Modal isOpen={this.state.bucketModal} onRequestClose={this.closeBucketModal} style={customStyles} contentLabel="Example Modal">
                <div className="col-md todoView">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Bucket Name</label>
                      <input
                        type="text"
                        id="name"
                        value={bucketName}
                        placeholder="Enter Bucket Name"
                        onChange={e => this.setState({ bucketName: e.target.value })}
                      />
                    </div>
                    <button type="submit" onClick={this.handleBucketSubmit}>
                      Send
                    </button>
                  </form>
                </div>
              </Modal>
            )}
          </div>
        </div>

        <Container>
          <Button onClick={() => this.setState({ todoModal: true })} tooltip="Create Todo" icon="fa fa-sticky-note" />
          <Button onClick={() => this.setState({ bucketModal: true })} tooltip="Create Bucket" icon="fa fa-beer" />
          <Button tooltip="Add" icon="fa fa-plus" rotate={true} />
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ todoReducer }) {
  const { todos, buckets } = todoReducer;
  return {
    todos,
    buckets
  };
}

export default connect(mapStateToProps, { fetchTodo, fetchBuckets })(Home);
