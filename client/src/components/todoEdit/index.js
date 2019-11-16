import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodo, fetchBuckets } from "../../actions";
import axios from "axios";

class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {},
      name: "",
      status: "",
      bucket: "",
      time: "",
      buckets: [],
      edit: false
    };
  }

  getCurrentTodo(id) {
    id = parseInt(id);
    let bucketID;
    for (const e of this.props.todos) {
      if (e.id === id) {
        bucketID = e.bucket;
        this.setState({ todo: e, name: e.name, status: e.status });
      }
    }
    const bucket = this.props.buckets.filter(e => bucketID === e.id);

    this.setState({ bucket: bucket[0].name }, () => console.log(this.state));
  }

  async componentDidMount() {
    console.log(this.props);
    await this.props.fetchTodo();
    await this.props.fetchBuckets();
    this.setState({ buckets: this.props.buckets });
    this.getCurrentTodo(this.props.match.params.id);
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { name, bucket, status } = this.state;
    await axios.post(`/todos/${this.state.todo.id}/edit`, {
      name,
      status,
      bucket
    });
  };

  componentDidUpdate() {}
  render() {
    const { name, bucket, status, buckets } = this.state;
    return (
      <div className="my-5">
        <div className="container my-5">
          <div className="row">
            <div className="col-md">
              <button className="btn btn-primary" onClick={() => this.setState({ edit: !this.state.edit })}>
                Edit/View
              </button>
            </div>
            {this.state.edit ? (
              <div className="col-md">
                <form onSubmit={() => console.log("Hello")}>
                  <div className="form-group">
                    <label htmlFor="name">Todo</label>
                    <input type="text" id="name" value={name} placeholder="Enter Name" onChange={e => this.setState({ name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" value={status} onChange={e => this.setState({ status: e.target.value })}>
                      <option defaultValue disabled>
                        Select Status
                      </option>
                      <option value="completed">completed</option>
                      <option value="pending">pending</option>
                    </select>{" "}
                  </div>
                  <div className="form-group">
                    <label htmlFor="Bucket">Bucket</label>
                    <select name="status" id="status" value={bucket} onChange={e => this.setState({ bucket: e.target.value })}>
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
                  <button type="submit" onClick={this.handleSubmit}>
                    Send
                  </button>
                </form>
              </div>
            ) : (
              <div className="col-md">
                <div className="form-group">
                  <label htmlFor="name">Todo</label>
                  <p>{name}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <p>{status}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="Bucket">Bucket</label>
                  {bucket}
                </div>
              </div>
            )}
          </div>
        </div>
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

export default connect(mapStateToProps, { fetchTodo, fetchBuckets })(TodoEdit);
